import fs from "fs"
import path from "path"

const getHtmlContent = (_path) => {
    const dirPath = path.join(process.cwd(), _path)
    const fileContent = fs.readFileSync(dirPath, "utf8")
    return fileContent.toString();
}

export { getHtmlContent }