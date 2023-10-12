import { ns } from "../../shared/shared";
import { State } from "../global";
import { os, fs, path } from "../lib/cep/node";
import { defaultState } from "./store";

export const prefsFunc = () => {
    alert(platform);
    console.log("hi");
}

const platform = os.platform();

const mainDir =
    platform === "darwin"
        ?  `${
            process.env.HOME || window.cep_node.process.env.HOME
        }/Library/Preferences`
        : process.env.APPDATA || window.cep_node.process.env.APPDATA;

export const prefsDir = window.cep ? path.join(mainDir, ns) : "";
export const prefsPath = window.cep ? path.join(prefsDir, "prefs.json"): "";

export const initPrefs = () => {
    if (window.cep) {
        console.log("main dir is: ", mainDir);
        console.log("prefs is: ", prefsDir);
        fs.mkdirSync(prefsDir, { recursive: true })
    }
};

export const saveState = (state: State) => {
    if (window.cep) {
        if (!fs.existsSync(prefsDir)) {
            fs.mkdirSync(prefsDir, { recursive: true });
        }
        fs.writeFileSync(prefsPath, JSON.stringify(state), { encoding: "utf-8" });
    }
}

export const getState = (): State | false => {
    if (window.cep) {
        if (fs.existsSync(prefsPath)) {
            const str = fs.readFileSync(prefsPath, { encoding: "utf-8"} );
            try {
                const existing: State = JSON.parse(str);
                // fill in any new props
                const complete = { ...defaultState, ...existing };
                return complete;
            } catch (error) {
                return false;
            }
        }
    }
    return false;
};