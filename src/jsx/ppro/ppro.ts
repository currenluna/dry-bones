import { getChildByName } from './ppro-utils';

const myRoot = app.project.rootItem;

const binsExist = () => {
    if (getChildByName(myRoot, "01 Cuts")
        && getChildByName(myRoot, "02 Footage")
        && getChildByName(myRoot, "03 Audio")
        && getChildByName(myRoot, "04 Graphics")
        && getChildByName(myRoot, "05 2D")
        && getChildByName(myRoot, "06 3D")
        && getChildByName(myRoot, "07 Color")
        && getChildByName(myRoot, "08 Output")) {
        return true;
    } else {
        return false;
    }
}

export const createFolderStructure = () => {

    // Prevent duplicate folders
    if (binsExist()) {
        alert("Project structure already exists.");
        return;
    }

    // 01 Cuts
    const f01 = myRoot.createBin("01 Cuts");
    f01.createBin("00 Nests");
    f01.createBin("01 Raw");
    f01.createBin("02 Rough");
    f01.createBin("03 Conform");
    f01.createBin("04 Master");

    // 02 Footage
    const f02 = myRoot.createBin("02 Footage");
    f02.createBin("01 Raw");
    f02.createBin("04 Reference");
    f02.createBin("05 Exports");

    // 03 Audio
    const f03 = myRoot.createBin("03 Audio");
    f03.createBin("01 Location");
    f03.createBin("02 VO");
    getChildByName(f03, "02 VO")?.createBin("01 Temp");
    getChildByName(f03, "02 VO")?.createBin("02 Final");
    f03.createBin("03 Music");
    getChildByName(f03, "03 Music")?.createBin("01 Temp");
    getChildByName(f03, "03 Music")?.createBin("02 Final");
    f03.createBin("04 SFX");
    f03.createBin("05 Mixes");
    getChildByName(f03, "05 Mixes")?.createBin("01 Temp");
    getChildByName(f03, "05 Mixes")?.createBin("02 Final");

    // 04 Graphics
    const f04 = myRoot.createBin("04 Graphics");
    f04.createBin("01 Vector");
    f04.createBin("02 Raster");
    f04.createBin("03 Exports");

    // 05 2D
    const f05 = myRoot.createBin("05 2D");
    f05.createBin("03 Exports");
    
    // 06 3D
    const f06 = myRoot.createBin("06 3D");
    f06.createBin("03 Renders");

    // 07 Color
    const f07 = myRoot.createBin("07 Color");
    f07.createBin("04 Exports");

    // 08 Output
    const f08 = myRoot.createBin("08 Output");
    f08.createBin("01 Rough");
    f08.createBin("02 Final");
};

// export const onEnterDown = () => {

// }