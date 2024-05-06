import cors from "cors";
import express, { Application, Request, Response } from "express";
const port = 3000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! This is AquaMart.");
});

export default app;
