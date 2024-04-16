import fs from "fs";
import cleanInput from "./utlities/cleanInput.js";

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err
    let inputLines = data.toString().split("\n")
    console.log(cleanInput(inputLines));
})
