import Image from "next/image";

import styles from "./Footer.module.css";

const TWITTER_HANDLE = "tukantje";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

export function Footer() {
  return (
    <footer className={styles.container}>
      <Image
        alt="Twitter Logo"
        className={styles.logo}
        src="/twitter.svg"
        width="35"
        height="35"
      />
      <a
        className={styles.text}
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
      >{`made with ❤️ by @${TWITTER_HANDLE}`}</a>
    </footer>
  );
}
