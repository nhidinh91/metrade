import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./configs/database.js";

dotenv.config();

const APP_PORT = process.env.APP_PORT || process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(APP_PORT, () => {
      console.log(`Server is running on port ${APP_PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();
