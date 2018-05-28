import {AppFunc} from "./src/Functions";
import {HelpersClass} from "./src/Helper";
import * as EJSON from "ejson";

// include our legacy js code in the output bundle
// causes subfolders in main project
//import "./src/js/functions.js"; // include this first, helper depends on it
//import "./src/js/helper.js";

export {AppFunc, HelpersClass, EJSON} // causes name conflicts and forces TS to create subfolders when compiling main project

//window["EJSON"] = EJSON;
let BrowserUtils = {EJSON}
export {BrowserUtils}

/*
namespace BrowserUtils {
    export type AppFunc = AppFuncLocal;
    export type HelpersClass = HelpersClassLocal;
}
*/

//export {BrowserUtils}