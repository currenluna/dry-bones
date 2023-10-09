import { writable } from "svelte/store";
import { AppInfo, State } from "../global";

export const helpDialog = writable(false);

export const appInfo = writable<AppInfo>({
    name: "After Effects",
    id: "aeft",
    version: "23.5"
});

export const defaultState: State = {
    init: false,
    index: 0
};

export const state = writable<State>(defaultState);

export const resetState = () => {
    state.set({...defaultState});
}