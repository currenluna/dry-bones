import {
    alertUser,
    getItemById,
    getItemByName,
    printChildren
} from "./ppro-utils";
export { alertUser }
import { countConsecPrefixChars } from "../../shared/shared";
import type { BinItem } from "../../shared/shared";

const root = app.project.rootItem;

export const testFunc = () => {
    // const item = getItemById(root, "000f4253");
    const item = getItemByName(root, "Sequence 02");
    if (item !== undefined) {
        alert("Found " + item.name + "!");
    } else {
        alert("undefined");
    }
};

export const parseText = (text: string) => {
    // Iterate over text lines
    const lines = text.split("\n");
    let stack: BinItem[] = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const prefixCount = countConsecPrefixChars(line, "/");
        if (line[0] === "#") {
            continue;
        } else if (line[0] !== "/") { // Top-level folder
            const topBin = root.createBin(line);
            stack.push({
                name: topBin.name,
                id: topBin.nodeId,
                prefixCount: prefixCount
            });
        } else if (line[0] === "/"){
            // Determine where to put sub folder
            // line = line.substring(numSlashes)
        }
    }
}

// --- Test Structure ---
// Untitled.prproj (000f4240)
// |- Sequence 01 (000f424f)
// ||- Top (000f4250)
// ||-- Mid (000f4252)
// ||--- Low (000f4253)
// |- Other (000f4251)