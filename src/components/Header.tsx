import styles from "./Header.module.css";
import Logo from "../assets/rocket.svg";


export function Header() {
  return (
    <div>
      <header className={styles.container}>
        <img src={Logo} alt="Logo" />
        <span className={styles.firstSpan}>to</span>
        <span className={styles.secondSpan}>do</span>
      </header>
    </div>
  );
}
