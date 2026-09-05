import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className="text-micro text-ember" style={{ marginBottom: "18px" }}>
          BUILT BY
        </p>
        <h2 className="text-display" style={{ marginBottom: "24px" }}>
          GET YOURS.
        </h2>
        <p
          className="text-body"
          style={{ marginBottom: "45px", maxWidth: "500px" }}
        >
          Oryzo is a limited-run object. Enter your email and we'll let you
          know when the next batch ships.
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="input-underline"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn-pill">
            NOTIFY ME
          </button>
        </form>

        <hr className="divider-dashed" style={{ margin: "68px 0 24px" }} />

        <div className={styles.footer}>
          <div>
            <p className="text-micro">ORYZO</p>
            <p className="text-legal" style={{ marginTop: "6px", color: "var(--color-driftwood)" }}>
              * DESIGNED IN-HOUSE. CORK SOURCED SUSTAINABLY.
            </p>
          </div>
          <a
            href="https://lusion.com"
            className="link-underline text-ember"
            target="_blank"
            rel="noopener noreferrer"
          >
            LUSION STUDIO ↗
          </a>
        </div>
      </div>
    </section>
  );
}
