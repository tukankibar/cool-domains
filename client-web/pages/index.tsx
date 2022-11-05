import Image from "next/image";
import styles from "../styles/Home.module.css";

const TWITTER_HANDLE = "tukantje";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <header>
            <div className={styles.left}>
              <p className={styles.title}>🧙‍♀️ Wizard Name Service</p>
              <p className={styles.subtitle}>{"Yer a wizard 'arry."}</p>
            </div>
          </header>
        </div>

        <div className={styles.footerContainer}>
          <Image
            alt="Twitter Logo"
            className={styles.footerLogo}
            src="/twitter.svg"
            width="35"
            height="35"
          />
          <a
            className={styles.footerText}
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`made with ❤️ by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
}
