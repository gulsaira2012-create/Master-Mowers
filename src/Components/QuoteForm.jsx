// QuoteForm.jsx
// Sends enquiries through Netlify Forms. The matching hidden form in
// index.html lets Netlify detect the "quote" form at deploy time.
import { useEffect, useId, useRef, useState } from "react";
import "../Assets/CSS/Components/QuoteForm.css";
import { PHONE_DISPLAY, PHONE_TEL, PHOTO_SMS } from "./contactLinks";

const FORM_NAME = "quote";

const MACHINE_TYPES = [
  "Push mower",
  "Ride-on mower",
  "Zero-turn mower",
  "Whipper snipper",
  "Chainsaw",
  "Other",
];

const EMPTY = {
  name: "",
  phone: "",
  suburb: "",
  machine: "",
  brand: "",
  problem: "",
  pickup: "",
};

// Netlify's free plan allows 10 MB of uploads a month, so shrink phone photos
// (often 3–6 MB) to roughly 200–400 KB before sending.
const MAX_PHOTO_SIDE = 1600;

async function shrinkImage(file) {
  if (file.type === "image/gif") return file;
  try {
    const url = URL.createObjectURL(file);
    const img = await new Promise((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = reject;
      i.src = url;
    });
    URL.revokeObjectURL(url);

    const scale = Math.min(1, MAX_PHOTO_SIDE / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
    if (!blob || blob.size >= file.size) return file;
    const baseName = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${baseName}.jpg`, { type: "image/jpeg" });
  } catch {
    // Browser couldn't decode it (e.g. HEIC on some Androids) — send the original.
    return file;
  }
}

function validate(values, photo) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";

  const digits = values.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Please add your phone number so we can call or text you back.";
  else if (digits.length < 8) errors.phone = "That number looks a bit short. Please check it.";

  if (!values.problem.trim()) errors.problem = "Please tell us briefly what's wrong with it.";

  if (photo && !photo.type.startsWith("image/")) {
    errors.photo = "That file isn't a photo. Please choose an image.";
  }
  return errors;
}

// Order used to focus the first field with a problem.
const FIELD_ORDER = ["name", "phone", "problem", "photo"];

export default function QuoteForm() {
  const uid = useId();
  const id = (field) => `${uid}-${field}`;

  const [values, setValues] = useState(EMPTY);
  const [photo, setPhoto] = useState(null);
  const [botField, setBotField] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const thanksRef = useRef(null);

  useEffect(() => {
    if (status === "sent") thanksRef.current?.focus();
  }, [status]);

  // Links like /contact#quote arrive before this lazy page has rendered,
  // so the browser can't jump to the form by itself.
  useEffect(() => {
    if (window.location.hash === "#quote") {
      document.getElementById("quote")?.scrollIntoView({ block: "start" });
    }
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  }

  function onPhotoChange(e) {
    setPhoto(e.target.files?.[0] || null);
    if (errors.photo) setErrors((err) => ({ ...err, photo: undefined }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const found = validate(values, photo);
    setErrors(found);
    const firstBad = FIELD_ORDER.find((f) => found[f]);
    if (firstBad) {
      document.getElementById(id(firstBad))?.focus();
      return;
    }

    setStatus("sending");
    try {
      const data = new FormData();
      data.append("form-name", FORM_NAME);
      data.append("bot-field", botField);
      Object.entries(values).forEach(([key, value]) => data.append(key, value));
      if (photo) {
        const small = await shrinkImage(photo);
        data.append("photo", small, small.name);
      }

      // No Content-Type header: the browser sets the multipart boundary itself.
      const res = await fetch("/", { method: "POST", body: data });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const describedBy = (field) => (errors[field] ? id(`${field}-error`) : undefined);

  const fieldError = (field) =>
    errors[field] ? (
      <p className="qf-error" id={id(`${field}-error`)}>
        {errors[field]}
      </p>
    ) : null;

  return (
    <section className="qf-wrap" id="quote" aria-labelledby={id("title")}>
      <div className="qf-container">
        <div className="qf-card">
          {status === "sent" ? (
            <div className="qf-thanks" role="status" tabIndex={-1} ref={thanksRef}>
              <h2 className="qf-title" id={id("title")}>
                Thanks!
              </h2>
              <p className="qf-thanksText">
                We will text or call you within 2 hours (9am–6pm, 7 days).
              </p>
            </div>
          ) : (
            <>
              <div className="qf-head">
                <div>
                  <h2 className="qf-title" id={id("title")}>
                    Get a free quote
                  </h2>
                  <p className="qf-sub">
                    Tell us about your machine and we’ll get back to you with a price.
                  </p>
                </div>
                <a className="qf-smsBtn" href={PHOTO_SMS}>
                  Text us a photo of your mower
                </a>
              </div>

              <form
                className="qf-form"
                name={FORM_NAME}
                method="POST"
                encType="multipart/form-data"
                onSubmit={onSubmit}
                noValidate
              >
                {/* Spam trap: hidden from people, bots tend to fill it in. */}
                <p className="qf-srOnly" aria-hidden="true">
                  <label>
                    Don’t fill this out:
                    <input
                      name="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </label>
                </p>

                <div className="qf-grid">
                  <div className="qf-field">
                    <label className="qf-label" htmlFor={id("name")}>
                      Name <span className="qf-req">(required)</span>
                    </label>
                    <input
                      className="qf-input"
                      id={id("name")}
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={onChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={describedBy("name")}
                    />
                    {fieldError("name")}
                  </div>

                  <div className="qf-field">
                    <label className="qf-label" htmlFor={id("phone")}>
                      Phone number <span className="qf-req">(required)</span>
                    </label>
                    <input
                      className="qf-input"
                      id={id("phone")}
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={onChange}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={describedBy("phone")}
                    />
                    {fieldError("phone")}
                  </div>

                  <div className="qf-field qf-mHalf">
                    <label className="qf-label" htmlFor={id("suburb")}>
                      Suburb
                    </label>
                    <input
                      className="qf-input"
                      id={id("suburb")}
                      name="suburb"
                      type="text"
                      autoComplete="address-level2"
                      value={values.suburb}
                      onChange={onChange}
                    />
                  </div>

                  <div className="qf-field qf-mHalf">
                    <label className="qf-label" htmlFor={id("brand")}>
                      Brand
                    </label>
                    <input
                      className="qf-input"
                      id={id("brand")}
                      name="brand"
                      type="text"
                      placeholder="e.g. Victa"
                      value={values.brand}
                      onChange={onChange}
                    />
                  </div>

                  <div className="qf-field">
                    <label className="qf-label" htmlFor={id("machine")}>
                      Machine type
                    </label>
                    <select
                      className="qf-input qf-select"
                      id={id("machine")}
                      name="machine"
                      value={values.machine}
                      onChange={onChange}
                    >
                      <option value="">Choose one</option>
                      {MACHINE_TYPES.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <fieldset className="qf-field qf-fieldset">
                    <legend className="qf-label">Do you need pickup?</legend>
                    <div className="qf-radios">
                      {["Yes", "No"].map((opt) => (
                        <label className="qf-radio" key={opt}>
                          <input
                            type="radio"
                            name="pickup"
                            value={opt}
                            checked={values.pickup === opt}
                            onChange={onChange}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="qf-field">
                    <label className="qf-label" htmlFor={id("problem")}>
                      What’s wrong? <span className="qf-req">(required)</span>
                    </label>
                    <textarea
                      className="qf-input qf-textarea"
                      id={id("problem")}
                      name="problem"
                      rows={2}
                      placeholder="e.g. Won’t start, smoking, blade won’t spin"
                      value={values.problem}
                      onChange={onChange}
                      aria-required="true"
                      aria-invalid={!!errors.problem}
                      aria-describedby={describedBy("problem")}
                    />
                    {fieldError("problem")}
                  </div>

                  <div className="qf-field">
                    <label className="qf-label" htmlFor={id("photo")}>
                      Photo of the machine
                    </label>
                    <input
                      className="qf-file"
                      id={id("photo")}
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={onPhotoChange}
                      aria-invalid={!!errors.photo}
                      aria-describedby={describedBy("photo")}
                    />
                    {fieldError("photo")}
                  </div>
                </div>

                <button
                  className="qf-submit"
                  type="submit"
                  disabled={status === "sending"}
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Get my free quote"}
                </button>

                {status === "error" && (
                  <p className="qf-sendError" role="alert">
                    Sorry, that didn’t send. Please call or text{" "}
                    <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>.
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
