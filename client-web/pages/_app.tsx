import type { AppProps } from "next/app";

import { Footer } from "components/footer";
import { Header } from "components/header";

import styles from "styles/App.module.css";

import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
