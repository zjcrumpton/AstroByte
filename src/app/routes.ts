import { TopNavLink } from "@/components/TopNav/TopNav.types";

export enum Route {
  HOME = "Home",
  BLOG = "Blog",
  ARCADE = "Arcade",
  PROJECTS = "Projects",
  CONTACT = "Contact",
}

export const routePaths = {
  [Route.HOME]: "/",
  [Route.BLOG]: "/blog",
  [Route.ARCADE]: "/arcade",
  [Route.PROJECTS]: "/projects",
  [Route.CONTACT]: "/contact",
};

const createLink = (route: Route) => {
  return { name: route, to: routePaths[route] };
};

export const routes: TopNavLink[] = [
  createLink(Route.HOME),
  createLink(Route.BLOG),
  createLink(Route.ARCADE),
  createLink(Route.PROJECTS),
  createLink(Route.CONTACT),
];
