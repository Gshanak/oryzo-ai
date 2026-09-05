import styles from "./Divider.module.css";

type DividerProps = {
  label?: string;
};

export default function Divider({ label }: DividerProps) {
  return (
    <div className={styles.wrapper}>
      <hr className="divider-dashed" />
      {label && (
        <span className={styles.label}>{label}</span>
      )}
    </div>
  );
}
