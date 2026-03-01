import { Hono } from "hono";

const app = new Hono();

app.get("/api/status", (c) => c.json("Healthy 🔥🔥🔥"));

app.get("/api/", (c) => c.text("TEst ing hono backend"));
export default app;
