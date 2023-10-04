import express, { query } from "express";
import Users from "./Test.json" assert { type: "json" };
import cors from "cors";
const app = express()
const port = 5000
app.use(cors());

app.get('/', (req, res) => {
     const { q } = req.query;

    const keys = ["first_name", "last_name", "email"]

    const search = (data) => {
        return (
            data.filter((item) => {
                if (query === "") {
                    return item;
                } else if
                    (keys.some((keys) => item[keys].toLowerCase().includes(q))) {
                    return item;
                }
            })
        )
    }

    res.json(search(Users).splice(0, 10));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})