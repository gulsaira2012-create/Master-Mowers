// Shared tap-to-call / tap-to-text links so every button uses the same number.
export const PHONE_DISPLAY = "0423 059 481";
export const PHONE_TEL = "tel:+61423059481";
export const PHONE_SMS = "sms:+61423059481";

// "?&body=" is the form that works on both iPhone (iOS 8+) and Android.
export const PHOTO_SMS = `${PHONE_SMS}?&body=${encodeURIComponent(
  "Hi Val, here's a photo of my mower. The problem is: "
)}`;
