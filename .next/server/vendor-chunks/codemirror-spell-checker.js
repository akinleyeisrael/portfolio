"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/codemirror-spell-checker";
exports.ids = ["vendor-chunks/codemirror-spell-checker"];
exports.modules = {

/***/ "(ssr)/./node_modules/codemirror-spell-checker/src/js/spell-checker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/codemirror-spell-checker/src/js/spell-checker.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Use strict mode (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)\n\n\n\n// Requires\nvar Typo = __webpack_require__(/*! typo-js */ \"(ssr)/./node_modules/typo-js/typo.js\");\n\n\n// Create function\nfunction CodeMirrorSpellChecker(options) {\n\t// Initialize\n\toptions = options || {};\n\n\n\t// Verify\n\tif(typeof options.codeMirrorInstance !== \"function\" || typeof options.codeMirrorInstance.defineMode !== \"function\") {\n\t\tconsole.log(\"CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`\");\n\t\treturn;\n\t}\n\n\n\t// Because some browsers don't support this functionality yet\n\tif(!String.prototype.includes) {\n\t\tString.prototype.includes = function() {\n\t\t\t\"use strict\";\n\t\t\treturn String.prototype.indexOf.apply(this, arguments) !== -1;\n\t\t};\n\t}\n\n\n\t// Define the new mode\n\toptions.codeMirrorInstance.defineMode(\"spell-checker\", function(config) {\n\t\t// Load AFF/DIC data\n\t\tif(!CodeMirrorSpellChecker.aff_loading) {\n\t\t\tCodeMirrorSpellChecker.aff_loading = true;\n\t\t\tvar xhr_aff = new XMLHttpRequest();\n\t\t\txhr_aff.open(\"GET\", \"https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff\", true);\n\t\t\txhr_aff.onload = function() {\n\t\t\t\tif(xhr_aff.readyState === 4 && xhr_aff.status === 200) {\n\t\t\t\t\tCodeMirrorSpellChecker.aff_data = xhr_aff.responseText;\n\t\t\t\t\tCodeMirrorSpellChecker.num_loaded++;\n\n\t\t\t\t\tif(CodeMirrorSpellChecker.num_loaded == 2) {\n\t\t\t\t\t\tCodeMirrorSpellChecker.typo = new Typo(\"en_US\", CodeMirrorSpellChecker.aff_data, CodeMirrorSpellChecker.dic_data, {\n\t\t\t\t\t\t\tplatform: \"any\"\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\txhr_aff.send(null);\n\t\t}\n\n\t\tif(!CodeMirrorSpellChecker.dic_loading) {\n\t\t\tCodeMirrorSpellChecker.dic_loading = true;\n\t\t\tvar xhr_dic = new XMLHttpRequest();\n\t\t\txhr_dic.open(\"GET\", \"https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic\", true);\n\t\t\txhr_dic.onload = function() {\n\t\t\t\tif(xhr_dic.readyState === 4 && xhr_dic.status === 200) {\n\t\t\t\t\tCodeMirrorSpellChecker.dic_data = xhr_dic.responseText;\n\t\t\t\t\tCodeMirrorSpellChecker.num_loaded++;\n\n\t\t\t\t\tif(CodeMirrorSpellChecker.num_loaded == 2) {\n\t\t\t\t\t\tCodeMirrorSpellChecker.typo = new Typo(\"en_US\", CodeMirrorSpellChecker.aff_data, CodeMirrorSpellChecker.dic_data, {\n\t\t\t\t\t\t\tplatform: \"any\"\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\txhr_dic.send(null);\n\t\t}\n\n\n\t\t// Define what separates a word\n\t\tvar rx_word = \"!\\\"#$%&()*+,-./:;<=>?@[\\\\]^_`{|}~ \";\n\n\n\t\t// Create the overlay and such\n\t\tvar overlay = {\n\t\t\ttoken: function(stream) {\n\t\t\t\tvar ch = stream.peek();\n\t\t\t\tvar word = \"\";\n\n\t\t\t\tif(rx_word.includes(ch)) {\n\t\t\t\t\tstream.next();\n\t\t\t\t\treturn null;\n\t\t\t\t}\n\n\t\t\t\twhile((ch = stream.peek()) != null && !rx_word.includes(ch)) {\n\t\t\t\t\tword += ch;\n\t\t\t\t\tstream.next();\n\t\t\t\t}\n\n\t\t\t\tif(CodeMirrorSpellChecker.typo && !CodeMirrorSpellChecker.typo.check(word))\n\t\t\t\t\treturn \"spell-error\"; // CSS class: cm-spell-error\n\n\t\t\t\treturn null;\n\t\t\t}\n\t\t};\n\n\t\tvar mode = options.codeMirrorInstance.getMode(\n\t\t\tconfig, config.backdrop || \"text/plain\"\n\t\t);\n\n\t\treturn options.codeMirrorInstance.overlayMode(mode, overlay, true);\n\t});\n}\n\n\n// Initialize data globally to reduce memory consumption\nCodeMirrorSpellChecker.num_loaded = 0;\nCodeMirrorSpellChecker.aff_loading = false;\nCodeMirrorSpellChecker.dic_loading = false;\nCodeMirrorSpellChecker.aff_data = \"\";\nCodeMirrorSpellChecker.dic_data = \"\";\nCodeMirrorSpellChecker.typo;\n\n\n// Export\nmodule.exports = CodeMirrorSpellChecker;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci1zcGVsbC1jaGVja2VyL3NyYy9qcy9zcGVsbC1jaGVja2VyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ2E7OztBQUdiO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLHFEQUFTOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQWtDLGFBQWEsRUFBRTs7O0FBR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci1zcGVsbC1jaGVja2VyL3NyYy9qcy9zcGVsbC1jaGVja2VyLmpzP2NlMmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlIHN0cmljdCBtb2RlIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9TdHJpY3RfbW9kZSlcblwidXNlIHN0cmljdFwiO1xuXG5cbi8vIFJlcXVpcmVzXG52YXIgVHlwbyA9IHJlcXVpcmUoXCJ0eXBvLWpzXCIpO1xuXG5cbi8vIENyZWF0ZSBmdW5jdGlvblxuZnVuY3Rpb24gQ29kZU1pcnJvclNwZWxsQ2hlY2tlcihvcHRpb25zKSB7XG5cdC8vIEluaXRpYWxpemVcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblxuXHQvLyBWZXJpZnlcblx0aWYodHlwZW9mIG9wdGlvbnMuY29kZU1pcnJvckluc3RhbmNlICE9PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIG9wdGlvbnMuY29kZU1pcnJvckluc3RhbmNlLmRlZmluZU1vZGUgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGNvbnNvbGUubG9nKFwiQ29kZU1pcnJvciBTcGVsbCBDaGVja2VyOiBZb3UgbXVzdCBwcm92aWRlIGFuIGluc3RhbmNlIG9mIENvZGVNaXJyb3IgdmlhIHRoZSBvcHRpb24gYGNvZGVNaXJyb3JJbnN0YW5jZWBcIik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblxuXHQvLyBCZWNhdXNlIHNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGlzIGZ1bmN0aW9uYWxpdHkgeWV0XG5cdGlmKCFTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKSB7XG5cdFx0U3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFx0XHRyZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgIT09IC0xO1xuXHRcdH07XG5cdH1cblxuXG5cdC8vIERlZmluZSB0aGUgbmV3IG1vZGVcblx0b3B0aW9ucy5jb2RlTWlycm9ySW5zdGFuY2UuZGVmaW5lTW9kZShcInNwZWxsLWNoZWNrZXJcIiwgZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0Ly8gTG9hZCBBRkYvRElDIGRhdGFcblx0XHRpZighQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5hZmZfbG9hZGluZykge1xuXHRcdFx0Q29kZU1pcnJvclNwZWxsQ2hlY2tlci5hZmZfbG9hZGluZyA9IHRydWU7XG5cdFx0XHR2YXIgeGhyX2FmZiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0eGhyX2FmZi5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2NvZGVtaXJyb3Iuc3BlbGwtY2hlY2tlci9sYXRlc3QvZW5fVVMuYWZmXCIsIHRydWUpO1xuXHRcdFx0eGhyX2FmZi5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYoeGhyX2FmZi5yZWFkeVN0YXRlID09PSA0ICYmIHhocl9hZmYuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0XHRDb2RlTWlycm9yU3BlbGxDaGVja2VyLmFmZl9kYXRhID0geGhyX2FmZi5yZXNwb25zZVRleHQ7XG5cdFx0XHRcdFx0Q29kZU1pcnJvclNwZWxsQ2hlY2tlci5udW1fbG9hZGVkKys7XG5cblx0XHRcdFx0XHRpZihDb2RlTWlycm9yU3BlbGxDaGVja2VyLm51bV9sb2FkZWQgPT0gMikge1xuXHRcdFx0XHRcdFx0Q29kZU1pcnJvclNwZWxsQ2hlY2tlci50eXBvID0gbmV3IFR5cG8oXCJlbl9VU1wiLCBDb2RlTWlycm9yU3BlbGxDaGVja2VyLmFmZl9kYXRhLCBDb2RlTWlycm9yU3BlbGxDaGVja2VyLmRpY19kYXRhLCB7XG5cdFx0XHRcdFx0XHRcdHBsYXRmb3JtOiBcImFueVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR4aHJfYWZmLnNlbmQobnVsbCk7XG5cdFx0fVxuXG5cdFx0aWYoIUNvZGVNaXJyb3JTcGVsbENoZWNrZXIuZGljX2xvYWRpbmcpIHtcblx0XHRcdENvZGVNaXJyb3JTcGVsbENoZWNrZXIuZGljX2xvYWRpbmcgPSB0cnVlO1xuXHRcdFx0dmFyIHhocl9kaWMgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHhocl9kaWMub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9jb2RlbWlycm9yLnNwZWxsLWNoZWNrZXIvbGF0ZXN0L2VuX1VTLmRpY1wiLCB0cnVlKTtcblx0XHRcdHhocl9kaWMub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHhocl9kaWMucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHJfZGljLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0Q29kZU1pcnJvclNwZWxsQ2hlY2tlci5kaWNfZGF0YSA9IHhocl9kaWMucmVzcG9uc2VUZXh0O1xuXHRcdFx0XHRcdENvZGVNaXJyb3JTcGVsbENoZWNrZXIubnVtX2xvYWRlZCsrO1xuXG5cdFx0XHRcdFx0aWYoQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5udW1fbG9hZGVkID09IDIpIHtcblx0XHRcdFx0XHRcdENvZGVNaXJyb3JTcGVsbENoZWNrZXIudHlwbyA9IG5ldyBUeXBvKFwiZW5fVVNcIiwgQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5hZmZfZGF0YSwgQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5kaWNfZGF0YSwge1xuXHRcdFx0XHRcdFx0XHRwbGF0Zm9ybTogXCJhbnlcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0eGhyX2RpYy5zZW5kKG51bGwpO1xuXHRcdH1cblxuXG5cdFx0Ly8gRGVmaW5lIHdoYXQgc2VwYXJhdGVzIGEgd29yZFxuXHRcdHZhciByeF93b3JkID0gXCIhXFxcIiMkJSYoKSorLC0uLzo7PD0+P0BbXFxcXF1eX2B7fH1+IFwiO1xuXG5cblx0XHQvLyBDcmVhdGUgdGhlIG92ZXJsYXkgYW5kIHN1Y2hcblx0XHR2YXIgb3ZlcmxheSA9IHtcblx0XHRcdHRva2VuOiBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHRcdFx0dmFyIGNoID0gc3RyZWFtLnBlZWsoKTtcblx0XHRcdFx0dmFyIHdvcmQgPSBcIlwiO1xuXG5cdFx0XHRcdGlmKHJ4X3dvcmQuaW5jbHVkZXMoY2gpKSB7XG5cdFx0XHRcdFx0c3RyZWFtLm5leHQoKTtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdoaWxlKChjaCA9IHN0cmVhbS5wZWVrKCkpICE9IG51bGwgJiYgIXJ4X3dvcmQuaW5jbHVkZXMoY2gpKSB7XG5cdFx0XHRcdFx0d29yZCArPSBjaDtcblx0XHRcdFx0XHRzdHJlYW0ubmV4dCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoQ29kZU1pcnJvclNwZWxsQ2hlY2tlci50eXBvICYmICFDb2RlTWlycm9yU3BlbGxDaGVja2VyLnR5cG8uY2hlY2sod29yZCkpXG5cdFx0XHRcdFx0cmV0dXJuIFwic3BlbGwtZXJyb3JcIjsgLy8gQ1NTIGNsYXNzOiBjbS1zcGVsbC1lcnJvclxuXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgbW9kZSA9IG9wdGlvbnMuY29kZU1pcnJvckluc3RhbmNlLmdldE1vZGUoXG5cdFx0XHRjb25maWcsIGNvbmZpZy5iYWNrZHJvcCB8fCBcInRleHQvcGxhaW5cIlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gb3B0aW9ucy5jb2RlTWlycm9ySW5zdGFuY2Uub3ZlcmxheU1vZGUobW9kZSwgb3ZlcmxheSwgdHJ1ZSk7XG5cdH0pO1xufVxuXG5cbi8vIEluaXRpYWxpemUgZGF0YSBnbG9iYWxseSB0byByZWR1Y2UgbWVtb3J5IGNvbnN1bXB0aW9uXG5Db2RlTWlycm9yU3BlbGxDaGVja2VyLm51bV9sb2FkZWQgPSAwO1xuQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5hZmZfbG9hZGluZyA9IGZhbHNlO1xuQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5kaWNfbG9hZGluZyA9IGZhbHNlO1xuQ29kZU1pcnJvclNwZWxsQ2hlY2tlci5hZmZfZGF0YSA9IFwiXCI7XG5Db2RlTWlycm9yU3BlbGxDaGVja2VyLmRpY19kYXRhID0gXCJcIjtcbkNvZGVNaXJyb3JTcGVsbENoZWNrZXIudHlwbztcblxuXG4vLyBFeHBvcnRcbm1vZHVsZS5leHBvcnRzID0gQ29kZU1pcnJvclNwZWxsQ2hlY2tlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/codemirror-spell-checker/src/js/spell-checker.js\n");

/***/ })

};
;