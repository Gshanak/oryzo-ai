import styles from "./ProductReveal.module.css";

type ProductRevealProps = {
  id: string;
  heading: string;
  body: string;
  children?: React.ReactNode;
};

export default function ProductReveal({
  id,
  heading,
  body,
  children,
}: ProductRevealProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.grid}>
        {/* Left column — heading */}
        <div className={styles.leftCol}>
          <h2 className="text-heading">{heading}</h2>
        </div>

        {/* Center — product render placeholder */}
        <div className={styles.centerCol}>{children ?? <ProductPlaceholder />}</div>

        {/* Right column — body copy */}
        <div className={styles.rightCol}>
          <p className="text-body">{body}</p>
        </div>
      </div>
    </section>
  );
}

function ProductPlaceholder() {
  return (
    <div className={styles.placeholder}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Coaster — top-down view */}
        <circle cx="100" cy="100" r="90" fill="var(--color-bark-brown)" />
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="var(--color-cork-border)"
          strokeWidth="1"
        />
        <circle cx="100" cy="100" r="72" fill="var(--color-walnut-shadow)" opacity="0.4" />
        <circle
          cx="100"
          cy="100"
          r="72"
          stroke="var(--color-driftwood)"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
        <circle cx="100" cy="100" r="8" fill="var(--color-cork-border)" />
      </svg>
    </div>
  );
}
