/* ------- */
/* IMPORTS */
/* ------- */
import express from "express"; // For Backend Framework
import bodyParser from "body-parser"; // For Passing Input Elements
import mongoose from "mongoose"; // To Handle MongoDB
import cors from "cors"; // Cross-Orgin Resource Sharing
import dotenv from "dotenv"; // For Environment Variables
import helmet from "helmet"; // To Protect API
import morgan from "morgan"; // To Log API Calls

/* ------------- */
/* CONFIGURATION */
/* ------------- */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* -------------- */
/* MONGOOSE SETUP */
/* -------------- */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
