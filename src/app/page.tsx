import { TopNav } from "@/components/TopNav";
import { Route, routes } from "./routes";

export default function Home() {
  return (
    <main>
      <TopNav links={routes} activeRoute={Route.HOME} />
    </main>
  );
}
