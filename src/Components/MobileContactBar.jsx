// MobileContactBar.jsx — fixed Call / Text bar, shown on phones only (see CSS).
import { FiPhone, FiMessageSquare } from "react-icons/fi";
import "../Assets/CSS/Components/MobileContactBar.css";
import { PHONE_SMS, PHONE_TEL } from "./contactLinks";

export default function MobileContactBar() {
  return (
    <nav className="mcb" aria-label="Call or text Master Mowers">
      <a className="mcb-btn mcb-call" href={PHONE_TEL}>
        <FiPhone aria-hidden="true" />
        Call
      </a>
      <a className="mcb-btn mcb-text" href={PHONE_SMS}>
        <FiMessageSquare aria-hidden="true" />
        Text
      </a>
    </nav>
  );
}
