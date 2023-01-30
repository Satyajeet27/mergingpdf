const express = require("express");
const path = require("path");
const multer = require("multer");
const pdfMerge = require("./pdfTest");
const PORT = process.env.PORT || 3000;
const app = express();

const upload = multer({ dest: path.join(__dirname, "uploads") });

// console.log(pdfFiles);
const page = path.join(__dirname, "template/index.html");
app.use(express.static("template"));
app.use("/static", express.static("pdfs"));
app.get("/", (req, resp) => {
  //   resp.send("homepage");
  resp.sendFile(page);
});

app.post("/merge", upload.array("files"), async (req, resp) => {
  console.log(req.files);
  const date = await pdfMerge(req.files[0].path, req.files[1].path);

  //   resp.send({ data: req.files });
  resp.redirect(`http://localhost:3000/static/${date}.pdf`);
});

app.listen(PORT, () => {
  console.log(`successfully connected to http://localhost:${PORT}`);
});
