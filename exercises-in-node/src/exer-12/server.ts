
import express from "express";
import userRoutes from "./routes/UserRoutes";
import productRoutes from "./routes/ProductRoute";

const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});