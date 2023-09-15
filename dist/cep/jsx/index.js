(function (thisObj) {

var config = {
  version: version,
  id: "com.dry-bones.cep",
  displayName: "Dry Bones",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "PPRO",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Dry Bones",
    autoVisible: true,
    width: 600,
    height: 650
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

// ProjectItem Helpers
var getChildByName = function getChildByName(item, name) {
  for (var i = 0; i < item.children.numItems; i++) {
    var child = item.children[i];
    if (child.name === name) {
      return child;
    }
  }
};

var myRoot = app.project.rootItem;
var binsExist = function binsExist() {
  if (getChildByName(myRoot, "01 Cuts") && getChildByName(myRoot, "02 Footage") && getChildByName(myRoot, "03 Audio") && getChildByName(myRoot, "04 Graphics") && getChildByName(myRoot, "05 2D") && getChildByName(myRoot, "06 3D") && getChildByName(myRoot, "07 Color") && getChildByName(myRoot, "08 Output")) {
    return true;
  } else {
    return false;
  }
};
var createFolderStructure = function createFolderStructure() {
  var _getChildByName, _getChildByName2, _getChildByName3, _getChildByName4, _getChildByName5, _getChildByName6;
  // Prevent duplicate folders
  if (binsExist()) {
    alert("Project structure already exists.");
    return;
  }

  // 01 Cuts
  var f01 = myRoot.createBin("01 Cuts");
  f01.createBin("00 Nests");
  f01.createBin("01 Raw");
  f01.createBin("02 Rough");
  f01.createBin("03 Conform");
  f01.createBin("04 Master");

  // 02 Footage
  var f02 = myRoot.createBin("02 Footage");
  f02.createBin("01 Raw");
  f02.createBin("04 Reference");
  f02.createBin("05 Exports");

  // 03 Audio
  var f03 = myRoot.createBin("03 Audio");
  f03.createBin("01 Location");
  f03.createBin("02 VO");
  (_getChildByName = getChildByName(f03, "02 VO")) === null || _getChildByName === void 0 || _getChildByName.createBin("01 Temp");
  (_getChildByName2 = getChildByName(f03, "02 VO")) === null || _getChildByName2 === void 0 || _getChildByName2.createBin("02 Final");
  f03.createBin("03 Music");
  (_getChildByName3 = getChildByName(f03, "03 Music")) === null || _getChildByName3 === void 0 || _getChildByName3.createBin("01 Temp");
  (_getChildByName4 = getChildByName(f03, "03 Music")) === null || _getChildByName4 === void 0 || _getChildByName4.createBin("02 Final");
  f03.createBin("04 SFX");
  f03.createBin("05 Mixes");
  (_getChildByName5 = getChildByName(f03, "05 Mixes")) === null || _getChildByName5 === void 0 || _getChildByName5.createBin("01 Temp");
  (_getChildByName6 = getChildByName(f03, "05 Mixes")) === null || _getChildByName6 === void 0 || _getChildByName6.createBin("02 Final");

  // 04 Graphics
  var f04 = myRoot.createBin("04 Graphics");
  f04.createBin("01 Vector");
  f04.createBin("02 Raster");
  f04.createBin("03 Exports");

  // 05 2D
  var f05 = myRoot.createBin("05 2D");
  f05.createBin("03 Exports");

  // 06 3D
  var f06 = myRoot.createBin("06 3D");
  f06.createBin("03 Renders");

  // 07 Color
  var f07 = myRoot.createBin("07 Color");
  f07.createBin("04 Exports");

  // 08 Output
  var f08 = myRoot.createBin("08 Output");
  f08.createBin("01 Rough");
  f08.createBin("02 Final");
};

// export const onEnterDown = () => {

// }

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  createFolderStructure: createFolderStructure
});

var main;
switch (BridgeTalk.appName) {
  case "premierepro":
  case "premiereprobeta":
    main = ppro;
    break;
}

var host = typeof $ !== "undefined" ? $ : window;
host[ns] = main;
