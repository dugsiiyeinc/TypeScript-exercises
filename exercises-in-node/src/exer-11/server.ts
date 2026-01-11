import express from "express";
import goodByeRoute from "./routes/GoodByeRoute";
const app = express();
const PORT = 3000;
app.use("/goodbye", goodByeRoute);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});