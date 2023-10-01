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
// Count the number of characters prefixing a line in the editor
// Thanks, StackOverflow
var countConsecPrefixChars = function countConsecPrefixChars(str, _char) {
  var count = 0;
  if (str[0] === _char) {
    count++;
  } else {
    return count;
  }
  var prevChar = str[0];
  for (var i = 1; i < str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      break;
    }
    prevChar = str[i];
  }
  return count;
};

// General Helpers

var alertUser = function alertUser(message) {
  alert(message);
};

// Recursively search a given item, provided a name
var getItemByName = function getItemByName(item, name) {
  // alert("entered function w/ " + item.name + "\nid is " + item.nodeId);
  if (item === undefined) {
    // alert("case 1: returning undefined");
    return undefined;
  }
  if (item.name === name) {
    // alert("case 2: returning item");
    return item;
  }
  if (item.type === 2 || item.type === 3) {
    // only Search BINs and ROOT
    // alert("case 3: entering for loop on " + item.name + "'s children");
    for (var i = 0; i < item.children.numItems; i++) {
      var child = item.children[i];
      var result = getItemByName(child, name);
      if (result !== undefined) {
        return result;
      }
    }
  }
  // alert("case 4: returning undefined");
  return undefined;
};

var root = app.project.rootItem;
var testFunc = function testFunc() {
  // const item = getItemById(root, "000f4253");
  var item = getItemByName(root, "Sequence 02");
  if (item !== undefined) {
    alert("Found " + item.name + "!");
  } else {
    alert("undefined");
  }
};
var parseText = function parseText(text) {
  var lines = text.split("\n");
  var stack = []; // to store top-level groups
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var prefixCount = countConsecPrefixChars(line, "/");
    if (line[0] === "#") {
      continue;
    } else if (line[0] !== "/") {
      // Top-level folder
      var topBin = root.createBin(line);
      stack.push({
        name: topBin.name,
        id: topBin.nodeId,
        prefixCount: prefixCount
      });
    } else if (line[0] === "/") {
      // Determine where to put sub folder
      // line = line.substring(numSlashes)
      var _topBin = root.createBin(line);
      stack.push({
        name: _topBin.name,
        id: _topBin.nodeId,
        prefixCount: prefixCount
      });
    }
  }
  printStack(stack);
};
var printStack = function printStack(stack) {
  var result = "Stack:\n";
  for (var i = 0; i < stack.length; i++) {
    var item = stack[i];
    result += "id: ".concat(item.id, ", name: ").concat(item.name, ", prefixCount: ").concat(item.prefixCount);
    if (i < stack.length - 1) {
      result += "\n\n";
    }
  }
  alert(result);
};

// --- Test Structure ---
// Untitled.prproj (000f4240)
// |- Sequence 01 (000f424f)
// ||- Top (000f4250)
// ||-- Mid (000f4252)
// ||--- Low (000f4253)
// |- Other (000f4251)

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  alertUser: alertUser,
  testFunc: testFunc,
  parseText: parseText,
  printStack: printStack
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
