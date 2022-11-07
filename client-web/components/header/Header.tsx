import { ConnectButton } from "@rainbow-me/rainbowkit";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.title}>🧙‍♀️ Wizard Name Service</p>
        <p className={styles.subtitle}>Yer a wizard &apos;arry</p>
      </div>
      <div className={styles.rightContainer}>
        <ConnectButton accountStatus="avatar" />
      </div>
    </header>
  );
}
