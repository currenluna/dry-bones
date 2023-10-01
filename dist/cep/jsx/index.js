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

var myRoot = app.project.rootItem;
var alertUser = function alertUser(message) {
  return alert(message);
};

// Make a folder within the item, return the folder object
var createBin = function createBin(name) {
  var bin = myRoot.createBin(name);
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

var testFunc = function testFunc() {
  // alert(printChildren(myRoot));
  // traverseItem(myRoot);

  var id = "000f4251";
  var item = findItemById(myRoot, id);
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
var findItemById = function findItemById(item, id) {
  alert("entered function w/ " + item.name + "\nid is " + item.nodeId);
  if (item === undefined) {
    alert("case 1: returning undefined");
    return undefined;
  }
  if (item.nodeId === id) {
    alert("case 2: returning item");
    return item;
  }
  if (item.type === 2 || item.type === 3) {
    // only Search BINs and ROOT
    alert("case 3: entering for loop on " + item.name + "'s children");
    for (var i = 0; i < item.children.numItems; i++) {
      var child = item.children[i];
      var result = findItemById(child, id);
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

var printChildren = function printChildren(item) {
  var result = "";
  for (var i = 0; i < item.children.numItems; i++) {
    var child = item.children[i];
    result += child.name + ": " + child.nodeId;
    if (i !== item.children.numItems - 1) {
      result += ", ";
    }
  }
  return result;
};

// Recursively traverse all bins
var traverseItem = function traverseItem(item) {
  alert(item.name);
  for (var i = 0; i < item.children.numItems; i++) {
    var child = item.children[i];
    if (child.type === 2) {
      // Only traverse BIN type
      traverseItem(child);
    }
  }
};
var getRootItem = function getRootItem() {
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

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  alertUser: alertUser,
  createBin: createBin,
  testFunc: testFunc,
  findItemById: findItemById,
  printChildren: printChildren,
  traverseItem: traverseItem,
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
