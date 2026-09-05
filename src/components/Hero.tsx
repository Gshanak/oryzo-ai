import TopNav from "./TopNav";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background gradient simulating the warm-dark void */}
      <div className={styles.bg} />

      <TopNav />

      {/* Vertical sidebar label */}
      <div className={styles.sidebar}>ORYZO 1-MODEL</div>

      {/* Hero lockup — upper left */}
      <div className={styles.lockup}>
        <p className={styles.tagline}>MADE FOR MUGS, BUILT FOR TABLES.</p>
        <h1 className={styles.wordmark}>ORYZO</h1>
      </div>

      {/* Info card — bottom left */}
      <div className={styles.infoCard}>
        <p className="text-caption">
          DESIGNED BY{" "}
          <span className="text-ember">LUSION</span>, THE AWARD-WINNING DESIGN
          STUDIO.
        </p>
        <hr className="divider-dashed" style={{ margin: "12px 0" }} />
        <p className="text-body" style={{ fontSize: 14, lineHeight: 1.4 }}>
          A cork coaster that treats the simplest object like a museum artifact.
        </p>
      </div>

      {/* Video thumbnail — bottom right */}
      <div className={styles.videoThumb}>
        <span className="text-micro" style={{ fontSize: 10 }}>
          ORYZO
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="9" stroke="var(--color-warm-cream)" strokeWidth="1" />
          <path d="M8 6.5L14 10L8 13.5V6.5Z" fill="var(--color-warm-cream)" />
        </svg>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span className="text-micro">SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
