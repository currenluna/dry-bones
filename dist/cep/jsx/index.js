(function (thisObj) {// ----- EXTENDSCRIPT INCLUDES ------ //"object"!=typeof JSON&&(JSON={}),function(){"use strict";var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;r<u;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;r<u;r+=1)"string"==typeof rep[r]&&(o=str(n=rep[r],i))&&f.push(quote(n)+(gap?": ":":")+o);else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i))&&f.push(quote(n)+(gap?": ":":")+o);return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(n=walk(o,r))?o[r]=n:delete o[r]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();// ---------------------------------- //// ----- EXTENDSCRIPT PONYFILLS -----function __objectFreeze(obj) { return obj; }// ---------------------------------- //var version = "0.0.1";

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
var alertUser = function alertUser(message) {
  alert(message);
};

// Make a folder within the item, return the folder's ID
var getFolder = function getFolder() {
  // return myRoot.children[0];
  return myRoot;
};

// Make a folder within the item, return the folder's ID
var createFolder = function createFolder(item, name) {
  var result = item.createBin(name);
  return result;
};
var getItemById = function getItemById(item, id) {
  for (var i = 0; i < item.children.numItems; i++) {
    var child = item.children[i];
    alert(String(child.type));
  }
};
var getRootItem = function getRootItem() {
  return myRoot;
};

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  createFolderStructure: createFolderStructure,
  alertUser: alertUser,
  getFolder: getFolder,
  createFolder: createFolder,
  getItemById: getItemById,
  getRootItem: getRootItem
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
})(this);//# sourceMappingURL=index.js.map
