import styles from "./TopNav.module.css";

const NAV_ITEMS = [
  { label: "INTRO", href: "#hero", active: true },
  { label: "FEATURES", href: "#features" },
  { label: "PRODUCT", href: "#product" },
  { label: "CONTACT", href: "#contact" },
];

export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.wordmark}>
        ORYZO
      </a>
      <ul className={styles.items}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`${styles.link} ${item.active ? styles.active : ""}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
