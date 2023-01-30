const PDFMerger = require("pdf-merger-js");
const path = require("path");

var merger = new PDFMerger();

// console.log(path.join(__dirname,"pdfs/1.pdf"));
const pdfMerge = async (p1, p2) => {
  const date = new Date().getTime();
  await merger.add(p1);
  await merger.add(p2);
  await merger.save(path.join(__dirname, `pdfs/${date}.pdf`));
  //   await merger.save(path.join(__dirname, `pdfs/merge.pdf`));
  return date;
};
module.exports = pdfMerge;
