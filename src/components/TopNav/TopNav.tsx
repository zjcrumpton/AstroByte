import { FC } from "react";
import { Logo } from "../Logo";
import { Roboto } from "@next/font/google";
import { TopNavLink } from "./TopNav.types";
import { NavItem } from "./NavItem";
import styles from "./TopNav.module.css";
import { Route } from "@/app/routes";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface TopNavProps {
  links: TopNavLink[];
  activeRoute: Route;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { links, activeRoute } = props;

  return (
    <div className={`${styles.container} ${roboto.className}`}>
      <Logo />
      <div className={styles["items-container"]}>
        {links.map((link) => (
          <NavItem
            key={link.name}
            link={link}
            active={link.name === activeRoute}
          />
        ))}
      </div>
    </div>
  );
};
