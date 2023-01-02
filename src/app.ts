import * as express from "express";
import routes from "./routes";
import { sequelize } from "./models";
import { Post } from "./models/posts";

const app = express();
app.use(express.json());

app.use("/api", routes);

const create_table = async () => {
    await Post.sync({ force: true })
        .then(() => {
            console.log("create table");
        })
        .catch((err: Error) => {
            console.log(err);
        });
};

create_table();

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
