import config from "../../cep.config";
export const ns = config.id;

export type BinItem = {
    name: string;
    id: string;
    prefixCount: number;
}

// Count the number of characters prefixing a line in the editor
// Thanks, StackOverflow
export const countConsecPrefixChars = (str: string, char: string) => {
    let count = 0;
    if (str[0] === char) {
        count++;
    } else {
        return count;
    }
    let prevChar = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === prevChar) {
            count++;
        } else {
            break;
        }
        prevChar = str[i];
    }
    return count; 
};