import styles from "./Features.module.css";

const FEATURES = [
  {
    num: "01",
    title: "LIFT",
    desc: "Raised 8mm on a dense cork base — your table never touches heat or condensation.",
  },
  {
    num: "02",
    title: "INSULATE",
    desc: "Natural cork thermal resistance keeps hot mugs warm and cold drinks chilled.",
  },
  {
    num: "03",
    title: "GRIP",
    desc: "A precision-cut micro-texture on the underside holds position on any surface.",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className="text-heading" style={{ marginBottom: "45px" }}>
          THREE THINGS IT DOES <br />
          <span className="text-ember">EXCEPTIONALLY WELL.</span>
        </h2>

        <hr className="divider-dashed" style={{ marginBottom: "45px" }} />

        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.num} className={styles.card}>
              <span className={styles.num}>{f.num}</span>
              <h3 className="text-heading-sm">{f.title}</h3>
              <p className="text-body" style={{ fontSize: 18, lineHeight: 1.26 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
