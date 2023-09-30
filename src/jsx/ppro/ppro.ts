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

// 000f424f - sequence
// 000f4250 - bin 1
// 000f4251 - bin 2
// 000f4252 - bin 3
// 000f4253 - bin 4

export const testFunc = () => {
    // alert(printChildren(myRoot.children[0]));
    traverseItem(myRoot);
};

export const printChildren = (item: ProjectItem) => {
    let result = "";
    for (let i = 0; i < item.children.numItems; i++) {
        const child = item.children[i];
        result += child.name;
        if (i !== (item.children.numItems - 1)) {
            result += ", ";
        }
    }
    return result;
}

// Recursively search a given item
export const traverseItem = (item: ProjectItem) => {
    alert(item.name);
    for (let i = 0; i < item.children.numItems; i++) {
        const child = item.children[i];
        if (child.type === 2) { // Only traverse BIN type
            traverseItem(child);
        }
    }
}

// traverseItem(myRoot)
//      alert(myRoot.Name)
//          traverseItem(Sequence 01)

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