import { serve, serveStatic } from "./deps.ts";
import Home from "./pages/home.jsx";
import mockHttpRequests from "./pages/2021/03/28/mock-http-requests.jsx";

serve({
  "/": Home,
  "/2021/03/28/mock-http-requests": mockHttpRequests,
  "/:filename+": serveStatic("public", { baseUrl: import.meta.url }),
});
