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

    // Read each line from text editor and create bin for each line
    //// create a stack with objects {id, # slashes, name}
    //// iterate over each line
    //// make sure the first readable line isn't a "/"
    //// if first char is not "/", clear stack and add incoming line to stack
    // if first char is a "/", and # slashes is one more than one of the stack objects, find the most recent objects with one less slash and create the folder within that folder
    // if first char is a "/", and the diff in # slashes between current line and last line is greater than 1, throw an error
    //// if first char is a "#", skip over the line

export const parseText = (text: string) => {
    const lines = text.split("\n");
    alert(lines.toString());
    let stack: BinItem[] = []; // Stores top-level trees
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // alert(String(line.charAt(0) === "|"));
        const prefixCount = countConsecPrefixChars(line, "|");
        // Comment or empty line
        if (line.charAt(0) === "#" || line === "") {
            alert("CASE 1 " + line);
            continue;
        }
        // Top-level bin
        else if (line.charAt(0) !== "|") {
            alert("CASE 2 " + line);
            stack = [];
            const topBin = root.createBin(line);
            stack.push({
                name: topBin.name,
                id: topBin.nodeId,
                prefixCount: prefixCount
            });
        }
        // Sub-level bin
        else if (line.charAt(0) === "|"){
            alert("CASE 3 " + line);
            let parent: ProjectItem;
            // Remove prefix from bin name
            const name = line.substring(prefixCount);
            // Get parent BinItem from stack
            const parentBinItem = getStackParent(stack, prefixCount);
            alert(String(parentBinItem));
            if (parentBinItem !== undefined) {
                parent = getItemById(root, parentBinItem.id)!;
                const subBin = parent.createBin(name);
                stack.push({
                    name: subBin.name,
                    id: subBin.nodeId,
                    prefixCount: prefixCount
                });
            } else {
                alert(`Syntax error at line ${i+1}.`);
            }
        }
    }
}

// Look for most recent parent candidate in stack
export const getStackParent = (stack: BinItem[], count: number) => {
    for (let i = stack.length - 1; i >= 0; i--) {
        const storedItem = stack[i];
        if (count - storedItem.prefixCount === 1) {
            return storedItem;
        } else {
            return undefined;
        }
    }
}

export const printStack = (stack: BinItem[]) => {
    let result = "Stack:\n";
    for (let i = 0; i < stack.length; i++) {
        const item = stack[i];
        result += `id: ${item.id}\nname: ${item.name}\nprefixCount: ${item.prefixCount}`;
        if (i < stack.length - 1) {
            result += "\n\n";
        }
    }
    alert(result);
}