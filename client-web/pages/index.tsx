import { ConnectButton } from "@rainbow-me/rainbowkit";

import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ConnectButton />
    </div>
  );
}
