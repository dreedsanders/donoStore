import React from "react";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <section id="footer">
        <div className="footer-info">
          <h4>Made by Dono</h4>
          <button type="button" className="button" onClick={toTop}>
            Back to top
          </button>
        </div>
      </section>
    </div>
  );
}
