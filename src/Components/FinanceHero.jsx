// FinanceHero.jsx
import "../Assets/CSS/Components/FinanceHero.css";
import { useNavigate } from "react-router-dom";

export default function FinanceHero() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/contact')
  }
  return (
    <section className="financeHero">
      <div className="financeHero__wrap">
        <div className="financeHero__card">
          <h1 className="financeHero__title">
            Free Diagnostic Check
            <br />
            With Service
          </h1>

          <p className="financeHero__sub">
            Professional ride-on mower repairs, small engine servicing, and zero-turn maintenance in Brisbane. 
            <br />
            Reliable repairs without the premium price tag.
          </p>

          <button className="financeHero__btn" type="button" onClick={handleClick}>
            Contact Master Mowers Now
          </button>
        </div>
      </div>
    </section>
  );
}
