import express from "express";
import cors from "cors";
const port = 3000;

const app = express();
app.use(cors);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
