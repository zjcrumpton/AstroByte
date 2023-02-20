import { FC } from "react";
import { Space_Grotesk } from "@next/font/google";
import styles from "./Logo.module.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const Logo: FC = () => {
  return (
    <div className={spaceGrotesk.className}>
      <Link className={styles.link} href="/">
        <h1 className={styles.logo}>AstroByte</h1>
      </Link>
    </div>
  );
};
