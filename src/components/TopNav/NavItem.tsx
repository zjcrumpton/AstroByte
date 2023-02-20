import Link from "next/link";
import { FC } from "react";
import { TopNavLink } from "./TopNav.types";
import styles from "./TopNav.module.css";

interface NavItemProps {
  link: TopNavLink;
  active: boolean;
}

export const NavItem: FC<NavItemProps> = (props) => {
  const { active, link } = props;

  return (
    <div>
      <Link className={styles.link} href={link.to} data-active={active}>
        <h2>{link.name}</h2>
      </Link>
    </div>
  );
};
