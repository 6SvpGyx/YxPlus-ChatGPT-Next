import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import { getServerSideConfig } from "./config/server";
export default async function App() {
  const serverConfig = getServerSideConfig();
  console.log("", serverConfig);
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
