import * as express from "express";
import routes from "./routes";
import sequelize from "./models/index";


const app = express();
app.use(express.json());

app.use("/api", routes);

// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//     res.status(400).json({ errorMessage: error.message });
// });


app.listen(process.env.PORT, async () => {
    console.log(`server is running on ${3000}`);
    await sequelize
        .authenticate()
        .then(async () => {
            console.log("connection success");
        })
        .catch((e) => {
            console.log("TT : ", e);
        });
});
