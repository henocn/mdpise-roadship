import fs from "fs";

const svg = fs.readFileSync("src/assets/svg/togo-regions.svg", "utf8");
const paths = [...svg.matchAll(/<path d="([^"]+)"/g)].map((m) => m[1]);

paths.forEach((d, i) => {
  const ys = [];
  const re = /[\s,](-?\d+\.?\d*)\s+(-?\d+\.?\d*)/g;
  let m;
  while ((m = re.exec(d))) ys.push(Number(m[2]));
  const avg = ys.reduce((a, b) => a + b, 0) / ys.length;
  console.log(i, "avgY", avg.toFixed(0), "min", Math.min(...ys).toFixed(0), "max", Math.max(...ys).toFixed(0));
});
