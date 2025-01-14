const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./conn/db.js");

// ミドルウェア
app.use(bodyParser.json());

// Statics
app.use(express.static("public"));

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

// -- Web アプリ開発 - Node.js --

// GET：「Hello World」を返す
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// POST：リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す
app.post("/sum", (req, res) => {
  const { arg1, arg2 } = req.body;
  let result = "";

  if (!arg1 || !arg2) {
    return res.status(400).json({ error: "Both arg1 and arg2 are required!" });
  }
  if (isNaN(arg1) || isNaN(arg2)) {
    result = "Number型ではない";
  } else {
    result = Number(arg1) + Number(arg2);
  }
  res.json({ result });
});

// GET：（上と同じ）リクエストパラメータとして2つの整数を渡すと、レスポンスとしてその合計を返す
app.get("/sum", (req, res) => {
  const { arg1, arg2 } = req.query;
  let result = 0;

  if (isNaN(arg1) || isNaN(arg2)) {
    res.status(400).send("Missing arguments");
  } else {
    result = Number(arg1) + Number(arg2);
    res.send(String(result));
  }
});

// GET：ユーザがブラウザで http://localhost:4000 にアクセスしたらhtmlファイルが表示
app.get('/', (req, res) => {

})

// -- Web アプリ開発 - Docker, DB --

// GET：レスポンスでcompanyテーブルに登録したデータをリストで返す
app.get("/company/:id", async (req, res) => {
  // URLが/company/:id の場合はreq.paramsをidでしか受け取れない？
  const { id } = req.params;
  console.log(`receive path: /company/${id}`);
  try {
    const query =
      "SELECT company_id, company_name, phone, mail, address, memo FROM company WHERE company_id = $1;";
    const values = [id];
    const result = await db.query(query, values);

    // 接続はできたが、データが見つからなかった場合
    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ error: `Company with company_id=${id} not found` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error while fetching company:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET：レスポンスでusersテーブルに登録したデータをリストで返す
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    const result = await db.query(query, values);

    // データが見つからない場合
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `User with id=${id} not found` });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error while fetching user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});