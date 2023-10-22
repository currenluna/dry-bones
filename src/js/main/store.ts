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
    index: 0,
    bones: [
`# Sample 1
# Comments start with "#"
# Subfolders start with "|"

00 Creative
|01 Client
|02 Internal

01 Cuts
|00 Archive

02 Footage
|01 Raw
|02 Proxies
|03 Transcodes
|04 Reference
|05 Exports

03 Audio
|01 Location
|02 VO
||01 Temp
||02 Final
|03 Music
||01 Temp
||02 Final
|04 SFX
|05 Mixes
||01 Temp
||02 Final

04 Graphics
|01 Vector
|02 Raster
|03 Exports

05 2D
|01 Projects
|02 Assets
|03 Exports

05 3D
|01 Projects
|02 Assets
|03 Renders

07 Color
|01 Projects
|02 Looks
|03 Conforms
|04 Exports

08 Output
|01 Rough
|02 Final
`]
};

export const state = writable<State>(defaultState);

export const resetState = () => {
    state.set({...defaultState});
}