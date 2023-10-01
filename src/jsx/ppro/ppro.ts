import { isUndefined } from "util";
import type { Folder } from "../../shared/shared"

const myRoot = app.project.rootItem;

let items: ProjectItem[] = [];

export const alertUser = (message: string) => alert(message);

// Make a folder within the item, return the folder object
export const createBin = (name: string) => {
    const bin = myRoot.createBin(name);
    return bin;
};

// // Search for a folder in Root, provided an id
// export const getFolderById = (id: string) => {
//     for (let i = 0; i < myRoot.children.numItems; i++) {
//         const child = myRoot.children[i];
//         if (child.nodeId === id) {
//             return child;
//         } else if (child.type === 2) { // BIN === 2
//             searchFolder(child, id);
//         }
//     }
// };

// 000f4240 - Root
// 000f424f - Sequence 01
// 000f4250 - Top
// 000f4251 - Other
// 000f4252 - Mid
// 000f4253 - Low

export const testFunc = () => {
    // alert(printChildren(myRoot));
    // traverseItem(myRoot);

    const id = "000f4251";
    const item = findItemById(myRoot, id);
    if (item !== undefined) {
        alert("Found " + item.name + "!");
    } else {
        alert("Item with id " + id + " does not exist");
    }
};

// --- Test Structure ---
// Untitled.prproj (000f4240)
// |- Sequence 01 (000f424f)
// ||- Top (000f4250)
// ||-- Mid (000f4252)
// ||--- Low (000f4253)
// |- Other (000f4251)

// Recursively search a given item, provided a nodeId
export const findItemById = (item: ProjectItem, id: string): ProjectItem | undefined => {
    alert("entered function w/ " + item.name + "\nid is " + item.nodeId);
    if (item === undefined) {
        alert("case 1: returning undefined");
        return undefined;
    }
    if (item.nodeId === id) {
        alert("case 2: returning item");
        return item;
    }
    if (item.type === 2 || item.type === 3) { // only Search BINs and ROOT
        alert("case 3: entering for loop on " + item.name + "'s children");
        for (let i = 0; i < item.children.numItems; i++) {
            const child = item.children[i];
            const result = findItemById(child, id);
            if (result !== undefined) {
                return result;
            }
        }
    }
    alert("case 4: returning undefined");
    return undefined;
};

// findItemById(myRoot, 000f4251)
// 




// traverseItem(myRoot)
//      alert(myRoot.Name)
//          traverseItem(Sequence 01)

export const printChildren = (item: ProjectItem) => {
    let result = "";
    for (let i = 0; i < item.children.numItems; i++) {
        const child = item.children[i];
        result += (child.name + ": " + child.nodeId);
        if (i !== (item.children.numItems - 1)) {
            result += ", ";
        }
    }
    return result;
}

// Recursively traverse all bins
export const traverseItem = (item: ProjectItem) => {
    alert(item.name);
    for (let i = 0; i < item.children.numItems; i++) {
        const child = item.children[i];
        if (child.type === 2) { // Only traverse BIN type
            traverseItem(child);
        } else {
            // alert(child.name + " is not a bin");
        }
    }
}





export const getRootItem = () => {
    return myRoot;
};

// // Iterate over every Project Item recursively
// let names: string[] = [];
// export const getItemInfo = (item: ProjectItem) => {
//     for (let i = 0; i < item.children.numItems; i++) {
//         const child = item.children[i];
//         getItemInfo(child);
//         names.push(child.name);
//     }
// };

// // Start iterating via Root Item and return array to JS side
// export const getAllItemInfo = () => {
//     names = [];
//     getItemInfo(myRoot);
//     return names;
// }