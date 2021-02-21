/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var tree = {} ;
module.exports = tree ;


Object.assign( tree ,
	{
		extend: __webpack_require__( 71 ) ,
		clone: __webpack_require__( 72 ) ,
		path: __webpack_require__( 73 ) ,
		dotPath: __webpack_require__( 74 )
	} ,
	__webpack_require__( 75 ) ,
	__webpack_require__( 76 ) ,
	__webpack_require__( 77 )
) ;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const seventh = __webpack_require__( 60 ) ;
module.exports = seventh ;

// The order matters
__webpack_require__( 62 ) ;
__webpack_require__( 63 ) ;
__webpack_require__( 64 ) ;
__webpack_require__( 65 ) ;
__webpack_require__( 66 ) ;
__webpack_require__( 67 ) ;
__webpack_require__( 68 ) ;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;
const string = __webpack_require__( 4 ) ;



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack


const esc = tree.extend( null , Object.create( xterm.esc ) , {

	color256: { on: '\x1b[38;5;%um' , off: defaultColor } ,
	bgColor256: { on: '\x1b[48;5;%um' , off: bgDefaultColor } ,

	setCursorColorRgb: { on: '\x1b]12;#%x%x%x\x07' } ,	// it want rgb as parameter, like rgb:127/0/32
	setDefaultColorRgb: { on: '\x1b]10;#%x%x%x\x07' } ,	// ->|TODOC|<- not widely supported
	setDefaultBgColorRgb: { on: '\x1b]11;#%x%x%x\x07' } ,	// ->|TODOC|<- not widely supported
	color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , fb: true } ,
	bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , fb: true } ,

	// Cannot find a way to set the cursor to a register, so try to guess
	setCursorColor: {
		on: '%[setCursorColor:%a%a]F' ,
		handler: function setCursorColor( bg , fg ) {

			if ( typeof fg !== 'number' || typeof bg !== 'number' ) { return '' ; }

			fg = Math.floor( fg ) ;
			bg = Math.floor( bg ) ;

			if ( fg < 0 || fg > 255 || bg < 0 || bg > 255 ) { return '' ; }

			var rgb = this.root.rgbForRegister( bg ) ;

			return string.format( this.root.esc.setCursorColorRgb.on , rgb.r , rgb.g , rgb.b ) ;
		}
	}
} ) ;





const keymap = Object.create( xterm.keymap ) ;
const handler = Object.create( xterm.handler ) ;





module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: xterm.colorRegister
} ;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const string = __webpack_require__( 4 ) ;





/* Escape sequences */



// Mini-doc:

// ESC = \x1b
// CSI = ESC + [ (Control Sequence Introducer)
// OSC = ESC + ] (OS Command)
// DSC = ESC + P
// ST = ESC + \	(string terminator: it ends user strings and some sequences)

// CSI: ESC + [ + <command> + <type>
// It is possible to separate many command with a ';' before the final 'type'.

// See: http://en.wikipedia.org/wiki/ANSI_escape_code
// and: http://invisible-island.net/xterm/ctlseqs/ctlseqs.html
// man tput
// man infocmp
// man 5 terminfo
// For tput tcap name, see: http://pubs.opengroup.org/onlinepubs/7990989799/xcurses/terminfo.html
// useful command: infocmp -l $TERM


// Common sequences

// Remove colors
const defaultColor = '\x1b[39m' ;	// back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;	// back to the default color, most of time it is the same than .bgBlack



const esc = {

	/* Common sequences */

	// Reset the terminal
	reset: { on: '\x1bc' } ,

	/* Cursor sequences */

	saveCursor: { on: '\x1b7' } ,	// also '\x1b[s'
	restoreCursor: { on: '\x1b8' } ,	// also '\x1b[u'

	up: { on: '\x1b[%UA' } ,
	down: { on: '\x1b[%UB' } ,
	right: { on: '\x1b[%UC' } ,
	left: { on: '\x1b[%UD' } ,
	nextLine: { on: '\x1b[%UE' } ,
	previousLine: { on: '\x1b[%UF' } ,
	column: { on: '\x1b[%UG' } ,
	row: { on: '\x1b[%Ud' } ,
	moveTo: { on: '\x1b[%+1U;%-1UH' , optimized: ( x , y ) => '\x1b[' + y + ';' + x + 'H' } ,
	//moveToBottomLeft: { on: '\x1bF' } ,	// Not widely supported
	hideCursor: { on: '\x1b[?25l' , off: '\x1b[?25h' } ,

	tabSet: { on: '\x1bH' } ,	// HTS
	tabClear: { on: '\x1b[0g' } ,	// TBC
	tabClearAll: { on: '\x1b[3g' } ,	// TBC
	forwardTab: { on: '\x1b[%UI' } ,	// CHT
	backwardTab: { on: '\x1b[%UZ' } ,	// CBT

	// Cursor styles
	blockCursor: { on: '\x1b[2 q' } ,
	blinkingBlockCursor: { on: '\x1b[0 q' } ,
	underlineCursor: { on: '\x1b[4 q' } ,
	blinkingUnderlineCursor: { on: '\x1b[3 q' } ,
	beamCursor: { on: '\x1b[6 q' } ,
	blinkingBeamCursor: { on: '\x1b[5 q' } ,

	/* Editing sequences */

	clear: { on: '\x1b[H\x1b[2J' } ,
	eraseDisplayBelow: { on: '\x1b[0J' } ,
	eraseDisplayAbove: { on: '\x1b[1J' } ,
	eraseDisplay: { on: '\x1b[2J' } ,
	eraseSavedLine: { on: '\x1b[3J' } ,
	eraseLineAfter: { on: '\x1b[0K' } ,
	eraseLineBefore: { on: '\x1b[1K' } ,
	eraseLine: { on: '\x1b[2K' } ,
	insertLine: { on: '\x1b[%UL' } ,
	deleteLine: { on: '\x1b[%UM' } ,
	insert: { on: '\x1b[%U@' } ,	// insert char
	'delete': { on: '\x1b[%UP' } ,	// delete char
	erase: { on: '\x1b[%UX' } ,	// erase char, does not move the cursor
	backDelete: { on: '\x1b[1D\x1b[1P' } ,	// Backspace-like, left(1) followed by delete(1) /!\ WARNING /!\ this doesn't work with full-width char !!! /!\
	scrollUp: { on: '\x1b[%US' } ,	// scroll up n lines, new lines are added at the bottom
	scrollDown: { on: '\x1b[%UT' } ,	// scroll down n lines, new lines are added at the top
	scrollingRegion: { on: '\x1b[%U;%Ur' } ,	// top line, bottom line, scrolling affect only this region,
	resetScrollingRegion: { on: '\x1b[r' } ,

	// Looks like it does not works
	//scrollLeft: { on: '\x1b[%U @' } ,	// scroll left n columns, new columns are added at the right
	//scrollRight: { on: '\x1b[%U A' } ,	// scroll right n columns, new columns are added at the left
	setClipboardLL: { on: '\x1b]52;%s;%s\x07' } ,	// Not supported outside of xterm
	requestClipboard: { on: '\x1b]52;%s;?\x07' } ,	// Not supported outside of xterm

	// This set the alternate screen buffer, do not work on many term, due to that 'titeInhibit' shit...
	alternateScreenBuffer: { on: '\x1b[?1049h' , off: '\x1b[?1049l' } ,

	/* Misc sequences */

	beep: { on: '\x07' } ,	// Deprecated -- use bell instead
	bell: { on: '\x07' } ,	// Emit an audible bell

	/* Style sequences */

	styleReset: { on: '\x1b[0m' } ,

	bold: { on: '\x1b[1m' , off: '\x1b[22m' } ,		// here we use the dim.off code (22) that have a better support than (21), for God-only known reason...
	dim: { on: '\x1b[2m' , off: '\x1b[22m' } ,		// dim: darker, 'off' remove removes also bold/bright
	italic: { on: '\x1b[3m' , off: '\x1b[23m' } ,
	underline: { on: '\x1b[4m' , off: '\x1b[24m' } ,
	blink: { on: '\x1b[5m' , off: '\x1b[25m' } ,
	inverse: { on: '\x1b[7m' , off: '\x1b[27m' } ,
	hidden: { on: '\x1b[8m' , off: '\x1b[28m' } ,	// invisible, but can be copy/paste'd
	strike: { on: '\x1b[9m' , off: '\x1b[29m' } ,

	// Foreground color
	defaultColor: { on: defaultColor } ,
	black: { on: '\x1b[30m' , off: defaultColor } ,
	red: { on: '\x1b[31m' , off: defaultColor } ,
	green: { on: '\x1b[32m' , off: defaultColor } ,
	yellow: { on: '\x1b[33m' , off: defaultColor } ,
	blue: { on: '\x1b[34m' , off: defaultColor } ,
	magenta: { on: '\x1b[35m' , off: defaultColor } ,
	cyan: { on: '\x1b[36m' , off: defaultColor } ,
	white: { on: '\x1b[37m' , off: defaultColor } ,
	darkColor: { on: '\x1b[3%um' , off: defaultColor } ,	// should be called with a 0..7 integer
	brightBlack: { on: '\x1b[90m' , off: defaultColor } ,
	brightRed: { on: '\x1b[91m' , off: defaultColor } ,
	brightGreen: { on: '\x1b[92m' , off: defaultColor } ,
	brightYellow: { on: '\x1b[93m' , off: defaultColor } ,
	brightBlue: { on: '\x1b[94m' , off: defaultColor } ,
	brightMagenta: { on: '\x1b[95m' , off: defaultColor } ,
	brightCyan: { on: '\x1b[96m' , off: defaultColor } ,
	brightWhite: { on: '\x1b[97m' , off: defaultColor } ,
	brightColor: { on: '\x1b[9%um' , off: defaultColor } ,	// should be called with a 0..7 integer

	// Background color
	bgDefaultColor: { on: bgDefaultColor } ,
	bgBlack: { on: '\x1b[40m' , off: bgDefaultColor } ,
	bgRed: { on: '\x1b[41m' , off: bgDefaultColor } ,
	bgGreen: { on: '\x1b[42m' , off: bgDefaultColor } ,
	bgYellow: { on: '\x1b[43m' , off: bgDefaultColor } ,
	bgBlue: { on: '\x1b[44m' , off: bgDefaultColor } ,
	bgMagenta: { on: '\x1b[45m' , off: bgDefaultColor } ,
	bgCyan: { on: '\x1b[46m' , off: bgDefaultColor } ,
	bgWhite: { on: '\x1b[47m' , off: bgDefaultColor } ,
	bgDarkColor: { on: '\x1b[4%um' , off: bgDefaultColor } ,	// should be called with a 0..7 integer
	bgBrightBlack: { on: '\x1b[100m' , off: bgDefaultColor } ,
	bgBrightRed: { on: '\x1b[101m' , off: bgDefaultColor } ,
	bgBrightGreen: { on: '\x1b[102m' , off: bgDefaultColor } ,
	bgBrightYellow: { on: '\x1b[103m' , off: bgDefaultColor } ,
	bgBrightBlue: { on: '\x1b[104m' , off: bgDefaultColor } ,
	bgBrightMagenta: { on: '\x1b[105m' , off: bgDefaultColor } ,
	bgBrightCyan: { on: '\x1b[106m' , off: bgDefaultColor } ,
	bgBrightWhite: { on: '\x1b[107m' , off: bgDefaultColor } ,
	bgBrightColor: { on: '\x1b[10%um' , off: bgDefaultColor } ,	// should be called with a 0..7 integer

	/* Input / Output sequences */

	// Request terminal ID
	// requestTerminalId: { on: '\x1b[>c' } ,

	// Terminal will send the cursor coordinate only one time
	requestCursorLocation: { on: '\x1b[6n' } ,	// '\x1b[?6n' is not widely supported, '\x1b[6n' is better

	// Terminal will send the screen-size only one time
	requestScreenSize: { on: '\x1b[18t' } ,

	// Terminal will send the rgb color for a register
	requestColor: { on: '\x1b]4;%u;?\x07' } ,

	// Terminal will send event on button pressed with mouse position
	mouseButton: { on: '\x1b[?1000h' , off: '\x1b[?1000l' } ,

	// Terminal will send position of the column hilighted
	mouseHilight: { on: '\x1b[?1001h' , off: '\x1b[?1001l' } ,

	// Terminal will send event on button pressed and mouse motion as long as a button is down, with mouse position
	mouseDrag: { on: '\x1b[?1002h' , off: '\x1b[?1002l' } ,

	// Terminal will send event on button pressed and motion
	mouseMotion: { on: '\x1b[?1003h' , off: '\x1b[?1003l' } ,

	// Another mouse protocol that extend coordinate mapping (without it, it supports only 223 rows and columns)
	mouseSGR: { on: '\x1b[?1006h' , off: '\x1b[?1006l' } ,

	// Terminal will send event when it gains and loses focus
	focusEvent: { on: '\x1b[?1004h' , off: '\x1b[?1004l' } ,

	// Should allow keypad to send different code than 0..9 keys but it does not work on some setup
	applicationKeypad: { on: '\x1b[?1h\x1b=' , off: '\x1b[?1l\x1b>' } ,

	// When enabled, the terminal will report if modifiers (SHIFT, CTRL, ALT) are on
	/*	Not widely supported
	keyboardModifier: { on: '\x1b[>0;1m' , off: '\x1b[>0;0m' } ,
	cursorKeyModifier: { on: '\x1b[>1;1m' , off: '\x1b[>1;0m' } ,
	functionKeyModifier: { on: '\x1b[>2;1m' , off: '\x1b[>2;0m' } ,
	otherKeyModifier: { on: '\x1b[>3;1m' , off: '\x1b[>3;0m' } ,
	*/

	// Do not work... use node.js stdout.setRawMode(true) instead
	//noecho: { on: '\x1b[12h' } ,

	/* OSC - OS Command sequences: may be unavailable on some context */

	// Set the title of an xterm-compatible window
	windowTitle: { on: '\x1b]2;%s\x1b\\' } ,
	iconName: { on: '\x1b]1;%s\x1b\\' } ,
	cwd: { on: '\x1b]7;%s\x1b\\' } ,
	// Sometime (e.g.: gnome) the notification is displayed only if the user had switched to another window/workspace
	notify: { on: '\x1b]777;notify;%s;%s\x1b\\' } ,

	// Those sequences accept either #%x%x%x or rgb:%d/%d/%d
	// Sometime rgb:%d/%d/%d should be encoded into the 0..65535 range, so #%x%x%x is more reliable
	setCursorColorRgb: { on: '\x1b]12;#%x%x%x\x07' } ,	// it want rgb as parameter, like rgb:127/0/32
	resetCursorColorRgb: { on: '\x1b]112\x07' } ,
	setDefaultColorRgb: { on: '\x1b]10;#%x%x%x\x07' } ,	// not widely supported
	resetDefaultColorRgb: { on: '\x1b]110\x07' } ,
	setDefaultBgColorRgb: { on: '\x1b]11;#%x%x%x\x07' } ,	// not widely supported
	resetDefaultBgColorRgb: { on: '\x1b]111\x07' } ,
	setHighlightBgColorRgb: { on: '\x1b]17;#%x%x%x\x07' } ,	// not widely supported
	resetHighlightBgColorRgb: { on: '\x1b]117\x07' } ,
	setColorLL: { on: '\x1b]4;%u;#%x%x%x\x07' } ,	// LL= Low Level
	resetColorLL: { on: '\x1b]104;%u\x07' } ,

	requestDA1: { on: '\x1b[c' } ,
	requestDA2: { on: '\x1b[>c' } ,
	requestDA3: { on: '\x1b[=c' } ,
	requestTerminalUnitIdLL: { on: '\x1b[=c' } ,	// Tertiary DA
	xtgettcapLL: { on: '\x1bP+q%s\x1b\\' } ,	// Request terminfo

	setFont: { on: '\x1b]50;%s\x07' } ,	// ->|TODOC|<- rarely supported
	color24bits: { on: '%D%D%D' , na: true } ,	// not capable
	bgColor24bits: { on: '%D%D%D' , na: true } ,	// not capable

	/* Functions */

	color256: {
		on: '%[color256:%a]F' ,
		off: defaultColor ,
		fb: true ,
		handler: function( register ) {
			if ( typeof register !== 'number' ) { return '' ; }
			if ( register < 0 || register > 255 ) { return '' ; }

			// If the register is greater than 15, find the 0..15 register that is close to it
			if ( register > 15 ) {
				register = this.root.registerForRgb( this.root.rgbForRegister( register ) , 0 , 15 ) ;
			}

			//return string.format.call( this.root.escHandler , this.root.esc.color.on , register ) ;
			return this.root.escHandler.color( register ) ;
		}
	} ,

	bgColor256: {
		on: '%[bgColor256:%a]F' ,
		off: bgDefaultColor ,
		fb: true ,
		handler: function( register ) {
			if ( typeof register !== 'number' ) { return '' ; }
			if ( register < 0 || register > 255 ) { return '' ; }

			// If the register is greater than 15, find the 0..15 register that is close to it
			if ( register > 15 ) {
				register = this.root.registerForRgb( this.root.rgbForRegister( register ) , 0 , 15 ) ;
			}

			//return string.format.call( this.root.escHandler , this.root.esc.bgColor.on , register ) ;
			return this.root.escHandler.bgColor( register ) ;
		}
	} ,

	// Cannot find a way to set the cursor to a register, so try to guess
	setCursorColor: {
		on: '%[setCursorColor:%a%a]F' ,
		handler: function( bg , fg ) {
			if ( typeof fg !== 'number' || typeof bg !== 'number' ) { return '' ; }

			fg = Math.floor( fg ) ;
			bg = Math.floor( bg ) ;

			if ( fg < 0 || fg > 255 || bg < 0 || bg > 255 ) { return '' ; }

			var rgb = this.root.rgbForRegister( bg ) ;

			return string.format( this.root.esc.setCursorColorRgb.on , rgb.r , rgb.g , rgb.b ) ;
		}
	}
} ;





/* Inputs management */



const handler = {} ;



handler.mouseX11Protocol = function( basename , buffer ) {
	var code = buffer[ 0 ] ;
	var result = {
		data: {
			shift: !! ( code & 4 ) ,
			alt: !! ( code & 8 ) ,
			ctrl: !! ( code & 16 )
		}
	} ;

	if ( code & 32 ) {
		if ( code & 64 ) {
			result.name = basename + ( code & 1 ? '_WHEEL_DOWN' : '_WHEEL_UP' ) ;
		}
		else {
			// Button event
			switch ( code & 3 ) {
				case 0 : result.name = basename + '_LEFT_BUTTON_PRESSED' ; break ;
				case 1 : result.name = basename + '_MIDDLE_BUTTON_PRESSED' ; break ;
				case 2 : result.name = basename + '_RIGHT_BUTTON_PRESSED' ; break ;
				case 3 : result.name = basename + '_BUTTON_RELEASED' ; break ;
			}
		}
	}
	else if ( code & 64 ) {
		// Motion event
		result.name = basename + '_MOTION' ;
	}

	result.eaten = 3 ;
	result.data.code = code ;
	result.data.x = buffer[ 1 ] - 32 ;
	result.data.y = buffer[ 2 ] - 32 ;

	return result ;
} ;



handler.mouseSGRProtocol = function( basename , buffer ) {
	var code , pressed , matches , result ;

	matches = buffer.toString().match( /^(-?[0-9]*);?([0-9]*);?([0-9]*)(M|m)/ ) ;

	if ( ! matches || matches[ 3 ].length === 0 ) {
		return {
			name: 'ERROR' ,
			eaten: matches ? matches[ 0 ].length : 0 ,
			data: { matches }
		} ;
	}

	code = parseInt( matches[ 1 ] , 10 ) ;
	pressed = matches[ 4 ] !== 'm' ;

	result = {
		data: {
			shift: !! ( code & 4 ) ,
			alt: !! ( code & 8 ) ,
			ctrl: !! ( code & 16 )
			// , pressed: pressed
		}
	} ;

	result.data.x = parseInt( matches[ 2 ] , 10 ) ;
	result.data.y = parseInt( matches[ 3 ] , 10 ) ;
	result.eaten = matches[ 0 ].length ;

	if ( code & 32 ) {
		// Motions / drag event

		switch ( code & 3 ) {
			case 0 :
				// Left drag, or maybe something else (left+right combo)
				result.name = basename + '_DRAG' ;
				result.data.left = true ;
				result.data.right = false ;
				result.data.xFrom = this.state.button.left.x ;
				result.data.yFrom = this.state.button.left.y ;
				break ;

				// Doesn't seem to exist, middle drag does not discriminate from motion
				//case 1 :

			case 2 :
				// Right drag
				result.name = basename + '_DRAG' ;
				result.data.left = false ;
				result.data.right = true ;
				result.data.xFrom = this.state.button.right.x ;
				result.data.yFrom = this.state.button.right.y ;
				break ;

			case 3 :
			default :
				result.name = basename + '_MOTION' ;
				break ;
		}
	}
	else if ( code & 64 ) {
		result.name = basename + ( code & 1 ? '_WHEEL_DOWN' : '_WHEEL_UP' ) ;
	}
	else {
		// Button event
		switch ( code & 3 ) {
			case 0 :
				result.name = basename + '_LEFT_BUTTON' ;
				//if ( this.state.button.left === pressed ) { result.disable = true ; }
				this.state.button.left = pressed ? result.data : null ;
				break ;

			case 1 :
				result.name = basename + '_MIDDLE_BUTTON' ;
				//if ( this.state.button.middle === pressed ) { result.disable = true ; }
				this.state.button.middle = pressed ? result.data : null ;
				break ;

			case 2 :
				result.name = basename + '_RIGHT_BUTTON' ;
				//if ( this.state.button.right === pressed ) { result.disable = true ; }
				this.state.button.right = pressed ? result.data : null ;
				break ;

			case 3 :
				result.name = basename + '_OTHER_BUTTON' ;
				//if ( this.state.button.other === pressed ) { result.disable = true ; }
				this.state.button.other = pressed ? result.data : null ;
				break ;
		}

		result.name += pressed ? '_PRESSED' : '_RELEASED' ;
	}

	result.data.code = code ;

	return result ;
} ;



handler.cursorLocation = function( basename , paramString ) {
	var params = paramString.split( ';' ) ;

	return {
		name: 'CURSOR_LOCATION' ,
		data: {
			x: parseInt( params[ 1 ] , 10 ) ,
			y: parseInt( params[ 0 ] , 10 )
		}
	} ;
} ;



handler.colorRegister = function( basename , paramString ) {
	var matches = paramString.match( /^([0-9]*);rgb:([0-9a-f]{2})[0-9a-f]*\/([0-9a-f]{2})[0-9a-f]*\/([0-9a-f]{2})[0-9a-f]*/ ) ;

	if ( ! matches ) {
		return { name: 'ERROR' } ;
	}

	return {
		name: 'COLOR_REGISTER' ,
		data: {
			register: parseInt( matches[ 1 ] , 10 ) ,
			r: parseInt( matches[ 2 ] , 16 ) ,
			g: parseInt( matches[ 3 ] , 16 ) ,
			b: parseInt( matches[ 4 ] , 16 )
		}
	} ;
} ;



handler.screenSize = function( basename , paramString ) {
	var params = paramString.split( ';' ) ,
		width = parseInt( params[ 1 ] , 10 ) ,
		height = parseInt( params[ 0 ] , 10 ) ,
		resized = this.root.width !== width || this.root.height !== height ;

	this.root.width = width ;
	this.root.height = height ;

	return {
		name: 'SCREEN_SIZE' ,
		data: {
			resized: resized ,
			width: width ,
			height: height
		}
	} ;
} ;



handler.clipboard = function( basename , paramString ) {
	//console.log( "handler.clipboard: " , basename , paramString ) ;
	var matches = paramString.match( /^([cps][0-7]*);(.*)/ ) ;

	if ( ! matches ) {
		return { name: 'ERROR' } ;
	}

	return {
		name: 'CLIPBOARD' ,
		data: {
			source: matches[ 1 ] ,
			content: Buffer.from( matches[ 2 ] , 'base64' ).toString()
		}
	} ;
} ;



handler.xtgettcap = function( basename , paramString ) {
	console.log( "handler.xtgettcap: " , basename , paramString ) ;

	/*	It looks like there is never multiple response at once, even if the request can query multiple
	var values = {} ;

	paramString.split( ';' ).forEach( part => {
		var matches = paramString.match( /^([0-9a-fA-F]*)=([0-9a-fA-F]*)/ ) ;
		if ( matches ) {
			values[ Buffer.from( matches[ 1 ] , 'hex' ).toString() ] = Buffer.from( matches[ 2 ] , 'hex' ).toString() ;
		}
	} ) ;

	return {
		name: 'TERMINFO' ,
		data: {
			valid: basename !== 'XTGETTCAP_INVALID' ,
			values
		}
	} ;
	*/

	var matches = paramString.match( /^([0-9a-fA-F]*)=([0-9a-fA-F]*)/ ) ;

	if ( ! matches ) {
		return {
			name: 'TERMINFO' ,
			data: {
				valid: basename !== 'XTGETTCAP_INVALID' ,
				key: Buffer.from( paramString , 'hex' ).toString() ,
				error: 'Not found'
			}
		} ;
	}

	return {
		name: 'TERMINFO' ,
		data: {
			valid: basename !== 'XTGETTCAP_INVALID' ,
			key: Buffer.from( matches[ 1 ] , 'hex' ).toString() ,
			value: Buffer.from( matches[ 2 ] , 'hex' ).toString()
		}
	} ;
} ;



handler.terminalUnitId = function( basename , paramString ) {
	console.log( "handler.terminalUnitId: " , basename , paramString ) ;

	return {
		name: 'TERMINAL_UNIT_ID' ,
		data: {
			name: Buffer.from( paramString , 'hex' ).toString()
		}
	} ;
} ;





/* Key Mapping */



const keymap = {
	ESCAPE: '\x1b' ,
	TAB: '\x09' ,
	ENTER: '\x0d' ,

	SHIFT_TAB: '\x1b[Z' ,
	ALT_TAB: '\x1b\x09' ,	// Also CTRL_ALT_I, most of time it is grabbed by the window manager before reaching the terminal
	ALT_ENTER: '\x1b\x0d' ,

	UP: [ '\x1bOA' , '\x1b[A' ] ,
	DOWN: [ '\x1bOB' , '\x1b[B' ] ,
	RIGHT: [ '\x1bOC' , '\x1b[C' ] ,
	LEFT: [ '\x1bOD' , '\x1b[D' ] ,

	SHIFT_UP: '\x1b[1;2A' ,
	SHIFT_DOWN: '\x1b[1;2B' ,
	SHIFT_RIGHT: '\x1b[1;2C' ,
	SHIFT_LEFT: '\x1b[1;2D' ,
	ALT_UP: '\x1b[1;3A' ,
	ALT_DOWN: '\x1b[1;3B' ,
	ALT_RIGHT: '\x1b[1;3C' ,
	ALT_LEFT: '\x1b[1;3D' ,
	CTRL_UP: '\x1b[1;5A' ,
	CTRL_DOWN: '\x1b[1;5B' ,
	CTRL_RIGHT: '\x1b[1;5C' ,
	CTRL_LEFT: '\x1b[1;5D' ,

	//BACKSPACE: '\x7f' ,
	BACKSPACE: [ '\x7f' , '\x08' ] ,	// Most terminal use \x08 for Ctrl-backspace, except Terminology...
	INSERT: '\x1b[2~' ,
	DELETE: '\x1b[3~' ,
	HOME: [ '\x1b[1~' , '\x1b[H' , '\x1bOH' ] ,
	END: [ '\x1b[4~' , '\x1b[F' , '\x1bOF' ] ,
	PAGE_UP: '\x1b[5~' ,
	PAGE_DOWN: '\x1b[6~' ,

	//CTRL_BACKSPACE: '\x08' ,
	CTRL_INSERT: '\x1b[2;5~' ,
	CTRL_DELETE: '\x1b[3;5~' ,
	CTRL_HOME: [ '\x1b[1;5~' , '\x1b[1;5H' ] ,
	CTRL_END: [ '\x1b[4;5~' , '\x1b[1;5F' ] ,
	CTRL_PAGE_UP: '\x1b[5;5~' ,
	CTRL_PAGE_DOWN: '\x1b[6;5~' ,

	SHIFT_INSERT: '\x1b[2;2~' ,
	SHIFT_DELETE: '\x1b[3;2~' ,
	SHIFT_HOME: [ '\x1b[1;2~' , '\x1b[1;2H' ] ,
	SHIFT_END: [ '\x1b[4;2~' , '\x1b[1;2F' ] ,
	SHIFT_PAGE_UP: '\x1b[5;2~' ,
	SHIFT_PAGE_DOWN: '\x1b[6;2~' ,

	ALT_BACKSPACE: [ '\x1b\x7f' , '\x1b\x08' ] ,
	ALT_INSERT: '\x1b[2;3~' ,
	ALT_DELETE: '\x1b[3;3~' ,
	ALT_HOME: [ '\x1b[1;3~' , '\x1b[1;3H' ] ,
	ALT_END: [ '\x1b[4;3~' , '\x1b[1;3F' ] ,
	ALT_PAGE_UP: '\x1b[5;3~' ,
	ALT_PAGE_DOWN: '\x1b[6;3~' ,

	// Application Keypad
	KP_NUMLOCK: [] ,	// '\x1bOP' ,
	KP_DIVIDE: '\x1bOo' ,
	KP_MULTIPLY: '\x1bOj' ,
	KP_MINUS: '\x1bOm' ,
	KP_0: [] ,	// '\x1b[2~' ,
	KP_1: [] ,	// '\x1bOF' ,
	KP_2: [] ,	// '\x1b[B' ,
	KP_3: [] ,	// '\x1b[6~' ,
	KP_4: [] ,	// '\x1b[D' ,
	KP_5: [ '\x1bOE' , '\x1b[E' ] ,
	KP_6: [] ,	// '\x1b[C' ,
	KP_7: [] ,	// '\x1bOH' ,
	KP_8: [] ,	// '\x1b[A' ,
	KP_9: [] ,	// '\x1b[5~' ,
	KP_PLUS: '\x1bOk' ,
	KP_DELETE: [] ,	// '\x1b[3~' ,
	KP_ENTER: '\x1bOM' ,

	F1: '\x1bOP' ,
	F2: '\x1bOQ' ,
	F3: '\x1bOR' ,
	F4: '\x1bOS' ,
	F5: '\x1b[15~' ,
	F6: '\x1b[17~' ,
	F7: '\x1b[18~' ,
	F8: '\x1b[19~' ,
	F9: '\x1b[20~' ,
	F10: '\x1b[21~' ,
	F11: [ '\x1b[23~' , '\x1b[22~' ] ,
	F12: '\x1b[24~' ,

	SHIFT_F1: [ '\x1bO1;2P' , '\x1bO2P' , '\x1b[1;2P' ] ,
	SHIFT_F2: [ '\x1bO1;2Q' , '\x1bO2Q' , '\x1b[1;2Q' ] ,
	SHIFT_F3: [ '\x1bO1;2R' , '\x1bO2R' , '\x1b[1;2R' ] ,
	SHIFT_F4: [ '\x1bO1;2S' , '\x1bO2S' , '\x1b[1;2S' ] ,
	SHIFT_F5: '\x1b[15;2~' ,
	SHIFT_F6: '\x1b[17;2~' ,
	SHIFT_F7: '\x1b[18;2~' ,
	SHIFT_F8: '\x1b[19;2~' ,
	SHIFT_F9: '\x1b[20;2~' ,
	SHIFT_F10: '\x1b[21;2~' ,
	SHIFT_F11: [ '\x1b[23;2~' , '\x1b[22;2~' ] ,
	SHIFT_F12: '\x1b[24;2~' ,

	CTRL_F1: [ '\x1bO1;5P' , '\x1bO5P' , '\x1b[1;5P' ] ,
	CTRL_F2: [ '\x1bO1;5Q' , '\x1bO5Q' , '\x1b[1;5Q' ] ,
	CTRL_F3: [ '\x1bO1;5R' , '\x1bO5R' /*, '\x1b[1;5R'*/ ] ,	// also used for cursor location response... :/
	CTRL_F4: [ '\x1bO1;5S' , '\x1bO5S' , '\x1b[1;5S' ] ,
	CTRL_F5: '\x1b[15;5~' ,
	CTRL_F6: '\x1b[17;5~' ,
	CTRL_F7: '\x1b[18;5~' ,
	CTRL_F8: '\x1b[19;5~' ,
	CTRL_F9: '\x1b[20;5~' ,
	CTRL_F10: '\x1b[21;5~' ,
	CTRL_F11: [ '\x1b[23;5~' , '\x1b[22;5~' ] ,
	CTRL_F12: '\x1b[24;5~' ,

	CTRL_SHIFT_F1: [ '\x1bO1;6P' , '\x1bO6P' , '\x1b[1;6P' ] ,
	CTRL_SHIFT_F2: [ '\x1bO1;6Q' , '\x1bO6Q' , '\x1b[1;6Q' ] ,
	CTRL_SHIFT_F3: [ '\x1bO1;6R' , '\x1bO6R' /*, '\x1b[1;6R'*/ ] ,	// also used for cursor location response... :/
	CTRL_SHIFT_F4: [ '\x1bO1;6S' , '\x1bO6S' , '\x1b[1;6S' ] ,
	CTRL_SHIFT_F5: '\x1b[15;6~' ,
	CTRL_SHIFT_F6: '\x1b[17;6~' ,
	CTRL_SHIFT_F7: '\x1b[18;6~' ,
	CTRL_SHIFT_F8: '\x1b[19;6~' ,
	CTRL_SHIFT_F9: '\x1b[20;6~' ,
	CTRL_SHIFT_F10: '\x1b[21;6~' ,
	CTRL_SHIFT_F11: [ '\x1b[23;6~' , '\x1b[22;6~' ] ,
	CTRL_SHIFT_F12: '\x1b[24;6~' ,

	NUL: '\x00' ,

	//CTRL_SPACE: '\x00' ,	// also NUL
	ALT_SPACE: '\x1b ' ,
	CTRL_ALT_SPACE: '\x1b\x00' ,

	CURSOR_LOCATION: {
		starter: '\x1b[' , ender: 'R' , event: 'terminal' , handler: 'cursorLocation'
	} ,
	SCREEN_SIZE: {
		starter: '\x1b[8;' , ender: 't' , event: 'terminal' , handler: 'screenSize'
	} ,
	COLOR_REGISTER: {
		starter: '\x1b]4;' , ender: '\x07' , altEnder: '\x1b\\' , event: 'terminal' , handler: 'colorRegister'
	} ,

	FOCUS_IN: { code: '\x1b[I' , event: 'terminal' , data: {} } ,
	FOCUS_OUT: { code: '\x1b[O' , event: 'terminal' , data: {} } ,

	CLIPBOARD: {
		starter: '\x1b]52;' , ender: '\x07' , altEnder: '\x1b\\' , accumulate: true , event: 'terminal' , handler: 'clipboard'
	} ,

	XTGETTCAP: {
		starter: '\x1bP1+r' , ender: '\x07' , altEnder: '\x1b\\' , event: 'terminal' , handler: 'xtgettcap'
	} ,
	XTGETTCAP_INVALID: {
		starter: '\x1bP0+r' , ender: '\x07' , altEnder: '\x1b\\' , event: 'terminal' , handler: 'xtgettcap'
	} ,

	TERMINAL_UNIT_ID: {
		starter: '\x1bP!|' , ender: '\x07' , altEnder: '\x1b\\' , event: 'terminal' , handler: 'terminalUnitId'
	} ,

	MOUSE: [
		{ code: '\x1b[<' , event: 'mouse' , handler: 'mouseSGRProtocol' } ,
		{ code: '\x1b[M' , event: 'mouse' , handler: 'mouseX11Protocol' }
	]
} ;



// Complete with Modifier + [A-Z]
for ( let i = 1 ; i <= 26 ; i ++ ) {
	keymap[ 'CTRL_' + String.fromCharCode( 64 + i ) ] = String.fromCharCode( i ) ;
	keymap[ 'ALT_' + String.fromCharCode( 64 + i ) ] = '\x1b' + String.fromCharCode( 96 + i ) ;
	keymap[ 'CTRL_ALT_' + String.fromCharCode( 64 + i ) ] = '\x1b' + String.fromCharCode( i ) ;
	keymap[ 'ALT_SHIFT_' + String.fromCharCode( 64 + i ) ] = '\x1b' + String.fromCharCode( 64 + i ) ;
}



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 12 )
} ;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var stringKit = {} ;
module.exports = stringKit ;



// Tier 0: add polyfills to stringKit
var fn_ ;
var polyfill = __webpack_require__( 49 ) ;

for ( fn_ in polyfill ) {
	stringKit[ fn_ ] = function( str , ... args ) {
		return polyfill[ fn_ ].call( str , ... args ) ;
	} ;
}



Object.assign( stringKit ,

	// Tier 1
	{ escape: __webpack_require__( 10 ) } ,
	{ ansi: __webpack_require__( 14 ) } ,
	{ unicode: __webpack_require__( 15 ) }
) ;



Object.assign( stringKit ,

	// Tier 2
	__webpack_require__( 50 ) ,

	// Tier 3
	__webpack_require__( 51 ) ,
	__webpack_require__( 16 ) ,
	__webpack_require__( 52 ) ,
	__webpack_require__( 53 ) ,
	{
		latinize: __webpack_require__( 54 ) ,
		toTitleCase: __webpack_require__( 56 ) ,
		wordwrap: __webpack_require__( 57 ) ,
		naturalSort: __webpack_require__( 23 ) ,
		fuzzy: __webpack_require__( 58 )
	}
) ;



// Install all polyfill into String.prototype
stringKit.installPolyfills = function installPolyfills() {
	var fn ;

	for ( fn in polyfill ) {
		if ( ! String.prototype[ fn ] ) {
			String.prototype[ fn ] = polyfill[ fn ] ;
		}
	}
} ;



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const termkit = {} ;
module.exports = termkit ;

const lazy = __webpack_require__( 46 )( !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()) ) ;



// Global config
termkit.globalConfig = {} ;



lazy.requireProperty( termkit , 'tty' , './tty.js' ) ;

// For some reason, starting from node v4, once process.stdin getter is triggered, the 'tty' command would not work properly.
// This 'hack' cache the result of the command 'tty' if we are in the linux console, so 'gpm' can work.
if ( process.env.TERM === 'linux' ) { termkit.tty.getPath() ; }



// Core submodules
Object.assign( termkit , __webpack_require__( 48 ) ) ;
Object.assign( termkit , __webpack_require__( 59 ) ) ;

termkit.Terminal = __webpack_require__( 70 ) ;
termkit.createTerminal = termkit.Terminal.create ;

// Windows patches
if ( process.platform === 'win32' ) { __webpack_require__( 97 )( termkit ) ; }



// Lazy submodules
lazy.requireProperties( termkit , {
	image: './image.js' ,
	Palette: './Palette.js' ,
	Rect: './Rect.js' ,
	ScreenBuffer: './ScreenBuffer.js' ,
	ScreenBufferHD: './ScreenBufferHD.js' ,
	TextBuffer: './TextBuffer.js' ,
	Vte: './vte/Vte.js' ,
	autoComplete: './autoComplete.js' ,
	spChars: './spChars.js' ,

	// Document model
	Element: './document/Element.js' ,
	Document: './document/Document.js' ,
	Container: './document/Container.js' ,
	Text: './document/Text.js' ,
	AnimatedText: './document/AnimatedText.js' ,
	Button: './document/Button.js' ,
	ToggleButton: './document/ToggleButton.js' ,
	TextBox: './document/TextBox.js' ,
	EditableTextBox: './document/EditableTextBox.js' ,
	Slider: './document/Slider.js' ,
	Bar: './document/Bar.js' ,
	LabeledInput: './document/LabeledInput.js' ,
	InlineInput: './document/InlineInput.js' ,
	Form: './document/Form.js' ,
	RowMenu: './document/RowMenu.js' ,
	ColumnMenu: './document/ColumnMenu.js' ,
	ColumnMenuMulti: './document/ColumnMenuMulti.js' ,
	SelectList: './document/SelectList.js' ,
	SelectListMulti: './document/SelectListMulti.js' ,
	DropDownMenu: './document/DropDownMenu.js' ,
	TextTable: './document/TextTable.js' ,
	Layout: './document/Layout.js' ,
	Window: './document/Window.js' ,

	// External modules
	chroma: 'chroma-js'
} ) ;



lazy.properties( termkit , {
	terminal: () => {
		var guessed = termkit.guessTerminal() ;
		return termkit.createTerminal( {
			stdin: process.stdin ,
			stdout: process.stdout ,
			stderr: process.stderr ,
			generic: guessed.generic || 'unknown' ,
			appId: guessed.safe ? guessed.appId : undefined ,
			//	appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: guessed.isTTY ,
			isSSH: guessed.isSSH ,
			processSigwinch: true ,
			preferProcessSigwinch: !! termkit.globalConfig.preferProcessSigwinch
		} ) ;
	} ,
	realTerminal: () => {
		var guessed = termkit.guessTerminal( true ) ;
		var input = termkit.tty.getInput() ;
		var output = termkit.tty.getOutput() ;

		return termkit.createTerminal( {
			stdin: input ,
			stdout: output ,
			stderr: process.stderr ,
			generic: guessed.generic || 'unknown' ,
			appId: guessed.safe ? guessed.appId : undefined ,
			//	appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: true ,
			isSSH: guessed.isSSH ,
			processSigwinch: true ,
			preferProcessSigwinch: !! termkit.globalConfig.preferProcessSigwinch
		} ) ;
	}
} , true ) ;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Next-Gen Events

	Copyright (c) 2015 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





// Some features needs a portable nextTick
const nextTick = process.browser ? window.setImmediate : process.nextTick ;



if ( ! global.__NEXTGEN_EVENTS__ ) {
	global.__NEXTGEN_EVENTS__ = {
		recursions: 0
	} ;
}

var globalData = global.__NEXTGEN_EVENTS__ ;



function NextGenEvents() {}
module.exports = NextGenEvents ;
NextGenEvents.prototype.__prototypeUID__ = 'nextgen-events/NextGenEvents' ;
NextGenEvents.prototype.__prototypeVersion__ = __webpack_require__( 79 ).version ;



/* Basic features, more or less compatible with Node.js */



NextGenEvents.SYNC = -Infinity ;
NextGenEvents.DESYNC = -1 ;

NextGenEvents.defaultMaxListeners = Infinity ;



// Not part of the prototype, because it should not pollute userland's prototype.
// It has an eventEmitter as 'this' anyway (always called using call()).
NextGenEvents.init = function() {
	Object.defineProperty( this , '__ngev' , {
		configurable: true ,
		value: new NextGenEvents.Internal()
	} ) ;
} ;



NextGenEvents.Internal = function( from ) {
	this.nice = NextGenEvents.SYNC ;
	this.interruptible = false ;
	this.contexts = {} ;
	this.desync = setImmediate ;
	this.depth = 0 ;

	// States by events
	this.states = {} ;

	// State groups by events
	this.stateGroups = {} ;

	// Listeners by events
	this.listeners = {
		// Special events
		error: [] ,
		interrupt: [] ,
		newListener: [] ,
		removeListener: []
	} ;

	this.hasListenerPriority = false ;
	this.maxListeners = NextGenEvents.defaultMaxListeners ;

	if ( from ) {
		this.nice = from.nice ;
		this.interruptible = from.interruptible ;
		Object.assign( this.states , from.states ) ,
		Object.assign( this.stateGroups , from.stateGroups ) ,

		Object.keys( from.listeners ).forEach( eventName => {
			this.listeners[ eventName ] = from.listeners[ eventName ].slice() ;
		} ) ;

		// Copy all contexts
		Object.keys( from.contexts ).forEach( contextName => {
			var context = from.contexts[ contextName ] ;
			this.contexts[ contextName ] = {
				nice: context.nice ,
				ready: true ,
				status: context.status ,
				serial: context.serial ,
				scopes: {}
			} ;
		} ) ;
	}
} ;



NextGenEvents.initFrom = function( from ) {
	if ( ! from.__ngev ) { NextGenEvents.init.call( from ) ; }

	Object.defineProperty( this , '__ngev' , {
		configurable: true ,
		value: new NextGenEvents.Internal( from.__ngev )
	} ) ;
} ;



/*
	Merge listeners of duplicated event bus:
		* listeners that are present locally but not in all foreigner are removed (one of the foreigner has removed it)
		* listeners that are not present locally but present in at least one foreigner are copied

	Not sure if it will ever go public, it was a very specific use-case (Spellcast).
*/
NextGenEvents.mergeListeners = function( foreigners ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	// Backup the current listeners...
	var oldListeners = this.__ngev.listeners ;


	// Reset listeners...
	this.__ngev.listeners = {} ;

	Object.keys( oldListeners ).forEach( eventName => {
		this.__ngev.listeners[ eventName ] = [] ;
	} ) ;

	foreigners.forEach( foreigner => {
		if ( ! foreigner.__ngev ) { NextGenEvents.init.call( foreigner ) ; }

		Object.keys( foreigner.__ngev.listeners ).forEach( eventName => {
			if ( ! this.__ngev.listeners[ eventName ] ) { this.__ngev.listeners[ eventName ] = [] ; }
		} ) ;
	} ) ;


	// Now we can scan by eventName first
	Object.keys( this.__ngev.listeners ).forEach( eventName => {
		var i , iMax , blacklist = [] ;

		// First pass: find all removed listeners and add them to the blacklist
		if ( oldListeners[ eventName ] ) {
			oldListeners[ eventName ].forEach( listener => {
				for ( i = 0 , iMax = foreigners.length ; i < iMax ; i ++ ) {
					if (
						! foreigners[ i ].__ngev.listeners[ eventName ] ||
						foreigners[ i ].__ngev.listeners[ eventName ].indexOf( listener ) === -1
					) {
						blacklist.push( listener ) ;
						break ;
					}
				}
			} ) ;
		}

		// Second pass: add all listeners still not present and that are not blacklisted
		foreigners.forEach( foreigner => {

			foreigner.__ngev.listeners[ eventName ].forEach( listener => {
				if ( this.__ngev.listeners[ eventName ].indexOf( listener ) === -1 && blacklist.indexOf( listener ) === -1 ) {
					this.__ngev.listeners[ eventName ].push( listener ) ;
				}
			} ) ;
		} ) ;
	} ) ;
} ;



// Use it with .bind()
NextGenEvents.filterOutCallback = function( what , currentElement ) { return what !== currentElement ; } ;



// .addListener( eventName , [fn] , [options] )
NextGenEvents.prototype.addListener = function( eventName , fn , options ) {
	var listener , newListenerListeners ;

	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! this.__ngev.listeners[ eventName ] ) { this.__ngev.listeners[ eventName ] = [] ; }

	// Argument management
	if ( ! eventName || typeof eventName !== 'string' ) {
		throw new TypeError( ".addListener(): argument #0 should be a non-empty string" ) ;
	}

	if ( typeof fn === 'function' ) {
		listener = {} ;

		if ( ! options || typeof options !== 'object' ) { options = {} ; }
	}
	else if ( options === true && fn && typeof fn === 'object' ) {
		// We want to use the current object as the listener object (used by Spellcast's serializer)
		options = listener = fn ;
		fn = undefined ;
	}
	else {
		options = fn ;

		if ( ! options || typeof options !== 'object' ) {
			throw new TypeError( ".addListener(): a function or an object with a 'fn' property which value is a function should be provided" ) ;
		}

		fn = undefined ;
		listener = {} ;
	}


	listener.fn = fn || options.fn ;
	listener.id = options.id !== undefined ? options.id : listener.fn ;
	listener.once = !! options.once ;
	listener.async = !! options.async ;
	listener.eventObject = !! options.eventObject ;
	listener.nice = options.nice !== undefined ? Math.floor( options.nice ) : NextGenEvents.SYNC ;
	listener.priority = + options.priority || 0 ;
	listener.context = options.context && ( typeof options.context === 'string' || typeof options.context === 'object' ) ? options.context : null ;

	if ( typeof listener.fn !== 'function' ) {
		throw new TypeError( ".addListener(): a function or an object with a 'fn' property which value is a function should be provided" ) ;
	}

	// Implicit context creation
	if ( typeof listener.context === 'string' ) {
		listener.context = this.__ngev.contexts[ listener.context ] || this.addListenerContext( listener.context ) ;
	}

	// Note: 'newListener' and 'removeListener' event return an array of listener, but not the event name.
	// So the event's name can be retrieved in the listener itself.
	listener.event = eventName ;

	if ( this.__ngev.listeners.newListener.length ) {
		// Extra care should be taken with the 'newListener' event, we should avoid recursion
		// in the case that eventName === 'newListener', but inside a 'newListener' listener,
		// .listenerCount() should report correctly
		newListenerListeners = this.__ngev.listeners.newListener.slice() ;

		this.__ngev.listeners[ eventName ].push( listener ) ;

		// Return an array, because one day, .addListener() may support multiple event addition at once,
		// e.g.: .addListener( { request: onRequest, close: onClose, error: onError } ) ;
		NextGenEvents.emitEvent( {
			emitter: this ,
			name: 'newListener' ,
			args: [ [ listener ] ] ,
			listeners: newListenerListeners
		} ) ;

		if ( this.__ngev.states[ eventName ] ) { NextGenEvents.emitToOneListener( this.__ngev.states[ eventName ] , listener ) ; }

		return this ;
	}

	this.__ngev.listeners[ eventName ].push( listener ) ;

	if ( this.__ngev.hasListenerPriority ) {
		// order higher priority first
		this.__ngev.listeners[ eventName ].sort( ( a , b ) => b.priority - a.priority ) ;
	}

	if ( this.__ngev.listeners[ eventName ].length === this.__ngev.maxListeners + 1 ) {
		process.emitWarning(
			"Possible NextGenEvents memory leak detected. " + this.__ngev.listeners[ eventName ].length + ' ' +
			eventName + " listeners added. Use emitter.setMaxListeners() to increase limit" ,
			{ type: "MaxListenersExceededWarning" }
		) ;
	}

	if ( this.__ngev.states[ eventName ] ) { NextGenEvents.emitToOneListener( this.__ngev.states[ eventName ] , listener ) ; }

	return this ;
} ;

NextGenEvents.prototype.on = NextGenEvents.prototype.addListener ;



// Short-hand
// .once( eventName , [fn] , [options] )
NextGenEvents.prototype.once = function( eventName , fn , options ) {
	if ( fn && typeof fn === 'object' ) { fn.once = true ; }
	else if ( options && typeof options === 'object' ) { options.once = true ; }
	else { options = { once: true } ; }

	return this.addListener( eventName , fn , options ) ;
} ;



// .waitFor( eventName )
// A Promise-returning .once() variant, only the first arg is returned
NextGenEvents.prototype.waitFor = function( eventName ) {
	return new Promise( resolve => {
		this.addListener( eventName , ( firstArg ) => resolve( firstArg ) , { once: true } ) ;
	} ) ;
} ;



// .waitForAll( eventName )
// A Promise-returning .once() variant, all args are returned as an array
NextGenEvents.prototype.waitForAll = function( eventName ) {
	return new Promise( resolve => {
		this.addListener( eventName , ( ... args ) => resolve( args ) , { once: true } ) ;
	} ) ;
} ;



NextGenEvents.prototype.removeListener = function( eventName , id ) {
	if ( ! eventName || typeof eventName !== 'string' ) { throw new TypeError( ".removeListener(): argument #0 should be a non-empty string" ) ; }

	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	var listeners = this.__ngev.listeners[ eventName ] ;
	if ( ! listeners || ! listeners.length ) { return this ; }

	var i , removedListeners , removeCount = 0 ,
		length = listeners.length ,
		hasRemoveListener = this.__ngev.listeners.removeListener.length ;

	if ( hasRemoveListener ) { removedListeners = [] ; }

	// In-place remove (from the listener array)
	for ( i = 0 ; i < length ; i ++ ) {
		if ( listeners[ i ].id === id ) {
			removeCount ++ ;
			if ( hasRemoveListener ) { removedListeners.push( listeners[ i ] ) ; }
		}
		else if ( removeCount ) {
			listeners[ i - removeCount ] = listeners[ i ] ;
		}
	}

	// Adjust the length
	if ( removeCount ) { listeners.length -= removeCount ; }

	if ( hasRemoveListener && removedListeners.length ) {
		this.emit( 'removeListener' , removedListeners ) ;
	}

	return this ;
} ;

NextGenEvents.prototype.off = NextGenEvents.prototype.removeListener ;



NextGenEvents.prototype.removeAllListeners = function( eventName ) {
	var removedListeners ;

	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	if ( eventName ) {
		// Remove all listeners for a particular event

		if ( ! eventName || typeof eventName !== 'string' ) { throw new TypeError( ".removeAllListeners(): argument #0 should be undefined or a non-empty string" ) ; }

		if ( ! this.__ngev.listeners[ eventName ] ) { this.__ngev.listeners[ eventName ] = [] ; }

		removedListeners = this.__ngev.listeners[ eventName ] ;
		this.__ngev.listeners[ eventName ] = [] ;

		if ( removedListeners.length && this.__ngev.listeners.removeListener.length ) {
			this.emit( 'removeListener' , removedListeners ) ;
		}
	}
	else {
		// Remove all listeners for any events
		// 'removeListener' listeners cannot be triggered: they are already deleted
		this.__ngev.listeners = {
			// Special events
			error: [] ,
			interrupt: [] ,
			newListener: [] ,
			removeListener: []
		} ;
	}

	return this ;
} ;



NextGenEvents.listenerWrapper = function( listener , event , contextScope , serial , nice ) {
	var returnValue , listenerCallback ,
		eventMaster = event.master || event ,
		interruptible = !! event.master || event.emitter.__ngev.interruptible ;

	if ( eventMaster.interrupt ) { return ; }

	if ( listener.async ) {
		if ( contextScope ) {
			contextScope.ready = ! serial ;
		}

		if ( nice < 0 ) {
			if ( globalData.recursions >= -nice ) {
				event.emitter.__ngev.desync( NextGenEvents.listenerWrapper.bind( undefined , listener , event , contextScope , serial , NextGenEvents.SYNC ) ) ;
				return ;
			}
		}
		else {
			setTimeout( NextGenEvents.listenerWrapper.bind( undefined , listener , event , contextScope , serial , NextGenEvents.SYNC ) , nice ) ;
			return ;
		}

		listenerCallback = ( arg ) => {

			eventMaster.listenersDone ++ ;

			// Async interrupt
			if ( arg && interruptible && ! eventMaster.interrupt && event.name !== 'interrupt' ) {
				eventMaster.interrupt = arg ;

				if ( eventMaster.callback ) { NextGenEvents.emitCallback( event ) ; }

				event.emitter.emit( 'interrupt' , eventMaster.interrupt ) ;
			}
			else if ( eventMaster.listenersDone >= eventMaster.listeners.length && eventMaster.callback ) {
				NextGenEvents.emitCallback( event ) ;
			}

			// Process the queue if serialized
			if ( serial ) { NextGenEvents.processScopeQueue( contextScope , true , true ) ; }
		} ;

		if ( listener.eventObject ) { listener.fn( event , listenerCallback ) ; }
		else { returnValue = listener.fn( ... event.args , listenerCallback ) ; }
	}
	else {
		if ( nice < 0 ) {
			if ( globalData.recursions >= -nice ) {
				event.emitter.__ngev.desync( NextGenEvents.listenerWrapper.bind( undefined , listener , event , contextScope , serial , NextGenEvents.SYNC ) ) ;
				return ;
			}
		}
		else {
			setTimeout( NextGenEvents.listenerWrapper.bind( undefined , listener , event , contextScope , serial , NextGenEvents.SYNC ) , nice ) ;
			return ;
		}

		if ( listener.eventObject ) { listener.fn( event ) ; }
		else { returnValue = listener.fn( ... event.args ) ; }

		eventMaster.listenersDone ++ ;
	}

	// Interrupt if non-falsy return value, if the emitter is interruptible, not already interrupted (emit once),
	// and not within an 'interrupt' event.
	if ( returnValue && interruptible && ! eventMaster.interrupt && event.name !== 'interrupt' ) {
		eventMaster.interrupt = returnValue ;

		if ( eventMaster.callback ) { NextGenEvents.emitCallback( event ) ; }

		event.emitter.emit( 'interrupt' , eventMaster.interrupt ) ;
	}
	else if ( eventMaster.listenersDone >= eventMaster.listeners.length && eventMaster.callback ) {
		NextGenEvents.emitCallback( event ) ;
	}
} ;



// A unique event ID
var nextEventId = 0 ;



/*
	emit( [nice] , eventName , [arg1] , [arg2] , [...] , [emitCallback] )
*/
NextGenEvents.prototype.emit = function( ... args ) {
	var event = NextGenEvents.createEvent( this , ... args ) ;
	return NextGenEvents.emitEvent( event ) ;
} ;



// For performance, do not emit if there is no listener for that event,
// do not even return an Event object, do not throw if the event name is error,
// or whatever the .emit() process could do when there is no listener.
NextGenEvents.prototype.emitIfListener = function( ... args ) {
	var eventName = typeof args[ 0 ] === 'number' ? args[ 1 ] : args[ 0 ] ;
	if ( ! this.__ngev || ! this.__ngev.listeners[ eventName ] || ! this.__ngev.listeners[ eventName ].length ) { return null ; }
	var event = NextGenEvents.createEvent( this , ... args ) ;
	return NextGenEvents.emitEvent( event ) ;
} ;



NextGenEvents.prototype.waitForEmit = function( ... args ) {
	return new Promise( resolve => {
		this.emit( ... args , ( interrupt ) => resolve( interrupt ) ) ;
	} ) ;
} ;



// Create an event object
NextGenEvents.createEvent = function( emitter , ... args ) {
	var event = {
		emitter: emitter ,
		interrupt: null ,
		master: null ,	// For grouped-correlated events
		sync: true
	} ;

	// Arguments handling
	if ( typeof args[ 0 ] === 'number' ) {
		event.nice = Math.floor( args[ 0 ] ) ;
		event.name = args[ 1 ] ;

		if ( ! event.name || typeof event.name !== 'string' ) {
			throw new TypeError( ".emit(): when argument #0 is a number, argument #1 should be a non-empty string" ) ;
		}

		if ( typeof args[ args.length - 1 ] === 'function' ) {
			event.callback = args[ args.length - 1 ] ;
			event.args = args.slice( 2 , -1 ) ;
		}
		else {
			event.args = args.slice( 2 ) ;
		}
	}
	else {
		//event.nice = emitter.__ngev.nice ;
		event.name = args[ 0 ] ;

		if ( ! event.name || typeof event.name !== 'string' ) {
			throw new TypeError( ".emit(): argument #0 should be an number or a non-empty string" ) ;
		}

		if ( typeof args[ args.length - 1 ] === 'function' ) {
			event.callback = args[ args.length - 1 ] ;
			event.args = args.slice( 1 , -1 ) ;
		}
		else {
			event.args = args.slice( 1 ) ;
		}
	}

	return event ;
} ;



/*
	At this stage, 'event' should be an object having those properties:
		* emitter: the event emitter
		* name: the event name
		* args: array, the arguments of the event
		* nice: (optional) nice value
		* callback: (optional) a callback for emit
		* listeners: (optional) override the listeners array stored in __ngev
*/
NextGenEvents.emitEvent = function( event ) {
	// /!\ Any change here *MUST* be reflected to NextGenEvents.emitIntricatedEvents() /!\
	var self = event.emitter ,
		i , iMax , count = 0 , state , removedListeners ;

	if ( ! self.__ngev ) { NextGenEvents.init.call( self ) ; }

	state = self.__ngev.states[ event.name ] ;

	// This is a state event, register it now!
	if ( state !== undefined ) {
		if ( state && event.args.length === state.args.length &&
			event.args.every( ( arg , index ) => arg === state.args[ index ] ) ) {
			// The emitter is already in this exact state, skip it now!
			return ;
		}

		// Unset all states of that group
		self.__ngev.stateGroups[ event.name ].forEach( ( eventName ) => {
			self.__ngev.states[ eventName ] = null ;
		} ) ;

		self.__ngev.states[ event.name ] = event ;
	}

	if ( ! self.__ngev.listeners[ event.name ] ) { self.__ngev.listeners[ event.name ] = [] ; }

	event.id = nextEventId ++ ;
	event.listenersDone = 0 ;

	if ( event.nice === undefined || event.nice === null ) { event.nice = self.__ngev.nice ; }

	// Trouble arise when a listener is removed from another listener, while we are still in the loop.
	// So we have to COPY the listener array right now!
	if ( ! event.listeners ) { event.listeners = self.__ngev.listeners[ event.name ].slice() ; }

	// Increment globalData.recursions
	globalData.recursions ++ ;
	event.depth = self.__ngev.depth ++ ;
	removedListeners = [] ;

	try {
		// Emit the event to all listeners!
		for ( i = 0 , iMax = event.listeners.length ; i < iMax ; i ++ ) {
			count ++ ;
			NextGenEvents.emitToOneListener( event , event.listeners[ i ] , removedListeners ) ;
		}
	}
	catch ( error ) {
		// Catch error, just to decrement globalData.recursions, re-throw after that...
		globalData.recursions -- ;
		self.__ngev.depth -- ;
		throw error ;
	}

	// Decrement globalData.recursions
	globalData.recursions -- ;
	if ( ! event.callback ) { self.__ngev.depth -- ; }

	// Emit 'removeListener' after calling listeners
	if ( removedListeners.length && self.__ngev.listeners.removeListener.length ) {
		self.emit( 'removeListener' , removedListeners ) ;
	}


	// 'error' event is a special case: it should be listened for, or it will throw an error
	if ( ! count ) {
		if ( event.name === 'error' ) {
			if ( event.args[ 0 ] ) { throw event.args[ 0 ] ; }
			else { throw Error( "Uncaught, unspecified 'error' event." ) ; }
		}

		if ( event.callback ) { NextGenEvents.emitCallback( event ) ; }
	}

	// Leaving sync mode
	event.sync = false ;

	return event ;
} ;



/*
	Spellcast-specific:
	Send interruptible events with listener-priority across multiple emitters.
	If an event is interrupted, all event are interrupted too.
	It has limited feature-support: no state-event, no builtin-event (not even 'error').
*/
NextGenEvents.emitIntricatedEvents = function( array , callback ) {
	var i , iMax , count = 0 , removedListeners ;

	if ( ! Array.isArray( array ) ) {
		throw new TypeError( '.emitCorrelatedEvents() argument should be an array' ) ;
	}

	var listenerEventRows = [] ,
		context = {
			nice: NextGenEvents.DESYNC ,
			ready: true ,
			status: NextGenEvents.CONTEXT_ENABLED ,
			serial: true ,
			scopes: {}
		} ,
		master = {
			sync: false ,
			nice: NextGenEvents.DESYNC ,
			context ,
			interrupt: null ,
			listeners: listenerEventRows ,	// because we need eventMaster.listeners.length
			listenersDone: 0 ,
			depth: 0 ,
			callback
		} ;

	array.forEach( eventParams => {
		var event = NextGenEvents.createEvent( ... eventParams ) ;
		event.master = master ;

		if ( ! event.emitter.__ngev ) { NextGenEvents.init.call( event.emitter ) ; }

		if ( ! event.emitter.__ngev.listeners[ event.name ] ) { event.emitter.__ngev.listeners[ event.name ] = [] ; }
		event.listeners = event.emitter.__ngev.listeners[ event.name ].slice() ;

		event.id = nextEventId ++ ;
		//event.listenersDone = 0 ;
		//event.nice = master.nice ;

		event.listeners.forEach( listener => listenerEventRows.push( { event , listener } ) ) ;
	} ) ;


	// Sort listeners
	listenerEventRows.sort( ( a , b ) => b.listener.priority - a.listener.priority ) ;

	// Increment globalData.recursions
	globalData.recursions ++ ;

	removedListeners = [] ;

	try {
		// Emit the event to all listeners!
		for ( i = 0 , iMax = listenerEventRows.length ; i < iMax ; i ++ ) {
			count ++ ;
			NextGenEvents.emitToOneListener( listenerEventRows[ i ].event , listenerEventRows[ i ].listener , removedListeners ) ;
		}
	}
	catch ( error ) {
		// Catch error, just to decrement globalData.recursions, re-throw after that...
		globalData.recursions -- ;
		throw error ;
	}

	// Decrement globalData.recursions
	globalData.recursions -- ;

	if ( ! count && master.callback ) { NextGenEvents.emitCallback( event ) ; }

	// Leaving sync mode
	master.sync = false ;
} ;



// If removedListeners is not given, then one-time listener emit the 'removeListener' event,
// if given: that's the caller business to do it
NextGenEvents.emitToOneListener = function( event , listener , removedListeners ) {
	var self = event.emitter ,
		eventMaster = event.master || event ,
		context = event.master ? event.master.context : listener.context ,
		contextScope , serial , currentNice , emitRemoveListener = false ;

	if ( context ) {
		// If the listener context is disabled...
		if ( context.status === NextGenEvents.CONTEXT_DISABLED ) { return ; }

		// The nice value for this listener...
		currentNice = Math.max( eventMaster.nice , listener.nice , context.nice ) ;
		serial = context.serial ;
		contextScope = NextGenEvents.getContextScope( context , eventMaster.depth ) ;
	}
	else {
		currentNice = Math.max( eventMaster.nice , listener.nice ) ;
	}


	if ( listener.once ) {
		// We should remove the current listener RIGHT NOW because of recursive .emit() issues:
		// one listener may eventually fire this very same event synchronously during the current loop.
		self.__ngev.listeners[ event.name ] = self.__ngev.listeners[ event.name ].filter(
			NextGenEvents.filterOutCallback.bind( undefined , listener )
		) ;

		if ( removedListeners ) { removedListeners.push( listener ) ; }
		else { emitRemoveListener = true ; }
	}

	if ( context && ( context.status === NextGenEvents.CONTEXT_QUEUED || ! contextScope.ready ) ) {
		// Almost all works should be done by .emit(), and little few should be done by .processScopeQueue()
		contextScope.queue.push( { event: event , listener: listener , nice: currentNice } ) ;
	}
	else {
		NextGenEvents.listenerWrapper( listener , event , contextScope , serial , currentNice ) ;
	}

	// Emit 'removeListener' after calling the listener
	if ( emitRemoveListener && self.__ngev.listeners.removeListener.length ) {
		self.emit( 'removeListener' , [ listener ] ) ;
	}
} ;



NextGenEvents.emitCallback = function( event ) {
	var callback ;

	if ( event.master ) {
		callback = event.master.callback ;
		delete event.master.callback ;

		if ( event.master.sync ) {
			nextTick( () => callback( event.master.interrupt , event ) ) ;
		}
		else {
			callback( event.master.interrupt , event ) ;
		}

		return ;
	}

	callback = event.callback ;
	delete event.callback ;

	if ( event.sync && event.emitter.__ngev.nice !== NextGenEvents.SYNC ) {
		// Force desync if global nice value is not SYNC
		event.emitter.__ngev.desync( () => {
			event.emitter.__ngev.depth -- ;
			callback( event.interrupt , event ) ;
		} ) ;
	}
	else {
		event.emitter.__ngev.depth -- ;
		callback( event.interrupt , event ) ;
	}
} ;



NextGenEvents.prototype.listeners = function( eventName ) {
	if ( ! eventName || typeof eventName !== 'string' ) { throw new TypeError( ".listeners(): argument #0 should be a non-empty string" ) ; }

	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! this.__ngev.listeners[ eventName ] ) { this.__ngev.listeners[ eventName ] = [] ; }

	// Do not return the array, shallow copy it
	return this.__ngev.listeners[ eventName ].slice() ;
} ;



NextGenEvents.listenerCount = function( emitter , eventName ) {
	if ( ! emitter || ! ( emitter instanceof NextGenEvents ) ) { throw new TypeError( ".listenerCount(): argument #0 should be an instance of NextGenEvents" ) ; }
	return emitter.listenerCount( eventName ) ;
} ;



NextGenEvents.prototype.listenerCount = function( eventName ) {
	if ( ! eventName || typeof eventName !== 'string' ) { throw new TypeError( ".listenerCount(): argument #1 should be a non-empty string" ) ; }
	if ( ! this.__ngev || ! this.__ngev.listeners[ eventName ] ) { return 0 ; }
	return this.__ngev.listeners[ eventName ].length ;
} ;



NextGenEvents.prototype.setNice = function( nice ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	this.__ngev.nice = Math.floor( + nice || 0 ) ;
} ;



NextGenEvents.prototype.desyncUseNextTick = function( useNextTick ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	this.__ngev.desync = useNextTick ? nextTick : setImmediate ;
} ;



NextGenEvents.prototype.setInterruptible = function( isInterruptible ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	this.__ngev.interruptible = !! isInterruptible ;
} ;



NextGenEvents.prototype.setListenerPriority = function( hasListenerPriority ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	this.__ngev.hasListenerPriority = !! hasListenerPriority ;
} ;



// Make two objects share the same event bus
NextGenEvents.share = function( source , target ) {
	if ( ! ( source instanceof NextGenEvents ) || ! ( target instanceof NextGenEvents ) ) {
		throw new TypeError( 'NextGenEvents.share() arguments should be instances of NextGenEvents' ) ;
	}

	if ( ! source.__ngev ) { NextGenEvents.init.call( source ) ; }

	Object.defineProperty( target , '__ngev' , {
		configurable: true ,
		value: source.__ngev
	} ) ;
} ;



NextGenEvents.reset = function( emitter ) {
	Object.defineProperty( emitter , '__ngev' , {
		configurable: true ,
		value: null
	} ) ;
} ;



NextGenEvents.prototype.getMaxListeners = function() {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	return this.__ngev.maxListeners ;
} ;



NextGenEvents.prototype.setMaxListeners = function( n ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	this.__ngev.maxListeners = typeof n === 'number' && ! Number.isNaN( n ) ? Math.floor( n ) : NextGenEvents.defaultMaxListeners ;
	return this ;
} ;



// Sometime useful as a no-op callback...
NextGenEvents.noop = () => undefined ;





/* Next Gen feature: states! */



// .defineStates( exclusiveState1 , [exclusiveState2] , [exclusiveState3] , ... )
NextGenEvents.prototype.defineStates = function( ... states ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	states.forEach( ( state ) => {
		this.__ngev.states[ state ] = null ;
		this.__ngev.stateGroups[ state ] = states ;
	} ) ;
} ;



NextGenEvents.prototype.hasState = function( state ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	return !! this.__ngev.states[ state ] ;
} ;



NextGenEvents.prototype.getAllStates = function() {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	return Object.keys( this.__ngev.states ).filter( e => this.__ngev.states[ e ] ) ;
} ;





/* Next Gen feature: groups! */



NextGenEvents.groupAddListener = function( emitters , eventName , fn , options ) {
	// Manage arguments
	if ( typeof fn !== 'function' ) { options = fn ; fn = undefined ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	fn = fn || options.fn ;
	delete options.fn ;

	// Preserve the listener ID, so groupRemoveListener() will work as expected
	options.id = options.id || fn ;

	emitters.forEach( ( emitter ) => {
		emitter.addListener( eventName , fn.bind( undefined , emitter ) , options ) ;
	} ) ;
} ;

NextGenEvents.groupOn = NextGenEvents.groupAddListener ;



// Once per emitter
NextGenEvents.groupOnce = function( emitters , eventName , fn , options ) {
	if ( fn && typeof fn === 'object' ) { fn.once = true ; }
	else if ( options && typeof options === 'object' ) { options.once = true ; }
	else { options = { once: true } ; }

	return this.groupAddListener( emitters , eventName , fn , options ) ;
} ;



// A Promise-returning .groupOnce() variant, it returns an array with only the first arg for each emitter's event
NextGenEvents.groupWaitFor = function( emitters , eventName ) {
	return Promise.all( emitters.map( emitter => emitter.waitFor( eventName ) ) ) ;
} ;



// A Promise-returning .groupOnce() variant, it returns an array of array for each emitter's event
NextGenEvents.groupWaitForAll = function( emitters , eventName ) {
	return Promise.all( emitters.map( emitter => emitter.waitForAll( eventName ) ) ) ;
} ;



// Globally once, only one event could be emitted, by the first emitter to emit
NextGenEvents.groupOnceFirst = function( emitters , eventName , fn , options ) {
	var fnWrapper , triggered = false ;

	// Manage arguments
	if ( typeof fn !== 'function' ) { options = fn ; fn = undefined ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	fn = fn || options.fn ;
	delete options.fn ;

	// Preserve the listener ID, so groupRemoveListener() will work as expected
	options.id = options.id || fn ;

	fnWrapper = ( ... args ) => {
		if ( triggered ) { return ; }
		triggered = true ;
		NextGenEvents.groupRemoveListener( emitters , eventName , options.id ) ;
		fn( ... args ) ;
	} ;

	emitters.forEach( ( emitter ) => {
		emitter.once( eventName , fnWrapper.bind( undefined , emitter ) , options ) ;
	} ) ;
} ;



// A Promise-returning .groupOnceFirst() variant, only the first arg is returned
NextGenEvents.groupWaitForFirst = function( emitters , eventName ) {
	return new Promise( resolve => {
		NextGenEvents.groupOnceFirst( emitters , eventName , ( firstArg ) => resolve( firstArg ) ) ;
	} ) ;
} ;



// A Promise-returning .groupOnceFirst() variant, all args are returned as an array
NextGenEvents.groupWaitForFirstAll = function( emitters , eventName ) {
	return new Promise( resolve => {
		NextGenEvents.groupOnceFirst( emitters , eventName , ( ... args ) => resolve( args ) ) ;
	} ) ;
} ;



// Globally once, only one event could be emitted, by the last emitter to emit
NextGenEvents.groupOnceLast = function( emitters , eventName , fn , options ) {
	var fnWrapper , triggered = false , count = emitters.length ;

	// Manage arguments
	if ( typeof fn !== 'function' ) { options = fn ; fn = undefined ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	fn = fn || options.fn ;
	delete options.fn ;

	// Preserve the listener ID, so groupRemoveListener() will work as expected
	options.id = options.id || fn ;

	fnWrapper = ( ... args ) => {
		if ( triggered ) { return ; }
		if ( -- count ) { return ; }

		// So this is the last emitter...

		triggered = true ;
		// No need to remove listeners: there are already removed anyway
		//NextGenEvents.groupRemoveListener( emitters , eventName , options.id ) ;
		fn( ... args ) ;
	} ;

	emitters.forEach( ( emitter ) => {
		emitter.once( eventName , fnWrapper.bind( undefined , emitter ) , options ) ;
	} ) ;
} ;



// A Promise-returning .groupGlobalWaitFor() variant, only the first arg is returned
NextGenEvents.groupWaitForLast = function( emitters , eventName ) {
	return new Promise( resolve => {
		NextGenEvents.groupOnceLast( emitters , eventName , ( firstArg ) => resolve( firstArg ) ) ;
	} ) ;
} ;



// A Promise-returning .groupGlobalWaitFor() variant, all args are returned as an array
NextGenEvents.groupWaitForLastAll = function( emitters , eventName ) {
	return new Promise( resolve => {
		NextGenEvents.groupOnceLast( emitters , eventName , ( ... args ) => resolve( args ) ) ;
	} ) ;
} ;



NextGenEvents.groupRemoveListener = function( emitters , eventName , id ) {
	emitters.forEach( ( emitter ) => {
		emitter.removeListener( eventName , id ) ;
	} ) ;
} ;

NextGenEvents.groupOff = NextGenEvents.groupRemoveListener ;



NextGenEvents.groupRemoveAllListeners = function( emitters , eventName ) {
	emitters.forEach( ( emitter ) => {
		emitter.removeAllListeners( eventName ) ;
	} ) ;
} ;



NextGenEvents.groupEmit = function( emitters , ... args ) {
	var eventName , nice , argStart = 1 , argEnd , count = emitters.length ,
		callback , callbackWrapper , callbackTriggered = false ;

	if ( typeof args[ args.length - 1 ] === 'function' ) {
		argEnd = -1 ;
		callback = args[ args.length - 1 ] ;

		callbackWrapper = ( interruption ) => {
			if ( callbackTriggered ) { return ; }

			if ( interruption ) {
				callbackTriggered = true ;
				callback( interruption ) ;
			}
			else if ( ! -- count ) {
				callbackTriggered = true ;
				callback() ;
			}
		} ;
	}

	if ( typeof args[ 0 ] === 'number' ) {
		argStart = 2 ;
		nice = typeof args[ 0 ] ;
	}

	eventName = args[ argStart - 1 ] ;
	args = args.slice( argStart , argEnd ) ;

	emitters.forEach( ( emitter ) => {
		NextGenEvents.emitEvent( {
			emitter: emitter ,
			name: eventName ,
			args: args ,
			nice: nice ,
			callback: callbackWrapper
		} ) ;
	} ) ;
} ;



NextGenEvents.groupWaitForEmit = function( emitters , ... args ) {
	return new Promise( resolve => {
		NextGenEvents.groupEmit( emitters , ... args , ( interrupt ) => resolve( interrupt ) ) ;
	} ) ;
} ;



NextGenEvents.groupDefineStates = function( emitters , ... args ) {
	emitters.forEach( ( emitter ) => {
		emitter.defineStates( ... args ) ;
	} ) ;
} ;



// Bad names, but since they make their way through the API documentation,
// it should be kept for backward compatibility, but they are DEPRECATED.
NextGenEvents.groupGlobalOnce = NextGenEvents.groupOnceFirst ;
NextGenEvents.groupGlobalOnceAll = NextGenEvents.groupOnceLast ;





/* Next Gen feature: contexts! */



NextGenEvents.CONTEXT_ENABLED = 0 ;
NextGenEvents.CONTEXT_DISABLED = 1 ;
NextGenEvents.CONTEXT_QUEUED = 2 ;



NextGenEvents.prototype.addListenerContext = function( contextName , options ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".addListenerContext(): argument #0 should be a non-empty string" ) ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	var context = this.__ngev.contexts[ contextName ] ;

	if ( ! context ) {
		context = this.__ngev.contexts[ contextName ] = {
			nice: NextGenEvents.SYNC ,
			ready: true ,
			status: NextGenEvents.CONTEXT_ENABLED ,
			serial: false ,
			scopes: {}
		} ;
	}

	if ( options.nice !== undefined ) { context.nice = Math.floor( options.nice ) ; }
	if ( options.status !== undefined ) { context.status = options.status ; }
	if ( options.serial !== undefined ) { context.serial = !! options.serial ; }

	return context ;
} ;



NextGenEvents.prototype.getListenerContext = function( contextName ) {
	return this.__ngev.contexts[ contextName ] ;
} ;



NextGenEvents.getContextScope = function( context , scopeName ) {
	var scope = context.scopes[ scopeName ] ;

	if ( ! scope ) {
		scope = context.scopes[ scopeName ] = {
			ready: true ,
			queue: []
		} ;
	}

	return scope ;
} ;



NextGenEvents.prototype.disableListenerContext = function( contextName ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".disableListenerContext(): argument #0 should be a non-empty string" ) ; }
	if ( ! this.__ngev.contexts[ contextName ] ) { this.addListenerContext( contextName ) ; }

	this.__ngev.contexts[ contextName ].status = NextGenEvents.CONTEXT_DISABLED ;

	return this ;
} ;



NextGenEvents.prototype.enableListenerContext = function( contextName ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".enableListenerContext(): argument #0 should be a non-empty string" ) ; }
	if ( ! this.__ngev.contexts[ contextName ] ) { this.addListenerContext( contextName ) ; }

	var context = this.__ngev.contexts[ contextName ] ;

	context.status = NextGenEvents.CONTEXT_ENABLED ;

	Object.values( context.scopes ).forEach( contextScope => {
		if ( contextScope.queue.length > 0 ) { NextGenEvents.processScopeQueue( contextScope , context.serial ) ; }
	} ) ;

	return this ;
} ;



NextGenEvents.prototype.queueListenerContext = function( contextName ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".queueListenerContext(): argument #0 should be a non-empty string" ) ; }
	if ( ! this.__ngev.contexts[ contextName ] ) { this.addListenerContext( contextName ) ; }

	this.__ngev.contexts[ contextName ].status = NextGenEvents.CONTEXT_QUEUED ;

	return this ;
} ;



NextGenEvents.prototype.serializeListenerContext = function( contextName , value ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".serializeListenerContext(): argument #0 should be a non-empty string" ) ; }
	if ( ! this.__ngev.contexts[ contextName ] ) { this.addListenerContext( contextName ) ; }

	this.__ngev.contexts[ contextName ].serial = value === undefined ? true : !! value ;

	return this ;
} ;



NextGenEvents.prototype.setListenerContextNice = function( contextName , nice ) {
	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }
	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".setListenerContextNice(): argument #0 should be a non-empty string" ) ; }
	if ( ! this.__ngev.contexts[ contextName ] ) { this.addListenerContext( contextName ) ; }

	this.__ngev.contexts[ contextName ].nice = Math.floor( nice ) ;

	return this ;
} ;



NextGenEvents.prototype.destroyListenerContext = function( contextName ) {
	var i , length , context , eventName , newListeners , removedListeners = [] ;

	if ( ! contextName || typeof contextName !== 'string' ) { throw new TypeError( ".disableListenerContext(): argument #0 should be a non-empty string" ) ; }

	if ( ! this.__ngev ) { NextGenEvents.init.call( this ) ; }

	context = this.__ngev.contexts[ contextName ] ;
	if ( ! context ) { return ; }

	for ( eventName in this.__ngev.listeners ) {
		newListeners = null ;
		length = this.__ngev.listeners[ eventName ].length ;

		for ( i = 0 ; i < length ; i ++ ) {
			if ( this.__ngev.listeners[ eventName ][ i ].context === context ) {
				newListeners = [] ;
				removedListeners.push( this.__ngev.listeners[ eventName ][ i ] ) ;
			}
			else if ( newListeners ) {
				newListeners.push( this.__ngev.listeners[ eventName ][ i ] ) ;
			}
		}

		if ( newListeners ) { this.__ngev.listeners[ eventName ] = newListeners ; }
	}

	delete this.__ngev.contexts[ contextName ] ;

	if ( removedListeners.length && this.__ngev.listeners.removeListener.length ) {
		this.emit( 'removeListener' , removedListeners ) ;
	}

	return this ;
} ;



NextGenEvents.processScopeQueue = function( contextScope , serial , isCompletionCallback ) {
	var job , event , eventMaster , emitter ;

	if ( isCompletionCallback ) { contextScope.ready = true ; }

	// Increment recursion
	globalData.recursions ++ ;

	while ( contextScope.ready && contextScope.queue.length ) {
		job = contextScope.queue.shift() ;
		event = job.event ;
		eventMaster = event.master || event ;
		emitter = event.emitter ;

		// This event has been interrupted, drop it now!
		if ( eventMaster.interrupt ) { continue ; }

		NextGenEvents.listenerWrapper( job.listener , event , contextScope , serial , job.nice ) ;
	}

	// Decrement recursion
	globalData.recursions -- ;
} ;



// Backup for the AsyncTryCatch
NextGenEvents.on = NextGenEvents.prototype.on ;
NextGenEvents.once = NextGenEvents.prototype.once ;
NextGenEvents.off = NextGenEvents.prototype.off ;



if ( global.AsyncTryCatch ) {
	NextGenEvents.prototype.asyncTryCatchId = global.AsyncTryCatch.NextGenEvents.length ;
	global.AsyncTryCatch.NextGenEvents.push( NextGenEvents ) ;

	if ( global.AsyncTryCatch.substituted ) {
		global.AsyncTryCatch.substitute() ;
	}
}



// Load Proxy AT THE END (circular require)
NextGenEvents.Proxy = __webpack_require__( 80 ) ;



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;



// Fail-safe xterm-compatible

const esc = tree.extend( null , Object.create( xterm.esc ) , {

	// KDE Konsole does not support that. This workaround use up()/down() & column(1)
	nextLine: { on: '\x1b[%UB\x1b[1G' } ,
	previousLine: { on: '\x1b[%UA\x1b[1G' } ,

	// Not supported outside of xterm
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Cursor styles

	// Try that sequences for instance, if it fails gracefully, it will be kept
	// Xterm sequences fail and write garbage
	blockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	blinkingBlockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	underlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	blinkingUnderlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	beamCursor: { on: '\x1b]50;CursorShape=1\x07' } ,
	blinkingBeamCursor: { on: '\x1b]50;CursorShape=1\x07' }

	// Disabled version
	/*
	blockCursor: { on: '' } ,
	blinkingBlockCursor: { on: '' } ,
	underlineCursor: { on: '' } ,
	blinkingUnderlineCursor: { on: '' } ,
	beamCursor: { on: '' } ,
	blinkingBeamCursor: { on: '' }
	*/
} ) ;





/* Key Mapping */



const keymap = Object.create( xterm.keymap ) ;





/* Handlers */



const handler = Object.create( xterm.handler ) ;





module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 9 )
} ;



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":170,"g":0,"b":0,"names":["red"]},{"r":0,"g":170,"b":0,"names":["green"]},{"r":170,"g":85,"b":0,"names":["yellow","brown"]},{"r":0,"g":0,"b":170,"names":["blue"]},{"r":170,"g":0,"b":170,"names":["magenta"]},{"r":0,"g":170,"b":170,"names":["cyan"]},{"r":170,"g":170,"b":170,"names":["white"]},{"r":85,"g":85,"b":85,"names":["brightBlack","gray","grey"]},{"r":255,"g":85,"b":85,"names":["brightRed"]},{"r":85,"g":255,"b":85,"names":["brightGreen"]},{"r":255,"g":255,"b":85,"names":["brightYellow"]},{"r":85,"g":85,"b":255,"names":["brightBlue"]},{"r":255,"g":85,"b":255,"names":["brightMagenta"]},{"r":85,"g":255,"b":255,"names":["brightCyan"]},{"r":255,"g":255,"b":255,"names":["brightWhite"]}]

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/*
	Escape collection.
*/







// From Mozilla Developper Network
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
exports.regExp = exports.regExpPattern = str => str.replace( /([.*+?^${}()|[\]/\\])/g , '\\$1' ) ;

// This replace any single $ by a double $$
exports.regExpReplacement = str => str.replace( /\$/g , '$$$$' ) ;

// Escape for string.format()
// This replace any single % by a double %%
exports.format = str => str.replace( /%/g , '%%' ) ;

exports.jsSingleQuote = str => exports.control( str ).replace( /'/g , "\\'" ) ;
exports.jsDoubleQuote = str => exports.control( str ).replace( /"/g , '\\"' ) ;

exports.shellArg = str => '\'' + str.replace( /'/g , "'\\''" ) + '\'' ;



var escapeControlMap = {
	'\r': '\\r' ,
	'\n': '\\n' ,
	'\t': '\\t' ,
	'\x7f': '\\x7f'
} ;

// Escape \r \n \t so they become readable again, escape all ASCII control character as well, using \x syntaxe
exports.control = ( str , keepNewLineAndTab = false ) => str.replace( /[\x00-\x1f\x7f]/g , match => {
	if ( keepNewLineAndTab && ( match === '\n' || match === '\t' ) ) { return match ; }
	if ( escapeControlMap[ match ] !== undefined ) { return escapeControlMap[ match ] ; }
	var hex = match.charCodeAt( 0 ).toString( 16 ) ;
	if ( hex.length % 2 ) { hex = '0' + hex ; }
	return '\\x' + hex ;
} ) ;



var escapeHtmlMap = {
	'&': '&amp;' ,
	'<': '&lt;' ,
	'>': '&gt;' ,
	'"': '&quot;' ,
	"'": '&#039;'
} ;

// Only escape & < > so this is suited for content outside tags
exports.html = str => str.replace( /[&<>]/g , match => escapeHtmlMap[ match ] ) ;

// Escape & < > " so this is suited for content inside a double-quoted attribute
exports.htmlAttr = str => str.replace( /[&<>"]/g , match => escapeHtmlMap[ match ] ) ;

// Escape all html special characters & < > " '
exports.htmlSpecialChars = str => str.replace( /[&<>"']/g , match => escapeHtmlMap[ match ] ) ;

// Percent-encode all control chars and codepoint greater than 255 using percent encoding
exports.unicodePercentEncode = str => str.replace( /[\x00-\x1f\u0100-\uffff\x7f%]/g , match => {
	try {
		return encodeURI( match ) ;
	}
	catch ( error ) {
		// encodeURI can throw on bad surrogate pairs, but we just strip those characters
		return '' ;
	}
} ) ;

// Encode HTTP header value
exports.httpHeaderValue = str => exports.unicodePercentEncode( str ) ;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atomic-terminal": 25,
	"./atomic-terminal.js": 25,
	"./eterm": 17,
	"./eterm-256color": 27,
	"./eterm-256color.js": 27,
	"./eterm.js": 17,
	"./gnome": 18,
	"./gnome-256color": 28,
	"./gnome-256color.js": 28,
	"./gnome.js": 18,
	"./kitty": 29,
	"./kitty.js": 29,
	"./konsole": 19,
	"./konsole-256color": 31,
	"./konsole-256color.js": 31,
	"./konsole.js": 19,
	"./linux": 32,
	"./linux.js": 32,
	"./none": 33,
	"./none.js": 33,
	"./osx-256color": 34,
	"./osx-256color.js": 34,
	"./rxvt": 22,
	"./rxvt-256color": 35,
	"./rxvt-256color.js": 35,
	"./rxvt.js": 22,
	"./xfce": 36,
	"./xfce.js": 36,
	"./xterm": 3,
	"./xterm-256color": 2,
	"./xterm-256color.generic": 21,
	"./xterm-256color.generic.js": 21,
	"./xterm-256color.js": 2,
	"./xterm-truecolor": 38,
	"./xterm-truecolor.generic": 39,
	"./xterm-truecolor.generic.js": 39,
	"./xterm-truecolor.js": 38,
	"./xterm.generic": 8,
	"./xterm.generic.js": 8,
	"./xterm.js": 3
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":205,"g":0,"b":0,"names":["red"]},{"r":0,"g":205,"b":0,"names":["green"]},{"r":205,"g":205,"b":0,"names":["yellow"]},{"r":0,"g":0,"b":238,"names":["blue"]},{"r":205,"g":0,"b":205,"names":["magenta"]},{"r":0,"g":205,"b":205,"names":["cyan"]},{"r":229,"g":229,"b":229,"names":["white"]},{"r":127,"g":127,"b":127,"names":["brightBlack","gray","grey"]},{"r":255,"g":0,"b":0,"names":["brightRed"]},{"r":0,"g":255,"b":0,"names":["brightGreen"]},{"r":255,"g":255,"b":0,"names":["brightYellow"]},{"r":92,"g":92,"b":255,"names":["brightBlue"]},{"r":255,"g":0,"b":255,"names":["brightMagenta"]},{"r":0,"g":255,"b":255,"names":["brightCyan"]},{"r":255,"g":255,"b":255,"names":["brightWhite"]}]

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":204,"g":0,"b":0,"names":["red"]},{"r":78,"g":154,"b":6,"names":["green"]},{"r":196,"g":160,"b":0,"names":["yellow"]},{"r":52,"g":101,"b":164,"names":["blue"]},{"r":117,"g":80,"b":123,"names":["magenta"]},{"r":6,"g":152,"b":154,"names":["cyan"]},{"r":211,"g":215,"b":207,"names":["white"]},{"r":85,"g":87,"b":83,"names":["brightBlack","gray","grey"]},{"r":239,"g":41,"b":41,"names":["brightRed"]},{"r":138,"g":226,"b":52,"names":["brightGreen"]},{"r":252,"g":233,"b":79,"names":["brightYellow"]},{"r":114,"g":159,"b":207,"names":["brightBlue"]},{"r":173,"g":127,"b":168,"names":["brightMagenta"]},{"r":52,"g":226,"b":226,"names":["brightCyan"]},{"r":238,"g":238,"b":236,"names":["brightWhite"]}]

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





// To solve dependency hell, we do not rely on terminal-kit anymore.
module.exports = {
	reset: '\x1b[0m' ,
	bold: '\x1b[1m' ,
	dim: '\x1b[2m' ,
	italic: '\x1b[3m' ,
	underline: '\x1b[4m' ,
	inverse: '\x1b[7m' ,

	defaultColor: '\x1b[39m' ,
	black: '\x1b[30m' ,
	red: '\x1b[31m' ,
	green: '\x1b[32m' ,
	yellow: '\x1b[33m' ,
	blue: '\x1b[34m' ,
	magenta: '\x1b[35m' ,
	cyan: '\x1b[36m' ,
	white: '\x1b[37m' ,
	grey: '\x1b[90m' ,
	gray: '\x1b[90m' ,
	brightBlack: '\x1b[90m' ,
	brightRed: '\x1b[91m' ,
	brightGreen: '\x1b[92m' ,
	brightYellow: '\x1b[93m' ,
	brightBlue: '\x1b[94m' ,
	brightMagenta: '\x1b[95m' ,
	brightCyan: '\x1b[96m' ,
	brightWhite: '\x1b[97m' ,

	defaultBgColor: '\x1b[49m' ,
	bgBlack: '\x1b[40m' ,
	bgRed: '\x1b[41m' ,
	bgGreen: '\x1b[42m' ,
	bgYellow: '\x1b[43m' ,
	bgBlue: '\x1b[44m' ,
	bgMagenta: '\x1b[45m' ,
	bgCyan: '\x1b[46m' ,
	bgWhite: '\x1b[47m' ,
	bgGrey: '\x1b[100m' ,
	bgGray: '\x1b[100m' ,
	bgBrightBlack: '\x1b[100m' ,
	bgBrightRed: '\x1b[101m' ,
	bgBrightGreen: '\x1b[102m' ,
	bgBrightYellow: '\x1b[103m' ,
	bgBrightBlue: '\x1b[104m' ,
	bgBrightMagenta: '\x1b[105m' ,
	bgBrightCyan: '\x1b[106m' ,
	bgBrightWhite: '\x1b[107m'
} ;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	Javascript does not use UTF-8 but UCS-2.
	The purpose of this module is to process correctly strings containing UTF-8 characters that take more than 2 bytes.

	Since the punycode module is deprecated in Node.js v8.x, this is an adaptation of punycode.ucs2.x
	as found on Aug 16th 2017 at: https://github.com/bestiejs/punycode.js/blob/master/punycode.js.
*/



// Create the module and export it
const unicode = {} ;
module.exports = unicode ;



unicode.encode = array => String.fromCodePoint( ... array ) ;



// Decode a string into an array of unicode codepoints
unicode.decode = str => {
	var value , extra , counter = 0 , output = [] ,
		length = str.length ;

	while ( counter < length ) {
		value = str.charCodeAt( counter ++ ) ;

		if ( value >= 0xD800 && value <= 0xDBFF && counter < length ) {
			// It's a high surrogate, and there is a next character.
			extra = str.charCodeAt( counter ++ ) ;

			if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
				output.push( ( ( value & 0x3FF ) << 10 ) + ( extra & 0x3FF ) + 0x10000 ) ;
			}
			else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push( value ) ;
				counter -- ;
			}
		}
		else {
			output.push( value ) ;
		}
	}

	return output ;
} ;



// Decode only the first char
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.firstCodePoint = str => {
	var extra ,
		value = str.charCodeAt( 0 ) ;

	if ( value >= 0xD800 && value <= 0xDBFF && str.length >= 2 ) {
		// It's a high surrogate, and there is a next character.
		extra = str.charCodeAt( 1 ) ;

		if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
			return ( ( value & 0x3FF ) << 10 ) + ( extra & 0x3FF ) + 0x10000 ;
		}
	}

	return value ;
} ;



// Extract only the first char
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.firstChar = str => {
	var extra ,
		value = str.charCodeAt( 0 ) ;

	if ( value >= 0xD800 && value <= 0xDBFF && str.length >= 2 ) {
		// It's a high surrogate, and there is a next character.
		extra = str.charCodeAt( 1 ) ;

		if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
			return str.slice( 0 , 2 ) ;
		}
	}

	return str[ 0 ] ;
} ;



// Decode a string into an array of unicode characters
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.toArray = str => {
	var value , extra , counter = 0 , output = [] ,
		length = str.length ;

	while ( counter < length ) {
		value = str.charCodeAt( counter ++ ) ;

		if ( value >= 0xD800 && value <= 0xDBFF && counter < length ) {
			// It's a high surrogate, and there is a next character.
			extra = str.charCodeAt( counter ++ ) ;

			if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
				output.push( str.slice( counter - 2 , counter ) ) ;
			}
			else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push( str[ counter - 2 ] ) ;
				counter -- ;
			}
		}
		else {
			output.push( str[ counter - 1 ] ) ;
		}
	}

	return output ;
} ;



// Decode a string into an array of unicode characters
// Wide chars have an additionnal filler cell, so position is correct
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.toCells = ( Cell , str , tabWidth = 4 , linePosition = 0 , ... extraCellArgs ) => {
	var value , extra , counter = 0 , output = [] ,
		fillSize ,
		length = str.length ;

	while ( counter < length ) {
		value = str.charCodeAt( counter ++ ) ;

		if ( value === 0x0a ) {	// New line
			linePosition = 0 ;
		}
		else if ( value === 0x09 ) {	// Tab
			// Depends upon the next tab-stop
			fillSize = tabWidth - ( linePosition % tabWidth ) - 1 ;
			output.push( new Cell( '\t' , ... extraCellArgs ) ) ;
			linePosition += 1 + fillSize ;
			while ( fillSize -- ) { output.push( new Cell( null , ... extraCellArgs ) ) ; }
		}
		else if ( value >= 0xD800 && value <= 0xDBFF && counter < length ) {
			// It's a high surrogate, and there is a next character.
			extra = str.charCodeAt( counter ++ ) ;

			if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
				value = ( ( value & 0x3FF ) << 10 ) + ( extra & 0x3FF ) + 0x10000 ;
				output.push(  new Cell( str.slice( counter - 2 , counter ) , ... extraCellArgs )  ) ;
				linePosition ++ ;

				if ( unicode.codePointWidth( value ) === 2 ) {
					linePosition ++ ;
					output.push( new Cell( null , ... extraCellArgs ) ) ;
				}
			}
			else {
				// It's an unmatched surrogate, remove it.
				// Preserve current char in case the next code unit is the high surrogate of a surrogate pair.
				counter -- ;
			}
		}
		else {
			output.push(  new Cell( str[ counter - 1 ] , ... extraCellArgs )  ) ;
			linePosition ++ ;

			if ( unicode.codePointWidth( value ) === 2 ) {
				output.push( new Cell( null , ... extraCellArgs ) ) ;
				linePosition ++ ;
			}
		}
	}

	return output ;
} ;



unicode.fromCells = ( cells ) => {
	return cells.map( cell => cell.filler ? '' : cell.char ).join( '' ) ;
} ;



// Get the length of an unicode string
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.length = str => {
	var value , extra , counter = 0 , uLength = 0 ,
		length = str.length ;

	while ( counter < length ) {
		value = str.charCodeAt( counter ++ ) ;

		if ( value >= 0xD800 && value <= 0xDBFF && counter < length ) {
			// It's a high surrogate, and there is a next character.
			extra = str.charCodeAt( counter ++ ) ;

			if ( ( extra & 0xFC00 ) !== 0xDC00 ) {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				counter -- ;
			}
		}

		uLength ++ ;
	}

	return uLength ;
} ;



// Return the width of a string in a terminal/monospace font
unicode.width = str => {
	var count = 0 ;
	unicode.decode( str ).forEach( code => count += unicode.codePointWidth( code ) ) ;
	return count ;
} ;



// Return the width of an array of string in a terminal/monospace font
unicode.arrayWidth = ( array , limit ) => {
	var index , count = 0 ;

	if ( limit === undefined ) { limit = array.length ; }

	for ( index = 0 ; index < limit ; index ++ ) {
		count += unicode.isFullWidth( array[ index ] ) ? 2 : 1 ;
	}

	return count ;
} ;



// Userland may use this, it is more efficient than .truncateWidth() + .width(),
// and BTW even more than testing .width() then .truncateWidth() + .width()
var lastTruncateWidth = 0 ;
unicode.getLastTruncateWidth = () => lastTruncateWidth ;



// Return a string that does not exceed the limit
// Mostly an adaptation of .decode(), not factorized for performance's sake (used by Terminal-kit)
unicode.widthLimit =	// DEPRECATED
unicode.truncateWidth = ( str , limit ) => {
	var value , extra , charWidth , counter = 0 , lastCounter = 0 ,
		length = str.length ;

	lastTruncateWidth = 0 ;

	while ( counter < length ) {
		value = str.charCodeAt( counter ++ ) ;

		if ( value >= 0xD800 && value <= 0xDBFF && counter < length ) {
			// It's a high surrogate, and there is a next character.
			extra = str.charCodeAt( counter ++ ) ;

			if ( ( extra & 0xFC00 ) === 0xDC00 ) {	// Low surrogate.
				value = ( ( value & 0x3FF ) << 10 ) + ( extra & 0x3FF ) + 0x10000 ;
			}
			else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				counter -- ;
			}
		}

		charWidth = unicode.codePointWidth( value ) ;

		if ( lastTruncateWidth + charWidth > limit ) {
			return str.slice( 0 , lastCounter ) ;
		}

		lastTruncateWidth += charWidth ;
		lastCounter = counter ;
	}

	// The string remains unchanged
	return str ;
} ;



/*
	Returns:
		0: single char
		1: leading surrogate
		-1: trailing surrogate

	Note: it does not check input, to gain perfs.
*/
unicode.surrogatePair = char => {
	var code = char.charCodeAt( 0 ) ;

	if ( code < 0xd800 || code >= 0xe000 ) { return 0 ; }
	else if ( code < 0xdc00 ) { return 1 ; }
	return -1 ;
} ;



/*
	Check if a character is a full-width char or not.
*/
unicode.isFullWidth = char => {
	if ( char.length <= 1 ) { return unicode.isFullWidthCodePoint( char.codePointAt( 0 ) ) ; }
	return unicode.isFullWidthCodePoint( unicode.firstCodePoint( char ) ) ;
} ;


// Return the width of a char, leaner than .width() for one char
unicode.charWidth = char => {
	if ( char.length <= 1 ) { return unicode.codePointWidth( char.codePointAt( 0 ) ) ; }
	return unicode.codePointWidth( unicode.firstCodePoint( char ) ) ;
} ;



/*
	Check if a codepoint represent a full-width char or not.

	Borrowed from Node.js source, from readline.js.
*/
unicode.codePointWidth = code => {
	// Code points are derived from:
	// http://www.unicode.org/Public/UNIDATA/EastAsianWidth.txt
	if ( code >= 0x1100 && (
		code <= 0x115f ||	// Hangul Jamo
			0x2329 === code || // LEFT-POINTING ANGLE BRACKET
			0x232a === code || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			( 0x2e80 <= code && code <= 0x3247 && code !== 0x303f ) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			0x3250 <= code && code <= 0x4dbf ||
			// CJK Unified Ideographs .. Yi Radicals
			0x4e00 <= code && code <= 0xa4c6 ||
			// Hangul Jamo Extended-A
			0xa960 <= code && code <= 0xa97c ||
			// Hangul Syllables
			0xac00 <= code && code <= 0xd7a3 ||
			// CJK Compatibility Ideographs
			0xf900 <= code && code <= 0xfaff ||
			// Vertical Forms
			0xfe10 <= code && code <= 0xfe19 ||
			// CJK Compatibility Forms .. Small Form Variants
			0xfe30 <= code && code <= 0xfe6b ||
			// Halfwidth and Fullwidth Forms
			0xff01 <= code && code <= 0xff60 ||
			0xffe0 <= code && code <= 0xffe6 ||
			// Kana Supplement
			0x1b000 <= code && code <= 0x1b001 ||
			// Enclosed Ideographic Supplement
			0x1f200 <= code && code <= 0x1f251 ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			0x20000 <= code && code <= 0x3fffd ) ) {
		return 2 ;
	}

	return 1 ;
} ;

// For a true/false type of result
unicode.isFullWidthCodePoint = code => unicode.codePointWidth( code ) === 2 ;



// Convert normal ASCII chars to their full-width counterpart
unicode.toFullWidth = str => {
	return String.fromCodePoint( ... unicode.decode( str ).map( code =>
		code >= 33 && code <= 126  ?  0xff00 + code - 0x20  :  code
	) ) ;
} ;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/*
	Variable inspector.
*/





const escape = __webpack_require__( 10 ) ;
const ansi = __webpack_require__( 14 ) ;

const EMPTY = {} ;



/*
	Inspect a variable, return a string ready to be displayed with console.log(), or even as an HTML output.

	Options:
		* style:
			* 'none': (default) normal output suitable for console.log() or writing in a file
			* 'inline': like 'none', but without newlines
			* 'color': colorful output suitable for terminal
			* 'html': html output
			* any object: full controle, inheriting from 'none'
		* depth: depth limit, default: 3
		* maxLength: length limit for strings, default: 250
		* outputMaxLength: length limit for the inspect output string, default: 5000
		* noFunc: do not display functions
		* noDescriptor: do not display descriptor information
		* noArrayProperty: do not display array properties
		* noIndex: do not display array indexes
		* noType: do not display type and constructor
		* enumOnly: only display enumerable properties
		* funcDetails: display function's details
		* proto: display object's prototype
		* sort: sort the keys
		* minimal: imply noFunc: true, noDescriptor: true, noType: true, noArrayProperty: true, enumOnly: true, proto: false and funcDetails: false.
		  Display a minimal JSON-like output
		* protoBlackList: `Set` of blacklisted object prototype (will not recurse inside it)
		* propertyBlackList: `Set` of blacklisted property names (will not even display it)
		* useInspect: use .inspect() method when available on an object (default to false)
		* useInspectPropertyBlackList: if set and if the object to be inspected has an 'inspectPropertyBlackList' property which value is a `Set`,
		  use it like the 'propertyBlackList' option
*/

function inspect( options , variable ) {
	if ( arguments.length < 2 ) { variable = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	var runtime = { depth: 0 , ancestors: [] } ;

	if ( ! options.style ) { options.style = inspectStyle.none ; }
	else if ( typeof options.style === 'string' ) { options.style = inspectStyle[ options.style ] ; }
	// Too slow:
	//else { options.style = Object.assign( {} , inspectStyle.none , options.style ) ; }

	if ( options.depth === undefined ) { options.depth = 3 ; }
	if ( options.maxLength === undefined ) { options.maxLength = 250 ; }
	if ( options.outputMaxLength === undefined ) { options.outputMaxLength = 5000 ; }

	// /!\ nofunc is deprecated
	if ( options.nofunc ) { options.noFunc = true ; }

	if ( options.minimal ) {
		options.noFunc = true ;
		options.noDescriptor = true ;
		options.noType = true ;
		options.noArrayProperty = true ;
		options.enumOnly = true ;
		options.proto = false ;
		options.funcDetails = false ;
	}

	var str = inspect_( runtime , options , variable ) ;

	if ( str.length > options.outputMaxLength ) {
		str = options.style.truncate( str , options.outputMaxLength ) ;
	}

	return str ;
}



function inspect_( runtime , options , variable ) {
	var i , funcName , length , proto , propertyList , constructor , keyIsProperty ,
		type , pre , indent , isArray , isFunc , specialObject ,
		str = '' , key = '' , descriptorStr = '' , descriptor , nextAncestors ;


	// Prepare things (indentation, key, descriptor, ... )

	type = typeof variable ;
	indent = options.style.tab.repeat( runtime.depth ) ;

	if ( type === 'function' && options.noFunc ) { return '' ; }

	if ( runtime.key !== undefined ) {
		if ( runtime.descriptor ) {
			descriptorStr = [] ;

			if ( ! runtime.descriptor.configurable ) { descriptorStr.push( '-conf' ) ; }
			if ( ! runtime.descriptor.enumerable ) { descriptorStr.push( '-enum' ) ; }

			// Already displayed by runtime.forceType
			//if ( runtime.descriptor.get || runtime.descriptor.set ) { descriptorStr.push( 'getter/setter' ) ; } else
			if ( ! runtime.descriptor.writable ) { descriptorStr.push( '-w' ) ; }

			//if ( descriptorStr.length ) { descriptorStr = '(' + descriptorStr.join( ' ' ) + ')' ; }
			if ( descriptorStr.length ) { descriptorStr = descriptorStr.join( ' ' ) ; }
			else { descriptorStr = '' ; }
		}

		if ( runtime.keyIsProperty ) {
			if ( keyNeedingQuotes( runtime.key ) ) {
				key = '"' + options.style.key( runtime.key ) + '": ' ;
			}
			else {
				key = options.style.key( runtime.key ) + ': ' ;
			}
		}
		else if ( ! options.noIndex ) {
			key = options.style.index( runtime.key ) ;
		}

		if ( descriptorStr ) { descriptorStr = ' ' + options.style.type( descriptorStr ) ; }
	}

	pre = runtime.noPre ? '' : indent + key ;


	// Describe the current variable

	if ( variable === undefined ) {
		str += pre + options.style.constant( 'undefined' ) + descriptorStr + options.style.newline ;
	}
	else if ( variable === EMPTY ) {
		str += pre + options.style.constant( '[empty]' ) + descriptorStr + options.style.newline ;
	}
	else if ( variable === null ) {
		str += pre + options.style.constant( 'null' ) + descriptorStr + options.style.newline ;
	}
	else if ( variable === false ) {
		str += pre + options.style.constant( 'false' ) + descriptorStr + options.style.newline ;
	}
	else if ( variable === true ) {
		str += pre + options.style.constant( 'true' ) + descriptorStr + options.style.newline ;
	}
	else if ( type === 'number' ) {
		str += pre + options.style.number( variable.toString() ) +
			( options.noType ? '' : ' ' + options.style.type( 'number' ) ) +
			descriptorStr + options.style.newline ;
	}
	else if ( type === 'string' ) {
		if ( variable.length > options.maxLength ) {
			str += pre + '"' + options.style.string( escape.control( variable.slice( 0 , options.maxLength - 1 ) ) ) + '…"' +
				( options.noType ? '' : ' ' + options.style.type( 'string' ) + options.style.length( '(' + variable.length + ' - TRUNCATED)' ) ) +
				descriptorStr + options.style.newline ;
		}
		else {
			str += pre + '"' + options.style.string( escape.control( variable ) ) + '"' +
				( options.noType ? '' : ' ' + options.style.type( 'string' ) + options.style.length( '(' + variable.length + ')' ) ) +
				descriptorStr + options.style.newline ;
		}
	}
	else if ( Buffer.isBuffer( variable ) ) {
		str += pre + options.style.inspect( variable.inspect() ) +
			( options.noType ? '' : ' ' + options.style.type( 'Buffer' ) + options.style.length( '(' + variable.length + ')' ) ) +
			descriptorStr + options.style.newline ;
	}
	else if ( type === 'object' || type === 'function' ) {
		funcName = length = '' ;
		isFunc = false ;

		if ( type === 'function' ) {
			isFunc = true ;
			funcName = ' ' + options.style.funcName( ( variable.name ? variable.name : '(anonymous)' ) ) ;
			length = options.style.length( '(' + variable.length + ')' ) ;
		}

		isArray = false ;

		if ( Array.isArray( variable ) ) {
			isArray = true ;
			length = options.style.length( '(' + variable.length + ')' ) ;
		}

		if ( ! variable.constructor ) { constructor = '(no constructor)' ; }
		else if ( ! variable.constructor.name ) { constructor = '(anonymous)' ; }
		else { constructor = variable.constructor.name ; }

		constructor = options.style.constructorName( constructor ) ;
		proto = Object.getPrototypeOf( variable ) ;

		str += pre ;

		if ( ! options.noType ) {
			if ( runtime.forceType ) { str += options.style.type( runtime.forceType ) ; }
			else { str += constructor + funcName + length + ' ' + options.style.type( type ) + descriptorStr ; }

			if ( ! isFunc || options.funcDetails ) { str += ' ' ; }	// if no funcDetails imply no space here
		}

		if ( isArray && options.noArrayProperty ) {
			propertyList = [ ... Array( variable.length ).keys() ] ;
		}
		else {
			propertyList = Object.getOwnPropertyNames( variable ) ;
		}

		if ( options.sort ) { propertyList.sort() ; }

		// Special Objects
		specialObject = specialObjectSubstitution( variable , runtime , options ) ;

		if ( options.protoBlackList && options.protoBlackList.has( proto ) ) {
			str += options.style.limit( '[skip]' ) + options.style.newline ;
		}
		else if ( specialObject !== undefined ) {
			if ( typeof specialObject === 'string' ) {
				str += '=> ' + specialObject + options.style.newline ;
			}
			else {
				str += '=> ' + inspect_(
					{
						depth: runtime.depth ,
						ancestors: runtime.ancestors ,
						noPre: true
					} ,
					options ,
					specialObject
				) ;
			}
		}
		else if ( isFunc && ! options.funcDetails ) {
			str += options.style.newline ;
		}
		else if ( ! propertyList.length && ! options.proto ) {
			str += ( isArray ? '[]' : '{}' ) + options.style.newline ;
		}
		else if ( runtime.depth >= options.depth ) {
			str += options.style.limit( '[depth limit]' ) + options.style.newline ;
		}
		else if ( runtime.ancestors.indexOf( variable ) !== -1 ) {
			str += options.style.limit( '[circular]' ) + options.style.newline ;
		}
		else {
			str += ( isArray && options.noType && options.noArrayProperty ? '[' : '{' ) + options.style.newline ;

			// Do not use .concat() here, it doesn't works as expected with arrays...
			nextAncestors = runtime.ancestors.slice() ;
			nextAncestors.push( variable ) ;

			for ( i = 0 ; i < propertyList.length && str.length < options.outputMaxLength ; i ++ ) {
				if ( ! isArray && (
					( options.propertyBlackList && options.propertyBlackList.has( propertyList[ i ] ) )
					|| ( options.useInspectPropertyBlackList && ( variable.inspectPropertyBlackList instanceof Set ) && variable.inspectPropertyBlackList.has( propertyList[ i ] ) )
				) ) {
					//str += options.style.limit( '[skip]' ) + options.style.newline ;
					continue ;
				}

				if ( isArray && options.noArrayProperty && ! ( propertyList[ i ] in variable ) ) {
					// Hole in the array (sparse array, item deleted, ...)
					str += inspect_(
						{
							depth: runtime.depth + 1 ,
							ancestors: nextAncestors ,
							key: propertyList[ i ] ,
							keyIsProperty: false
						} ,
						options ,
						EMPTY
					) ;
				}
				else {
					try {
						descriptor = Object.getOwnPropertyDescriptor( variable , propertyList[ i ] ) ;
						if ( ! descriptor.enumerable && options.enumOnly ) { continue ; }
						keyIsProperty = ! isArray || ! descriptor.enumerable || isNaN( propertyList[ i ] ) ;

						if ( ! options.noDescriptor && descriptor && ( descriptor.get || descriptor.set ) ) {
							str += inspect_(
								{
									depth: runtime.depth + 1 ,
									ancestors: nextAncestors ,
									key: propertyList[ i ] ,
									keyIsProperty: keyIsProperty ,
									descriptor: descriptor ,
									forceType: 'getter/setter'
								} ,
								options ,
								{ get: descriptor.get , set: descriptor.set }
							) ;
						}
						else {
							str += inspect_(
								{
									depth: runtime.depth + 1 ,
									ancestors: nextAncestors ,
									key: propertyList[ i ] ,
									keyIsProperty: keyIsProperty ,
									descriptor: options.noDescriptor ? undefined : descriptor
								} ,
								options ,
								variable[ propertyList[ i ] ]
							) ;
						}
					}
					catch ( error ) {
						str += inspect_(
							{
								depth: runtime.depth + 1 ,
								ancestors: nextAncestors ,
								key: propertyList[ i ] ,
								keyIsProperty: keyIsProperty ,
								descriptor: options.noDescriptor ? undefined : descriptor
							} ,
							options ,
							error
						) ;
					}
				}

				if ( i < propertyList.length - 1 ) { str += options.style.comma ; }
			}

			if ( options.proto ) {
				str += inspect_(
					{
						depth: runtime.depth + 1 ,
						ancestors: nextAncestors ,
						key: '__proto__' ,
						keyIsProperty: true
					} ,
					options ,
					proto
				) ;
			}

			str += indent + ( isArray && options.noType && options.noArrayProperty ? ']' : '}' ) ;
			str += options.style.newline ;
		}
	}


	// Finalizing


	if ( runtime.depth === 0 ) {
		if ( options.style.trim ) { str = str.trim() ; }
		if ( options.style === 'html' ) { str = escape.html( str ) ; }
	}

	return str ;
}

exports.inspect = inspect ;



function keyNeedingQuotes( key ) {
	if ( ! key.length ) { return true ; }
	return false ;
}



var promiseStates = [ 'pending' , 'fulfilled' , 'rejected' ] ;



// Some special object are better written down when substituted by something else
function specialObjectSubstitution( object , runtime , options ) {
	if ( typeof object.constructor !== 'function' ) {
		// Some objects have no constructor, e.g.: Object.create(null)
		//console.error( object ) ;
		return ;
	}

	if ( object instanceof String ) {
		return object.toString() ;
	}

	if ( object instanceof RegExp ) {
		return object.toString() ;
	}

	if ( object instanceof Date ) {
		return object.toString() + ' [' + object.getTime() + ']' ;
	}

	if ( typeof Set === 'function' && object instanceof Set ) {
		// This is an ES6 'Set' Object
		return Array.from( object ) ;
	}

	if ( typeof Map === 'function' && object instanceof Map ) {
		// This is an ES6 'Map' Object
		return Array.from( object ) ;
	}

	if ( object instanceof Promise ) {
		if ( process && process.binding && process.binding( 'util' ) && process.binding( 'util' ).getPromiseDetails ) {
			let details = process.binding( 'util' ).getPromiseDetails( object ) ;
			let state =  promiseStates[ details[ 0 ] ] ;
			let str = 'Promise <' + state + '>' ;

			if ( state === 'fulfilled' ) {
				str += ' ' + inspect_(
					{
						depth: runtime.depth ,
						ancestors: runtime.ancestors ,
						noPre: true
					} ,
					options ,
					details[ 1 ]
				) ;
			}
			else if ( state === 'rejected' ) {
				if ( details[ 1 ] instanceof Error ) {
					str += ' ' + inspectError(
						{
							style: options.style ,
							noErrorStack: true
						} ,
						details[ 1 ]
					) ;
				}
				else {
					str += ' ' + inspect_(
						{
							depth: runtime.depth ,
							ancestors: runtime.ancestors ,
							noPre: true
						} ,
						options ,
						details[ 1 ]
					) ;
				}
			}

			return str ;
		}
	}

	if ( object._bsontype ) {
		// This is a MongoDB ObjectID, rather boring to display in its original form
		// due to esoteric characters that confuse both the user and the terminal displaying it.
		// Substitute it to its string representation
		return object.toString() ;
	}

	if ( options.useInspect && typeof object.inspect === 'function' ) {
		return object.inspect() ;
	}

	return ;
}



/*
	Options:
		noErrorStack: set to true if the stack should not be displayed
*/
function inspectError( options , error ) {
	var str = '' , stack , type , code ;

	if ( arguments.length < 2 ) { error = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( ! ( error instanceof Error ) ) {
		return "inspectError(): it's not an error, using regular variable inspection: " + inspect( options , error ) ;
	}

	if ( ! options.style ) { options.style = inspectStyle.none ; }
	else if ( typeof options.style === 'string' ) { options.style = inspectStyle[ options.style ] ; }

	if ( error.stack && ! options.noErrorStack ) { stack = inspectStack( options , error.stack ) ; }

	type = error.type || error.constructor.name ;
	code = error.code || error.name || error.errno || error.number ;

	str += options.style.errorType( type ) +
		( code ? ' [' + options.style.errorType( code ) + ']' : '' ) + ': ' ;
	str += options.style.errorMessage( error.message ) + '\n' ;

	if ( stack ) { str += options.style.errorStack( stack ) + '\n' ; }

	if ( error.from ) {
		str += options.style.newline + options.style.errorFromMessage( 'From error:' ) + options.style.newline + inspectError( options , error.from ) ;
	}

	return str ;
}

exports.inspectError = inspectError ;



function inspectStack( options , stack ) {
	if ( arguments.length < 2 ) { stack = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( ! options.style ) { options.style = inspectStyle.none ; }
	else if ( typeof options.style === 'string' ) { options.style = inspectStyle[ options.style ] ; }

	if ( ! stack ) { return ; }

	if ( ( options.browser || process.browser ) && stack.indexOf( '@' ) !== -1 ) {
		// Assume a Firefox-compatible stack-trace here...
		stack = stack
			.replace( /[</]*(?=@)/g , '' )	// Firefox output some WTF </</</</< stuff in its stack trace -- removing that
			.replace(
				/^\s*([^@]*)\s*@\s*([^\n]*)(?::([0-9]+):([0-9]+))?$/mg ,
				( matches , method , file , line , column ) => {
					return options.style.errorStack( '    at ' ) +
						( method ? options.style.errorStackMethod( method ) + ' ' : '' ) +
						options.style.errorStack( '(' ) +
						( file ? options.style.errorStackFile( file ) : options.style.errorStack( 'unknown' ) ) +
						( line ? options.style.errorStack( ':' ) + options.style.errorStackLine( line ) : '' ) +
						( column ? options.style.errorStack( ':' ) + options.style.errorStackColumn( column ) : '' ) +
						options.style.errorStack( ')' ) ;
				}
			) ;
	}
	else {
		stack = stack.replace( /^[^\n]*\n/ , '' ) ;
		stack = stack.replace(
			/^\s*(at)\s+(?:(?:(async|new)\s+)?([^\s:()[\]\n]+(?:\([^)]+\))?)\s)?(?:\[as ([^\s:()[\]\n]+)\]\s)?(?:\(?([^:()[\]\n]+):([0-9]+):([0-9]+)\)?)?$/mg ,
			( matches , at , keyword , method , as , file , line , column ) => {
				return options.style.errorStack( '    at ' ) +
					( keyword ? options.style.errorStackKeyword( keyword ) + ' ' : '' ) +
					( method ? options.style.errorStackMethod( method ) + ' ' : '' ) +
					( as ? options.style.errorStack( '[as ' ) + options.style.errorStackMethodAs( as ) + options.style.errorStack( '] ' ) : '' ) +
					options.style.errorStack( '(' ) +
					( file ? options.style.errorStackFile( file ) : options.style.errorStack( 'unknown' ) ) +
					( line ? options.style.errorStack( ':' ) + options.style.errorStackLine( line ) : '' ) +
					( column ? options.style.errorStack( ':' ) + options.style.errorStackColumn( column ) : '' ) +
					options.style.errorStack( ')' ) ;
			}
		) ;
	}

	return stack ;
}

exports.inspectStack = inspectStack ;



// Inspect's styles

var inspectStyle = {} ;

var inspectStyleNoop = str => str ;



inspectStyle.none = {
	trim: false ,
	tab: '    ' ,
	newline: '\n' ,
	comma: '' ,
	limit: inspectStyleNoop ,
	type: str => '<' + str + '>' ,
	constant: inspectStyleNoop ,
	funcName: inspectStyleNoop ,
	constructorName: str => '<' + str + '>' ,
	length: inspectStyleNoop ,
	key: inspectStyleNoop ,
	index: str => '[' + str + '] ' ,
	number: inspectStyleNoop ,
	inspect: inspectStyleNoop ,
	string: inspectStyleNoop ,
	errorType: inspectStyleNoop ,
	errorMessage: inspectStyleNoop ,
	errorStack: inspectStyleNoop ,
	errorStackKeyword: inspectStyleNoop ,
	errorStackMethod: inspectStyleNoop ,
	errorStackMethodAs: inspectStyleNoop ,
	errorStackFile: inspectStyleNoop ,
	errorStackLine: inspectStyleNoop ,
	errorStackColumn: inspectStyleNoop ,
	errorFromMessage: inspectStyleNoop ,
	truncate: ( str , maxLength ) => str.slice( 0 , maxLength - 1 ) + '…'
} ;



inspectStyle.inline = Object.assign( {} , inspectStyle.none , {
	trim: true ,
	tab: '' ,
	newline: ' ' ,
	comma: ', ' ,
	length: () => '' ,
	index: () => ''
	//type: () => '' ,
} ) ;



inspectStyle.color = Object.assign( {} , inspectStyle.none , {
	limit: str => ansi.bold + ansi.brightRed + str + ansi.reset ,
	type: str => ansi.italic + ansi.brightBlack + str + ansi.reset ,
	constant: str => ansi.cyan + str + ansi.reset ,
	funcName: str => ansi.italic + ansi.magenta + str + ansi.reset ,
	constructorName: str => ansi.magenta + str + ansi.reset ,
	length: str => ansi.italic + ansi.brightBlack + str + ansi.reset ,
	key: str => ansi.green + str + ansi.reset ,
	index: str => ansi.blue + '[' + str + ']' + ansi.reset + ' ' ,
	number: str => ansi.cyan + str + ansi.reset ,
	inspect: str => ansi.cyan + str + ansi.reset ,
	string: str => ansi.blue + str + ansi.reset ,
	errorType: str => ansi.red + ansi.bold + str + ansi.reset ,
	errorMessage: str => ansi.red + ansi.italic + str + ansi.reset ,
	errorStack: str => ansi.brightBlack + str + ansi.reset ,
	errorStackKeyword: str => ansi.italic + ansi.bold + str + ansi.reset ,
	errorStackMethod: str => ansi.brightYellow + str + ansi.reset ,
	errorStackMethodAs: str => ansi.yellow + str + ansi.reset ,
	errorStackFile: str => ansi.brightCyan + str + ansi.reset ,
	errorStackLine: str => ansi.blue + str + ansi.reset ,
	errorStackColumn: str => ansi.magenta + str + ansi.reset ,
	errorFromMessage: str => ansi.yellow + ansi.underline + str + ansi.reset ,
	truncate: ( str , maxLength ) => {
		var trail = ansi.gray + '…' + ansi.reset ;
		str = str.slice( 0 , maxLength - trail.length ) ;

		// Search for an ansi escape sequence at the end, that could be truncated.
		// The longest one is '\x1b[107m': 6 characters.
		var lastEscape = str.lastIndexOf( '\x1b' ) ;
		if ( lastEscape >= str.length - 6 ) { str = str.slice( 0 , lastEscape ) ; }

		return str + trail ;
	}
} ) ;



inspectStyle.html = Object.assign( {} , inspectStyle.none , {
	tab: '&nbsp;&nbsp;&nbsp;&nbsp;' ,
	newline: '<br />' ,
	limit: str => '<span style="color:red">' + str + '</span>' ,
	type: str => '<i style="color:gray">' + str + '</i>' ,
	constant: str => '<span style="color:cyan">' + str + '</span>' ,
	funcName: str => '<i style="color:magenta">' + str + '</i>' ,
	constructorName: str => '<span style="color:magenta">' + str + '</span>' ,
	length: str => '<i style="color:gray">' + str + '</i>' ,
	key: str => '<span style="color:green">' + str + '</span>' ,
	index: str => '<span style="color:blue">[' + str + ']</span> ' ,
	number: str => '<span style="color:cyan">' + str + '</span>' ,
	inspect: str => '<span style="color:cyan">' + str + '</span>' ,
	string: str => '<span style="color:blue">' + str + '</span>' ,
	errorType: str => '<span style="color:red">' + str + '</span>' ,
	errorMessage: str => '<span style="color:red">' + str + '</span>' ,
	errorStack: str => '<span style="color:gray">' + str + '</span>' ,
	errorStackKeyword: str => '<i>' + str + '</i>' ,
	errorStackMethod: str => '<span style="color:yellow">' + str + '</span>' ,
	errorStackMethodAs: str => '<span style="color:yellow">' + str + '</span>' ,
	errorStackFile: str => '<span style="color:cyan">' + str + '</span>' ,
	errorStackLine: str => '<span style="color:blue">' + str + '</span>' ,
	errorStackColumn: str => '<span style="color:gray">' + str + '</span>' ,
	errorFromMessage: str => '<span style="color:yellow">' + str + '</span>'
} ) ;



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;



const bold = '\x1b[1m' ;
const noBold = '\x1b[22m' ;
const blink = '\x1b[5m' ;
const noBlink = '\x1b[25m' ;
const defaultColor = '\x1b[39m' + noBold ;		// back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' + noBlink ;	// back to the default color, most of time it is the same than .bgBlack



const esc = tree.extend( null , Object.create( xterm.esc ) , {
	// Not supported...
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Eterm doesn't have bright color code, they are produced using 'bold' (which is not bold, by the way...)
	defaultColor: { on: defaultColor } ,
	brightBlack: { on: bold + '\x1b[30m' , off: defaultColor } ,
	brightRed: { on: bold + '\x1b[31m' , off: defaultColor } ,
	brightGreen: { on: bold + '\x1b[32m' , off: defaultColor } ,
	brightYellow: { on: bold + '\x1b[33m' , off: defaultColor } ,
	brightBlue: { on: bold + '\x1b[34m' , off: defaultColor } ,
	brightMagenta: { on: bold + '\x1b[35m' , off: defaultColor } ,
	brightCyan: { on: bold + '\x1b[36m' , off: defaultColor } ,
	brightWhite: { on: bold + '\x1b[37m' , off: defaultColor } ,
	brightColor: { on: bold + '\x1b[3%um' , off: defaultColor } ,	// should be called with a 0..7 integer

	// Eterm console doesn't have bright bg color code, they are produced using 'blink' (which does not blink, by the way...)
	bgDefaultColor: { on: bgDefaultColor } ,
	bgBrightBlack: { on: blink + '\x1b[40m' , off: bgDefaultColor } ,
	bgBrightRed: { on: blink + '\x1b[41m' , off: bgDefaultColor } ,
	bgBrightGreen: { on: blink + '\x1b[42m' , off: bgDefaultColor } ,
	bgBrightYellow: { on: blink + '\x1b[43m' , off: bgDefaultColor } ,
	bgBrightBlue: { on: blink + '\x1b[44m' , off: bgDefaultColor } ,
	bgBrightMagenta: { on: blink + '\x1b[45m' , off: bgDefaultColor } ,
	bgBrightCyan: { on: blink + '\x1b[46m' , off: bgDefaultColor } ,
	bgBrightWhite: { on: blink + '\x1b[47m' , off: bgDefaultColor } ,
	bgBrightColor: { on: blink + '\x1b[4%um' , off: bgDefaultColor } ,	// should be called with a 0..7 integer

	// Cursor styles not supported
	blockCursor: { on: '' , na: true } ,
	blinkingBlockCursor: { on: '' , na: true } ,
	underlineCursor: { on: '' , na: true } ,
	blinkingUnderlineCursor: { on: '' , na: true } ,
	beamCursor: { on: '' , na: true } ,
	blinkingBeamCursor: { on: '' , na: true } ,

	// Not capable, fallback to mouseButton
	mouseDrag: { on: '\x1b[?1000h' , off: '\x1b[?1000l' , fb: true } ,
	mouseMotion: { on: '\x1b[?1000h' , off: '\x1b[?1000l' , fb: true } ,

	requestColor: { on: '%D' , na: true }	// not capable
} ) ;





/* Key Mapping */



const keymap = tree.extend( null , Object.create( xterm.keymap ) , {
	F1: '\x1b[11~' ,
	F2: '\x1b[12~' ,
	F3: '\x1b[13~' ,
	F4: '\x1b[14~' ,

	//SHIFT_F1: '\x1b[25~' ,	// no difference with F11
	//SHIFT_F2: '\x1b[26~' ,	// no difference with F12
	SHIFT_F3: '\x1b[25~' ,
	SHIFT_F4: '\x1b[26~' ,
	SHIFT_F5: '\x1b[28~' ,
	SHIFT_F6: '\x1b[29~' ,
	SHIFT_F7: '\x1b[31~' ,
	SHIFT_F8: '\x1b[32~' ,
	SHIFT_F9: '\x1b[33~' ,
	SHIFT_F10: '\x1b[34~' ,
	SHIFT_F11: '\x1b[23$' ,
	SHIFT_F12: '\x1b[24$' ,

	CTRL_F1: '\x1b[11^' ,
	CTRL_F2: '\x1b[12^' ,
	CTRL_F3: '\x1b[13^' ,
	CTRL_F4: '\x1b[14^' ,
	CTRL_F5: '\x1b[15^' ,
	CTRL_F6: '\x1b[17^' ,
	CTRL_F7: '\x1b[18^' ,
	CTRL_F8: '\x1b[19^' ,
	CTRL_F9: '\x1b[20^' ,
	CTRL_F10: '\x1b[21^' ,
	CTRL_F11: '\x1b[23^' ,
	CTRL_F12: '\x1b[24^' ,

	//CTRL_SHIFT_F1: '\x1b[11^' ,	// no difference with CTRL_F11
	//CTRL_SHIFT_F2: '\x1b[12^' ,	// no difference with CTRL_F12
	CTRL_SHIFT_F3: '\x1b[25^' ,
	CTRL_SHIFT_F4: '\x1b[26^' ,
	CTRL_SHIFT_F5: '\x1b[28^' ,
	CTRL_SHIFT_F6: '\x1b[29^' ,
	CTRL_SHIFT_F7: '\x1b[31^' ,
	CTRL_SHIFT_F8: '\x1b[32^' ,
	CTRL_SHIFT_F9: '\x1b[33^' ,
	CTRL_SHIFT_F10: '\x1b[34^' ,
	CTRL_SHIFT_F11: '\x1b[23@' ,
	CTRL_SHIFT_F12: '\x1b[24@'

} ) ;



const handler = Object.create( xterm.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 12 )
} ;



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;



const esc = tree.extend( null , Object.create( xterm.esc ) , {
	// Not supported...
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Cursor styles

	// Looks like a no go, gnome-terminal is too stubborn to let the application decide about that
	blockCursor: { on: '' , na: true } ,
	blinkingBlockCursor: { on: '' , na: true } ,
	underlineCursor: { on: '' , na: true } ,
	blinkingUnderlineCursor: { on: '' , na: true } ,
	beamCursor: { on: '' , na: true } ,
	blinkingBeamCursor: { on: '' , na: true }

	/*
	blockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	blinkingBlockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	underlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	blinkingUnderlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	beamCursor: { on: '\x1b]50;CursorShape=1\x07' } ,
	blinkingBeamCursor: { on: '\x1b]50;CursorShape=1\x07' }
	*/
} ) ;





const keymap = Object.create( xterm.keymap ) ;
const handler = Object.create( xterm.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 13 )
} ;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;



const esc = tree.extend( null , Object.create( xterm.esc ) , {
	// Not supported...
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Amazingly, those uber-standard and uber-common sequences are *NOT* supported by Konsole...
	// SHAME on you KDE! Even the Linux Console support it!
	// This workaround use up()/down() & column(1)
	nextLine: { on: '\x1b[%UB\x1b[1G' } ,
	previousLine: { on: '\x1b[%UA\x1b[1G' } ,

	// Cursor styles
	blockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	blinkingBlockCursor: { on: '\x1b]50;CursorShape=0\x07' } ,
	underlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	blinkingUnderlineCursor: { on: '\x1b]50;CursorShape=2\x07' } ,
	beamCursor: { on: '\x1b]50;CursorShape=1\x07' } ,
	blinkingBeamCursor: { on: '\x1b]50;CursorShape=1\x07' } ,

	requestColor: { on: '%D' , na: true }	// not capable
} ) ;





/* Key Mapping */



const keymap = Object.create( xterm.keymap ) ;





/* Handlers */



const handler = Object.create( xterm.handler ) ;



// Stoopid KDE again, it can flood MOUSE_X_PRESSED on mouse drag, rather than MOUSE_MOTION -_-'
// This is a copy-paste of handler.mouseSGRProtocol of xterm.js, with the appropriated work-around
handler.mouseSGRProtocol = function mouseSGRProtocol( basename , buffer ) {
	var code , pressed , matches , result ;

	matches = buffer.toString().match( /^([0-9]*);([0-9]*);([0-9]*)(.)/ ) ;

	code = parseInt( matches[ 1 ] , 10 ) ;
	pressed = matches[ 4 ] !== 'm' ;

	result = {
		data: {
			shift: !! ( code & 4 ) ,
			alt: !! ( code & 8 ) ,
			ctrl: !! ( code & 16 )
		}
	} ;

	result.data.x = parseInt( matches[ 2 ] , 10 ) ;
	result.data.y = parseInt( matches[ 3 ] , 10 ) ;
	result.eaten = matches[ 0 ].length ;

	if ( code & 32 ) {
		// Motions event
		result.name = basename + '_MOTION' ;
	}
	else if ( code & 64 ) {
		result.name = basename + ( code & 1 ? '_WHEEL_DOWN' : '_WHEEL_UP' ) ;
	}
	else {
		//console.log( this.state.button ) ;

		// Button event
		switch ( code & 3 ) {
			case 0 :
				result.name = basename + '_LEFT_BUTTON' ;
				if ( this.state.button.left === pressed ) { result.disable = true ; }
				this.state.button.left = pressed ;
				break ;

			case 1 :
				result.name = basename + '_MIDDLE_BUTTON' ;
				if ( this.state.button.middle === pressed ) { result.disable = true ; }
				this.state.button.middle = pressed ;
				break ;

			case 2 :
				result.name = basename + '_RIGHT_BUTTON' ;
				if ( this.state.button.right === pressed ) { result.disable = true ; }
				this.state.button.right = pressed ;
				break ;

			case 3 :
				result.name = basename + '_OTHER_BUTTON' ;
				if ( this.state.button.other === pressed ) { result.disable = true ; }
				this.state.button.other = pressed ;
				break ;
		}

		result.name += pressed ? '_PRESSED' : '_RELEASED' ;
	}

	result.data.code = code ;

	return result ;
} ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 30 )
} ;



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":170,"g":0,"b":0,"names":["red"]},{"r":0,"g":170,"b":0,"names":["green"]},{"r":170,"g":85,"b":0,"names":["yellow","brown"]},{"r":0,"g":0,"b":170,"names":["blue"]},{"r":170,"g":0,"b":170,"names":["magenta"]},{"r":0,"g":170,"b":170,"names":["cyan"]},{"r":170,"g":170,"b":170,"names":["white"]},{"r":85,"g":85,"b":85,"names":["brightBlack","gray","grey"]},{"r":255,"g":85,"b":85,"names":["brightRed"]},{"r":85,"g":255,"b":85,"names":["brightGreen"]},{"r":255,"g":255,"b":85,"names":["brightYellow"]},{"r":85,"g":85,"b":255,"names":["brightBlue"]},{"r":255,"g":85,"b":255,"names":["brightMagenta"]},{"r":85,"g":255,"b":255,"names":["brightCyan"]},{"r":255,"g":255,"b":255,"names":["brightWhite"]}]

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const xtermGeneric = __webpack_require__( 8 ) ;



// Fail-safe xterm-compatible.

// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of xterm.generic.js, thus we achieve a clean inheritance model without duplicated code.

module.exports = {
	esc: tree.extend( { own: true } , Object.create( xterm256.esc ) , xtermGeneric.esc ) ,
	keymap: Object.create( xtermGeneric.keymap ) ,
	handler: Object.create( xtermGeneric.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": undefined ,	// DEPRECATED
		"trueColor": undefined	// maybe, maybe not
	} ,
	colorRegister: __webpack_require__( 9 )
} ;



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm = __webpack_require__( 3 ) ;



const esc = tree.extend( null , Object.create( xterm.esc ) , {
	// Not supported...
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Cursor styles not supported
	blockCursor: { on: '' , na: true } ,
	blinkingBlockCursor: { on: '' , na: true } ,
	underlineCursor: { on: '' , na: true } ,
	blinkingUnderlineCursor: { on: '' , na: true } ,
	beamCursor: { on: '' , na: true } ,
	blinkingBeamCursor: { on: '' , na: true } ,

	// Not capable, fallback to mouseButton
	mouseDrag: { on: '\x1b[?1000h' , off: '\x1b[?1000l' , fb: true } ,
	mouseMotion: { on: '\x1b[?1000h' , off: '\x1b[?1000l' , fb: true } ,

	requestColor: { on: '%D' , na: true }	// not capable
} ) ;





/* Key Mapping */



const keymap = tree.extend( null , Object.create( xterm.keymap ) , {
	F1: '\x1b[11~' ,
	F2: '\x1b[12~' ,
	F3: '\x1b[13~' ,
	F4: '\x1b[14~' ,

	//SHIFT_F1: '\x1b[25~' ,	// no difference with F11
	//SHIFT_F2: '\x1b[26~' ,	// no difference with F12
	SHIFT_F3: '\x1b[25~' ,
	SHIFT_F4: '\x1b[26~' ,
	SHIFT_F5: '\x1b[28~' ,
	SHIFT_F6: '\x1b[29~' ,
	SHIFT_F7: '\x1b[31~' ,
	SHIFT_F8: '\x1b[32~' ,
	SHIFT_F9: '\x1b[33~' ,
	SHIFT_F10: '\x1b[34~' ,
	SHIFT_F11: '\x1b[23$' ,
	SHIFT_F12: '\x1b[24$' ,

	CTRL_F1: '\x1b[11^' ,
	CTRL_F2: '\x1b[12^' ,
	CTRL_F3: '\x1b[13^' ,
	CTRL_F4: '\x1b[14^' ,
	CTRL_F5: '\x1b[15^' ,
	CTRL_F6: '\x1b[17^' ,
	CTRL_F7: '\x1b[18^' ,
	CTRL_F8: '\x1b[19^' ,
	CTRL_F9: '\x1b[20^' ,
	CTRL_F10: '\x1b[21^' ,
	CTRL_F11: '\x1b[23^' ,
	CTRL_F12: '\x1b[24^' ,

	//CTRL_SHIFT_F1: '\x1b[11^' ,	// no difference with CTRL_F11
	//CTRL_SHIFT_F2: '\x1b[12^' ,	// no difference with CTRL_F12
	CTRL_SHIFT_F3: '\x1b[25^' ,
	CTRL_SHIFT_F4: '\x1b[26^' ,
	CTRL_SHIFT_F5: '\x1b[28^' ,
	CTRL_SHIFT_F6: '\x1b[29^' ,
	CTRL_SHIFT_F7: '\x1b[31^' ,
	CTRL_SHIFT_F8: '\x1b[32^' ,
	CTRL_SHIFT_F9: '\x1b[33^' ,
	CTRL_SHIFT_F10: '\x1b[34^' ,
	CTRL_SHIFT_F11: '\x1b[23@' ,
	CTRL_SHIFT_F12: '\x1b[24@'

} ) ;



const handler = Object.create( xterm.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 12 )
} ;



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	HTTP Requester

	Copyright (c) 2015 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
 * Natural Sort algorithm for Javascript - Version 0.8 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 */
module.exports = function( a , b ) {
	var re = /(^([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)?$|^0x[\da-fA-F]+$|\d+)/g ,
		sre = /^\s+|\s+$/g ,   // trim pre-post whitespace
		snre = /\s+/g ,        // normalize all whitespace to single ' ' character
		dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/ ,
		hre = /^0x[0-9a-f]+$/i ,
		ore = /^0/ ,
		i = function( s ) {
			return ( '' + s ).toLowerCase().replace( sre , '' ) ;
		} ,
		// convert all to strings strip whitespace
		x = i( a ) || '' ,
		y = i( b ) || '' ,
		// chunk/tokenize
		xN = x.replace( re , '\0$1\0' ).replace( /\0$/ , '' )
			.replace( /^\0/ , '' )
			.split( '\0' ) ,
		yN = y.replace( re , '\0$1\0' ).replace( /\0$/ , '' )
			.replace( /^\0/ , '' )
			.split( '\0' ) ,
		// numeric, hex or date detection
		xD = parseInt( x.match( hre ) , 16 ) || ( xN.length !== 1 && Date.parse( x ) ) ,
		yD = parseInt( y.match( hre ) , 16 ) || xD && y.match( dre ) && Date.parse( y ) || null ,
		normChunk = function( s , l ) {
			// normalize spaces; find floats not starting with '0', string or 0 if not defined (Clint Priest)
			return ( ! s.match( ore ) || l === 1 ) && parseFloat( s ) || s.replace( snre , ' ' ).replace( sre , '' ) || 0 ;	// jshint ignore:line
		} ,
		oFxNcL , oFyNcL ;
	// first try and sort Hex codes or Dates
	if ( yD ) {
		if ( xD < yD ) { return -1 ; }
		else if ( xD > yD ) { return 1 ; }
	}
	// natural sorting through split numeric strings and default strings
	for( var cLoc = 0 , xNl = xN.length , yNl = yN.length , numS = Math.max( xNl , yNl ) ; cLoc < numS ; cLoc ++ ) {
		oFxNcL = normChunk( xN[cLoc] , xNl ) ;
		oFyNcL = normChunk( yN[cLoc] , yNl ) ;
		// handle numeric vs string comparison - number < string - (Kyle Adams)
		if ( isNaN( oFxNcL ) !== isNaN( oFyNcL ) ) { return ( isNaN( oFxNcL ) ) ? 1 : -1 ; }
		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
		else if ( typeof oFxNcL !== typeof oFyNcL ) {
			oFxNcL += '' ;
			oFyNcL += '' ;
		}
		if ( oFxNcL < oFyNcL ) { return -1 ; }
		if ( oFxNcL > oFyNcL ) { return 1 ; }
	}
	return 0 ;
} ;



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack



const esc = tree.extend( null , Object.create( xterm256.esc ) , {
	// 24 bits colors
	color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
	bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' } ,

	// Cursor styles not supported
	blockCursor: { on: '' , na: true } ,
	blinkingBlockCursor: { on: '' , na: true } ,
	underlineCursor: { on: '' , na: true } ,
	blinkingUnderlineCursor: { on: '' , na: true } ,
	beamCursor: { on: '' , na: true } ,
	blinkingBeamCursor: { on: '' , na: true }
} ) ;





const keymap = Object.create( xterm256.keymap ) ;
const handler = Object.create( xterm256.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: __webpack_require__( 26 )
} ;



/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":204,"g":0,"b":0,"names":["red"]},{"r":78,"g":154,"b":6,"names":["green"]},{"r":196,"g":160,"b":0,"names":["yellow"]},{"r":52,"g":101,"b":164,"names":["blue"]},{"r":117,"g":80,"b":123,"names":["magenta"]},{"r":6,"g":152,"b":154,"names":["cyan"]},{"r":211,"g":215,"b":207,"names":["white"]},{"r":85,"g":87,"b":83,"names":["brightBlack","gray","grey"]},{"r":239,"g":41,"b":41,"names":["brightRed"]},{"r":138,"g":226,"b":52,"names":["brightGreen"]},{"r":252,"g":233,"b":79,"names":["brightYellow"]},{"r":114,"g":159,"b":207,"names":["brightBlue"]},{"r":173,"g":127,"b":168,"names":["brightMagenta"]},{"r":52,"g":226,"b":226,"names":["brightCyan"]},{"r":238,"g":238,"b":236,"names":["brightWhite"]}]

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const eterm = __webpack_require__( 17 ) ;

const esc = tree.extend( { own: true } , Object.create( xterm256.esc ) , eterm.esc , {
	color24bits: { on: '%D%D%D' , na: true } ,	// not capable
	bgColor24bits: { on: '%D%D%D' , na: true }	// not capable
} ) ;


// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of Eterm, thus we achieve a clean inheritance model without duplicated code.

module.exports = {
	esc: esc ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , eterm.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , eterm.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": false ,  // DEPRECATED
		"trueColor": false
	} ,
	colorRegister: eterm.colorRegister
} ;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const gnome = __webpack_require__( 18 ) ;



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack



const esc = tree.extend( { own: true } , Object.create( xterm256.esc ) , gnome.esc , {
	color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
	bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' }
} ) ;


// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of gnome, thus we achieve a clean inheritance model without duplicated code.

module.exports = {
	esc: esc ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , gnome.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , gnome.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: gnome.colorRegister
} ;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack



const esc = tree.extend( { own: true } , Object.create( xterm256.esc ) , {
	color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
	bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' }
} ) ;


// So far, we derivate from xterm-256color.

module.exports = {
	esc: esc ,
	keymap: Object.create( xterm256.keymap ) ,
	handler: Object.create( xterm256.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: __webpack_require__( 13 )
} ;



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":178,"g":24,"b":24,"names":["red"]},{"r":24,"g":178,"b":24,"names":["green"]},{"r":178,"g":104,"b":24,"names":["yellow","brown"]},{"r":24,"g":24,"b":178,"names":["blue"]},{"r":178,"g":24,"b":178,"names":["magenta"]},{"r":24,"g":178,"b":178,"names":["cyan"]},{"r":178,"g":178,"b":178,"names":["white"]},{"r":104,"g":104,"b":104,"names":["brightBlack","gray","grey"]},{"r":255,"g":84,"b":84,"names":["brightRed"]},{"r":84,"g":255,"b":84,"names":["brightGreen"]},{"r":255,"g":255,"b":84,"names":["brightYellow"]},{"r":84,"g":84,"b":255,"names":["brightBlue"]},{"r":255,"g":84,"b":255,"names":["brightMagenta"]},{"r":84,"g":255,"b":255,"names":["brightCyan"]},{"r":255,"g":255,"b":255,"names":["brightWhite"]}]

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const konsole = __webpack_require__( 19 ) ;



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack



const esc = tree.extend( { own: true } , Object.create( xterm256.esc ) , konsole.esc , {
	color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
	bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' }
} ) ;



// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of konsole, thus we achieve a clean inheritance model without duplicated code.

module.exports = {
	esc: esc ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , konsole.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , konsole.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: konsole.colorRegister
} ;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const string = __webpack_require__( 4 ) ;
const xterm = __webpack_require__( 3 ) ;
const gpm = __webpack_require__( 81 ) ;



// shortcuts
const bold = '\x1b[1m' ;
const noBold = '\x1b[22m' ;
const blink = '\x1b[5m' ;
const noBlink = '\x1b[25m' ;
const defaultColor = noBold + '\x1b[39m' ;		// back to the default color, most of time it is the same than .white
const bgDefaultColor = noBlink + '\x1b[49m' ;	// back to the default color, most of time it is the same than .bgBlack



const fgCursorTable = [
	0 , 3 , 5 , 1 , 6 , 2 , 4 , 7 ,
	8 , 11 , 13 , 9 , 14 , 10 , 12 , 15
] ;

const bgCursorTable = [
	0 , 4 , 2 , 6 , 1 , 5 , 3 , 7 ,
	8 , 12 , 10 , 14 , 9 , 13 , 11 , 15
] ;



const esc = tree.extend( null , Object.create( xterm.esc ) , {
	// Clear screen
	clear: { on: '\x1b[H\x1b[J' } ,

	// Linux console doesn't have bright color code, they are produced using 'bold' (which is not bold, by the way...)
	defaultColor: { on: defaultColor } ,
	black: { on: noBold + '\x1b[30m' , off: defaultColor } ,
	red: { on: noBold + '\x1b[31m' , off: defaultColor } ,
	green: { on: noBold + '\x1b[32m' , off: defaultColor } ,
	yellow: { on: noBold + '\x1b[33m' , off: defaultColor } ,
	blue: { on: noBold + '\x1b[34m' , off: defaultColor } ,
	magenta: { on: noBold + '\x1b[35m' , off: defaultColor } ,
	cyan: { on: noBold + '\x1b[36m' , off: defaultColor } ,
	white: { on: noBold + '\x1b[37m' , off: defaultColor } ,
	darkColor: { on: noBold + '\x1b[3%um' , off: defaultColor } ,	// should be called with a 0..7 integer
	brightBlack: { on: bold + '\x1b[30m' , off: defaultColor } ,
	brightRed: { on: bold + '\x1b[31m' , off: defaultColor } ,
	brightGreen: { on: bold + '\x1b[32m' , off: defaultColor } ,
	brightYellow: { on: bold + '\x1b[33m' , off: defaultColor } ,
	brightBlue: { on: bold + '\x1b[34m' , off: defaultColor } ,
	brightMagenta: { on: bold + '\x1b[35m' , off: defaultColor } ,
	brightCyan: { on: bold + '\x1b[36m' , off: defaultColor } ,
	brightWhite: { on: bold + '\x1b[37m' , off: defaultColor } ,
	brightColor: { on: bold + '\x1b[3%um' , off: defaultColor } ,	// should be called with a 0..7 integer

	// Linux console doesn't have bright bg color code, they are produced using 'blink' (which does not blink, by the way...)
	bgDefaultColor: { on: bgDefaultColor } ,
	bgBlack: { on: noBlink + '\x1b[40m' , off: bgDefaultColor } ,
	bgRed: { on: noBlink + '\x1b[41m' , off: bgDefaultColor } ,
	bgGreen: { on: noBlink + '\x1b[42m' , off: bgDefaultColor } ,
	bgYellow: { on: noBlink + '\x1b[43m' , off: bgDefaultColor } ,
	bgBlue: { on: noBlink + '\x1b[44m' , off: bgDefaultColor } ,
	bgMagenta: { on: noBlink + '\x1b[45m' , off: bgDefaultColor } ,
	bgCyan: { on: noBlink + '\x1b[46m' , off: bgDefaultColor } ,
	bgWhite: { on: noBlink + '\x1b[47m' , off: bgDefaultColor } ,
	bgDarkColor: { on: noBlink + '\x1b[4%um' , off: bgDefaultColor } ,	// should be called with a 0..7 integer
	bgBrightBlack: { on: blink + '\x1b[40m' , off: bgDefaultColor } ,
	bgBrightRed: { on: blink + '\x1b[41m' , off: bgDefaultColor } ,
	bgBrightGreen: { on: blink + '\x1b[42m' , off: bgDefaultColor } ,
	bgBrightYellow: { on: blink + '\x1b[43m' , off: bgDefaultColor } ,
	bgBrightBlue: { on: blink + '\x1b[44m' , off: bgDefaultColor } ,
	bgBrightMagenta: { on: blink + '\x1b[45m' , off: bgDefaultColor } ,
	bgBrightCyan: { on: blink + '\x1b[46m' , off: bgDefaultColor } ,
	bgBrightWhite: { on: blink + '\x1b[47m' , off: bgDefaultColor } ,
	bgBrightColor: { on: blink + '\x1b[4%um' , off: bgDefaultColor } ,	// should be called with a 0..7 integer

	// Those either does not produce anything or switch to some arbitrary color, so we will use our own settings instead
	dim: { on: bold + '\x1b[30m' , off: defaultColor } ,	// dim does not produce dim, so we use brightBlack instead
	underline: { on: blink + '\x1b[40m' , off: bgDefaultColor } ,	// underline does not produce underline, so we use bgBrightBlack instead
	italic: { on: '\x1b[1m' , off: '\x1b[22m' } ,	// italic does not produce italic, so we use bold instead (which is no bold but bright BTW)
	hidden: { on: '\x1b[40m\x1b[30m' , off: '\x1b[49m\x1b[39m' } ,	// hidden does not produce hidden, so we use black + bgBlack instead
	strike: { on: bold + '\x1b[30m' , off: defaultColor } ,	// strike does not produce strike, so we use brightBlack instead

	// Cursor styles
	hideCursor: { on: '\x1b[?1c' , off: '\x1b[?0c' } ,
	blockCursor: { on: '\x1b[?16;0;16c' } ,
	blinkingBlockCursor: { on: '\x1b[?6c' } ,
	underlineCursor: { on: '\x1b[?2c' } ,	// it's blinking anyway
	blinkingUnderlineCursor: { on: '\x1b[?2c' } ,
	beamCursor: { on: '' , na: true } ,	// do not exists
	blinkingBeamCursor: { on: '' , na: true } ,	// do not exists

	/* OSC */

	// Does not exist, silently drop it...
	windowTitle: { on: '%D' , na: true } ,
	iconName: { on: '%D' , na: true } ,
	cwd: { on: '%D' , na: true } ,
	notify: { on: '%D%D' , na: true } ,

	setDefaultColorRgb: { on: '\x1b]P7%x%x%x' } ,
	resetDefaultColorRgb: { on: '' , na: true } ,	// not possible? should be investigated...
	setDefaultBgColorRgb: { on: '\x1b]P0%x%x%x' } ,
	resetDefaultBgColorRgb: { on: '' , na: true } ,	// not possible? should be investigated...
	setHighlightBgColorRgb: { on: '%D%D%D' , na: true } ,	// not possible? should be investigated...
	resetHighlightBgColorRgb: { on: '' , na: true } ,	// not possible? should be investigated...
	setColorLL: { on: '\x1b]P%h%x%x%x' } ,
	resetColorLL: { on: '%D' , na: true } ,	// not possible? should be investigated...
	setFont: { on: '%D' , na: true } ,	// not capable
	requestColor: { on: '%D' , na: true } ,	// not capable

	xtgettcapLL: { on: '%D' , na: true } ,	// not capable

	/* Functions */

	color256: {
		on: '%[color256:%a]F' ,
		off: defaultColor ,
		fb: true ,
		handler: function( register ) {
			if ( typeof register !== 'number' ) { return '' ; }
			if ( register < 0 || register > 255 ) { return '' ; }

			// If the register is greater than 15, find the 0..15 register that is close to it
			if ( register > 15 ) {
				register = this.root.registerForRgb( this.root.rgbForRegister( register ) , 0 , 15 ) ;
			}

			//return string.format.call( this.root.escHandler , this.root.esc.color.on , register ) ;
			return this.root.escHandler.color( register ) ;
		}
	} ,

	bgColor256: {
		on: '%[bgColor256:%a]F' ,
		off: bgDefaultColor ,
		fb: true ,
		handler: function( register ) {
			if ( typeof register !== 'number' ) { return '' ; }
			if ( register < 0 || register > 255 ) { return '' ; }

			// If the register is greater than 15, find the 0..15 register that is close to it
			if ( register > 15 ) {
				register = this.root.registerForRgb( this.root.rgbForRegister( register ) , 0 , 15 ) ;
			}

			//return string.format.call( this.root.escHandler , this.root.esc.bgColor.on , register ) ;
			return this.root.escHandler.bgColor( register ) ;
		}
	} ,

	setCursorColor: {
		on: '%[setCursorColor:%a%a]F' ,
		handler: function( bg , fg ) {
			if ( typeof fg !== 'number' || typeof bg !== 'number' ) { return '' ; }

			fg = Math.floor( fg ) ;
			bg = Math.floor( bg ) ;

			if ( fg < 0 || fg > 255 || bg < 0 || bg > 255 ) { return '' ; }

			// If the register is greater than 15, find the 0..15 register that is close to it
			if ( fg > 15 ) { fg = this.root.registerForRgb( this.root.rgbForRegister( fg ) , 0 , 15 ) ; }
			if ( bg > 15 ) { bg = this.root.registerForRgb( this.root.rgbForRegister( bg ) , 0 , 15 ) ; }

			//console.log( 'fg bg: ' , fg , bg ) ;

			fg = fgCursorTable[ fg ] ;
			bg = bgCursorTable[ bg ] ;

			return string.format( '\x1b[?16;%u;%uc' , fg , bg * 16 ) ;
		}
	} ,

	// It doesn't support RGB, but we can choose an ANSI color close to it
	setCursorColorRgb: {
		on: '%[setCursorColorRgb:%a%a%a]F' ,
		handler: function( r , g , b ) {
			if ( typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number' ) { return '' ; }

			r = Math.floor( r ) ;
			g = Math.floor( g ) ;
			b = Math.floor( b ) ;

			if ( r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 ) { return '' ; }

			var register = this.root.registerForRgb( r , g , b , 0 , 15 ) ;

			//console.log( 'Register:' , register ) ;

			return this.root.str.setCursorColor( register , 0 ) ;
		}
	} ,

	/*
		This part is a bit of a nasty hack: originally, escape sequence should produce... well... an escape sequence...
		Here an empty string is returned, but some underlying actions are performed.
		This is because the "Linux Console" terminal does not support the mouse, so nothing should be sent to it,
		however we will try to connect to the GPM daemon if it exists.
		It is not very clean, ideally this should be an advanced (not chainable) feature, but doing so would break
		compatibility with other terminal driver.
	*/

	// Mouse 'button' mode
	mouseButton: {
		on: '%[mouseButton]F' ,
		off: '%[mouseButton_off]F' ,
		handler: function() { gpmMouse.call( this , 'button' ) ; return '' ; } ,
		offHandler: function() { gpmMouse.call( this , false ) ; return '' ; }
	} ,

	// Mouse 'drag' mode
	mouseDrag: {
		on: '%[mouseDrag]F' ,
		off: '%[mouseDrag_off]F' ,
		handler: function() { gpmMouse.call( this , 'drag' ) ; return '' ; } ,
		offHandler: function() { gpmMouse.call( this , false ) ; return '' ; }
	} ,

	// Mouse 'motion' mode
	mouseMotion: {
		on: '%[mouseMotion]F' ,
		off: '%[mouseMotion_off]F' ,
		handler: function() { gpmMouse.call( this , 'motion' ) ; return '' ; } ,
		offHandler: function() { gpmMouse.call( this , false ) ; return '' ; }
	} ,

	mouseHilight: { on: '' , off: '' } ,
	mouseSGR: { on: '' , off: '' } ,
	focusEvent: { on: '' , off: '' }
} ) ;



// This is the code that handle GPM.
// GPM should be installed and the service should be running (on Fedora: dnf install gpm && systemctl start gpm)
function gpmMouse( mode ) {
	if ( this.root.gpmHandler ) {
		this.root.gpmHandler.close() ;
		this.root.gpmHandler = undefined ;
	}

	if ( ! mode ) {
		//console.log( '>>>>> off <<<<<' ) ;
		return ;
	}

	this.root.gpmHandler = gpm.createHandler( { stdin: this.root.stdin , raw: false , mode: mode } ) ;

	//console.log( '>>>>>' , mode , '<<<<<' ) ;

	// Simply re-emit event
	this.root.gpmHandler.on( 'mouse' , ( name , data ) => {
		this.root.emit( 'mouse' , name , data ) ;
	} ) ;
	this.root.gpmHandler.on( 'error' , ( /* error */ ) => {
		//console.log( 'mouseDrag error:' , error ) ;
	} ) ;
}




/* Key Mapping */



const keymap = tree.extend( null , Object.create( xterm.keymap ) , {
	F1: '\x1b[[A' ,
	F2: '\x1b[[B' ,
	F3: '\x1b[[C' ,
	F4: '\x1b[[D' ,
	F5: '\x1b[[E' ,

	SHIFT_F1: '\x1b[25~' ,
	SHIFT_F2: '\x1b[26~' ,
	SHIFT_F3: '\x1b[28~' ,
	SHIFT_F4: '\x1b[29~' ,
	SHIFT_F5: '\x1b[31~' ,
	SHIFT_F6: '\x1b[32~' ,
	SHIFT_F7: '\x1b[33~' ,
	SHIFT_F8: '\x1b[34~' ,
	// SHIFT F9-F12 is not supported by the Linux console

	// Application Keypad
	KP_NUMLOCK: '\x1bOP' ,
	KP_DIVIDE: '\x1bOQ' ,
	KP_MULTIPLY: '\x1bOR' ,
	KP_MINUS: '\x1bOS' ,
	KP_0: '\x1bOp' ,
	KP_1: '\x1bOq' ,
	KP_2: '\x1bOr' ,
	KP_3: '\x1bOs' ,
	KP_4: '\x1bOt' ,
	KP_5: '\x1bOu' ,
	KP_6: '\x1bOv' ,
	KP_7: '\x1bOw' ,
	KP_8: '\x1bOx' ,
	KP_9: '\x1bOy' ,
	KP_PLUS: '\x1bOl' ,
	KP_DELETE: '\x1bOn' ,
	KP_ENTER: '\x1bOM'

} ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: Object.create( xterm.handler ) ,
	support: {
		deltaEscapeSequence: false ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,

	// This is the standard VGA palette, used by restorepalette
	// http://linux.die.net/man/1/restorepalette
	colorRegister: __webpack_require__( 20 )
} ;



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





// Used when there is no terminal (e.g.: pipe)



const esc = {

	/* Common sequences */

	// Reset the terminal
	reset: { on: '' } ,

	/* Cursor sequences */

	saveCursor: { on: '' } ,
	restoreCursor: { on: '' } ,

	up: { on: '%D' } ,
	down: { on: '%D' } ,
	right: { on: '%D' } ,
	left: { on: '%D' } ,
	nextLine: { on: '%D' } ,
	previousLine: { on: '%D' } ,

	//column: { on: '%D' } ,
	column: {
		on: '%[column:%a]F' ,
		handler: x => {
			if ( typeof x !== 'number' || ! x || x <= 1 || x === Infinity ) { return '' ; }
			return ' '.repeat( x - 1 ) ;
		}
	} ,
	row: { on: '%D' } ,
	moveTo: { on: '%D%D' , optimized: () => '' } ,
	//moveToBottomLeft: { on: '' } ,	// Not widely supported
	hideCursor: { on: '' , off: '' } ,

	tabSet: { on: '' } ,	// HTS
	tabClear: { on: '' } ,	// TBC
	tabClearAll: { on: '' } ,	// TBC
	forwardTab: { on: '%D' } ,	// CHT
	backwardTab: { on: '%D' } ,	// CBT

	// Cursor styles
	blockCursor: { on: '' } ,
	blinkingBlockCursor: { on: '' } ,
	underlineCursor: { on: '' } ,
	blinkingUnderlineCursor: { on: '' } ,
	beamCursor: { on: '' } ,
	blinkingBeamCursor: { on: '' } ,

	/* Editing sequences */

	clear: { on: '' } ,
	eraseDisplayBelow: { on: '' } ,
	eraseDisplayAbove: { on: '' } ,
	eraseDisplay: { on: '' } ,
	eraseSavedLine: { on: '' } ,
	eraseLineAfter: { on: '' } ,
	eraseLineBefore: { on: '' } ,
	eraseLine: { on: '' } ,
	insertLine: { on: '%D' } ,
	deleteLine: { on: '%D' } ,
	insert: { on: '%D' } ,	// insert char
	'delete': { on: '%D' } ,	// delete char
	backDelete: { on: '' } ,	// Backspace-like, left(1) followed by delete(1)
	scrollUp: { on: '%D' } ,	// scroll up n lines, new lines are added at the bottom
	scrollDown: { on: '%D' } ,	// scroll down n lines, new lines are added at the top
	scrollingRegion: { on: '%D%D' } ,	// top line, bottom line, scrolling affect only this region,
	resetScrollingRegion: { on: '' } ,

	// This set the alternate screen buffer, do not work on many term, due to this titeInhibit shit...
	alternateScreenBuffer: { on: '' , off: '' } ,

	/* Misc sequences */

	beep: { on: '' } ,	// Deprecated -- use bell instead
	bell: { on: '' } ,	// Emit an audible bell

	/* Style sequences */

	styleReset: { on: '' } ,

	bold: { on: '' , off: '' } ,		// here we use the dim.off code (22) that have a better support than (21), for God-only known reason...
	dim: { on: '' , off: '' } ,		// dim: darker, 'off' remove removes also bold/bright
	italic: { on: '' , off: '' } ,
	underline: { on: '' , off: '' } ,
	blink: { on: '' , off: '' } ,
	inverse: { on: '' , off: '' } ,
	hidden: { on: '' , off: '' } ,	// invisible, but can be copy/paste'd
	strike: { on: '' , off: '' } ,

	// Foreground color
	defaultColor: { on: '' } ,
	black: { on: '' , off: '' } ,
	red: { on: '' , off: '' } ,
	green: { on: '' , off: '' } ,
	yellow: { on: '' , off: '' } ,
	blue: { on: '' , off: '' } ,
	magenta: { on: '' , off: '' } ,
	cyan: { on: '' , off: '' } ,
	white: { on: '' , off: '' } ,
	darkColor: { on: '%D' , off: '' } ,	// should be called with a 0..7 integer
	brightBlack: { on: '' , off: '' } ,
	brightRed: { on: '' , off: '' } ,
	brightGreen: { on: '' , off: '' } ,
	brightYellow: { on: '' , off: '' } ,
	brightBlue: { on: '' , off: '' } ,
	brightMagenta: { on: '' , off: '' } ,
	brightCyan: { on: '' , off: '' } ,
	brightWhite: { on: '' , off: '' } ,
	brightColor: { on: '%D' , off: '' } ,	// should be called with a 0..7 integer

	// Background color
	bgDefaultColor: { on: '' } ,
	bgBlack: { on: '' , off: '' } ,
	bgRed: { on: '' , off: '' } ,
	bgGreen: { on: '' , off: '' } ,
	bgYellow: { on: '' , off: '' } ,
	bgBlue: { on: '' , off: '' } ,
	bgMagenta: { on: '' , off: '' } ,
	bgCyan: { on: '' , off: '' } ,
	bgWhite: { on: '' , off: '' } ,
	bgDarkColor: { on: '%D' , off: '' } ,	// should be called with a 0..7 integer
	bgBrightBlack: { on: '' , off: '' } ,
	bgBrightRed: { on: '' , off: '' } ,
	bgBrightGreen: { on: '' , off: '' } ,
	bgBrightYellow: { on: '' , off: '' } ,
	bgBrightBlue: { on: '' , off: '' } ,
	bgBrightMagenta: { on: '' , off: '' } ,
	bgBrightCyan: { on: '' , off: '' } ,
	bgBrightWhite: { on: '' , off: '' } ,
	bgBrightColor: { on: '%D' , off: '' } ,	// should be called with a 0..7 integer

	/* Input / Output sequences */

	// Request terminal ID
	// requestTerminalId: { on: '' } ,

	// Terminal will send the cursor coordinate only one time
	requestCursorLocation: { on: '' , na: true } ,

	// Terminal will send the cursor coordinate only one time
	requestScreenSize: { on: '' } ,

	// Terminal will send the rgb color for a register
	requestColor: { on: '%D' , na: true } ,

	// Terminal will send event on button pressed with mouse position
	mouseButton: { on: '' , off: '' } ,

	// Terminal will send position of the column hilighted
	mouseHilight: { on: '' , off: '' } ,

	// Terminal will send event on button pressed and mouse motion as long as a button is down, with mouse position
	mouseDrag: { on: '' , off: '' } ,

	// Terminal will send event on button pressed and motion
	mouseMotion: { on: '' , off: '' } ,

	// Another mouse protocol that extend coordinate mapping (without it, it supports only 223 rows and columns)
	mouseSGR: { on: '' , off: '' } ,

	// Terminal will send event when it gains and loses focus
	focusEvent: { on: '' , off: '' } ,

	// Should allow keypad to send different code than 0..9 keys but it does not works on some setup
	applicationKeypad: { on: '' , off: '' } ,

	/* OSC - OS Control sequences: may be unavailable on some context */

	// Set the title of an xterm-compatible window
	windowTitle: { on: '%D' } ,
	iconName: { on: '%D' } ,
	cwd: { on: '%D' } ,
	notify: { on: '%D%D' } ,

	// Those sequences accept either #%x%x%x or rgb:%d/%d/%d
	// Sometime rgb:%d/%d/%d should be encoded into the 0..65535 range, so #%x%x%x is more reliable
	setCursorColorRgb: { on: '%D%D%D' } ,	// it want rgb as parameter, like rgb:127/0/32
	resetCursorColorRgb: { on: '' } ,
	setDefaultColorRgb: { on: '%D%D%D' } ,	// not widely supported
	resetDefaultColorRgb: { on: '' } ,
	setDefaultBgColorRgb: { on: '%D%D%D' } ,	// not widely supported
	resetDefaultBgColorRgb: { on: '' } ,
	setHighlightBgColorRgb: { on: '%D%D%D' } ,	// not widely supported
	resetHighlightBgColorRgb: { on: '' } ,
	setColorLL: { on: '%D%D%D%D' } ,	// LL= Low Level
	resetColorLL: { on: '%D' } ,

	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	setFont: { on: '%D' } ,	// ->|TODOC|<- rarely supported
	color24bits: { on: '%D%D%D' , na: true } ,	// not capable
	bgColor24bits: { on: '%D%D%D' , na: true } ,	// not capable

	/* Functions */

	color256: { on: '%D' , off: '' } ,
	bgColor256: { on: '%D' , off: '' } ,
	setCursorColor: { on: '%D%D' , off: '' }
} ;



const handler = {} ;
const keymap = {} ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: false ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	// Whatever...
	colorRegister: __webpack_require__( 20 )
} ;



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256Generic = __webpack_require__( 21 ) ;



const keymap = tree.extend( null , Object.create( xterm256Generic.keymap ) , {
	UP: '\x1b[A' ,
	DOWN: '\x1b[B' ,
	RIGHT: '\x1b[C' ,
	LEFT: '\x1b[D' ,
	DELETE: '\x7f' ,
	SHIFT_F1: '\x1b[1;2P' ,
	SHIFT_F2: '\x1b[1;2Q' ,
	SHIFT_F3: '\x1b[1;2R' ,
	SHIFT_F4: '\x1b[1;2S' ,
	CTRL_F1: '\x1bOP' ,
	CTRL_F2: '\x1bOQ' ,
	CTRL_F3: '\x1bOR' ,
	CTRL_F4: '\x1bOS' ,
	CTRL_F5: '\x1b[15~' ,
	CTRL_F6: '\x1b[17~' ,
	CTRL_F7: '\x1b[18~' ,
	CTRL_F8: '\x1b[19~' ,
	CTRL_F9: '\x1b[20~' ,
	CTRL_F10: '\x1b[21~' ,
	CTRL_F11: '\x1b[23~' ,
	CTRL_F12: '\x1b[24~' ,
	CTRL_SHIFT_F1: '\x1bOP' ,
	CTRL_SHIFT_F2: '\x1bOQ' ,
	CTRL_SHIFT_F3: '\x1bOR' ,
	CTRL_SHIFT_F4: '\x1bOS' ,
	CTRL_SHIFT_F5: '\x1b[15~' ,
	CTRL_SHIFT_F6: '\x1b[17~' ,
	CTRL_SHIFT_F7: '\x1b[18~' ,
	CTRL_SHIFT_F8: '\x1b[19~' ,
	CTRL_SHIFT_F9: '\x1b[20~' ,
	CTRL_SHIFT_F10: '\x1b[21~' ,
	CTRL_SHIFT_F11: '\x1b[23~' ,
	CTRL_SHIFT_F12: '\x1b[24~' ,
	ALT_UP: '\x1b\x1b[A' ,
	ALT_DOWN: '\x1b\x1b[B' ,
	ALT_RIGHT: '\x1b\x1b[C' ,
	ALT_LEFT: '\x1b\x1b[D'
	//SHIFT_DELETE: '\x7f' ,
	//ALT_BACKSPACE: '\x7f' ,
	//ALT_TAB: '\x09' ,
	//CTRL_ALT_SPACE: ' ' ,

	/*
	ALT_A: '\xc3\xa5' ,
	CTRL_ALT_A: '\x01' ,
	ALT_SHIFT_A: '\xc3\x85' ,
	ALT_B: '\xe2\x88\xab' ,
	CTRL_ALT_B: '\x02' ,
	ALT_SHIFT_B: '\xc4\xb1' ,
	ALT_C: '\xc3\xa7' ,
	CTRL_ALT_C: '\x03' ,
	ALT_SHIFT_C: '\xc3\x87' ,
	ALT_D: '\xe2\x88\x82' ,
	CTRL_ALT_D: '\x04' ,
	ALT_SHIFT_D: '\xc3\x8e' ,
	ALT_E: '\xc2\xb4' ,
	CTRL_ALT_E: '\x05' ,
	ALT_SHIFT_E: '\xc2\xb4' ,
	ALT_F: '\xc6\x92' ,
	CTRL_ALT_F: '\x06' ,
	ALT_SHIFT_F: '\xc3\x8f' ,
	ALT_G: '\xc2\xa9' ,
	CTRL_ALT_G: '\x07' ,
	ALT_SHIFT_G: '\xcb\x9d' ,
	ALT_H: '\xcb\x99' ,
	CTRL_ALT_H: '\x08' ,
	ALT_SHIFT_H: '\xc3\x93' ,
	ALT_I: '\xcb\x86' ,
	CTRL_ALT_I: '\x09' ,
	ALT_SHIFT_I: '\xcb\x86' ,
	ALT_J: '\xe2\x88\x86' ,
	CTRL_ALT_J: '\x0a' ,
	ALT_SHIFT_J: '\xc3\x94' ,
	ALT_K: '\xcb\x9a' ,
	CTRL_ALT_K: '\x0b' ,
	ALT_SHIFT_K: '\xef\xa3\xbf' ,
	ALT_L: '\xc2\xac' ,
	CTRL_ALT_L: '\x0c' ,
	ALT_SHIFT_L: '\xc3\x92' ,
	ALT_M: '\xc2\xb5' ,
	ALT_SHIFT_M: '\xc3\x82' ,
	ALT_N: '\xcb\x9c' ,
	CTRL_ALT_N: '\x0e' ,
	ALT_SHIFT_N: '\xcb\x9c' ,
	ALT_O: '\xc3\xb8' ,
	CTRL_ALT_O: '\x0f' ,
	ALT_SHIFT_O: '\xc3\x98' ,
	ALT_P: '\xcf\x80' ,
	CTRL_ALT_P: '\x10' ,
	ALT_SHIFT_P: '\xe2\x88\x8f' ,
	ALT_Q: '\xc5\x93' ,
	CTRL_ALT_Q: '\x11' ,
	ALT_SHIFT_Q: '\xc5\x92' ,
	ALT_R: '\xc2\xae' ,
	CTRL_ALT_R: '\x12' ,
	ALT_SHIFT_R: '\xe2\x80\xb0' ,
	ALT_S: '\xc3\x9f' ,
	CTRL_ALT_S: '\x13' ,
	ALT_SHIFT_S: '\xc3\x8d' ,
	ALT_T: '\xe2\x80\xa0' ,
	CTRL_ALT_T: '\x14' ,
	ALT_SHIFT_T: '\xcb\x87' ,
	ALT_U: '\xc2\xa8' ,
	CTRL_ALT_U: '\x15' ,
	ALT_SHIFT_U: '\xc2\xa8' ,
	ALT_V: '\xe2\x88\x9a' ,
	CTRL_ALT_V: '\x16' ,
	ALT_SHIFT_V: '\xe2\x97\x8a' ,
	ALT_W: '\xe2\x88\x91' ,
	ALT_SHIFT_W: '\xe2\x80\x9e' ,
	ALT_X: '\xe2\x89\x88' ,
	CTRL_ALT_X: '\x18' ,
	ALT_SHIFT_X: '\xcb\x9b' ,
	ALT_Y: '\\' ,
	CTRL_ALT_Y: '\x19' ,
	ALT_SHIFT_Y: '\xc3\x81' ,
	ALT_Z: '\xce\xa9' ,
	CTRL_ALT_Z: '\x1a' ,
	ALT_SHIFT_Z: '\xc2\xb8'
	*/
} ) ;



module.exports = {
	esc: Object.create( xterm256Generic.esc ) ,
	keymap: keymap ,
	// keymap: keymap ,
	handler: Object.create( xterm256Generic.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": undefined ,	// DEPRECATED
		"trueColor": undefined	// maybe, maybe not
	} ,
	colorRegister: __webpack_require__( 13 )
} ;



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const rxvt = __webpack_require__( 22 ) ;

const esc = tree.extend( { own: true } , Object.create( xterm256.esc ) , rxvt.esc , {

	color24bits: { on: '%D%D%D' , na: true } ,	// not capable
	bgColor24bits: { on: '%D%D%D' , na: true }	// not capable
} ) ;


// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of rxvt, thus we achieve a clean inheritance model without duplicated code.

module.exports = {
	esc: esc ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , rxvt.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , rxvt.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: rxvt.colorRegister
} ;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;



const esc = tree.extend( null , Object.create( xterm256.esc ) , {
	// Not supported...
	setClipboardLL: { na: true } ,
	requestClipboard: { na: true } ,

	// Cursor styles

	// Cursor styles not supported
	blockCursor: { on: '' , na: true } ,
	blinkingBlockCursor: { on: '' , na: true } ,
	underlineCursor: { on: '' , na: true } ,
	blinkingUnderlineCursor: { on: '' , na: true } ,
	beamCursor: { on: '' , na: true } ,
	blinkingBeamCursor: { on: '' , na: true }
} ) ;





const keymap = Object.create( xterm256.keymap ) ;
const handler = Object.create( xterm256.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": false ,
		"24bitsColors": false ,	// DEPRECATED
		"trueColor": false
	} ,
	colorRegister: __webpack_require__( 37 )
} ;



/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":170,"g":0,"b":0,"names":["red"]},{"r":0,"g":170,"b":0,"names":["green"]},{"r":170,"g":85,"b":0,"names":["yellow","brown"]},{"r":0,"g":0,"b":170,"names":["blue"]},{"r":170,"g":0,"b":170,"names":["magenta"]},{"r":0,"g":170,"b":170,"names":["cyan"]},{"r":170,"g":170,"b":170,"names":["white"]},{"r":85,"g":85,"b":85,"names":["brightBlack","gray","grey"]},{"r":255,"g":85,"b":85,"names":["brightRed"]},{"r":85,"g":255,"b":85,"names":["brightGreen"]},{"r":255,"g":255,"b":85,"names":["brightYellow"]},{"r":85,"g":85,"b":255,"names":["brightBlue"]},{"r":255,"g":85,"b":255,"names":["brightMagenta"]},{"r":85,"g":255,"b":255,"names":["brightCyan"]},{"r":255,"g":255,"b":255,"names":["brightWhite"]}]

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const xtermGeneric = __webpack_require__( 8 ) ;



// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of xterm.generic.js, thus we achieve a clean inheritance model without duplicated code.



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack


module.exports = {
	esc: tree.extend( { own: true } , Object.create( xterm256.esc ) , xtermGeneric.esc , {
		color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
		bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' }
	} ) ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , xtermGeneric.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , xtermGeneric.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: __webpack_require__( 9 )
} ;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const xterm256 = __webpack_require__( 2 ) ;
const xtermGeneric = __webpack_require__( 8 ) ;


// Fail-safe xterm-compatible.

// So far, we derivate from xterm-256color and then just add specific things (owned properties)
// of xterm.generic.js, thus we achieve a clean inheritance model without duplicated code.



// Remove colors
const defaultColor = '\x1b[39m' ; // back to the default color, most of time it is the same than .white
const bgDefaultColor = '\x1b[49m' ;   // back to the default color, most of time it is the same than .bgBlack


module.exports = {
	esc: tree.extend( { own: true } , Object.create( xterm256.esc ) , xtermGeneric.esc , {
		color24bits: { on: '\x1b[38;2;%u;%u;%um' , off: defaultColor , optimized: ( r , g , b ) => '\x1b[38;2;' + r + ';' + g + ';' + b + 'm' } ,
		bgColor24bits: { on: '\x1b[48;2;%u;%u;%um' , off: bgDefaultColor , optimized: ( r , g , b ) => '\x1b[48;2;' + r + ';' + g + ';' + b + 'm' }
	} ) ,
	keymap: tree.extend( { own: true } , Object.create( xterm256.keymap ) , xtermGeneric.keymap ) ,
	handler: tree.extend( { own: true } , Object.create( xterm256.handler ) , xtermGeneric.handler ) ,
	support: {
		deltaEscapeSequence: true ,
		"256colors": true ,
		"24bitsColors": true ,	// DEPRECATED
		"trueColor": true
	} ,
	colorRegister: __webpack_require__( 9 )
} ;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	Ideally, this should be done using a graph algorithm, but we will just brute-force it for instance...
*/

module.exports = function autoComplete( array , startString , returnAlternatives , prefix , postfix ) {
	var i , j , exitLoop , candidate = [] , completed = startString , hasCompleted = false ;

	if ( ! prefix ) { prefix = '' ; }
	if ( ! postfix ) { postfix = '' ; }

	for ( i = 0 ; i < array.length ; i ++ ) {
		if ( array[ i ].slice( 0 , startString.length ) === startString ) { candidate.push( array[ i ] ) ; }
	}

	if ( ! candidate.length ) { return prefix + completed + postfix ; }

	if ( candidate.length === 1 ) { return prefix + candidate[ 0 ] + postfix ; }


	// Multiple candidate, complete only the part they have in common

	j = startString.length ;

	exitLoop = false ;

	for ( j = startString.length ; j < candidate[ 0 ].length ; j ++ ) {
		for ( i = 1 ; i < candidate.length ; i ++ ) {
			if ( candidate[ i ][ j ] !== candidate[ 0 ][ j ] ) { exitLoop = true ; break ; }
		}

		if ( exitLoop ) { break ; }

		completed += candidate[ 0 ][ j ] ;
		hasCompleted = true ;
	}

	if ( returnAlternatives && ! hasCompleted ) {
		candidate.prefix = prefix ;
		candidate.postfix = postfix ;
		return candidate ;
	}

	return prefix + completed + postfix ;
} ;



/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = [{"r":0,"g":0,"b":0,"names":["black"]},{"r":180,"g":0,"b":0,"names":["red"]},{"r":0,"g":180,"b":0,"names":["green"]},{"r":180,"g":180,"b":0,"names":["yellow"]},{"r":0,"g":0,"b":180,"names":["blue"]},{"r":180,"g":0,"b":180,"names":["magenta"]},{"r":0,"g":180,"b":180,"names":["cyan"]},{"r":220,"g":220,"b":220,"names":["white"]},{"r":55,"g":55,"b":55,"names":["brightBlack","gray","grey"]},{"r":250,"g":0,"b":0,"names":["brightRed"]},{"r":0,"g":250,"b":0,"names":["brightGreen"]},{"r":250,"g":250,"b":0,"names":["brightYellow"]},{"r":0,"g":0,"b":250,"names":["brightBlue"]},{"r":250,"g":0,"b":250,"names":["brightMagenta"]},{"r":0,"g":250,"b":250,"names":["brightCyan"]},{"r":250,"g":250,"b":250,"names":["brightWhite"]}]

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;
const string = __webpack_require__( 4 ) ;

__webpack_require__( 96 ) ;
const execAsync = __webpack_require__( 7 ).execAsync ;
const execFileAsync = __webpack_require__( 7 ).execFileAsync ;
const spawn = __webpack_require__( 7 ).spawn ;



const XCLIP_SELECTION_ARG = {
	c: 'clipboard' ,
	p: 'primary' ,
	s: 'secondary'
} ;



if ( process.platform === 'linux' ) {
	exports.getClipboard = async ( source ) => {
		var arg = XCLIP_SELECTION_ARG[ source[ 0 ] ] || 'clipboard' ;
		return await execFileAsync( 'xclip' , [ '-o' , '-selection' , arg ] ) ;
	} ;

	exports.setClipboard = async ( str , source ) => {
		var promise = new Promise() ;
		var arg = XCLIP_SELECTION_ARG[ source[ 0 ] ] || 'clipboard' ;
		var xclip = spawn( 'xclip' , [ '-i' , '-selection' , arg ] ) ;

		xclip.on( 'error' , error => {
			//console.error( 'xclip error:' , error ) ;
			promise.reject( error ) ;
		} ) ;

		xclip.on( 'exit' , code => {
			//console.log( 'xclip exited with code:' , code ) ;
			if ( code !== 0 ) { promise.reject( code ) ; }
			else { promise.resolve() ; }
		} ) ;

		// Send the string to push to the clipboard
		xclip.stdin.end( str ) ;

		return promise ;
	} ;
}
else {
	exports.getClipboard = () => Promise.reject( new Error( 'No clipboard manipulation program found' ) ) ;
	exports.setClipboard = () => Promise.reject( new Error( 'No clipboard manipulation program found' ) ) ;
}



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(45);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var term = __webpack_require__(5).terminal;

term('shell> ');

var autoComplete = [
'dnf install',
'dnf install nodejs',
'dnf search',
'sudo',
'sudo dnf install',
'sudo dnf install nodejs',
'sudo dnf search'];


term.inputField(
{
	autoComplete: autoComplete,
	autoCompleteHint: true,
	autoCompleteMenu: true,
	tokenHook: function tokenHook(token, isEndOfInput, previousTokens, term, config) {
		var previousText = previousTokens.join(' ');

		switch (token) {

			case 'sudo':
				config.style = term.red;
				return previousTokens.length ? null : term.bold.red;
			case 'dnf':
				return previousText === '' || previousText === 'sudo' ?
				term.brightMagenta : null;
			case 'install':
				config.style = term.brightBlue;
				config.hintStyle = term.brightBlack.italic;
				return previousText === 'dnf' || previousText === 'sudo dnf' ?
				term.brightYellow : null;
			case 'search':
				config.style = term.brightBlue;
				return previousText === 'dnf' || previousText === 'sudo dnf' ?
				term.brightCyan : null;}

	} },

function (error, input) {
	term.green("\nYour command is: '%s'\n", input);
	process.exit();
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Lazyness

	Copyright (c) 2018 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





function Lazyness( require_ ) {
	if ( ! this || ! ( this instanceof Lazyness ) ) { return new Lazyness( require_ ) ; }
	this.require = require_ ;
}

module.exports = Lazyness ;



// Define a lazy property
Lazyness.property = ( object , property , fn , enumerable ) => {
	Object.defineProperty( object , property , {
		configurable: true ,
		enumerable: !! enumerable ,

		// Must be a function, not =>
		get: function() {
			var value = fn( object , property ) ;

			Object.defineProperty( object , property , {
				configurable: true ,
				enumerable: !! enumerable ,
				writable: false ,
				value: value
			} ) ;

			return value ;
		}
	} ) ;

	return object ;
} ;

Lazyness.prototype.property = Lazyness.property ;



// Multiple properties at once in a property object
Lazyness.properties = ( object , properties , enumerable ) => {
	Object.keys( properties ).forEach( property => {
		Lazyness.property( object , property , properties[ property ] , enumerable ) ;
	} ) ;

	return object ;
} ;

Lazyness.prototype.properties = Lazyness.properties ;



// Define a lazy property for instances (call it on a prototype)
// Almost the same than .property() except than it use 'this' in the getter instead of 'object'
Lazyness.instanceProperty = ( object , property , fn , enumerable ) => {
	Object.defineProperty( object , property , {
		configurable: true ,
		enumerable: !! enumerable ,

		// Must be a function, not =>
		get: function() {
			var value = fn( this , property ) ;

			Object.defineProperty( this , property , {
				configurable: true ,
				enumerable: !! enumerable ,
				writable: false ,
				value: value
			} ) ;

			return value ;
		}
	} ) ;

	return object ;
} ;

Lazyness.prototype.instanceProperty = Lazyness.instanceProperty ;



// Multiple properties for instances (call it on a prototype)
Lazyness.instanceProperties = ( object , properties , enumerable ) => {
	Object.keys( properties ).forEach( property => {
		Lazyness.property( object , property , properties[ property ] , enumerable ) ;
	} ) ;

	return object ;
} ;

Lazyness.prototype.instanceProperties = Lazyness.instanceProperties ;



// Lazy value
Lazyness.value = fn => {
	var firstTime = true , value ;

	// Must be a function, not =>
	return function() {
		if ( firstTime ) {
			value = fn() ;
			firstTime = false ;
		}

		return value ;
	} ;
} ;

Lazyness.prototype.value = Lazyness.value ;



// Lazy require, return a Proxy
Lazyness.require = function( require_ , moduleId ) {
	var firstTime = true , module_ ;

	return new Proxy( ( () => {} ) , {
		construct: ( target , args ) => {
			if ( firstTime ) {
				module_ = require_( moduleId ) ;
				firstTime = false ;
			}

			return Reflect.construct( module_ , args ) ;
		} ,
		apply: ( target , thisArg , args ) => {
			if ( firstTime ) {
				module_ = require_( moduleId ) ;
				firstTime = false ;
			}

			return Reflect.apply( module_ , thisArg , args ) ;
		} ,
		get: ( target , property ) => {
			if ( firstTime ) {
				module_ = require_( moduleId ) ;
				firstTime = false ;
			}

			return Reflect.get( module_ , property ) ;
		}
	} ) ;
} ;

Lazyness.prototype.require = function( moduleId ) {
	return Lazyness.require( this.require , moduleId ) ;
} ;



Lazyness.requireProperty = function( require_ , object , property , moduleId , enumerable ) {
	Object.defineProperty( object , property , {
		configurable: true ,
		enumerable: !! enumerable ,

		// Must be a function, not =>
		get: function() {
			var module_ = require_( moduleId ) ;

			Object.defineProperty( object , property , {
				configurable: true ,
				enumerable: !! enumerable ,
				writable: false ,
				value: module_
			} ) ;

			return module_ ;
		}
	} ) ;

	return object ;
} ;

Lazyness.prototype.requireProperty = function( object , property , moduleId , enumerable ) {
	return Lazyness.requireProperty( this.require , object , property , moduleId , enumerable ) ;
} ;



// Multiple properties at once in a property object
Lazyness.requireProperties = function( require_ , object , properties , enumerable ) {
	Object.keys( properties ).forEach( property => {
		Lazyness.requireProperty( require_ , object , property , properties[ property ] , enumerable ) ;
	} ) ;

	return object ;
} ;

Lazyness.prototype.requireProperties = function( object , properties , enumerable ) {
	return Lazyness.requireProperties( this.require , object , properties , enumerable ) ;
} ;



/***/ }),
/* 47 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 47;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const string = __webpack_require__( 4 ) ;



const misc = {} ;
module.exports = misc ;



const colorNameToIndexDict = {
	// ANSI
	black: 0 ,
	red: 1 ,
	green: 2 ,
	yellow: 3 ,
	blue: 4 ,
	magenta: 5 ,
	violet: 5 ,
	cyan: 6 ,
	white: 7 ,
	grey: 8 ,
	gray: 8 ,
	brightblack: 8 ,
	brightred: 9 ,
	brightgreen: 10 ,
	brightyellow: 11 ,
	brightblue: 12 ,
	brightmagenta: 13 ,
	brightviolet: 13 ,
	brightcyan: 14 ,
	brightwhite: 15
} ;



// Color name to index
misc.colorNameToIndex = color => colorNameToIndexDict[ color.toLowerCase() ] ;



const indexToColorNameArray = [
	"black" , "red" , "green" , "yellow" , "blue" , "magenta" , "cyan" , "white" ,
	"gray" , "brightRed" , "brightGreen" , "brightYellow" , "brightBlue" , "brightMagenta" , "brightCyan" , "brightWhite"
] ;



// Color name to index
misc.indexToColorName = index => indexToColorNameArray[ index ] ;



misc.hexToRgba = hex => {
	// Strip the # if necessary
	if ( hex[ 0 ] === '#' ) { hex = hex.slice( 1 ) ; }

	if ( hex.length === 3 ) {
		hex = hex[ 0 ] + hex[ 0 ] + hex[ 1 ] + hex[ 1 ] + hex[ 2 ] + hex[ 2 ] ;
	}

	return {
		r: parseInt( hex.slice( 0 , 2 ) , 16 ) ,
		g: parseInt( hex.slice( 2 , 4 ) , 16 ) ,
		b: parseInt( hex.slice( 4 , 6 ) , 16 ) ,
		a: hex.length > 6 ? parseInt( hex.slice( 6 , 8 ) , 16 ) : 255
	} ;
} ;



// DEPRECATED function names
misc.color2index = misc.colorNameToIndex ;
misc.index2color = misc.indexToColorName ;
misc.hexToColor = misc.hexToRgba ;



// Strip all control chars, if newline is true, only newline control chars are preserved
misc.stripControlChars = ( str , newline ) => {
	if ( newline ) { return str.replace( /[\x00-\x09\x0b-\x1f\x7f]/g , '' ) ; }
	return str.replace( /[\x00-\x1f\x7f]/g , '' ) ;
} ;



// From https://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings
const escapeSequenceRegex       = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g ;
const escapeSequenceParserRegex = /([\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><])|([^\u001b\u009b]+)/g ;



misc.stripEscapeSequences = str => str.replace( escapeSequenceRegex , '' ) ;



// Return the real width of the string (i.e. as displayed in the terminal)
misc.ansiWidth =
misc.stringWidth = str => {
	var matches , width = 0 ;

	// Reset
	escapeSequenceParserRegex.lastIndex = 0 ;

	while ( ( matches = escapeSequenceParserRegex.exec( str ) ) ) {
		if ( matches[ 2 ] ) {
			width += string.unicode.width( matches[ 2 ] ) ;
		}
	}

	return width ;
} ;



// Userland may use this, it is more efficient than .truncateString() + .stringWidth(),
// and BTW even more than testing .stringWidth() then .truncateString() + .stringWidth()
var lastTruncateWidth = 0 ;
misc.getLastTruncateWidth = () => lastTruncateWidth ;



// Truncate a string to a given real width
misc.truncateAnsiString =
misc.truncateString = ( str , maxWidth ) => {
	var matches , width = 0 ;

	lastTruncateWidth = 0 ;

	// Reset
	escapeSequenceParserRegex.lastIndex = 0 ;

	while ( ( matches = escapeSequenceParserRegex.exec( str ) ) ) {
		if ( matches[ 2 ] ) {
			width += string.unicode.width( matches[ 2 ] ) ;

			if ( width >= maxWidth ) {
				if ( width === maxWidth ) {
					return str.slice( 0 , matches.index + matches[ 2 ].length ) ;
				}

				return str.slice( 0 , matches.index ) + string.unicode.truncateWidth( matches[ 2 ] , maxWidth - lastTruncateWidth ) ;
			}

			lastTruncateWidth = width ;
		}
	}

	return str ;
} ;



// width of a string with a markup, without control chars
misc.markupWidth = str => {
	return string.unicode.width( str.replace( /\^\[[^\]]*]|\^(.)/g , ( match , second ) => {
		if ( second === ' ' || second === '^' ) {
			return second ;
		}

		return '' ;
	} ) ) ;
} ;



// Truncate a string to a given real width, the string may contains markup, but no control chars
misc.truncateMarkupString = ( str , maxWidth ) => {
	var index = 0 , charWidth ,
		strArray = string.unicode.toArray( str ) ;

	lastTruncateWidth = 0 ;

	while ( index < strArray.length ) {
		if ( strArray[ index ] === '^' ) {
			index ++ ;

			if ( strArray[ index ] === '[' ) {
				while ( index < strArray.length && strArray[ index ] !== ']' ) { index ++ ; }
				index ++ ;
				continue ;
			}

			if ( strArray[ index ] !== ' ' && strArray[ index ] !== '^' ) {
				index ++ ;
				continue ;
			}
		}

		charWidth = string.unicode.isFullWidth( strArray[ index ] ) ? 2 : 1 ;

		if ( lastTruncateWidth + charWidth > maxWidth ) {
			strArray.length = index ;
			return strArray.join( '' ) ;
		}

		lastTruncateWidth += charWidth ;
		index ++ ;
	}

	return str ;
} ;



// Function used for sequenceSkip option of string-kit's .wordwrap()
// TODO: many issues remaining
misc.escapeSequenceSkipFn = ( strArray , index ) => {
	//console.error( '>>> Entering' ) ;
	var code ;

	if ( strArray[ index ] !== '\x1b' ) { return index ; }
	index ++ ;
	if ( strArray[ index ] !== '[' ) { return index ; }
	index ++ ;

	for ( ; index < strArray.length ; index ++ ) {
		code = strArray[ index ].charCodeAt( 0 ) ;
		//console.error( 'code:' , strArray[ index ] , code.toString( 16 ) ) ;

		if ( ( code >= 0x41 && code <= 0x5a ) || ( code >= 0x61 && code <= 0x7a ) ) {
			//console.error( "<<< break!" ) ;
			index ++ ;
			break ;
		}
	}

	return index ;
} ;



misc.wordWrapAnsi = ( str , width ) => string.wordwrap( str , {
	width: width ,
	noJoin: true ,
	fill: true ,
	regroupFn: strArray => {
		var sequence = '' ,
			csi = false ,
			newStrArray = [] ;

		strArray.forEach( char => {
			var charCode ;

			if ( csi ) {
				sequence += char ;
				charCode = char.charCodeAt( 0 ) ;

				if ( ( charCode >= 0x41 && charCode <= 0x5a ) || ( charCode >= 0x61 && charCode <= 0x7a ) ) {
					newStrArray.push( sequence ) ;
					sequence = '' ;
					csi = false ;
				}
			}
			else if ( sequence ) {
				sequence += char ;

				if ( char === '[' ) {
					csi = true ;
				}
				else {
					newStrArray.push( sequence ) ;
					sequence = '' ;
				}
			}
			else if ( char === '\x1b' ) {
				sequence = char ;
			}
			else {
				newStrArray.push( char ) ;
			}
		} ) ;

		return newStrArray ;
	} ,
	charWidthFn: char => {
		if ( char[ 0 ] === '\x1b' ) { return 0 ; }
		return string.unicode.charWidth( char ) ;
	}
} ) ;



misc.wordwrapMarkup =	// <-- DEPRECATED
misc.wordWrapMarkup = ( str , width ) => string.wordwrap( str , {
	width: width ,
	noJoin: true ,
	fill: true ,
	regroupFn: strArray => {
		var markup = '' ,
			complexMarkup = false ,
			newStrArray = [] ;

		strArray.forEach( char => {
			if ( complexMarkup ) {
				markup += char ;

				if ( char === ']' ) {
					newStrArray.push( markup ) ;
					markup = '' ;
					complexMarkup = false ;
				}
			}
			else if ( markup ) {
				markup += char ;

				if ( char === '[' ) {
					complexMarkup = true ;
				}
				else {
					newStrArray.push( markup ) ;
					markup = '' ;
				}
			}
			else if ( char === '^' ) {
				markup = char ;
			}
			else {
				newStrArray.push( char ) ;
			}
		} ) ;

		return newStrArray ;
	} ,
	charWidthFn: char => {
		if ( char[ 0 ] === '^' && char[ 1 ] ) {
			if ( char[ 1 ] === '^' || char[ 1 ] === ' ' ) { return 1 ; }
			return 0 ;
		}

		return string.unicode.charWidth( char ) ;
	}
} ) ;



misc.preserveMarkupFormat = string.createFormatter( {
	argumentSanitizer: str => str.replace( /[\x00-\x1f\x7f^]/g , char => char === '^' ? '^^' : '' ) ,
	noMarkup: true
} ) ;



misc.markupOptions = {
	complexMarkupAliases: {
		c: 'color' ,
		fg: 'color' ,
		bg: 'bgColor'
	} ,
	shiftMarkup: {
		'#': 'background'
	} ,
	markup: {
		':': { reset: true } ,
		' ': { reset: true , raw: ' ' } ,
		';': { reset: true , special: true } ,		// "Special reset" can reset forced attr (Document-model)

		'-': { dim: true } ,
		'+': { bold: true } ,
		'_': { underline: true } ,
		'/': { italic: true } ,
		'!': { inverse: true } ,

		'k': { color: 0 } ,
		'r': { color: 1 } ,
		'g': { color: 2 } ,
		'y': { color: 3 } ,
		'b': { color: 4 } ,
		'm': { color: 5 } ,
		'c': { color: 6 } ,
		'w': { color: 7 } ,
		'K': { color: 8 } ,
		'R': { color: 9 } ,
		'G': { color: 10 } ,
		'Y': { color: 11 } ,
		'B': { color: 12 } ,
		'M': { color: 13 } ,
		'C': { color: 14 } ,
		'W': { color: 15 }
	} ,
	shiftedMarkup: {
		background: {
			':': { reset: true , defaultColor: true , bgDefaultColor: true } ,
			' ': {
				reset: true , defaultColor: true , bgDefaultColor: true , raw: ' '
			} ,
			';': {
				reset: true , special: true , defaultColor: true , bgDefaultColor: true
			} ,

			'k': { bgColor: 0 } ,
			'r': { bgColor: 1 } ,
			'g': { bgColor: 2 } ,
			'y': { bgColor: 3 } ,
			'b': { bgColor: 4 } ,
			'm': { bgColor: 5 } ,
			'c': { bgColor: 6 } ,
			'w': { bgColor: 7 } ,
			'K': { bgColor: 8 } ,
			'R': { bgColor: 9 } ,
			'G': { bgColor: 10 } ,
			'Y': { bgColor: 11 } ,
			'B': { bgColor: 12 } ,
			'M': { bgColor: 13 } ,
			'C': { bgColor: 14 } ,
			'W': { bgColor: 15 }
		}
	}
} ;



// /!\ Should be moved to string-kit once finished /!\
const parseMarkupRegexp = /\^\[([^\]]*)]|\^(.)|([^^]+)/g ;

misc.parseMarkup = ( str , options ) => {
	var complex , markup , raw , match ,
		base = options.markup ,
		output = [] ;

	parseMarkupRegexp.lastIndex = 0 ;

	while ( ( match = parseMarkupRegexp.exec( str ) ) ) {
		[ , complex , markup , raw ] = match ;

		if ( complex ) {
			var custom = {} ;
			complex.split( ',' ).forEach( part => {
				var [ k , v ] = part.split( ':' ) ;
				if ( options.complexMarkupAliases[ k ] ) { k = options.complexMarkupAliases[ k ] ; }
				custom[ k ] = v || true ;
			} ) ;

			output.push( { markup: custom } ) ;
		}
		else if ( raw ) { output.push( raw ) ; }
		else if ( markup === '^' ) { output.push( '^' ) ; }
		else if ( options.shiftMarkup[ markup ] ) { base = options.shiftedMarkup[ options.shiftMarkup[ markup ] ] ; continue ; }
		else if ( base[ markup ] ) { output.push( { markup: base[ markup ] } ) ; }

		base = options.markup ;
	}

	return output ;
} ;



const ANSI_CODES = {
	'0': { reset: true } ,

	'1': { bold: true } ,
	'2': { dim: true } ,
	'22': { bold: false , dim: false } ,
	'3': { italic: true } ,
	'23': { italic: false } ,
	'4': { underline: true } ,
	'24': { underline: false } ,
	'5': { blink: true } ,
	'25': { blink: false } ,
	'7': { inverse: true } ,
	'27': { inverse: false } ,
	'8': { hidden: true } ,
	'28': { hidden: false } ,
	'9': { strike: true } ,
	'29': { strike: false } ,

	'30': { color: 0 } ,
	'31': { color: 1 } ,
	'32': { color: 2 } ,
	'33': { color: 3 } ,
	'34': { color: 4 } ,
	'35': { color: 5 } ,
	'36': { color: 6 } ,
	'37': { color: 7 } ,
	'39:': { defaultColor: true } ,

	'90': { color: 8 } ,
	'91': { color: 9 } ,
	'92': { color: 10 } ,
	'93': { color: 11 } ,
	'94': { color: 12 } ,
	'95': { color: 13 } ,
	'96': { color: 14 } ,
	'97': { color: 15 } ,

	'40': { bgColor: 0 } ,
	'41': { bgColor: 1 } ,
	'42': { bgColor: 2 } ,
	'43': { bgColor: 3 } ,
	'44': { bgColor: 4 } ,
	'45': { bgColor: 5 } ,
	'46': { bgColor: 6 } ,
	'47': { bgColor: 7 } ,
	'49:': { bgDefaultColor: true } ,

	'100': { bgColor: 8 } ,
	'101': { bgColor: 9 } ,
	'102': { bgColor: 10 } ,
	'103': { bgColor: 11 } ,
	'104': { bgColor: 12 } ,
	'105': { bgColor: 13 } ,
	'106': { bgColor: 14 } ,
	'107': { bgColor: 15 }
} ;



// /!\ Should be moved to string-kit once finished /!\
const parseAnsiRegexp = /\x1b\[([0-9;]+)m|(.[^\x1b]*)/g ;

misc.parseAnsi = str => {
	var match , ansiCodes , raw , output = [] ;

	parseAnsiRegexp.lastIndex = 0 ;

	while ( ( match = parseAnsiRegexp.exec( str ) ) ) {
		[ , ansiCodes , raw ] = match ;

		if ( raw ) { output.push( raw ) ; }
		else {
			ansiCodes.split( ';' ).forEach( ansiCode => {
				if ( ANSI_CODES[ ansiCode ] ) { output.push( { markup: ANSI_CODES[ ansiCode ] } ) ; }
			} ) ;
		}
	}

	return output ;
} ;



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/* All polyfill borrowed from MDN: developer.mozilla.org */



var polyfill = {} ;
module.exports = polyfill ;



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
polyfill.repeat = function( count ) {
	if ( this === null ) {
		throw new TypeError( 'can\'t convert ' + this + ' to object' ) ;
	}
	var str = '' + this ;
	count = + count ;
	if ( count !== count ) {
		count = 0 ;
	}
	if ( count < 0 ) {
		throw new RangeError( 'repeat count must be non-negative' ) ;
	}
	if ( count === Infinity ) {
		throw new RangeError( 'repeat count must be less than infinity' ) ;
	}
	count = Math.floor( count ) ;
	if ( str.length === 0 || count === 0 ) {
		return '' ;
	}
	// Ensuring count is a 31-bit integer allows us to heavily optimize the
	// main part. But anyway, most current (August 2014) browsers can't handle
	// strings 1 << 28 chars or longer, so:
	if ( str.length * count >= 1 << 28 ) {
		throw new RangeError( 'repeat count must not overflow maximum string size' ) ;
	}
	var rpt = '' ;
	for ( ;; ) {
		if ( ( count & 1 ) === 1 ) {
			rpt += str ;
		}
		count >>>= 1 ;
		if ( count === 0 ) {
			break ;
		}
		str += str ;
	}
	return rpt ;
} ;




/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/*
	String formater, inspired by C's sprintf().
*/







const inspect = __webpack_require__( 16 ).inspect ;
const inspectError = __webpack_require__( 16 ).inspectError ;
const escape = __webpack_require__( 10 ) ;
const ansi = __webpack_require__( 14 ) ;
const unicode = __webpack_require__( 15 ) ;
const naturalSort = __webpack_require__( 23 ) ;



/*
	%%		a single %
	%s		string
	%S		string, interpret ^ formatting
	%r		raw string: without sanitizer
	%n		natural: output the most natural representation for this type, object entries are sorted by keys
	%N		even more natural: avoid type hinting marks like bracket for array
	%f		float
	%e		for scientific notation
	%d	%i	integer
	%u		unsigned integer
	%U		unsigned positive integer (>0)
	%k		number with metric system prefixes
	%t		time duration, convert ms into H:min:s
	%h		hexadecimal (input is a number)
	%x		hexadecimal (input is a number), force pair of symbols (e.g. 'f' -> '0f')
	%o		octal
	%b		binary
	%X		hexadecimal: convert a string into hex charcode, force pair of symbols (e.g. 'f' -> '0f')
	%z		base64
	%Z		base64url
	%O		object (like inspect, but with ultra minimal options)
	%I		call string-kit's inspect()
	%Y		call string-kit's inspect(), but do not inspect non-enumerable
	%E		call string-kit's inspectError()
	%J		JSON.stringify()
	%D		drop
	%F		filter function existing in the 'this' context, e.g. %[filter:%a%a]F
	%a		argument for a function

	Candidate format:
	%A		for automatic type? probably not good: it's like %n Natural
	%c		for char? (can receive a string or an integer translated into an UTF8 chars)
	%C		for currency formating?
	%B		for Buffer objects?
*/

exports.formatMethod = function( ... args ) {
	var str = args[ 0 ] ;

	if ( typeof str !== 'string' ) {
		if ( ! str ) { str = '' ; }
		else if ( typeof str.toString === 'function' ) { str = str.toString() ; }
		else { str = '' ; }
	}

	var arg , autoIndex = 1 , length = args.length ,
		hasMarkup = false , shift = null , markupStack = [] ;

	if ( this.markupReset && this.startingMarkupReset ) {
		str = ( typeof this.markupReset === 'function' ? this.markupReset( markupStack ) : this.markupReset ) + str ;
	}

	//console.log( 'format args:' , arguments ) ;

	// /!\ each changes here should be reported on string.format.count() and string.format.hasFormatting() too /!\
	//str = str.replace( /\^(.?)|%(?:([+-]?)([0-9]*)(?:\/([^\/]*)\/)?([a-zA-Z%])|\[([a-zA-Z0-9_]+)(?::([^\]]*))?\])/g ,
	str = str.replace( /\^(.?)|(%%)|%([+-]?)([0-9]*)(?:\[([^\]]*)\])?([a-zA-Z])/g ,
		( match , markup , doublePercent , relative , index , modeArg , mode ) => {

			var replacement , i , tmp , fn , fnArgString , argMatches , argList = [] ;

			//console.log( 'replaceArgs:' , arguments ) ;
			if ( doublePercent ) { return '%' ; }

			if ( markup ) {
				if ( this.noMarkup ) { return '^' + markup ; }
				if ( markup === '^' ) { return '^' ; }

				if ( this.shiftMarkup && this.shiftMarkup[ markup ] ) {
					shift = this.shiftMarkup[ markup ] ;
					return '' ;
				}

				if ( shift ) {
					if ( ! this.shiftedMarkup || ! this.shiftedMarkup[ shift ] || ! this.shiftedMarkup[ shift ][ markup ] ) {
						return '' ;
					}

					hasMarkup = true ;

					if ( typeof this.shiftedMarkup[ shift ][ markup ] === 'function' ) {
						replacement = this.shiftedMarkup[ shift ][ markup ]( markupStack ) ;
						// method should manage markup stack themselves
					}
					else {
						replacement = this.shiftedMarkup[ shift ][ markup ] ;
						markupStack.push( replacement ) ;
					}

					shift = null ;
				}
				else {
					if ( ! this.markup || ! this.markup[ markup ] ) {
						return '' ;
					}

					hasMarkup = true ;

					if ( typeof this.markup[ markup ] === 'function' ) {
						replacement = this.markup[ markup ]( markupStack ) ;
						// method should manage markup stack themselves
					}
					else {
						replacement = this.markup[ markup ] ;
						markupStack.push( replacement ) ;
					}
				}

				return replacement ;
			}


			if ( index ) {
				index = parseInt( index , 10 ) ;

				if ( relative ) {
					if ( relative === '+' ) { index = autoIndex + index ; }
					else if ( relative === '-' ) { index = autoIndex - index ; }
				}
			}
			else {
				index = autoIndex ;
			}

			autoIndex ++ ;

			if ( index >= length || index < 1 ) { arg = undefined ; }
			else { arg = args[ index ] ; }

			if ( modes[ mode ] ) {
				replacement = modes[ mode ]( arg , modeArg , this ) ;
				if ( this.argumentSanitizer && ! modes[ mode ].noSanitize ) { replacement = this.argumentSanitizer( replacement ) ; }
				if ( modeArg && ! modes[ mode ].noCommonModeArg ) { replacement = commonModeArg( replacement , modeArg ) ; }
				return replacement ;
			}

			// Function mode
			if ( mode === 'F' ) {
				autoIndex -- ;	// %F does not eat any arg

				if ( modeArg === undefined ) { return '' ; }
				tmp = modeArg.split( ':' ) ;
				fn = tmp[ 0 ] ;
				fnArgString = tmp[ 1 ] ;
				if ( ! fn ) { return '' ; }

				if ( fnArgString && ( argMatches = fnArgString.match( /%([+-]?)([0-9]*)[a-zA-Z]/g ) ) ) {
					//console.log( argMatches ) ;
					//console.log( fnArgString ) ;
					for ( i = 0 ; i < argMatches.length ; i ++ ) {
						relative = argMatches[ i ][ 1 ] ;
						index = argMatches[ i ][ 2 ] ;

						if ( index ) {
							index = parseInt( index , 10 ) ;

							if ( relative ) {
								if ( relative === '+' ) { index = autoIndex + index ; }		// jshint ignore:line
								else if ( relative === '-' ) { index = autoIndex - index ; }	// jshint ignore:line
							}
						}
						else {
							index = autoIndex ;
						}

						autoIndex ++ ;

						if ( index >= length || index < 1 ) { argList[ i ] = undefined ; }
						else { argList[ i ] = args[ index ] ; }
					}
				}

				if ( ! this || ! this.fn || typeof this.fn[ fn ] !== 'function' ) { return '' ; }
				return this.fn[ fn ].apply( this , argList ) ;
			}

			return '' ;
		}
	) ;

	if ( hasMarkup && this.markupReset && this.endingMarkupReset ) {
		str += typeof this.markupReset === 'function' ? this.markupReset( markupStack ) : this.markupReset ;
	}

	if ( this.extraArguments ) {
		for ( ; autoIndex < length ; autoIndex ++ ) {
			arg = args[ autoIndex ] ;
			if ( arg === null || arg === undefined ) { continue ; }
			else if ( typeof arg === 'string' ) { str += arg ; }
			else if ( typeof arg === 'number' ) { str += arg ; }
			else if ( typeof arg.toString === 'function' ) { str += arg.toString() ; }
		}
	}

	return str ;
} ;



// --- MODES ---

const modes = {} ;



// string
modes.s = arg => {
	if ( typeof arg === 'string' ) { return arg ; }
	if ( arg === null || arg === undefined || arg === true || arg === false ) { return '(' + arg + ')' ; }
	if ( typeof arg === 'number' ) { return '' + arg ; }
	if ( typeof arg.toString === 'function' ) { return arg.toString() ; }
	return '(' + arg + ')' ;
} ;

modes.r = arg => modes.s( arg ) ;
modes.r.noSanitize = true ;



// string, interpret ^ formatting
modes.S = ( arg , modeArg , options ) => {
	// We do the sanitizing part on our own
	var interpret = str => exports.markupMethod.call( options , options.argumentSanitizer ? options.argumentSanitizer( str ) : str ) ;

	if ( typeof arg === 'string' ) { return interpret( arg ) ; }
	if ( arg === null || arg === undefined || arg === true || arg === false ) { return '(' + arg + ')' ; }
	if ( typeof arg === 'number' ) { return '' + arg ; }
	if ( typeof arg.toString === 'function' ) { return interpret( arg.toString() ) ; }
	return interpret( '(' + arg + ')' ) ;
} ;

modes.S.noSanitize = true ;
modes.S.noCommonModeArg = true ;



// natural (WIP)
modes.N = ( arg , isSubCall ) => {
	if ( typeof arg === 'string' ) { return arg ; }

	if ( arg === null || arg === undefined || arg === true || arg === false || typeof arg === 'number' ) {
		return '' + arg ;
	}

	if ( Array.isArray( arg ) ) {
		arg = arg.map( e => modes.N( e , true ) ) ;

		if ( isSubCall ) {
			return '[' + arg.join( ',' ) + ']' ;
		}

		return arg.join( ', ' ) ;
	}

	if ( Buffer.isBuffer( arg ) ) {
		arg = [ ... arg ].map( e => {
			e = e.toString( 16 ) ;
			if ( e.length === 1 ) { e = '0' + e ; }
			return e ;
		} ) ;
		return '<' + arg.join( ' ' ) + '>' ;
	}

	var proto = Object.getPrototypeOf( arg ) ;

	if ( proto === null || proto === Object.prototype ) {
		// Plain objects
		arg = Object.entries( arg ).sort( naturalSort )
			.map( e => e[ 0 ] + ': ' + modes.N( e[ 1 ] , true ) ) ;

		if ( isSubCall ) {
			return '{' + arg.join( ', ' ) + '}' ;
		}

		return arg.join( ', ' ) ;
	}

	if ( typeof arg.inspect === 'function' ) { return arg.inspect() ; }
	if ( typeof arg.toString === 'function' ) { return arg.toString() ; }

	return '(' + arg + ')' ;
} ;

modes.n = arg => modes.N( arg , true ) ;



// float
modes.f = ( arg , modeArg ) => {
	var match , k , v , lv , n , step = 0 ,
		toFixed , toFixedIfDecimal , padding ;

	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { arg = 0 ; }

	if ( modeArg ) {
		MODE_ARG_FORMAT_REGEX.lastIndex = 0 ;

		while ( ( match = MODE_ARG_FORMAT_REGEX.exec( modeArg ) ) ) {
			[ , k , v ] = match ;

			if ( k === 'z' ) {
				padding = + v ;
			}
			else if ( ! k ) {
				if ( v[ 0 ] === '.' ) {
					lv = v[ v.length - 1 ] ;

					if ( lv === '!' ) {
						n = parseInt( v.slice( 1 , -1 ) , 10 ) ;
						step = 10 ** ( -n ) ;
						toFixed = n ;
					}
					else if ( lv === '?' ) {
						n = parseInt( v.slice( 1 , -1 ) , 10 ) ;
						step = 10 ** ( -n ) ;
						toFixed = n ;
						toFixedIfDecimal = true ;
					}
					else {
						n = parseInt( v.slice( 1 ) , 10 ) ;
						step = 10 ** ( -n ) ;
					}
				}
				else if ( v[ v.length - 1 ] === '.' ) {
					n = parseInt( v.slice( 0 , -1 ) , 10 ) ;
					step = 10 ** n ;
				}
				else {
					n = parseInt( v , 10 ) ;
					step = 10 ** ( Math.ceil( Math.log10( arg + Number.EPSILON ) + Number.EPSILON ) - n ) ;
				}
			}
		}
	}

	if ( step ) { arg = round( arg , step ) ; }

	if ( toFixed !== undefined && ( ! toFixedIfDecimal || arg !== Math.trunc( arg ) ) ) {
		arg = arg.toFixed( toFixed ) ;
	}
	else {
		arg = '' + arg ;
	}

	if ( padding ) {
		n = arg.indexOf( '.' ) ;
		if ( n === -1 ) { n = arg.length ; }
		if ( arg[ 0 ] === '-' ) {
			if ( n - 1 < padding ) {
				arg = '-' + '0'.repeat( 1 + padding - n ) + arg.slice( 1 ) ;
			}
		}
		else if ( n < padding ) {
			arg = '0'.repeat( padding - n ) + arg ;
		}
	}

	return arg ;
} ;

modes.f.noSanitize = true ;



// scientific notation
modes.e = ( arg , modeArg ) => {
	var match , k , v ;

	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { arg = 0 ; }

	if ( modeArg ) {
		MODE_ARG_FORMAT_REGEX.lastIndex = 0 ;

		if ( ( match = MODE_ARG_FORMAT_REGEX.exec( modeArg ) ) ) {
			[ , k , v ] = match ;

			if ( ! k ) {
				return '' + arg.toExponential( parseInt( v , 10 ) - 1 ) ;
			}
		}
	}

	return '' + arg.toExponential() ;

} ;

modes.e.noSanitize = true ;



// integer
modes.d = modes.i = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.floor( arg ) ; }
	return '0' ;
} ;

modes.i.noSanitize = true ;



// unsigned integer
modes.u = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.max( Math.floor( arg ) , 0 ) ; }
	return '0' ;
} ;

modes.u.noSanitize = true ;



// unsigned positive integer
modes.U = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.max( Math.floor( arg ) , 1 ) ; }
	return '1' ;
} ;

modes.U.noSanitize = true ;



// metric system
modes.k = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { return '0' ; }
	return metricPrefix( arg ) ;
} ;

modes.k.noSanitize = true ;



// Degree, minutes and seconds.
// Unlike %t which receive ms, here the input is in degree.
modes.m = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { return '(NaN)' ; }

	var minus = '' ;
	if ( arg < 0 ) { minus = '-' ; arg = -arg ; }

	var degrees = epsilonFloor( arg ) ,
		frac = arg - degrees ;

	if ( ! frac ) { return minus + degrees + '°' ; }

	var minutes = epsilonFloor( frac * 60 ) ,
		seconds = epsilonFloor( frac * 3600 - minutes * 60 ) ;

	if ( seconds ) {
		return minus + degrees + '°' + ( '' + minutes ).padStart( 2 , '0' ) + '′' + ( '' + seconds ).padStart( 2 , '0' ) + '″' ;
	}

	return minus + degrees + '°' + ( '' + minutes ).padStart( 2 , '0' ) + '′' ;

} ;

modes.m.noSanitize = true ;



// time duration, transform ms into H:min:s
// Later it should format Date as well: number=duration, date object=date
// Note that it would not replace moment.js, but it could uses it.
modes.t = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { return '(NaN)' ; }

	var s = Math.floor( arg / 1000 ) ;
	if ( s < 60 ) { return s + 's' ; }

	var min = Math.floor( s / 60 ) ;
	s = s % 60 ;
	if ( min < 60 ) { return min + 'min' + ( '' + s ).padStart( 2 , '0' ) + 's' ; }

	var h = Math.floor( min / 60 ) ;
	min = min % 60 ;
	//if ( h < 24 ) { return h + 'h' + zeroPadding( min ) +'min' + zeroPadding( s ) + 's' ; }

	return h + 'h' + ( '' + min ).padStart( 2 , '0' ) + 'min' + ( '' + s ).padStart( 2 , '0' ) + 's' ;
} ;

modes.t.noSanitize = true ;



// unsigned hexadecimal
modes.h = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.max( Math.floor( arg ) , 0 ).toString( 16 ) ; }
	return '0' ;
} ;

modes.h.noSanitize = true ;



// unsigned hexadecimal, force pair of symboles
modes.x = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg !== 'number' ) { return '00' ; }

	var value = '' + Math.max( Math.floor( arg ) , 0 ).toString( 16 ) ;

	if ( value.length % 2 ) { value = '0' + value ; }
	return value ;
} ;

modes.x.noSanitize = true ;



// unsigned octal
modes.o = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.max( Math.floor( arg ) , 0 ).toString( 8 ) ; }
	return '0' ;
} ;

modes.o.noSanitize = true ;



// unsigned binary
modes.b = arg => {
	if ( typeof arg === 'string' ) { arg = parseFloat( arg ) ; }
	if ( typeof arg === 'number' ) { return '' + Math.max( Math.floor( arg ) , 0 ).toString( 2 ) ; }
	return '0' ;
} ;

modes.b.noSanitize = true ;



// String to hexadecimal, force pair of symboles
modes.X = arg => {
	if ( typeof arg === 'string' ) { arg = Buffer.from( arg ) ; }
	else if ( ! Buffer.isBuffer( arg ) ) { return '' ; }
	return arg.toString( 'hex' ) ;
} ;

modes.X.noSanitize = true ;



// base64
modes.z = arg => {
	if ( typeof arg === 'string' ) { arg = Buffer.from( arg ) ; }
	else if ( ! Buffer.isBuffer( arg ) ) { return '' ; }
	return arg.toString( 'base64' ) ;
} ;



// base64url
modes.Z = arg => {
	if ( typeof arg === 'string' ) { arg = Buffer.from( arg ) ; }
	else if ( ! Buffer.isBuffer( arg ) ) { return '' ; }
	return arg.toString( 'base64' ).replace( /\+/g , '-' )
		.replace( /\//g , '_' )
		.replace( /[=]{1,2}$/g , '' ) ;
} ;



// Inspect
const I_OPTIONS = {} ;
modes.I = ( arg , modeArg , options ) => genericInspectMode( arg , modeArg , options , I_OPTIONS ) ;
modes.I.noSanitize = true ;



// More minimalist inspect
const Y_OPTIONS = {
	noFunc: true ,
	enumOnly: true ,
	noDescriptor: true ,
	useInspect: true ,
	useInspectPropertyBlackList: true
} ;
modes.Y = ( arg , modeArg , options ) => genericInspectMode( arg , modeArg , options , Y_OPTIONS ) ;
modes.Y.noSanitize = true ;



// Even more minimalist inspect
const O_OPTIONS = { minimal: true , noIndex: true } ;
modes.O = ( arg , modeArg , options ) => genericInspectMode( arg , modeArg , options , O_OPTIONS ) ;
modes.O.noSanitize = true ;



// Inspect error
const E_OPTIONS = {} ;
modes.E = ( arg , modeArg , options ) => genericInspectMode( arg , modeArg , options , E_OPTIONS , true ) ;
modes.E.noSanitize = true ;



// JSON
modes.J = arg => arg === undefined ? 'null' : JSON.stringify( arg ) ;



// drop
modes.D = () => '' ;
modes.D.noSanitize = true ;



var defaultFormatter = {
	argumentSanitizer: str => escape.control( str , true ) ,
	extraArguments: true ,
	color: false ,
	noMarkup: false ,
	endingMarkupReset: true ,
	startingMarkupReset: false ,
	markupReset: ansi.reset ,
	shiftMarkup: {
		'#': 'background'
	} ,
	markup: {
		":": ansi.reset ,
		" ": ansi.reset + " " ,

		"-": ansi.dim ,
		"+": ansi.bold ,
		"_": ansi.underline ,
		"/": ansi.italic ,
		"!": ansi.inverse ,

		"b": ansi.blue ,
		"B": ansi.brightBlue ,
		"c": ansi.cyan ,
		"C": ansi.brightCyan ,
		"g": ansi.green ,
		"G": ansi.brightGreen ,
		"k": ansi.black ,
		"K": ansi.brightBlack ,
		"m": ansi.magenta ,
		"M": ansi.brightMagenta ,
		"r": ansi.red ,
		"R": ansi.brightRed ,
		"w": ansi.white ,
		"W": ansi.brightWhite ,
		"y": ansi.yellow ,
		"Y": ansi.brightYellow
	} ,
	shiftedMarkup: {
		background: {
			":": ansi.reset ,
			" ": ansi.reset + " " ,

			"b": ansi.bgBlue ,
			"B": ansi.bgBrightBlue ,
			"c": ansi.bgCyan ,
			"C": ansi.bgBrightCyan ,
			"g": ansi.bgGreen ,
			"G": ansi.bgBrightGreen ,
			"k": ansi.bgBlack ,
			"K": ansi.bgBrightBlack ,
			"m": ansi.bgMagenta ,
			"M": ansi.bgBrightMagenta ,
			"r": ansi.bgRed ,
			"R": ansi.bgBrightRed ,
			"w": ansi.bgWhite ,
			"W": ansi.bgBrightWhite ,
			"y": ansi.bgYellow ,
			"Y": ansi.bgBrightYellow
		}
	}
} ;

exports.createFormatter = ( options ) => exports.formatMethod.bind( Object.assign( {} , defaultFormatter , options ) ) ;
exports.format = exports.formatMethod.bind( defaultFormatter ) ;
exports.format.default = defaultFormatter ;



// /!\ Should upgrade that with Terminal-Kit Markup parser /!\
// It supports complex markup, see: Terminal-Kit/lib/misc.js misc.parseMarkup().

exports.markupMethod = function( str ) {
	if ( typeof str !== 'string' ) {
		if ( ! str ) { str = '' ; }
		else if ( typeof str.toString === 'function' ) { str = str.toString() ; }
		else { str = '' ; }
	}

	var hasMarkup = false , shift = null , markupStack = [] ;

	if ( this.markupReset && this.startingMarkupReset ) {
		str = ( typeof this.markupReset === 'function' ? this.markupReset( markupStack ) : this.markupReset ) + str ;
	}

	//console.log( 'format args:' , arguments ) ;

	str = str.replace( /\^(.?)/g , ( match , markup ) => {
		var replacement ;

		if ( markup === '^' ) { return '^' ; }

		if ( this.shiftMarkup && this.shiftMarkup[ markup ] ) {
			shift = this.shiftMarkup[ markup ] ;
			return '' ;
		}

		if ( shift ) {
			if ( ! this.shiftedMarkup || ! this.shiftedMarkup[ shift ] || ! this.shiftedMarkup[ shift ][ markup ] ) {
				return '' ;
			}

			hasMarkup = true ;

			if ( typeof this.shiftedMarkup[ shift ][ markup ] === 'function' ) {
				replacement = this.shiftedMarkup[ shift ][ markup ]( markupStack ) ;
				// method should manage markup stack themselves
			}
			else {
				replacement = this.shiftedMarkup[ shift ][ markup ] ;
				markupStack.push( replacement ) ;
			}

			shift = null ;
		}
		else {
			if ( ! this.markup || ! this.markup[ markup ] ) {
				return '' ;
			}

			hasMarkup = true ;

			if ( typeof this.markup[ markup ] === 'function' ) {
				replacement = this.markup[ markup ]( markupStack ) ;
				// method should manage markup stack themselves
			}
			else {
				replacement = this.markup[ markup ] ;
				markupStack.push( replacement ) ;
			}
		}

		return replacement ;
	} ) ;

	if ( hasMarkup && this.markupReset && this.endingMarkupReset ) {
		str += typeof this.markupReset === 'function' ? this.markupReset( markupStack ) : this.markupReset ;
	}

	return str ;
} ;



exports.createMarkup = ( options ) => exports.markupMethod.bind( Object.assign( {} , defaultFormatter , options ) ) ;
exports.markup = exports.markupMethod.bind( defaultFormatter ) ;



// Count the number of parameters needed for this string
exports.format.count = function( str ) {
	var match , index , relative , autoIndex = 1 , maxIndex = 0 ;

	if ( typeof str !== 'string' ) { return 0 ; }

	// This regex differs slightly from the main regex: we do not count '%%' and %F is excluded
	var regexp = /%([+-]?)([0-9]*)(?:\[([^\]]*)\])?([a-zA-EG-Z])/g ;


	while ( ( match = regexp.exec( str ) ) !== null ) {
		//console.log( match ) ;
		relative = match[ 1 ] ;
		index = match[ 2 ] ;

		if ( index ) {
			index = parseInt( index , 10 ) ;

			if ( relative ) {
				if ( relative === '+' ) { index = autoIndex + index ; }
				else if ( relative === '-' ) { index = autoIndex - index ; }
			}
		}
		else {
			index = autoIndex ;
		}

		autoIndex ++ ;

		if ( maxIndex < index ) { maxIndex = index ; }
	}

	return maxIndex ;
} ;



// Tell if this string contains formatter chars
exports.format.hasFormatting = function( str ) {
	if ( str.search( /\^(.?)|(%%)|%([+-]?)([0-9]*)(?:\[([^\]]*)\])?([a-zA-Z])/ ) !== -1 ) { return true ; }
	return false ;
} ;



// ModeArg formats

// The format for commonModeArg
const COMMON_MODE_ARG_FORMAT_REGEX = /([a-zA-Z])(.[^a-zA-Z]*)/g ;

// The format for specific mode arg
const MODE_ARG_FORMAT_REGEX = /([a-zA-Z]|^)(.[^a-zA-Z]*)/g ;



// Called when there is a modeArg and the mode allow common mode arg
// CONVENTION: reserve upper-cased letters for common mode arg
function commonModeArg( str , modeArg ) {
	var match , k , v ;

	COMMON_MODE_ARG_FORMAT_REGEX.lastIndex = 0 ;

	while ( ( match = COMMON_MODE_ARG_FORMAT_REGEX.exec( modeArg ) ) ) {
		[ , k , v ] = match ;

		if ( k === 'L' ) {
			let width = unicode.width( str ) ;
			v = + v || 1 ;

			if ( width > v ) {
				str = unicode.truncateWidth( str , v - 1 ).trim() + '…' ;
				width = unicode.width( str ) ;
			}

			if ( width < v ) { str = ' '.repeat( v - width ) + str ; }
		}
		else if ( k === 'R' ) {
			let width = unicode.width( str ) ;
			v = + v || 1 ;

			if ( width > v ) {
				str = unicode.truncateWidth( str , v - 1 ).trim() + '…' ;
				width = unicode.width( str ) ;
			}

			if ( width < v ) { str = str + ' '.repeat( v - width ) ; }
		}
	}

	return str ;
}



// Generic inspect
function genericInspectMode( arg , modeArg , options , modeOptions , isInspectError = false ) {
	var match , k , v ,
		outputMaxLength ,
		maxLength ,
		depth = 3 ,
		style = options && options.color ? 'color' : 'none' ;

	if ( modeArg ) {
		MODE_ARG_FORMAT_REGEX.lastIndex = 0 ;

		while ( ( match = MODE_ARG_FORMAT_REGEX.exec( modeArg ) ) ) {
			[ , k , v ] = match ;

			if ( k === 'c' ) {
				if ( v === '+' ) { style = 'color' ; }
				else if ( v === '-' ) { style = 'none' ; }
			}
			else if ( k === 'l' ) {
				// total output max length
				outputMaxLength = parseInt( v , 10 ) || undefined ;
			}
			else if ( k === 's' ) {
				// string max length
				maxLength = parseInt( v , 10 ) || undefined ;
			}
			else if ( ! k ) {
				depth = parseInt( v , 10 ) || 1 ;
			}
		}
	}

	if ( isInspectError ) {
		return inspectError( Object.assign( {
			depth , style , outputMaxLength , maxLength
		} , modeOptions ) , arg ) ;
	}

	return inspect( Object.assign( {
		depth , style , outputMaxLength , maxLength
	} , modeOptions ) , arg ) ;
}



// From math-kit module
// /!\ Should be updated with the new way the math-kit module do it!!! /!\
const EPSILON = 0.0000000001 ;
const INVERSE_EPSILON = Math.round( 1 / EPSILON ) ;

function epsilonRound( v ) {
	return Math.round( v * INVERSE_EPSILON ) / INVERSE_EPSILON ;
}

function epsilonFloor( v ) {
	return Math.floor( v + EPSILON ) ;
}

// Round with precision
function round( v , step ) {
	// use: v * ( 1 / step )
	// not: v / step
	// reason: epsilon rounding errors
	return epsilonRound( step * Math.round( v * ( 1 / step ) ) ) ;
}



// Metric prefix
const MUL_PREFIX = [ '' , 'k' , 'M' , 'G' , 'T' , 'P' , 'E' , 'Z' , 'Y' ] ;
const SUB_MUL_PREFIX = [ '' , 'm' , 'µ' , 'n' , 'p' , 'f' , 'a' , 'z' , 'y' ] ;
const IROUND_STEP = [ 100 , 10 , 1 ] ;



function metricPrefix( n ) {
	var log , logDiv3 , logMod , base , prefix ;

	if ( ! n || n === 1 ) { return '' + n ; }
	if ( n < 0 ) { return '-' + metricPrefix( -n ) ; }

	if ( n > 1 ) {
		log = Math.floor( Math.log10( n ) ) ;
		logDiv3 = Math.floor( log / 3 ) ;
		logMod = log % 3 ;
		base = iround( n / ( Math.pow( 1000 , logDiv3 ) ) , IROUND_STEP[ logMod ] ) ;
		prefix = MUL_PREFIX[ logDiv3 ] ;
	}
	else {
		log = Math.floor( Math.log10( n ) ) ;
		logDiv3 = Math.floor( log / 3 ) ;
		logMod = log % 3 ;
		if ( logMod < 0 ) { logMod += 3 ; }
		base = iround( n / ( Math.pow( 1000 , logDiv3 ) ) , IROUND_STEP[ logMod ] ) ;
		prefix = SUB_MUL_PREFIX[ -logDiv3 ] ;
	}

	return '' + base + prefix ;
}



function iround( v , istep ) {
	return Math.round( ( v + Number.EPSILON ) * istep ) / istep ;
}



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





exports.resize = function( str , length ) {
	if ( str.length === length ) {
		return str ;
	}
	else if ( str.length > length ) {
		return str.slice( 0 , length ) ;
	}

	return str + ' '.repeat( length - str.length ) ;

} ;



exports.occurrenceCount = function( str , subStr , overlap = false ) {
	if ( ! str || ! subStr ) { return 0 ; }

	var count = 0 , index = 0 ,
		inc = overlap ? 1 : subStr.length ;

	while ( ( index = str.indexOf( subStr , index ) ) !== -1 ) {
		count ++ ;
		index += inc ;
	}

	return count ;
} ;



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var escape = __webpack_require__( 10 ) ;



exports.regexp = {} ;



exports.regexp.array2alternatives = function array2alternatives( array ) {
	var i , sorted = array.slice() ;

	// Sort descending by string length
	sorted.sort( ( a , b ) => {
		return b.length - a.length ;
	} ) ;

	// Then escape what should be
	for ( i = 0 ; i < sorted.length ; i ++ ) {
		sorted[ i ] = escape.regExpPattern( sorted[ i ] ) ;
	}

	return sorted.join( '|' ) ;
} ;




/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var camel = {} ;
module.exports = camel ;



// Transform alphanum separated by underscore or minus to camel case
camel.toCamelCase = function( str , preserveUpperCase = false ) {
	if ( ! str || typeof str !== 'string' ) { return '' ; }

	return str.replace( /^[\s_-]*([^\s_-]+)|[\s_-]+([^\s_-]?)([^\s_-]*)/g , ( match , firstWord , firstLetter , endOfWord ) => {

		if ( preserveUpperCase ) {
			if ( firstWord ) { return firstWord ; }
			if ( ! firstLetter ) { return '' ; }
			return firstLetter.toUpperCase() + endOfWord ;
		}

		if ( firstWord ) { return firstWord.toLowerCase() ; }
		if ( ! firstLetter ) { return '' ; }
		return firstLetter.toUpperCase() + endOfWord.toLowerCase() ;

	} ) ;
} ;



camel.camelCaseToSeparated = function( str , separator = ' ' ) {
	if ( ! str || typeof str !== 'string' ) { return '' ; }

	return str.replace( /^([A-Z])|([A-Z])/g , ( match , firstLetter , letter ) => {

		if ( firstLetter ) { return firstLetter.toLowerCase() ; }
		return separator + letter.toLowerCase() ;
	} ) ;
} ;



// Transform camel case to alphanum separated by minus
camel.camelCaseToDash =
camel.camelCaseToDashed = ( str ) => camel.camelCaseToSeparated( str , '-' ) ;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var map = __webpack_require__( 55 ) ;

module.exports = function( str ) {
	return str.replace( /[^\u0000-\u007e]/g , ( c ) => { return map[ c ] || c ; } ) ;
} ;




/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {"߀":"0","́":""," ":" ","Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ɓ":"B","ｃ":"C","Ⓒ":"C","Ｃ":"C","Ꜿ":"C","Ḉ":"C","Ç":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ɗ":"D","Ɖ":"D","ᴅ":"D","Ꝺ":"D","Ð":"Dh","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","ɛ":"E","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","ᴇ":"E","ꝼ":"F","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","ɢ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","ȷ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","ϻ":"M","Ꞥ":"N","Ƞ":"N","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ɲ":"N","Ꞑ":"N","ᴎ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Þ":"Th","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ɑ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","Ƃ":"b","ⓒ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","C":"c","Ć":"c","Ĉ":"c","Ċ":"c","Č":"c","Ƈ":"c","Ȼ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","Ƌ":"d","Ꮷ":"d","ԁ":"d","Ɦ":"d","ð":"dh","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ﬀ":"ff","ﬁ":"fi","ﬂ":"fl","ﬃ":"ffi","ﬄ":"ffl","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ꝿ":"g","ᵹ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ɭ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ԉ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ɔ":"o","ᴑ":"o","œ":"oe","ƣ":"oi","ꝏ":"oo","ȣ":"ou","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ρ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ʂ":"s","ß":"ss","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","þ":"th","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z"}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





module.exports = function toTitleCase( str , options ) {
	if ( ! str || typeof str !== 'string' ) { return '' ; }

	options = options || {} ;

	return str.replace( /[^\s_-]+/g , ( part ) => {
		if ( options.zealous ) {
			if ( options.preserveAllCaps && part === part.toUpperCase() ) {
				// This is a ALLCAPS word
				return part ;
			}

			return part[ 0 ].toUpperCase() + part.slice( 1 ).toLowerCase() ;

		}

		return part[ 0 ].toUpperCase() + part.slice( 1 ) ;

	} ) ;
} ;




/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const unicode = __webpack_require__( 15 ) ;



// French typography rules with '!', '?', ':' and ';'
const FRENCH_DOUBLE_GRAPH_TYPO = {
	'!': true ,
	'?': true ,
	':': true ,
	';': true
} ;



/*
	.wordwrap( str , width )
	.wordwrap( str , options )

	str: the string to process
	width: the max width (default to 80)
	options: object, where:
		width: the max width (default to 80)
		glue: (optional) the char used to join lines, by default: lines are joined with '\n',
		noJoin: (optional) if set: don't join, instead return an array of lines
		offset: (optional) offset of the first-line
		updateOffset: (optional) if set, options.offset is updated with the last line width
		noTrim: (optional) if set, don't right-trim lines, if not set, right-trim all lines except the last
		fill: (optional) if set, fill the remaining width with space (it forces noTrim)
		skipFn: (optional) a function used to skip a whole sequence, useful for special sequences
			like ANSI escape sequence, and so on...
		charWidthFn: (optional) a function used to compute the width of one char/group of chars
		regroupFn: (optional) a function used to regroup chars together
*/
module.exports = function wordwrap( str , options ) {
	var start = 0 , end , skipEnd , lineWidth , currentLine , currentWidth , length ,
		lastEnd , lastWidth , lastWasSpace , charWidthFn ,
		explicitNewLine = true ,
		strArray = unicode.toArray( str ) ,
		trimNewLine = false ,
		line , lines = [] ;

	if ( typeof options !== 'object' ) {
		options = { width: options } ;
	}

	// Catch NaN, zero or negative and non-number
	if ( ! options.width || typeof options.width !== 'number' || options.width <= 0 ) { options.width = 80 ; }

	lineWidth = options.offset ? options.width - options.offset : options.width ;

	if ( typeof options.glue !== 'string' ) { options.glue = '\n' ; }

	if ( options.regroupFn ) {
		strArray = options.regroupFn( strArray ) ;
		// If char are grouped, use unicode.width() as a default
		charWidthFn = options.charWidthFn || unicode.width ;
	}
	else {
		// If char are not grouped, use unicode.charWidth() as a default
		charWidthFn = options.charWidthFn || unicode.charWidth ;
	}

	length = strArray.length ;

	var getNextLine = () => {
		//originStart = start ;

		if ( ! explicitNewLine || trimNewLine ) {
			// Find the first non-space char
			while ( strArray[ start ] === ' ' ) { start ++ ; }

			if ( trimNewLine && strArray[ start ] === '\n' ) {
				explicitNewLine = true ;
				start ++ ;
				/*
				originStart = start ;
				while ( strArray[ start ] === ' ' ) { start ++ ; }
				*/
			}
		}

		if ( start >= length ) { return null ; }

		explicitNewLine = false ;
		trimNewLine = false ;
		lastWasSpace = false ;
		end = lastEnd = start ;
		currentWidth = lastWidth = 0 ;

		for ( ;; ) {
			if ( end >= length ) {
				return strArray.slice( start , end ).join( '' ) ;
			}

			if ( strArray[ end ] === '\n' ) {
				explicitNewLine = true ;
				currentLine = strArray.slice( start , end ++ ).join( '' ) ;

				if ( options.fill ) {
					currentLine += ' '.repeat( lineWidth - currentWidth ) ;
				}

				return currentLine ;
			}

			if ( options.skipFn ) {
				skipEnd = options.skipFn( strArray , end ) ;
				if ( skipEnd !== end ) {
					end = skipEnd ;
					continue ;
				}
			}

			if ( strArray[ end ] === ' ' && ! lastWasSpace && ! FRENCH_DOUBLE_GRAPH_TYPO[ strArray[ end + 1 ] ] ) {
				// This is the first space of a group of space
				lastEnd = end ;
				lastWidth = currentWidth ;
			}
			else {
				lastWasSpace = false ;
			}

			currentWidth += charWidthFn( strArray[ end ] ) ;

			if ( currentWidth > lineWidth ) {
				// If lastEnd === start, this is a word that takes the whole line: cut it
				// If not, use the lastEnd
				trimNewLine = true ;

				if ( lastEnd !== start ) {
					end = lastEnd ;
				}
				else if ( lineWidth < options.width ) {
					// This is the first line with an offset, so just start over in line two
					end = start ;
					return '' ;
				}

				currentLine = strArray.slice( start , end ).join( '' ) ;

				if ( options.fill ) {
					currentLine += ' '.repeat( lineWidth - lastWidth ) ;
				}

				return currentLine ;
			}

			// Do not move that inside the for(;;), some part are using a continue statement and manage the end value by themself
			end ++ ;
		}
	} ;

	while ( start < length && ( line = getNextLine() ) !== null ) {
		lines.push( line ) ;
		start = end ;
		lineWidth = options.width ;
	}

	// If it ends with an explicit newline, we have to reproduce it now!
	if ( explicitNewLine ) { lines.push( '' ) ; }

	if ( ! options.noTrim && ! options.fill ) {
		lines = lines.map( ( line_ , index ) => index === lines.length - 1 ? line_ : line_.trimRight() ) ;
	}

	if ( ! options.noJoin ) { lines = lines.join( options.glue ) ; }

	if ( options.updateOffset ) { options.offset = currentWidth ; }

	return lines ;
} ;



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	String Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/




const fuzzy = {} ;
module.exports = fuzzy ;



fuzzy.score = ( input , pattern ) => {
	if ( input === pattern ) { return 1 ; }
	if ( input.length === 0 || pattern.length === 0 ) { return 0 ; }
	//return 1 - fuzzy.levenshtein( input , pattern ) / ( pattern.length >= input.length ? pattern.length : input.length ) ;
	return Math.max( 0 , 1 - fuzzy.levenshtein( input , pattern ) / pattern.length ) ;
} ;



const DEFAULT_SCORE_LIMIT = 0 ;
const DEFAULT_TOKEN_DISPARITY_PENALTY = 0.88 ;
// deltaRate should be just above tokenDisparityPenalty
const DEFAULT_DELTA_RATE = 0.9 ;



fuzzy.bestMatch = ( input , patterns , options = {} ) => {
	var bestScore = options.scoreLimit || DEFAULT_SCORE_LIMIT ,
		i , iMax , currentScore , currentPattern ,
		bestIndex = -1 ,
		bestPattern = null ;

	for ( i = 0 , iMax = patterns.length ; i < iMax ; i ++ ) {
		currentPattern = patterns[ i ] ;
		currentScore = fuzzy.score( input , currentPattern ) ;
		if ( currentScore === 1 ) { return options.indexOf ? i : currentPattern ; }
		if ( currentScore > bestScore ) {
			bestScore = currentScore ;
			bestPattern = currentPattern ;
			bestIndex = i ;
		}
	}

	return options.indexOf ? bestIndex : bestPattern ;
} ;



fuzzy.topMatch = ( input , patterns , options = {} ) => {
	var scoreLimit = options.scoreLimit || DEFAULT_SCORE_LIMIT ,
		deltaRate = options.deltaRate || DEFAULT_DELTA_RATE ,
		i , iMax , patternScores ;

	patternScores = patterns.map( ( pattern , index ) => ( { pattern , index , score: fuzzy.score( input , pattern ) } ) ) ;
	patternScores.sort( ( a , b ) => b.score - a.score ) ;

	//console.log( patternScores ) ;

	if ( patternScores[ 0 ].score <= scoreLimit ) { return [] ; }
	scoreLimit = Math.max( scoreLimit , patternScores[ 0 ].score * deltaRate ) ;

	for ( i = 1 , iMax = patternScores.length ; i < iMax ; i ++ ) {
		if ( patternScores[ i ].score < scoreLimit ) {
			patternScores.length = i ;
			break ;
		}
	}

	return options.indexOf ?
		patternScores.map( e => e.index ) :
		patternScores.map( e => e.pattern ) ;
} ;



const englishBlackList = new Set( [
	'a' , 'an' , 'the' , 'this' , 'that' , 'those' , 'some' ,
	'of' , 'in' , 'on' , 'at' ,
	'my' , 'your' , 'her' , 'his' , 'its' , 'our' , 'their'
] ) ;

function tokenize( str , blackList = englishBlackList ) {
	return str.split( /[ '"/|,:_-]+/g ).filter( s => s && ! blackList.has( s ) ) ;
}



// This is almost the same code than .topTokenMatch(): both must be in sync
fuzzy.bestTokenMatch = ( input , patterns , options = {} ) => {
	var scoreLimit = options.scoreLimit || DEFAULT_SCORE_LIMIT ,
		tokenDisparityPenalty = options.tokenDisparityPenalty || DEFAULT_TOKEN_DISPARITY_PENALTY ,
		i , iMax , j , jMax , z , zMax ,
		currentPattern , currentPatternTokens , currentPatternToken , currentPatternScore ,
		bestPatternScore = scoreLimit ,
		//currentPatternScores = [] ,
		currentInputToken , currentScore ,
		inputTokens = tokenize( input ) ,
		bestScore ,
		bestIndex = -1 ,
		bestPattern = null ;

	//console.log( inputTokens ) ;
	if ( ! inputTokens.length || ! patterns.length ) { return options.indexOf ? bestIndex : bestPattern ; }

	for ( i = 0 , iMax = patterns.length ; i < iMax ; i ++ ) {
		currentPattern = patterns[ i ] ;
		currentPatternTokens = tokenize( currentPattern ) ;
		//currentPatternScores.length = 0 ;
		currentPatternScore = 0 ;

		for ( j = 0 , jMax = inputTokens.length ; j < jMax ; j ++ ) {
			currentInputToken = inputTokens[ j ] ;
			bestScore = 0 ;

			for ( z = 0 , zMax = currentPatternTokens.length ; z < zMax ; z ++ ) {
				currentPatternToken = currentPatternTokens[ z ] ;
				currentScore = fuzzy.score( currentInputToken , currentPatternToken ) ;

				if ( currentScore > bestScore ) {
					bestScore = currentScore ;
					if ( currentScore === 1 ) { break ; }
				}
			}

			//currentPatternScores[ j ] = bestScore ;
			currentPatternScore += bestScore ;
		}

		//currentPatternScore = Math.hypot( ... currentPatternScores ) ;
		currentPatternScore /= inputTokens.length ;

		// Apply a small penalty if there isn't enough tokens
		if ( inputTokens.length !== currentPatternTokens.length ) {
			currentPatternScore *= tokenDisparityPenalty ** Math.abs( currentPatternTokens.length - inputTokens.length ) ;
		}

		//console.log( currentPattern + ': ' + currentPatternScore ) ;
		if ( currentPatternScore > bestPatternScore ) {
			bestPatternScore = currentPatternScore ;
			bestPattern = currentPattern ;
			bestIndex = i ;
		}
	}

	return options.indexOf ? bestIndex : bestPattern ;
} ;



// This is almost the same code than .bestTokenMatch(): both must be in sync
// deltaRate should be just above tokenDisparityPenalty
fuzzy.topTokenMatch = ( input , patterns , options = {} ) => {
	var scoreLimit = options.scoreLimit || DEFAULT_SCORE_LIMIT ,
		tokenDisparityPenalty = options.tokenDisparityPenalty || DEFAULT_TOKEN_DISPARITY_PENALTY ,
		deltaRate = options.deltaRate || DEFAULT_DELTA_RATE ,
		i , iMax , j , jMax , z , zMax ,
		currentPattern , currentPatternTokens , currentPatternToken , currentPatternScore ,
		currentInputToken , currentScore ,
		inputTokens = tokenize( input ) ,
		bestScore ,
		patternScores = [] ;

	//console.log( inputTokens ) ;
	if ( ! inputTokens.length || ! patterns.length ) { return [] ; }

	for ( i = 0 , iMax = patterns.length ; i < iMax ; i ++ ) {
		currentPattern = patterns[ i ] ;
		currentPatternTokens = tokenize( currentPattern ) ;
		//currentPatternScores.length = 0 ;
		currentPatternScore = 0 ;

		for ( j = 0 , jMax = inputTokens.length ; j < jMax ; j ++ ) {
			currentInputToken = inputTokens[ j ] ;
			bestScore = 0 ;

			for ( z = 0 , zMax = currentPatternTokens.length ; z < zMax ; z ++ ) {
				currentPatternToken = currentPatternTokens[ z ] ;
				currentScore = fuzzy.score( currentInputToken , currentPatternToken ) ;

				if ( currentScore > bestScore ) {
					bestScore = currentScore ;
					if ( currentScore === 1 ) { break ; }
				}
			}

			//currentPatternScores[ j ] = bestScore ;
			currentPatternScore += bestScore ;
		}

		//currentPatternScore = Math.hypot( ... currentPatternScores ) ;
		currentPatternScore /= inputTokens.length ;

		// Apply a small penalty if there isn't enough tokens
		if ( inputTokens.length !== currentPatternTokens.length ) {
			currentPatternScore *= tokenDisparityPenalty ** Math.abs( currentPatternTokens.length - inputTokens.length ) ;
		}

		patternScores.push( { pattern: currentPattern , index: i , score: currentPatternScore } ) ;
	}

	patternScores.sort( ( a , b ) => b.score - a.score ) ;
	//console.log( "Before truncating:" , patternScores ) ;

	if ( patternScores[ 0 ].score <= scoreLimit ) { return [] ; }
	scoreLimit = Math.max( scoreLimit , patternScores[ 0 ].score * deltaRate ) ;

	for ( i = 1 , iMax = patternScores.length ; i < iMax ; i ++ ) {
		if ( patternScores[ i ].score < scoreLimit ) {
			patternScores.length = i ;
			break ;
		}
	}

	//console.log( "After truncating:" , patternScores ) ;

	return options.indexOf ?
		patternScores.map( e => e.index ) :
		patternScores.map( e => e.pattern ) ;
} ;



// The .levenshtein() function is derivated from https://github.com/sindresorhus/leven by Sindre Sorhus (MIT License)
const _tracker = [] ;
const _leftCharCodeCache = [] ;

fuzzy.levenshtein = ( left , right ) => {
	if ( left === right ) { return 0 ; }

	// Swapping the strings if `a` is longer than `b` so we know which one is the
	// shortest & which one is the longest
	if ( left.length > right.length ) {
		let swap = left ;
		left = right ;
		right = swap ;
	}

	let leftLength = left.length ;
	let rightLength = right.length ;

	// Performing suffix trimming:
	// We can linearly drop suffix common to both strings since they
	// don't increase distance at all
	while ( leftLength > 0 && ( left.charCodeAt( leftLength - 1 ) === right.charCodeAt( rightLength - 1 ) ) ) {
		leftLength -- ;
		rightLength -- ;
	}

	// Performing prefix trimming
	// We can linearly drop prefix common to both strings since they
	// don't increase distance at all
	let start = 0 ;

	while ( start < leftLength && ( left.charCodeAt( start ) === right.charCodeAt( start ) ) ) {
		start ++ ;
	}

	leftLength -= start ;
	rightLength -= start ;

	if ( leftLength === 0 ) { return rightLength ; }

	let rightCharCode ;
	let result ;
	let temp ;
	let temp2 ;
	let i = 0 ;
	let j = 0 ;

	while ( i < leftLength ) {
		_leftCharCodeCache[ i ] = left.charCodeAt( start + i ) ;
		_tracker[ i ] = ++ i ;
	}

	while ( j < rightLength ) {
		rightCharCode = right.charCodeAt( start + j ) ;
		temp = j ++ ;
		result = j ;

		for ( i = 0 ; i < leftLength ; i ++ ) {
			temp2 = rightCharCode === _leftCharCodeCache[ i ] ? temp : temp + 1 ;
			temp = _tracker[ i ] ;
			// eslint-disable-next-line no-nested-ternary
			result = _tracker[ i ] = temp > result   ?   temp2 > result ? result + 1 : temp2   :   temp2 > temp ? temp + 1 : temp2 ;
		}
	}

	return result ;
} ;



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;
const exec = __webpack_require__( 7 ).exec ;
const path = __webpack_require__( 24 ) ;
const os = __webpack_require__( 69 ) ;

const termkit = __webpack_require__( 5 ) ;



// Try to guess the terminal without any async system call, using TERM and COLORTERM.
// Argument 'unpipe' is used when we will get a TTY even if we haven't one ATM.
exports.guessTerminal = function( unpipe ) {
	var envVar , version ;

	var isSSH = !! process.env.SSH_CONNECTION ;
	var isTTY = !! process.stdout.isTTY ;

	if ( ! isTTY && ! unpipe ) {
		return {
			isTTY: isTTY ,
			isSSH: isSSH ,
			appId: 'none' ,
			safe: true ,
			generic: 'none'
		} ;
	}

	var platform = os.platform() ;
	var t256color = ( process.env.TERM && process.env.TERM.match( /256/ ) ) ||
		( process.env.COLORTERM && process.env.COLORTERM.match( /256/ ) ) ;
	var tTrueColor = process.env.COLORTERM && process.env.COLORTERM.match( /^(truecolor|24bits?)$/ ) ;

	var appId =
		process.env.COLORTERM && ! tTrueColor ? process.env.COLORTERM :
		process.env.TERM_PROGRAM ? process.env.TERM_PROGRAM :
		process.env.TERM ;

	if ( platform === 'darwin' ) { appId = path.parse( appId ).name ; }

	// safe is true if we are sure about our guess
	var safe =
		appId !== process.env.TERM
		|| ( process.env.TERM && process.env.TERM !== 'xterm' && process.env.TERM !== 'xterm-256color' ) ;

	var generic = appId ;

	switch ( appId ) {
		case 'xterm' :
		case 'xterm-256color' :
			if ( safe ) { break ; }

			if ( tTrueColor ) {
				appId = generic = 'xterm-truecolor' ;
			}

			// Many terminal advertise them as xterm, we will try to guess some of them here,
			// using environment variable
			if ( process.env.VTE_VERSION ) {
				version = parseInt( process.env.VTE_VERSION , 10 ) ;

				if ( version >= 3803 ) {
					appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome' ;
					safe = true ;
					break ;
				}
			}

			// BTW OSX terminals advertise them as xterm, while having their own key mapping...
			if ( platform === 'darwin' ) {
				appId = 'osx-256color' ;
				break ;
			}

			for ( envVar in process.env ) {
				if ( envVar.match( /KONSOLE/ ) ) {
					appId = t256color || tTrueColor ? 'konsole-256color' : 'konsole' ;
					safe = true ;
					break ;
				}
			}

			break ;

		case 'linux' :
		case 'aterm' :
		case 'kuake' :
		case 'tilda' :
		case 'terminology' :
		case 'wterm' :
		case 'mrxvt' :
			break ;

		case 'gnome' :
		case 'gnome-256color' :
		case 'gnome-terminal' :
		case 'gnome-terminal-256color' :
		case 'terminator' :	// it uses gnome terminal lib
		case 'guake' :	// same here
			appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome' ;
			break ;
		case 'konsole' :
			appId = t256color || tTrueColor ? 'konsole-256color' : 'konsole' ;
			break ;
		case 'rxvt' :
		case 'rxvt-xpm' :
		case 'rxvt-unicode-256color' :
		case 'urxvt256c' :
		case 'urxvt256c-ml' :
		case 'rxvt-unicode' :
		case 'urxvt' :
		case 'urxvt-ml' :
			if ( process.env.TERM === 'rxvt' ) { appId = 'rxvt-256color' ; }
			else { appId = t256color || tTrueColor ? 'rxvt-256color' : 'rxvt' ; }
			break ;
		case 'xfce' :
		case 'xfce-terminal' :
		case 'xfce4-terminal' :
			appId = 'xfce' ;
			break ;
		case 'eterm' :
		case 'Eterm' :
			appId = t256color || tTrueColor ? 'eterm-256color' : 'eterm' ;
			break ;
		case 'atomic-terminal' :
			appId = 'atomic-terminal' ;
			break ;
		case 'xterm-kitty' :
		case 'kitty' :
			appId = 'kitty' ;
			break ;

			// OSX Terminals

		case 'iTerm' :
		case 'iterm' :
		case 'iTerm2' :
		case 'iterm2' :
		case 'Terminal' :
		case 'terminal' :
		case 'Apple_Terminal' :
			appId = 'osx-256color' ;
			break ;

		default :
			if ( ! appId ) { generic = 'unknown' ; }
			else { generic = appId = generic.toLowerCase() ; }
			break ;
	}

	return {
		isTTY , isSSH , appId , safe , generic: safe ? appId : generic
	} ;
} ;



function getParentProcess( pid ) {
	var parentPid , appName ;

	return new Promise( ( resolve , reject ) => {
		exec( 'ps -h -o ppid -p ' + pid , ( error , stdout ) => {
			if ( error ) { reject( error ) ; return ; }

			parentPid = parseInt( stdout.match(  /[0-9]+/gm )[ 0 ] , 10 ) ;
			//console.error( "--- Parent PID: " , parentPid , stdout.match(  /[0-9]+/gm ) ) ;
			if( ! parentPid ) { reject( new Error( "Couldn't get parent PID" ) ) ; return ; }

			exec( 'ps -h -o comm -p ' + parentPid , ( error_ , stdout_ ) => {
				if ( error_ ) { reject( error_ ) ; return ; }

				appName = stdout_.trim() ;
				//console.error( "+++ appName: " , appName ) ;
				resolve( { pid: parentPid , appName } ) ;
			} ) ;
		} ) ;
	} ) ;
}



// Work localy, do not work over SSH
exports.getParentTerminalInfo = async function( callback ) {
	var loopAgain , error , appName , appNames = [] , appId , pid = process.pid ;

	if ( process.env.SSH_CONNECTION ) {
		error = new Error( 'SSH connection detected, .getParentTerminalInfo() is useless in this context.' ) ;
		if ( callback ) { callback( error ) ; return ; }
		throw error ;
	}

	var platform = os.platform() ;
	var t256color = ( process.env.TERM && process.env.TERM.match( /256/ ) ) ||
		( process.env.COLORTERM && process.env.COLORTERM.match( /256/ ) ) ;
	var tTrueColor = process.env.COLORTERM && process.env.COLORTERM.match( /^(truecolor|24bits?)$/ ) ;

	try {
		loopAgain = true ;

		while ( loopAgain ) {
			( { appName , pid } = await getParentProcess( pid ) ) ;

			//console.log( 'found:' , appName , pid ) ;

			if ( platform === 'darwin' ) { appName = path.parse( appName ).name ; }
			appNames.push( appName ) ;

			// Do NOT skip the first, there are case where the terminal may run directly node.js without any shell in between
			//if ( ++ loop <= 1 ) { asyncCallback( undefined , true ) ; return ; }

			loopAgain = false ;

			switch ( appName ) {
				case 'linux' :
				case 'xterm' :
				case 'konsole' :
				case 'gnome-terminal' :
				case 'aterm' :
				case 'guake' :
				case 'kuake' :
				case 'tilda' :
				case 'terminology' :
				case 'wterm' :
				case 'mrxvt' :
					appId = t256color || tTrueColor ? appName + '-256color' : appName ;
					break ;
				case 'atomic-terminal' :
					appId = appName ;
					break ;
				case 'login' :
					appName = 'linux' ;
					appId = appName ;
					break ;
				// Use terminator as gnome-terminal, since it uses the gnome-terminal renderer
				case 'terminator' :
					appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome' ;
					break ;
				// Use rxvt as xterm-256color
				case 'rxvt' :
				case 'urxvt256c' :
				case 'urxvt256c-ml' :
					appId = 'rxvt-256color' ;
					break ;
				// Use rxvt as xterm
				case 'urxvt' :
				case 'urxvt-ml' :
					appId = 'rxvt' ;
					break ;
				// xfce4-terminal
				case 'xfce4-terminal' :
					appId = 'xfce' ;
					break ;
				case 'gnome-terminal-' :
					appName = 'gnome-terminal' ;
					appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome' ;
					break ;
				case 'Eterm' :
				case 'eterm' :
					appName = 'Eterm' ;
					appId = t256color || tTrueColor ? 'eterm-256color' : 'eterm' ;
					break ;
				case 'kitty' :
					appName = appId = 'kitty' ;
					break ;

					// OSX Terminals

				case 'iTerm' :
				case 'iTerm2' :
				case 'Terminal' :
					appId = 'osx-256color' ;
					break ;

				default :
					if ( appName.match( /gnome-terminal/ ) ) {
						appName = 'gnome-terminal' ;
						appId = t256color || tTrueColor ? 'gnome-256color' : 'gnome' ;
						break ;
					}

					if ( ! pid || pid === 1 ) {
						throw new Error( 'Terminal not found, app names: ' + appNames.join( ', ' ) ) ;
					}

					loopAgain = true ;
			}
		}
	}
	catch ( error_ ) {
		if ( callback ) { callback( error_ ) ; return ; }
		throw error_ ;
	}

	var result = {
		appId: appId ,
		appName: appName ,
		pid: pid ,
		safe: true
	} ;

	if ( callback ) { callback( undefined , result ) ; return ; }

	return result ;
} ;



// Work locally, do not work over SSH
exports.getDetectedTerminal = async function( callback ) {
	var terminal , info ,
		guessed = termkit.guessTerminal() ;

	if ( guessed.safe || guessed.isSSH ) {
		// If we have a good guess, use it now
		terminal = termkit.createTerminal( {
			stdin: process.stdin ,
			stdout: process.stdout ,
			stderr: process.stderr ,
			generic: ( process.env.TERM && process.env.TERM.toLowerCase() ) || 'unknown' ,
			appId: guessed.safe ? guessed.appId : undefined ,
			//  appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: guessed.isTTY ,
			isSSH: guessed.isSSH ,
			processSigwinch: true ,
			preferProcessSigwinch: !! termkit.globalConfig.preferProcessSigwinch
		} ) ;

		if ( callback ) { callback( undefined , terminal ) ; }
		return terminal ;
	}

	try {
		info = await termkit.getParentTerminalInfo() ;

		terminal = termkit.createTerminal( {
			stdin: process.stdin ,
			stdout: process.stdout ,
			stderr: process.stderr ,
			generic: ( process.env.TERM && process.env.TERM.toLowerCase() ) || 'unknown' ,
			appId: info.appId ,
			appName: info.appName ,
			isTTY: guessed.isTTY ,
			isSSH: guessed.isSSH ,
			pid: info.pid ,
			processSigwinch: true ,
			preferProcessSigwinch: !! termkit.globalConfig.preferProcessSigwinch
		} ) ;
	}
	catch ( error ) {
		// Do not issue error
		terminal = termkit.createTerminal( {
			stdin: process.stdin ,
			stdout: process.stdout ,
			stderr: process.stderr ,
			generic: ( process.env.TERM && process.env.TERM.toLowerCase() ) || 'unknown' ,
			appId: guessed.safe ? guessed.appId : undefined ,
			//  appName: guessed.safe ? guessed.appName : undefined ,
			isTTY: guessed.isTTY ,
			isSSH: guessed.isSSH ,
			processSigwinch: true ,
			preferProcessSigwinch: !! termkit.globalConfig.preferProcessSigwinch
		} ) ;
	}

	if ( callback ) { callback( undefined , terminal ) ; }
	return terminal ;
} ;



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	Prerequisite.
*/



const NativePromise = global.Promise ;

// Cross-platform next tick function
var nextTick ;

if ( ! process.browser ) {
	nextTick = process.nextTick ;
}
else {
	// Browsers suck, they don't have setImmediate() except IE/Edge.
	// A module is needed to emulate it.
	__webpack_require__( 61 ) ;
	nextTick = setImmediate ;
}



/*
	Constructor.
*/



function Promise( fn ) {
	this.fn = fn ;
	this._then = Promise._dormantThen ;
	this.value = null ;
	this.thenHandlers = null ;
	this.handledRejection = null ;

	if ( this.fn ) {
		this._exec() ;
	}
}

module.exports = Promise ;



Promise.Native = NativePromise ;
Promise.warnUnhandledRejection = true ;



Promise.prototype._exec = function() {
	this._then = Promise._pendingThen ;

	try {
		this.fn(
			// Don't return anything, it would create nasty bugs! E.g.:
			// bad: error => this.reject( error_ )
			// good: error_ => { this.reject( error_ ) ; }
			result_ => { this.resolve( result_ ) ; } ,
			error_ => { this.reject( error_ ) ; }
		) ;
	}
	catch ( error ) {
		this.reject( error ) ;
	}
} ;



/*
	Resolve/reject and then-handlers management.
*/



Promise.prototype.resolve = Promise.prototype.fulfill = function( value ) {
	// Throw an error?
	if ( this._then.settled ) { return this ; }

	if ( Promise.isThenable( value ) ) {
		this._execThenPromise( value ) ;
		return this ;
	}

	return this._resolveValue( value ) ;
} ;



Promise.prototype._resolveValue = function( value ) {
	this._then = Promise._fulfilledThen ;
	this.value = value ;
	if ( this.thenHandlers && this.thenHandlers.length ) { this._execFulfillHandlers() ; }

	return this ;
} ;



// Faster on node v8.x
Promise.prototype._execThenPromise = function( thenPromise ) {
	try {
		thenPromise.then(
			result_ => { this.resolve( result_ ) ; } ,
			error_ => { this.reject( error_ ) ; }
		) ;
	}
	catch ( error ) {
		this.reject( error ) ;
	}
} ;



Promise.prototype.reject = function( error ) {
	// Throw an error?
	if ( this._then.settled ) { return this ; }

	this._then = Promise._rejectedThen ;
	this.value = error ;

	if ( this.thenHandlers && this.thenHandlers.length ) {
		this._execRejectionHandlers() ;
	}
	else if ( Promise.warnUnhandledRejection && ! this.handledRejection ) {
		this._unhandledRejection() ;
	}

	return this ;
} ;



Promise.prototype._execFulfillHandlers = function() {
	var i ,
		length = this.thenHandlers.length ;

	// Do cache the length, if a handler is synchronously added, it will be called on next tick
	for ( i = 0 ; i < length ; i += 3 ) {
		if ( this.thenHandlers[ i + 1 ] ) {
			this._execOneFulfillHandler( this.thenHandlers[ i ] , this.thenHandlers[ i + 1 ] ) ;
		}
		else {
			this.thenHandlers[ i ].resolve( this.value ) ;
		}
	}
} ;



// Faster on node v8.x?
//*
Promise.prototype._execOneFulfillHandler = function( promise , onFulfill ) {
	try {
		promise.resolve( onFulfill( this.value ) ) ;
	}
	catch ( error_ ) {
		promise.reject( error_ ) ;
	}
} ;
//*/



Promise.prototype._execRejectionHandlers = function() {
	var i ,
		length = this.thenHandlers.length ;

	// Do cache the length, if a handler is synchronously added, it will be called on next tick
	for ( i = 0 ; i < length ; i += 3 ) {
		if ( this.thenHandlers[ i + 2 ] ) {
			this._execOneRejectHandler( this.thenHandlers[ i ] , this.thenHandlers[ i + 2 ] ) ;
		}
		else {
			this.thenHandlers[ i ].reject( this.value ) ;
		}
	}
} ;



// Faster on node v8.x?
//*
Promise.prototype._execOneRejectHandler = function( promise , onReject ) {
	try {
		promise.resolve( onReject( this.value ) ) ;
	}
	catch ( error_ ) {
		promise.reject( error_ ) ;
	}
} ;
//*/



Promise.prototype.resolveTimeout = Promise.prototype.fulfillTimeout = function( time , result ) {
	setTimeout( () => this.resolve( result ) , time ) ;
} ;



Promise.prototype.rejectTimeout = function( time , error ) {
	setTimeout( () => this.reject( error ) , time ) ;
} ;



/*
	.then() variants depending on the state
*/



// .then() variant when the promise is dormant
Promise._dormantThen = function( onFulfill , onReject ) {
	if ( this.fn ) {
		// If this is a dormant promise, wake it up now!
		this._exec() ;

		// Return now, some sync stuff can change the status
		return this._then( onFulfill , onReject ) ;
	}

	var promise = new Promise() ;

	if ( ! this.thenHandlers ) {
		this.thenHandlers = [ promise , onFulfill , onReject ] ;
	}
	else {
		//this.thenHandlers.push( onFulfill ) ;
		this.thenHandlers[ this.thenHandlers.length ] = promise ;
		this.thenHandlers[ this.thenHandlers.length ] = onFulfill ;
		this.thenHandlers[ this.thenHandlers.length ] = onReject ;
	}

	return promise ;
} ;

Promise._dormantThen.settled = false ;



// .then() variant when the promise is pending
Promise._pendingThen = function( onFulfill , onReject ) {
	var promise = new Promise() ;

	if ( ! this.thenHandlers ) {
		this.thenHandlers = [ promise , onFulfill , onReject ] ;
	}
	else {
		//this.thenHandlers.push( onFulfill ) ;
		this.thenHandlers[ this.thenHandlers.length ] = promise ;
		this.thenHandlers[ this.thenHandlers.length ] = onFulfill ;
		this.thenHandlers[ this.thenHandlers.length ] = onReject ;
	}

	return promise ;
} ;

Promise._pendingThen.settled = false ;



// .then() variant when the promise is fulfilled
Promise._fulfilledThen = function( onFulfill ) {
	if ( ! onFulfill ) { return this ; }

	var promise = new Promise() ;

	// This handler should not fire in this code sync flow
	nextTick( () => {
		try {
			promise.resolve( onFulfill( this.value ) ) ;
		}
		catch ( error ) {
			promise.reject( error ) ;
		}
	} ) ;

	return promise ;
} ;

Promise._fulfilledThen.settled = true ;



// .then() variant when the promise is rejected
Promise._rejectedThen = function( onFulfill , onReject ) {
	if ( ! onReject ) { return this ; }

	this.handledRejection = true ;
	var promise = new Promise() ;

	// This handler should not fire in this code sync flow
	nextTick( () => {
		try {
			promise.resolve( onReject( this.value ) ) ;
		}
		catch ( error ) {
			promise.reject( error ) ;
		}
	} ) ;

	return promise ;
} ;

Promise._rejectedThen.settled = true ;



/*
	.then() and short-hands.
*/



Promise.prototype.then = function( onFulfill , onReject ) {
	return this._then( onFulfill , onReject ) ;
} ;



Promise.prototype.catch = function( onReject = () => undefined ) {
	return this._then( undefined , onReject ) ;
} ;



Promise.prototype.finally = function( onSettled ) {
	return this._then( onSettled , onSettled ) ;
} ;



Promise.prototype.tap = Promise.prototype.tapThen = function( onFulfill ) {
	this._then( onFulfill , undefined ) ;
	return this ;
} ;



Promise.prototype.tapCatch = function( onReject ) {
	this._then( undefined , onReject ) ;
	return this ;
} ;



Promise.prototype.tapFinally = function( onSettled ) {
	this._then( onSettled , onSettled ) ;
	return this ;
} ;



// Any unhandled error throw ASAP
Promise.prototype.fatal = function() {
	this._then( undefined , error => {
		// Throw async, otherwise it would be catched by .then()
		nextTick( () => { throw error ; } ) ;
	} ) ;
} ;



Promise.prototype.done = function( onFulfill , onReject ) {
	this._then( onFulfill , onReject ).fatal() ;
	return this ;
} ;



Promise.prototype.callback = function( cb ) {
	this._then(
		value => { cb( undefined , value ) ; } ,
		error => { cb( error ) ; }
	).fatal() ;

	return this ;
} ;



Promise.prototype.callbackAll = function( cb ) {
	this._then(
		values => {
			if ( Array.isArray( values ) ) { cb( undefined , ... values ) ; }
			else { cb( undefined , values ) ; }
		} ,
		error => { cb( error ) ; }
	).fatal() ;

	return this ;
} ;



/*
	The reverse of .callback(), it calls the function with a callback argument and return a promise that resolve or reject depending on that callback invocation.
	Usage:
		await Promise.callback( callback => myFunctionRelyingOnCallback( [arg1] , [arg2] , [...] , callback ) ;
*/
Promise.callback = function( fn ) {
	return new Promise( ( resolve , reject ) => {
		fn( ( error , arg ) => {
			if ( error ) { reject( error ) ; }
			else { resolve( arg ) ; }
		} ) ;
	} ) ;
} ;



Promise.callbackAll = function( fn ) {
	return new Promise( ( resolve , reject ) => {
		fn( ( error , ... args ) => {
			if ( error ) { reject( error ) ; }
			else { resolve( args ) ; }
		} ) ;
	} ) ;
} ;



Promise.prototype.toPromise =	// <-- DEPRECATED, use .propagate
Promise.prototype.propagate = function( promise ) {
	this._then(
		value => { promise.resolve( value ) ; } ,
		error => { promise.reject( error ) ; }
	) ;

	return this ;
} ;





/*
	Foreign promises facilities
*/



Promise.propagate = function( foreignPromise , promise ) {
	foreignPromise.then(
		value => { promise.resolve( value ) ; } ,
		error => { promise.reject( error ) ; }
	) ;

	return foreignPromise ;
} ;



Promise.finally = function( foreignPromise , onSettled ) {
	return foreignPromise.then( onSettled , onSettled ) ;
} ;





/*
	Static factories.
*/



Promise.resolve = Promise.fulfill = function( value ) {
	if ( Promise.isThenable( value ) ) { return Promise.fromThenable( value ) ; }
	return Promise._resolveValue( value ) ;
} ;



Promise._resolveValue = function( value ) {
	var promise = new Promise() ;
	promise._then = Promise._fulfilledThen ;
	promise.value = value ;
	return promise ;
} ;



Promise.reject = function( error ) {
	//return new Promise().reject( error ) ;
	var promise = new Promise() ;
	promise._then = Promise._rejectedThen ;
	promise.value = error ;
	return promise ;
} ;



Promise.resolveTimeout = Promise.fulfillTimeout = function( timeout , value ) {
	return new Promise( resolve => setTimeout( () => resolve( value ) , timeout ) ) ;
} ;



Promise.rejectTimeout = function( timeout , error ) {
	return new Promise( ( resolve , reject ) => setTimeout( () => reject( error ) , timeout ) ) ;
} ;



Promise.resolveNextTick = Promise.fulfillNextTick = function( value ) {
	return new Promise( resolve => nextTick( () => resolve( value ) ) ) ;
} ;



Promise.rejectNextTick = function( error ) {
	return new Promise( ( resolve , reject ) => nextTick( () => reject( error ) ) ) ;
} ;



// A dormant promise is activated the first time a then handler is assigned
Promise.dormant = function( fn ) {
	var promise = new Promise() ;
	promise.fn = fn ;
	return promise ;
} ;



// Try-catched Promise.resolve( fn() )
Promise.try = function( fn ) {
	try {
		return Promise.resolve( fn() ) ;
	}
	catch ( error ) {
		return Promise.reject( error ) ;
	}
} ;



/*
	Thenables.
*/



Promise.isThenable = function( value ) {
	return value && typeof value === 'object' && typeof value.then === 'function' ;
} ;



// We assume a thenable object here
Promise.fromThenable = function( thenable ) {
	if ( thenable instanceof Promise ) { return thenable ; }

	return new Promise( ( resolve , reject ) => {
		thenable.then(
			value => { resolve( value ) ; } ,
			error => { reject( error ) ; }
		) ;
	} ) ;
} ;



// When you just want a fast then() function out of anything, without any desync and unchainable
Promise._bareThen = function( value , onFulfill , onReject ) {
	//if ( Promise.isThenable( value ) )
	if( value && typeof value === 'object' ) {
		if ( value instanceof Promise ) {
			if ( value._then === Promise._fulfilledThen ) { onFulfill( value.value ) ; }
			else if ( value._then === Promise._rejectedThen ) { onReject( value.value ) ; }
			else { value._then( onFulfill , onReject ) ; }
		}
		else if ( typeof value.then === 'function' ) {
			value.then( onFulfill , onReject ) ;
		}
		else {
			onFulfill( value ) ;
		}
	}
	else {
		onFulfill( value ) ;
	}
} ;



/*
	Misc.
*/



// Internal usage, mark all promises as handled ahead of time, useful for series,
// because a warning would be displayed for unhandled rejection for promises that are not yet processed.
Promise._handleAll = function( iterable ) {
	var value ;

	for ( value of iterable ) {
		//if ( ( value instanceof Promise ) || ( value instanceof NativePromise ) )
		if ( Promise.isThenable( value ) ) {
			value.handledRejection = true ;
		}
	}
} ;



Promise.prototype._unhandledRejection = function() {
	// This promise is currently unhandled
	// If still unhandled at the end of the synchronous block of code,
	// output an error message.

	this.handledRejection = false ;

	// Don't know what is the correct way to inform node.js about that.
	// There is no doc about that, and emitting unhandledRejection,
	// does not produce what is expected.

	//process.emit( 'unhandledRejection' , this.value , this ) ;

	/*
	nextTick( () => {
		if ( this.handledRejection === false )
		{
			process.emit( 'unhandledRejection' , this.value , this ) ;
		}
	} ) ;
	*/

	// It looks like 'await' inside a 'try-catch' does not handle the promise soon enough -_-'
	//const nextTick_ = nextTick ;
	const nextTick_ = cb => setTimeout( cb , 0 ) ;

	//*
	if ( this.value instanceof Error ) {
		nextTick_( () => {
			if ( this.handledRejection === false ) {
				this.value.message = 'Unhandled promise rejection: ' + this.value.message ;
				console.error( this.value ) ;
			}
		} ) ;
	}
	else {
		// Avoid starting the stack trace in the nextTick()...
		let error_ = new Error( 'Unhandled promise rejection' ) ;
		nextTick_( () => {
			if ( this.handledRejection === false ) {
				console.error( error_ ) ;
				console.error( 'Rejection reason:' , this.value ) ;
			}
		} ) ;
	}
	//*/
} ;



Promise.prototype.isSettled = function() { return this._then.settled ; } ;



Promise.prototype.getStatus = function() {
	switch ( this._then ) {
		case Promise._dormantThen :
			return 'dormant' ;
		case Promise._pendingThen :
			return 'pending' ;
		case Promise._fulfilledThen :
			return 'fulfilled' ;
		case Promise._rejectedThen :
			return 'rejected' ;
	}
} ;



Promise.prototype.inspect = function() {
	switch ( this._then ) {
		case Promise._dormantThen :
			return 'Promise { <DORMANT> }' ;
		case Promise._pendingThen :
			return 'Promise { <PENDING> }' ;
		case Promise._fulfilledThen :
			return 'Promise { <FULFILLED> ' + this.value + ' }' ;
		case Promise._rejectedThen :
			return 'Promise { <REJECTED> ' + this.value + ' }' ;
	}
} ;



// A shared dummy promise, when you just want to return an immediately thenable
Promise.resolved = Promise.dummy = Promise.resolve() ;





/*
	Browser specific.
*/



if ( process.browser ) {
	Promise.prototype.resolveAtAnimationFrame = function( value ) {
		window.requestAnimationFrame( () => this.resolve( value ) ) ;
	} ;

	Promise.prototype.rejectAtAnimationFrame = function( error ) {
		window.requestAnimationFrame( () => this.reject( error ) ) ;
	} ;

	Promise.resolveAtAnimationFrame = function( value ) {
		return new Promise( resolve => window.requestAnimationFrame( () => resolve( value ) ) ) ;
	} ;

	Promise.rejectAtAnimationFrame = function( error ) {
		return new Promise( ( resolve , reject ) => window.requestAnimationFrame( () => reject( error ) ) ) ;
	} ;
}



/***/ }),
/* 61 */
/***/ (function(module, exports) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



// This object is used as a special unique value for array hole (see Promise.filter())
const HOLE = {} ;

function noop() {}



Promise.all = ( iterable ) => {
	var index = -1 , settled = false ,
		count = 0 , length = Infinity ,
		value , values = [] ,
		allPromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		index ++ ;

		// Create a scope to keep track of the promise's own index
		( () => {
			const promiseIndex = index ;

			Promise.resolve( value )
				.then(
					value_ => {
						if ( settled ) { return ; }

						values[ promiseIndex ] = value_ ;
						count ++ ;

						if ( count >= length ) {
							settled = true ;
							allPromise._resolveValue( values ) ;
						}
					} ,
					error => {
						if ( settled ) { return ; }
						settled = true ;
						allPromise.reject( error ) ;
					}
				) ;
		} )() ;
	}

	length = index + 1 ;

	if ( ! length ) {
		allPromise._resolveValue( values ) ;
	}

	return allPromise ;
} ;



// Maybe faster, but can't find any reasonable grounds for that ATM
//Promise.all =
Promise._allArray = ( iterable ) => {
	var length = iterable.length ;

	if ( ! length ) { Promise._resolveValue( [] ) ; }

	var index ,
		runtime = {
			settled: false ,
			count: 0 ,
			length: length ,
			values: [] ,
			allPromise: new Promise()
		} ;

	for ( index = 0 ; ! runtime.settled && index < length ; index ++ ) {
		Promise._allArrayOne( iterable[ index ] , index , runtime ) ;
	}

	return runtime.allPromise ;
} ;



// internal for allArray
Promise._allArrayOne = ( value , index , runtime ) => {
	Promise._bareThen( value ,
		value_ => {
			if ( runtime.settled ) { return ; }

			runtime.values[ index ] = value_ ;
			runtime.count ++ ;

			if ( runtime.count >= runtime.length ) {
				runtime.settled = true ;
				runtime.allPromise._resolveValue( runtime.values ) ;
			}
		} ,
		error => {
			if ( runtime.settled ) { return ; }
			runtime.settled = true ;
			runtime.allPromise.reject( error ) ;
		}
	) ;
} ;


// Promise.all() with an iterator
Promise.every =
Promise.map = ( iterable , iterator ) => {
	var index = -1 , settled = false ,
		count = 0 , length = Infinity ,
		value , values = [] ,
		allPromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		index ++ ;

		// Create a scope to keep track of the promise's own index
		( () => {
			const promiseIndex = index ;

			Promise.resolve( value )
				.then( value_ => {
					if ( settled ) { return ; }
					return iterator( value_ , promiseIndex ) ;
				} )
				.then(
					value_ => {
						if ( settled ) { return ; }

						values[ promiseIndex ] = value_ ;
						count ++ ;

						if ( count >= length ) {
							settled = true ;
							allPromise._resolveValue( values ) ;
						}
					} ,
					error => {
						if ( settled ) { return ; }
						settled = true ;
						allPromise.reject( error ) ;
					}
				) ;
		} )() ;
	}

	length = index + 1 ;

	if ( ! length ) {
		allPromise._resolveValue( values ) ;
	}

	return allPromise ;
} ;



/*
	It works symmetrically with Promise.all(), the resolve and reject logic are switched.
	Therefore, it resolves to the first resolving promise OR reject if all promises are rejected
	with, as a reason, the array of all promise rejection reasons.
*/
Promise.any = ( iterable ) => {
	var index = -1 , settled = false ,
		count = 0 , length = Infinity ,
		value ,
		errors = [] ,
		anyPromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		index ++ ;

		// Create a scope to keep track of the promise's own index
		( () => {
			const promiseIndex = index ;

			Promise.resolve( value )
				.then(
					value_ => {
						if ( settled ) { return ; }

						settled = true ;
						anyPromise._resolveValue( value_ ) ;
					} ,
					error => {
						if ( settled ) { return ; }

						errors[ promiseIndex ] = error ;
						count ++ ;

						if ( count >= length ) {
							settled = true ;
							anyPromise.reject( errors ) ;
						}
					}
				) ;
		} )() ;
	}

	length = index + 1 ;

	if ( ! length ) {
		anyPromise.reject( new RangeError( 'Promise.any(): empty array' ) ) ;
	}

	return anyPromise ;
} ;



// Like Promise.any() but with an iterator
Promise.some = ( iterable , iterator ) => {
	var index = -1 , settled = false ,
		count = 0 , length = Infinity ,
		value ,
		errors = [] ,
		anyPromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		index ++ ;

		// Create a scope to keep track of the promise's own index
		( () => {
			const promiseIndex = index ;

			Promise.resolve( value )
				.then( value_ => {
					if ( settled ) { return ; }
					return iterator( value_ , promiseIndex ) ;
				} )
				.then(
					value_ => {
						if ( settled ) { return ; }

						settled = true ;
						anyPromise._resolveValue( value_ ) ;
					} ,
					error => {
						if ( settled ) { return ; }

						errors[ promiseIndex ] = error ;
						count ++ ;

						if ( count >= length ) {
							settled = true ;
							anyPromise.reject( errors ) ;
						}
					}
				) ;
		} )() ;
	}

	length = index + 1 ;

	if ( ! length ) {
		anyPromise.reject( new RangeError( 'Promise.any(): empty array' ) ) ;
	}

	return anyPromise ;
} ;



/*
	More closed to Array#filter().
	The iterator should return truthy if the array element should be kept,
	or falsy if the element should be filtered out.
	Any rejection reject the whole promise.
*/
Promise.filter = ( iterable , iterator ) => {
	var index = -1 , settled = false ,
		count = 0 , length = Infinity ,
		value , values = [] ,
		filterPromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		index ++ ;

		// Create a scope to keep track of the promise's own index
		( () => {
			const promiseIndex = index ;

			Promise.resolve( value )
				.then( value_ => {
					if ( settled ) { return ; }
					values[ promiseIndex ] = value_ ;
					return iterator( value_ , promiseIndex ) ;
				} )
				.then(
					iteratorValue => {
						if ( settled ) { return ; }

						count ++ ;

						if ( ! iteratorValue ) { values[ promiseIndex ] = HOLE ; }

						if ( count >= length ) {
							settled = true ;
							values = values.filter( e => e !== HOLE ) ;
							filterPromise._resolveValue( values ) ;
						}
					} ,
					error => {
						if ( settled ) { return ; }
						settled = true ;
						filterPromise.reject( error ) ;
					}
				) ;
		} )() ;
	}

	length = index + 1 ;

	if ( ! length ) {
		filterPromise._resolveValue( values ) ;
	}
	else if ( count >= length ) {
		settled = true ;
		values = values.filter( e => e !== HOLE ) ;
		filterPromise._resolveValue( values ) ;
	}

	return filterPromise ;
} ;



// forEach performs reduce as well, if a third argument is supplied
// Force a function statement because we are using arguments.length, so we can support accumulator equals to undefined
Promise.foreach =
Promise.forEach = function( iterable , iterator , accumulator ) {
	var index = -1 ,
		isReduce = arguments.length >= 3 ,
		it = iterable[Symbol.iterator]() ,
		forEachPromise = new Promise() ,
		lastPromise = Promise.resolve( accumulator ) ;

	// The array-like may contains promises that could be rejected before being handled
	if ( Promise.warnUnhandledRejection ) { Promise._handleAll( iterable ) ; }

	var nextElement = () => {
		lastPromise.then(
			accumulator_ => {
				let { value , done } = it.next() ;
				index ++ ;

				if ( done ) {
					forEachPromise.resolve( accumulator_ ) ;
				}
				else {
					lastPromise = Promise.resolve( value ).then(
						isReduce ?
							value_ => iterator( accumulator_ , value_ , index ) :
							value_ => iterator( value_ , index )
					) ;

					nextElement() ;
				}
			} ,
			error => {
				forEachPromise.reject( error ) ;

				// We have to eat all remaining promise errors
				for ( ;; ) {
					let { value , done } = it.next() ;
					if ( done ) { break ; }

					//if ( ( value instanceof Promise ) || ( value instanceof NativePromise ) )
					if ( Promise.isThenable( value ) ) {
						value.then( noop , noop ) ;
					}
				}
			}
		) ;
	} ;

	nextElement() ;

	return forEachPromise ;
} ;



Promise.reduce = ( iterable , iterator , accumulator ) => {
	// Force 3 arguments
	return Promise.forEach( iterable , iterator , accumulator ) ;
} ;



/*
	Same than map, but iterate over an object and produce an object.
	Think of it as a kind of Object#map() (which of course does not exist).
*/
Promise.mapObject = ( inputObject , iterator ) => {
	var settled = false ,
		count = 0 ,
		i , key , keys = Object.keys( inputObject ) ,
		length = keys.length ,
		value , outputObject = {} ,
		mapPromise = new Promise() ;

	for ( i = 0 ; ! settled && i < length ; i ++ ) {
		key = keys[ i ] ;
		value = inputObject[ key ] ;

		// Create a scope to keep track of the promise's own key
		( () => {
			const promiseKey = key ;

			Promise.resolve( value )
				.then( value_ => {
					if ( settled ) { return ; }
					return iterator( value_ , promiseKey ) ;
				} )
				.then(
					value_ => {
						if ( settled ) { return ; }

						outputObject[ promiseKey ] = value_ ;
						count ++ ;

						if ( count >= length ) {
							settled = true ;
							mapPromise._resolveValue( outputObject ) ;
						}
					} ,
					error => {
						if ( settled ) { return ; }
						settled = true ;
						mapPromise.reject( error ) ;
					}
				) ;
		} )() ;
	}

	if ( ! length ) {
		mapPromise._resolveValue( outputObject ) ;
	}

	return mapPromise ;
} ;



// Like map, but with a concurrency limit
Promise.concurrent = ( limit , iterable , iterator ) => {
	var index = -1 , settled = false ,
		running = 0 ,
		count = 0 , length = Infinity ,
		value , done = false ,
		values = [] ,
		it = iterable[Symbol.iterator]() ,
		concurrentPromise = new Promise() ;

	// The array-like may contains promises that could be rejected before being handled
	if ( Promise.warnUnhandledRejection ) { Promise._handleAll( iterable ) ; }

	limit = + limit || 1 ;

	const runBatch = () => {
		while ( ! done && running < limit ) {

			//console.log( "Pre" , index ) ;
			( { value , done } = it.next() ) ;

			if ( done ) {
				length = index + 1 ;

				if ( count >= length ) {
					settled = true ;
					concurrentPromise._resolveValue( values ) ;
					return ;
				}
				break ;
			}

			if ( settled ) { break ; }

			index ++ ;

			// Create a scope to keep track of the promise's own index
			( () => {
				const promiseIndex = index ;

				running ++ ;
				//console.log( "Launch" , promiseIndex ) ;

				Promise.resolve( value )
					.then( value_ => {
						if ( settled ) { return ; }
						return iterator( value_ , promiseIndex ) ;
					} )
					.then(
						value_ => {
						//console.log( "Done" , promiseIndex , value_ ) ;
							if ( settled ) { return ; }

							values[ promiseIndex ] = value_ ;
							count ++ ;
							running -- ;

							//console.log( "count/length" , count , length ) ;
							if ( count >= length ) {
								settled = true ;
								concurrentPromise._resolveValue( values ) ;
								return ;
							}

							if ( running < limit ) {
								runBatch() ;
								return ;
							}
						} ,
						error => {
							if ( settled ) { return ; }
							settled = true ;
							concurrentPromise.reject( error ) ;
						}
					) ;
			} )() ;
		}
	} ;

	runBatch() ;

	if ( index < 0 ) {
		concurrentPromise._resolveValue( values ) ;
	}

	return concurrentPromise ;
} ;



/*
	Like native Promise.race(), it is hanging forever if the array is empty.
	It resolves or rejects to the first resolved/rejected promise.
*/
Promise.race = ( iterable ) => {
	var settled = false ,
		value ,
		racePromise = new Promise() ;

	for ( value of iterable ) {
		if ( settled ) { break ; }

		Promise.resolve( value )
			.then(
				value_ => {
					if ( settled ) { return ; }

					settled = true ;
					racePromise._resolveValue( value_ ) ;
				} ,
				error => {
					if ( settled ) { return ; }

					settled = true ;
					racePromise.reject( error ) ;
				}
			) ;
	}

	return racePromise ;
} ;



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



Promise.timeLimit = ( timeout , asyncFnOrPromise ) => {
	return new Promise( ( resolve , reject ) => {
		if ( typeof asyncFnOrPromise === 'function' ) { asyncFnOrPromise = asyncFnOrPromise() ; }
		Promise.resolve( asyncFnOrPromise ).then( resolve , reject ) ;
		setTimeout( () => reject( new Error( "Timeout" ) ) , timeout ) ;
	} ) ;
} ;



/*
	options:
		retries: number of retry
		coolDown: time before retrying
		raiseFactor: time multiplier for each successive cool down
		maxCoolDown: maximum cool-down, the raising time is capped to this value
		timeout: time before assuming it has failed, 0 = no time limit
		catch: `function` (optional) if absent, the function is always retried until it reaches the limit,
			if present, that catch-function is used like a normal promise catch block, the function is retry
			only if the catch-function does not throw or return a rejecting promise
*/
Promise.retry = ( options , asyncFn ) => {
	var count = options.retries || 1 ,
		coolDown = options.coolDown || 0 ,
		raiseFactor = options.raiseFactor || 1 ,
		maxCoolDown = options.maxCoolDown || Infinity ,
		timeout = options.timeout || 0 ,
		catchFn = options.catch || null ;

	const oneTry = () => {
		return ( timeout ? Promise.timeLimit( timeout , asyncFn ) : asyncFn() ).catch( error => {
			if ( ! count -- ) { throw error ; }

			var currentCoolDown = coolDown ;
			coolDown = Math.min( coolDown * raiseFactor , maxCoolDown ) ;

			if ( catchFn ) {
				// Call the custom catch function
				// Let it crash, if it throw we are already in a .catch() block
				return Promise.resolve( catchFn( error ) ).then( () => Promise.resolveTimeout( currentCoolDown ).then( oneTry ) ) ;
			}

			return Promise.resolveTimeout( currentCoolDown ).then( oneTry ) ;
		} ) ;
	} ;

	return oneTry() ;
} ;



// Resolve once an event is fired
Promise.onceEvent = ( emitter , eventName ) => {
	return new Promise( resolve => emitter.once( eventName , resolve ) ) ;
} ;



// Resolve once an event is fired, resolve with an array of arguments
Promise.onceEventAll = ( emitter , eventName ) => {
	return new Promise( resolve => emitter.once( eventName , ( ... args ) => resolve( args ) ) ) ;
} ;



// Resolve once an event is fired, or reject on error
Promise.onceEventOrError = ( emitter , eventName , excludeEvents , _internalAllArgs = false ) => {
	return new Promise( ( resolve , reject ) => {
		var altRejects ;

		// We care about removing listener, especially 'error', because if an error kick in after, it should throw because there is no listener
		var resolve_ = ( ... args ) => {
			emitter.removeListener( 'error' , reject_ ) ;

			if ( altRejects ) {
				for ( let event in altRejects ) {
					emitter.removeListener( event , altRejects[ event ] ) ;
				}
			}

			resolve( _internalAllArgs ? args : args[ 0 ] ) ;
		} ;

		var reject_ = arg => {
			emitter.removeListener( eventName , resolve_ ) ;

			if ( altRejects ) {
				for ( let event in altRejects ) {
					emitter.removeListener( event , altRejects[ event ] ) ;
				}
			}

			reject( arg ) ;
		} ;

		emitter.once( eventName , resolve_ ) ;
		emitter.once( 'error' , reject_ ) ;

		if ( excludeEvents ) {
			if ( ! Array.isArray( excludeEvents ) ) { excludeEvents = [ excludeEvents ] ; }

			altRejects = {} ;

			excludeEvents.forEach( event => {
				var altReject = ( ... args ) => {
					emitter.removeListener( 'error' , reject_ ) ;
					emitter.removeListener( eventName , resolve_ ) ;

					var error = new Error( "Received an excluded event: " + event ) ;
					error.event = event ;
					error.eventArgs = args ;
					reject( error ) ;
				} ;

				emitter.once( event , altReject ) ;

				altRejects[ event ] = altReject ;
			} ) ;
		}
	} ) ;
} ;



// Resolve once an event is fired, or reject on error, resolve with an array of arguments, reject with the first argument
Promise.onceEventAllOrError = ( emitter , eventName , excludeEvents ) => {
	return Promise.onceEventOrError( emitter , eventName , excludeEvents , true ) ;
} ;



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



Promise.promisifyAll = ( nodeAsyncFn , thisBinding ) => {
	// Little optimization here to have a promisified function as fast as possible
	if ( thisBinding ) {
		return ( ... args ) => {
			return new Promise( ( resolve , reject ) => {
				nodeAsyncFn.call( thisBinding , ... args , ( error , ... cbArgs ) => {
					if ( error ) {
						if ( cbArgs.length && error instanceof Error ) { error.args = cbArgs ; }
						reject( error ) ;
					}
					else {
						resolve( cbArgs ) ;
					}
				} ) ;
			} ) ;
		} ;
	}

	return function( ... args ) {
		return new Promise( ( resolve , reject ) => {
			nodeAsyncFn.call( this , ... args , ( error , ... cbArgs ) => {
				if ( error ) {
					if ( cbArgs.length && error instanceof Error ) { error.args = cbArgs ; }
					reject( error ) ;
				}
				else {
					resolve( cbArgs ) ;
				}
			} ) ;
		} ) ;
	} ;

} ;



// Same than .promisifyAll() but only return the callback args #1 instead of an array of args from #1 to #n
Promise.promisify = ( nodeAsyncFn , thisBinding ) => {
	// Little optimization here to have a promisified function as fast as possible
	if ( thisBinding ) {
		return ( ... args ) => {
			return new Promise( ( resolve , reject ) => {
				nodeAsyncFn.call( thisBinding , ... args , ( error , cbArg ) => {
					if ( error ) {
						if ( cbArg !== undefined && error instanceof Error ) { error.arg = cbArg ; }
						reject( error ) ;
					}
					else {
						resolve( cbArg ) ;
					}
				} ) ;
			} ) ;
		} ;
	}

	return function( ... args ) {
		return new Promise( ( resolve , reject ) => {
			nodeAsyncFn.call( this , ... args , ( error , cbArg ) => {
				if ( error ) {
					if ( cbArg !== undefined && error instanceof Error ) { error.arg = cbArg ; }
					reject( error ) ;
				}
				else {
					resolve( cbArg ) ;
				}
			} ) ;
		} ) ;
	} ;
} ;



/*
	Pass a function that will be called every time the decoratee return something.
*/
Promise.returnValueInterceptor = ( interceptor , asyncFn , thisBinding ) => {
	return function( ... args ) {
		var returnVal = asyncFn.call( thisBinding || this , ... args ) ;
		interceptor( returnVal ) ;
		return returnVal ;
	} ;
} ;



/*
	Run only once, return always the same promise.
*/
Promise.once = ( asyncFn , thisBinding ) => {
	var triggered = false ;
	var result ;

	return function( ... args ) {
		if ( ! triggered ) {
			triggered = true ;
			result = asyncFn.call( thisBinding || this , ... args ) ;
		}

		return result ;
	} ;
} ;



/*
	The decoratee execution does not overlap, multiple calls are serialized.
*/
Promise.serialize = ( asyncFn , thisBinding ) => {
	var lastPromise = new Promise.resolve() ;

	return function( ... args ) {
		var promise = new Promise() ;

		lastPromise.finally( () => {
			Promise.propagate( asyncFn.call( thisBinding || this , ... args ) , promise ) ;
		} ) ;

		lastPromise = promise ;

		return promise ;
	} ;
} ;



/*
	It does nothing if the decoratee is still in progress, but return the promise of the action in progress.
*/
Promise.debounce = ( asyncFn , thisBinding ) => {
	var inProgress = null ;

	const outWrapper = () => {
		inProgress = null ;
	} ;

	return function( ... args ) {
		if ( inProgress ) { return inProgress ; }

		inProgress = asyncFn.call( thisBinding || this , ... args ) ;
		Promise.finally( inProgress , outWrapper ) ;
		return inProgress ;
	} ;
} ;



/*
	Like .debouce(), but the last promise is returned for some extra time after it resolved
*/
Promise.debounceDelay = ( delay , asyncFn , thisBinding ) => {
	var inProgress = null ;

	const outWrapper = () => {
		setTimeout( () => inProgress = null , delay ) ;
	} ;

	return function( ... args ) {
		if ( inProgress ) { return inProgress ; }

		inProgress = asyncFn.call( thisBinding || this , ... args ) ;
		Promise.finally( inProgress , outWrapper ) ;
		return inProgress ;
	} ;
} ;



/*
	It does nothing if the decoratee is still in progress.
	Instead, the decoratee is called when finished once and only once, if it was tried one or more time during its progress.
	In case of multiple calls, the arguments of the last call will be used.
	The use case is .update()/.refresh()/.redraw() functions.
*/
Promise.debounceUpdate = ( asyncFn , thisBinding ) => {
	var inProgress = null ;
	var nextUpdateWith = null ;
	var nextUpdatePromise = null ;

	const outWrapper = () => {
		var args , sharedPromise ;

		inProgress = null ;

		if ( nextUpdateWith ) {
			args = nextUpdateWith ;
			nextUpdateWith = null ;
			sharedPromise = nextUpdatePromise ;
			nextUpdatePromise = null ;

			// Call the asyncFn again
			inProgress = asyncFn.call( ... args ) ;

			// Forward the result to the pending promise
			Promise.propagate( inProgress , sharedPromise ) ;

			// BTW, trigger again the outWrapper
			Promise.finally( inProgress , outWrapper ) ;

			return inProgress ;
		}
	} ;

	return function( ... args ) {
		var localThis = thisBinding || this ;

		if ( inProgress ) {
			if ( ! nextUpdatePromise ) { nextUpdatePromise = new Promise() ; }
			nextUpdateWith = [ localThis , ... args ] ;
			return nextUpdatePromise ;
		}

		inProgress = asyncFn.call( localThis , ... args ) ;
		Promise.finally( inProgress , outWrapper ) ;
		return inProgress ;
	} ;
} ;



// Used to ensure that the sync is done immediately if not busy
Promise.NO_DELAY = {} ;

// Used to ensure that the sync is done immediately if not busy, but for the first of a batch
Promise.BATCH_NO_DELAY = {} ;

/*
	Debounce for synchronization algorithm.
	Get two functions, one for getting from upstream, one for a full sync with upstream (getting AND updating).
	No operation overlap for a given resourceId.
	Depending on the configuration, it is either like .debounce() or like .debounceUpdate().

	*Params:
		fn: the function
		thisBinding: the this binding, if any
		delay: the minimum delay between to call
			for get: nothing is done is the delay is not met, simply return the last promise
			for update/fullSync, it waits for that delay before synchronizing again
		onDebounce: *ONLY* for GET ATM, a callback called when debounced
*/
Promise.debounceSync = ( getParams , fullSyncParams ) => {
	var perResourceData = new Map() ;

	const getResourceData = resourceId => {
		var resourceData = perResourceData.get( resourceId ) ;

		if ( ! resourceData ) {
			resourceData = {
				inProgress: null ,
				inProgressIsFull: null ,
				last: null ,				// Get or full sync promise
				lastTime: null ,			// Get or full sync time
				lastFullSync: null ,		// last full sync promise
				lastFullSyncTime: null ,	// last full sync time
				nextFullSyncPromise: null ,	// the promise for the next fullSync iteration
				nextFullSyncWith: null , 	// the 'this' and arguments for the next fullSync iteration
				noDelayBatches: new Set()		// only the first of the batch has no delay
			} ;

			perResourceData.set( resourceId , resourceData ) ;
		}

		return resourceData ;
	} ;


	const outWrapper = ( resourceData , level ) => {
		// level 2: fullSync, 1: get, 0: nothing but a delay
		var delta , args , sharedPromise , now = new Date() ;
		//lastTime = resourceData.lastTime , lastFullSyncTime = resourceData.lastFullSyncTime ;

		resourceData.inProgress = null ;

		if ( level >= 2 ) { resourceData.lastFullSyncTime = resourceData.lastTime = now ; }
		else if ( level >= 1 ) { resourceData.lastTime = now ; }

		if ( resourceData.nextFullSyncWith ) {
			if ( fullSyncParams.delay && resourceData.lastFullSyncTime && ( delta = now - resourceData.lastFullSyncTime - fullSyncParams.delay ) < 0 ) {
				resourceData.inProgress = Promise.resolveTimeout( -delta + 1 ) ;	// Strangely, sometime it is trigerred 1ms too soon
				resourceData.inProgress.finally( () => outWrapper( resourceData , 0 ) ) ;
				return resourceData.nextFullSyncPromise ;
			}

			args = resourceData.nextFullSyncWith ;
			resourceData.nextFullSyncWith = null ;
			sharedPromise = resourceData.nextFullSyncPromise ;
			resourceData.nextFullSyncPromise = null ;

			// Call the fullSyncParams.fn again
			resourceData.lastFullSync = resourceData.last = resourceData.inProgress = fullSyncParams.fn.call( ... args ) ;

			// Forward the result to the pending promise
			Promise.propagate( resourceData.inProgress , sharedPromise ) ;

			// BTW, trigger again the outWrapper
			Promise.finally( resourceData.inProgress , () => outWrapper( resourceData , 2 ) ) ;

			return resourceData.inProgress ;
		}
	} ;

	const getInWrapper = function( resourceId , ... args ) {
		var noDelay = false ,
			localThis = getParams.thisBinding || this ,
			resourceData = getResourceData( resourceId ) ;

		if ( args[ 0 ] === Promise.NO_DELAY ) {
			noDelay = true ;
			args.shift() ;
		}
		else if ( args[ 0 ] === Promise.BATCH_NO_DELAY ) {
			args.shift() ;
			let batchId = args.shift() ;
			if ( ! resourceData.noDelayBatches.has( batchId ) ) {
				resourceData.noDelayBatches.add( batchId ) ;
				noDelay = true ;
			}
		}

		if ( resourceData.inProgress ) { return resourceData.inProgress ; }

		if ( ! noDelay && getParams.delay && resourceData.lastTime && new Date() - resourceData.lastTime < getParams.delay ) {
			if ( typeof getParams.onDebounce === 'function' ) { getParams.onDebounce( resourceId , ... args ) ; }
			return resourceData.last ;
		}

		resourceData.last = resourceData.inProgress = getParams.fn.call( localThis , resourceId , ... args ) ;
		resourceData.inProgressIsFull = false ;
		Promise.finally( resourceData.inProgress , () => outWrapper( resourceData , 1 ) ) ;
		return resourceData.inProgress ;
	} ;

	const fullSyncInWrapper = function( resourceId , ... args ) {
		var delta ,
			noDelay = false ,
			localThis = fullSyncParams.thisBinding || this ,
			resourceData = getResourceData( resourceId ) ;

		if ( args[ 0 ] === Promise.NO_DELAY ) {
			noDelay = true ;
			args.shift() ;
		}
		else if ( args[ 0 ] === Promise.BATCH_NO_DELAY ) {
			args.shift() ;
			let batchId = args.shift() ;
			if ( ! resourceData.noDelayBatches.has( batchId ) ) {
				resourceData.noDelayBatches.add( batchId ) ;
				noDelay = true ;
			}
		}

		if ( ! resourceData.inProgress && ! noDelay && fullSyncParams.delay && resourceData.lastFullSyncTime && ( delta = new Date() - resourceData.lastFullSyncTime - fullSyncParams.delay ) < 0 ) {
			resourceData.inProgress = Promise.resolveTimeout( -delta + 1 ) ;	// Strangely, sometime it is trigerred 1ms too soon
			Promise.finally( resourceData.inProgress , () => outWrapper( resourceData , 0 ) ) ;
		}

		if ( resourceData.inProgress ) {
			// No difference between in-progress is 'get' or 'fullSync'
			if ( ! resourceData.nextFullSyncPromise ) { resourceData.nextFullSyncPromise = new Promise() ; }
			resourceData.nextFullSyncWith = [ localThis , resourceId , ... args ] ;
			return resourceData.nextFullSyncPromise ;
		}

		resourceData.lastFullSync = resourceData.last = resourceData.inProgress = fullSyncParams.fn.call( localThis , resourceId , ... args ) ;
		Promise.finally( resourceData.inProgress , () => outWrapper( resourceData , 2 ) ) ;
		return resourceData.inProgress ;
	} ;

	return [ getInWrapper , fullSyncInWrapper ] ;
} ;



Promise.timeout = ( timeout , asyncFn , thisBinding ) => {
	return function( ... args ) {
		var promise = asyncFn.call( thisBinding || this , ... args ) ;
		// Careful: not my promise, so cannot retrieve its status
		setTimeout( () => promise.reject( new Error( 'Timeout' ) ) , timeout ) ;
		return promise ;
	} ;

} ;



// Like .timeout(), but here the timeout value is not passed at creation, but as the first arg of each call
Promise.variableTimeout = ( asyncFn , thisBinding ) => {
	return function( timeout , ... args ) {
		var promise = asyncFn.call( thisBinding || this , ... args ) ;
		// Careful: not my promise, so cannot retrieve its status
		setTimeout( () => promise.reject( new Error( 'Timeout' ) ) , timeout ) ;
		return promise ;
	} ;

} ;



/*
Promise.retry = ( retryCount , retryTimeout , timeoutMultiplier , asyncFn , thisBinding ) => {

	return ( ... args ) => {

		var lastError ,
			count = retryCount ,
			timeout = retryTimeout ,
			globalPromise = new Promise() ;

		const callAgain = () => {
			if ( count -- < 0 ) {
				globalPromise.reject( lastError ) ;
				return ;
			}

			var promise = asyncFn.call( thisBinding , ... args ) ;

			promise.then(
				//( value ) => globalPromise.resolve( value ) ,
				( value ) => {
					globalPromise.resolve( value ) ;
				} ,
				( error ) => {
					lastError = error ;
					setTimeout( callAgain , timeout ) ;
					timeout *= timeoutMultiplier ;
				}
			) ;
		} ;

		callAgain() ;

		return globalPromise ;
	} ;
} ;



Promise.variableRetry = ( asyncFn , thisBinding ) => {

	return ( retryCount , retryTimeout , timeoutMultiplier , ... args ) => {

		var lastError ,
			count = retryCount ,
			timeout = retryTimeout ,
			globalPromise = new Promise() ;

		const callAgain = () => {
			if ( count -- < 0 ) {
				globalPromise.reject( lastError ) ;
				return ;
			}

			var promise = asyncFn.call( thisBinding , ... args ) ;

			promise.then(
				( value ) => globalPromise.resolve( value ) ,
				( error ) => {
					lastError = error ;
					setTimeout( callAgain , timeout ) ;
					timeout *= timeoutMultiplier ;
				}
			) ;
		} ;

		callAgain() ;

		return globalPromise ;
	} ;
} ;
*/



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



function Queue( jobRunner , concurrency = 4 ) {
	this.jobRunner = jobRunner ;
	this.jobs = new Map() ;			// all jobs
	this.pendingJobs = new Map() ;	// only pending jobs (not run)
	this.runningJobs = new Map() ;	// only running jobs (not done)
	this.errorJobs = new Map() ;	// jobs that have failed
	this.jobsDone = new Map() ;		// jobs that finished successfully
	this.concurrency = + concurrency || 1 ;

	// Internal
	this.isQueueRunning = true ;
	this.isLoopRunning = false ;
	this.canLoopAgain = false ;
	this.ready = Promise.resolved ;

	// Misc
	this.startTime = null ;		// timestamp at the first time the loop is run
	this.endTime = null ;		// timestamp at the last time the loop exited

	// External API, resolved when there is no jobs anymore in the queue, a new Promise is created when new element are injected
	this.drained = Promise.resolved ;

	// External API, resolved when the Queue has nothing to do: either it's drained or the pending jobs have dependencies that cannot be solved
	this.idle = Promise.resolved ;
}

Promise.Queue = Queue ;



function Job( id , dependencies = null , data = undefined ) {
	this.id = id ;
	this.dependencies = dependencies === null ? null : [ ... dependencies ] ;
	this.data = data === undefined ? id : data ;
	this.error = null ;
	this.startTime = null ;
	this.endTime = null ;
}

Queue.Job = Job ;



Queue.prototype.setConcurrency = function( concurrency ) { this.concurrency = + concurrency || 1 ; } ;
Queue.prototype.stop = Queue.prototype.pause = function() { this.isQueueRunning = false ; } ;
Queue.prototype.has = function( id ) { return this.jobs.has( id ) ; } ;



Queue.prototype.add = Queue.prototype.addJob = function( id , data , dependencies = null ) {
	// Don't add it twice!
	if ( this.jobs.has( id ) ) { return false ; }

	var job = new Job( id , dependencies , data ) ;
	this.jobs.set( id , job ) ;
	this.pendingJobs.set( id , job ) ;
	this.canLoopAgain = true ;
	if ( this.isQueueRunning && ! this.isLoopRunning ) { this.run() ; }
	if ( this.drained.isSettled() ) { this.drained = new Promise() ; }
	return job ;
} ;



// Add a batch of jobs, with only id (data=id) and no dependencies
Queue.prototype.addBatch = Queue.prototype.addJobBatch = function( ids ) {
	var id , job ;

	for ( id of ids ) {
		// Don't add it twice!
		if ( this.jobs.has( id ) ) { return false ; }
		job = new Job( id ) ;
		this.jobs.set( id , job ) ;
		this.pendingJobs.set( id , job ) ;
	}

	this.canLoopAgain = true ;
	if ( this.isQueueRunning && ! this.isLoopRunning ) { this.run() ; }
	if ( this.drained.isSettled() ) { this.drained = new Promise() ; }
} ;



Queue.prototype.run = Queue.prototype.resume = async function() {
	var job ;

	this.isQueueRunning = true ;

	if ( this.isLoopRunning ) { return ; }
	this.isLoopRunning = true ;

	if ( ! this.startTime ) { this.startTime = Date.now() ; }

	do {
		this.canLoopAgain = false ;

		for ( job of this.pendingJobs.values() ) {
			if ( job.dependencies && job.dependencies.some( dependencyId => ! this.jobsDone.has( dependencyId ) ) ) { continue ; }
			// This should be done synchronously:
			if ( this.idle.isSettled() ) { this.idle = new Promise() ; }
			this.canLoopAgain = true ;

			await this.ready ;

			// Something has stopped the queue while we were awaiting.
			// This check MUST be done only after "await", before is potentially synchronous, and things only change concurrently during an "await"
			if ( ! this.isQueueRunning ) { this.finishRun() ; return ; }

			this.runJob( job ) ;
		}
	} while ( this.canLoopAgain ) ;

	this.finishRun() ;
} ;



// Finish current run
Queue.prototype.finishRun = function() {
	this.isLoopRunning = false ;

	if ( ! this.pendingJobs.size ) { this.drained.resolve() ; }

	if ( ! this.runningJobs.size ) {
		this.endTime = Date.now() ;
		this.idle.resolve() ;
	}
} ;



Queue.prototype.runJob = async function( job ) {
	// Immediately remove it synchronously from the pending queue and add it to the running one
	this.pendingJobs.delete( job.id ) ;
	this.runningJobs.set( job.id , job ) ;

	if ( this.runningJobs.size >= this.concurrency ) { this.ready = new Promise() ; }

	// Async part
	try {
		job.startTime = Date.now() ;
		await this.jobRunner( job.data ) ;
		job.endTime = Date.now() ;
		this.jobsDone.set( job.id , job ) ;
		this.canLoopAgain = true ;
	}
	catch ( error ) {
		job.endTime = Date.now() ;
		job.error = error ;
		this.errorJobs.set( job.id , job ) ;
	}

	this.runningJobs.delete( job.id ) ;
	if ( this.runningJobs.size < this.concurrency ) { this.ready.resolve() ; }

	// This MUST come last, because it retry the loop: dependencies may have been unlocked!
	if ( ! this.isLoopRunning ) {
		if ( this.isQueueRunning && this.pendingJobs.size ) { this.run() ; }
		else { this.finishRun() ; }
	}
} ;



Queue.prototype.getJobTimes = function() {
	var job , stats = {} ;
	for ( job of this.jobsDone.values() ) { stats[ job.id ] = job.endTime - job.startTime ; }
	return stats ;
} ;



Queue.prototype.getStats = function() {
	var job , sum = 0 ,
		stats = {
			pending: this.pendingJobs.size ,
			running: this.runningJobs.size ,
			failed: this.errorJobs.size ,
			done: this.jobsDone.size ,
			averageJobTime: null ,
			queueTime: null
		} ;

	if ( this.jobsDone.size ) {
		for ( job of this.jobsDone.values() ) { sum += job.endTime - job.startTime ; }
		stats.averageJobTime = sum / this.jobsDone.size ;
	}

	if ( this.endTime ) { stats.queueTime = this.endTime - this.startTime ; }

	return stats ;
} ;



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



Promise.promisifyNodeApi = ( api , suffix , multiSuffix , filter , anything ) => {
	var keys ;

	suffix = suffix || 'Async' ;
	multiSuffix = multiSuffix || 'AsyncAll' ;
	filter = filter || ( key => key[ 0 ] !== '_' && ! key.endsWith( 'Sync' ) ) ;

	if ( anything ) {
		keys = [] ;

		for ( let key in api ) {
			if ( typeof api[ key ] === 'function' ) { keys.push( key ) ; }
		}
	}
	else {
		keys = Object.keys( api ) ;
	}

	keys.filter( key => {
		if ( typeof api[ key ] !== 'function' ) { return false ; }

		// If it has any enumerable properties on its prototype, it's a constructor
		for ( let trash in api[ key ].prototype ) { return false ; }

		return filter( key , api ) ;
	} )
		.forEach( key => {
			const targetKey = key + suffix ;
			const multiTargetKey = key + multiSuffix ;

			// Do nothing if it already exists
			if ( ! api[ targetKey ] ) {
				api[ targetKey ] = Promise.promisify( api[ key ] , api ) ;
			}

			if ( ! api[ multiTargetKey ] ) {
				api[ multiTargetKey ] = Promise.promisifyAll( api[ key ] , api ) ;
			}
		} ) ;
} ;



Promise.promisifyAnyNodeApi = ( api , suffix , multiSuffix , filter ) => {
	Promise.promisifyNodeApi( api , suffix , multiSuffix , filter , true ) ;
} ;




/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



/*
	This parasite the native promise, bringing some of seventh features into them.
*/

Promise.parasite = () => {

	var compatibleProtoFn = [
		'tap' , 'tapCatch' , 'finally' ,
		'fatal' , 'done' ,
		'callback' , 'callbackAll'
	] ;

	compatibleProtoFn.forEach( fn => Promise.Native.prototype[ fn ] = Promise.prototype[ fn ] ) ;
	Promise.Native.prototype._then = Promise.Native.prototype.then ;
} ;



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Seventh

	Copyright (c) 2017 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;



/*
	Asynchronously exit.

	Wait for all listeners of the 'asyncExit' event (on the 'process' object) to have called their callback.
	The listeners receive the exit code about to be produced and a completion callback.
*/

var exitInProgress = false ;

Promise.asyncExit = function( exitCode , timeout ) {
	// Already exiting? no need to call it twice!
	if ( exitInProgress ) { return ; }

	exitInProgress = true ;

	var listeners = process.listeners( 'asyncExit' ) ;

	if ( ! listeners.length ) { process.exit( exitCode ) ; return ; }

	if ( timeout === undefined ) { timeout = 1000 ; }

	const callListener = listener => {

		if ( listener.length < 3 ) {
			// This listener does not have a callback, it is interested in the event but does not need to perform critical stuff.
			// E.g. a server will not accept connection or data anymore, but doesn't need cleanup.
			listener( exitCode , timeout ) ;
			return Promise.dummy ;
		}

		// This listener have a callback, it probably has critical stuff to perform before exiting.
		// E.g. a server that needs to gracefully exit will not accept connection or data anymore,
		// but still want to deliver request in progress.
		return new Promise( resolve => {
			listener( exitCode , timeout , () => { resolve() ; } ) ;
		} ) ;

	} ;

	// We don't care about errors here... We are exiting!
	Promise.map( listeners , callListener )
		.finally( () => process.exit( exitCode ) ) ;

	// Quit anyway if it's too long
	setTimeout( () => process.exit( exitCode ) , timeout ) ;
} ;



// A timeout that ensure a task get the time to perform its action (when there are CPU-bound tasks)
Promise.resolveSafeTimeout = function( timeout , value ) {
	return new Promise( resolve => {
		setTimeout( () => {
			setTimeout( () => {
				setTimeout( () => {
					setTimeout( () => resolve( value ) , 0 ) ;
				} , timeout / 2 ) ;
			} , timeout / 2 ) ;
		} , 0 ) ;
	} ) ;
} ;



/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const tree = __webpack_require__( 0 ) ;
const string = __webpack_require__( 4 ) ;
const NextGenEvents = __webpack_require__( 6 ) ;
const Promise = __webpack_require__( 1 ) ;

const termkit = __webpack_require__( 5 ) ;
//function noop() {}



/*
	Since there is a lot of hack with the Terminal instance creation, we can't use the 'new' operator at all...
*/
function Terminal( ... args ) { return Terminal.create( ... args ) ; }

Terminal.prototype = Object.create( NextGenEvents.prototype ) ;
Terminal.prototype.constructor = Terminal ;
module.exports = Terminal ;



Terminal.create = function( createOptions ) {
	// Default options...
	if ( ! createOptions || typeof createOptions !== 'object' ) { createOptions = {} ; }
	if ( ! createOptions.stdin ) { createOptions.stdin = process.stdin ; }
	if ( ! createOptions.stdout ) { createOptions.stdout = process.stdout ; }
	if ( ! createOptions.stderr ) { createOptions.stderr = process.stderr ; }
	if ( typeof createOptions.generic !== 'string' ) { createOptions.generic = 'xterm' ; }

	var k ;

	var termconfig ;
	var chainable = Object.create( notChainable ) ;
	var options = {
		on: '' , off: '' , params: 0 , out: createOptions.stdout
	} ;

	var term = applyEscape.bind( undefined , options ) ;

	// Yay, this is a nasty hack...
	Object.setPrototypeOf( term , chainable ) ;
	term.apply = Function.prototype.apply ;
	term.call = Function.prototype.call ;

	// Fix the root
	options.root = term ;
	term.root = term ;

	term.options = options ;
	term.stdin = createOptions.stdin ;
	term.stdout = createOptions.stdout ;
	term.stderr = createOptions.stderr ;
	term.generic = createOptions.generic ;
	term.appId = createOptions.appId ;
	term.appName = createOptions.appName ;
	term.isTTY = createOptions.isTTY === undefined ? true : !! createOptions.isTTY ;
	term.isSSH = !! createOptions.isSSH ;
	term.pid = createOptions.pid ;
	term.grabbing = false ;
	term.mouseGrabbing = false ;
	term.focusGrabbing = false ;
	term.timeout = term.isSSH ? 500 : 200 ;		// The value is a bit high, to prevent lag due to huge terminal load
	term.shutdown = false ;
	term.raw = term.stdout.write.bind( term.stdout ) ;	// Used by ScreenBuffer, for optimization

	term.onStdin = onStdin.bind( term ) ;	// bindings...
	term.prependStdinChunk = null ;

	term.lock = {} ;

	term.wrapOptions = {
		x: 1 ,
		width: null ,
		continue: false ,
		offset: 0
	} ;

	// Screen size
	term.width = undefined ;
	term.height = undefined ;
	onResize.call( term ) ;

	// Resizing event, by order of preference
	if ( createOptions.preferProcessSigwinch ) { process.on( 'SIGWINCH' , onResize.bind( term ) ) ; }
	else if ( term.stdout.isTTY ) { term.stdout.on( 'resize' , onResize.bind( term ) ) ; }
	else if ( createOptions.processSigwinch ) { process.on( 'SIGWINCH' , onResize.bind( term ) ) ; }

	// States
	term.state = {
		fullscreen: false ,
		button: {
			left: null ,
			middle: null ,
			right: null ,
			other: null
		}
	} ;

	if ( term.appId ) {
		// We have got the real terminal app
		try {
			term.termconfigFile = term.appId + '.js' ;
			termconfig = __webpack_require__(11)("./" + term.termconfigFile) ;
		}
		catch ( error ) {} // Do nothing, let the next if block handle the case
	}

	if ( ! termconfig ) {
		// The real terminal app is not known, or we fail to load it...
		// Fallback to the terminal generic (most of time, got from the $TERM env variable).
		try {
			// If a .generic.js file exists, this is a widely used terminal generic, 'xterm' for example.
			// We should use this generic files because despite advertising them as 'xterm',
			// most terminal sucks at being truly 'xterm' compatible (only 33% to 50% of xterm capabilities
			// are supported, even gnome-terminal and Konsole are bad).
			// So we will try to maintain a fail-safe xterm generic config.
			term.termconfigFile = term.generic + '.generic.js' ;
			termconfig = __webpack_require__(11)("./" + term.termconfigFile) ;
		}
		catch ( error ) {
			try {
				// No generic config exists, try a specific config
				term.termconfigFile = term.generic + '.js' ;
				termconfig = __webpack_require__(11)("./" + term.termconfigFile) ;
			}
			catch ( error_ ) {
				// Nothing found, fallback to the most common terminal generic
				term.termconfigFile = 'xterm.generic.js' ;
				termconfig = __webpack_require__(11)("./" + term.termconfigFile) ;
			}
		}
	}

	//console.log( term.termconfigFile ) ;

	// if needed, this should be replaced by some tput commands?

	term.esc = tree.extend( { deep: true } , {} , termconfig.esc ) ;
	term.support = tree.extend( { deep: true } , {} , termconfig.support ) ;

	tree.extend(
		null ,		// Do not use deep:true here
		term.esc ,
		pseudoEsc ,
		{
			// Aliases
			gray: term.esc.brightBlack ,
			grey: term.esc.brightBlack ,
			bgGray: term.esc.bgBrightBlack ,
			bgGrey: term.esc.bgBrightBlack
		}
	) ;

	term.handler = tree.extend( null , {} , termconfig.handler ) ;
	term.keymap = tree.extend( { deep: true } , {} , termconfig.keymap ) ;
	term.colorRegister = tree.extend( { deep: true } , [] , defaultColorRegister , termconfig.colorRegister ) ;

	term.escHandler = { root: term } ;
	term.escOffHandler = { root: term } ;

	// reverse keymap
	term.rKeymap = [] ;
	term.rKeymapMaxSize = -1 ;
	term.rKeymapStarter = [] ;
	term.rKeymapStarterMaxSize = -1 ;

	Object.keys( term.keymap ).forEach( ( key ) => {

		var i , j , keymapObject , code , codeList = term.keymap[ key ] ;

		if ( ! Array.isArray( codeList ) ) { codeList = [ codeList ] ; term.keymap[ key ] = codeList ; }

		for ( j = 0 ; j < codeList.length ; j ++ ) {
			code = codeList[ j ] ;

			if ( typeof code === 'object' ) {
				keymapObject = code ;
				keymapObject.name = key ;
				code = keymapObject.code ;
			}
			else {
				keymapObject = {
					code: code ,
					name: key ,
					matches: [ key ]
				} ;

				term.keymap[ key ][ j ] = { code: code } ;
			}

			// keymap handler
			if ( keymapObject.handler && typeof keymapObject.handler !== 'function' ) {
				term.keymap[ key ][ j ].handler = term.handler[ keymapObject.handler ] ;
			}

			if ( code ) {
				if ( code.length > term.rKeymapMaxSize ) {
					for ( i = term.rKeymapMaxSize + 1 ; i <= code.length ; i ++ ) { term.rKeymap[ i ] = {} ; }
					term.rKeymapMaxSize = code.length ;
				}

				if ( term.rKeymap[ code.length ][ code ] ) {
					term.rKeymap[ code.length ][ code ].matches.push( key ) ;
				}
				else {
					term.rKeymap[ code.length ][ code ] = keymapObject ;
					term.rKeymap[ code.length ][ code ].matches = [ key ] ;
				}
			}
			else {
				if ( ! keymapObject.starter || ! keymapObject.ender || ! keymapObject.handler ) { continue ; }

				if ( keymapObject.starter.length > term.rKeymapStarterMaxSize ) {
					for ( i = term.rKeymapStarterMaxSize + 1 ; i <= keymapObject.starter.length ; i ++ ) { term.rKeymapStarter[ i ] = {} ; }
					term.rKeymapStarterMaxSize = keymapObject.starter.length ;
				}

				if ( term.rKeymapStarter[ keymapObject.starter.length ][ keymapObject.starter ] ) {
					term.rKeymapStarter[ keymapObject.starter.length ][ keymapObject.starter ].push( key ) ;
				}
				else {
					term.rKeymapStarter[ keymapObject.starter.length ][ keymapObject.starter ] = [ keymapObject ] ;
				}
			}
		}
	} ) ;


	// Create methods for the 'chainable' prototype

	Object.keys( term.esc ).forEach( ( key ) => {

		if ( ! term.esc[ key ] || typeof term.esc[ key ] !== 'object' ) {
			console.error( "Bad escape sequence entry '" + key + "' using termconfig: '" + term.termconfigFile + "'." ) ;
			return ;
		}

		// build-time resolution
		if ( typeof term.esc[ key ].on === 'function' ) { term.esc[ key ].on = term.esc[ key ].on.call( term ) ; }
		if ( typeof term.esc[ key ].off === 'function' ) { term.esc[ key ].off = term.esc[ key ].off.call( term ) ; }

		// dynamic handler
		if ( term.esc[ key ].handler ) {
			if ( typeof term.esc[ key ].handler === 'function' ) { term.escHandler[ key ] = term.esc[ key ].handler.bind( term ) ; }
			else { term.escHandler[ key ] = term.handler[ term.esc[ key ].handler ] ; }
		}

		// dynamic off handler
		if ( term.esc[ key ].offHandler ) {
			if ( typeof term.esc[ key ].offHandler === 'function' ) { term.escOffHandler[ key ] = term.esc[ key ].offHandler.bind( term ) ; }
			else { term.escOffHandler[ key ] = term.handler[ term.esc[ key ].offHandler ] ; }
		}

		Object.defineProperty( chainable , key , {
			configurable: true ,
			get: function() {
				var fn , chainOptions ;

				chainOptions = Object.assign( {} , this.options ) ;

				chainOptions.on += this.root.esc[ key ].on || '' ;
				chainOptions.off = ( this.root.esc[ key ].off || '' ) + chainOptions.off ;
				chainOptions.params += string.format.count( this.root.esc[ key ].on ) ;

				if ( ! chainOptions.onHasFormatting &&
					( chainOptions.params ||
						( typeof this.root.esc[ key ].on === 'string' &&
							string.format.hasFormatting( this.root.esc[ key ].on ) ) ) ) {
					chainOptions.onHasFormatting = true ;
				}

				if ( ! chainOptions.offHasFormatting &&
					( typeof this.root.esc[ key ].off === 'string' &&
						string.format.hasFormatting( this.root.esc[ key ].off ) ) ) {
					chainOptions.offHasFormatting = true ;
				}

				if ( this.root.esc[ key ].err ) { chainOptions.err = true ; chainOptions.out = this.root.stderr ; }
				if ( this.root.esc[ key ].str ) { chainOptions.str = true ; }
				if ( this.root.esc[ key ].bind ) { chainOptions.bind = true ; }
				if ( this.root.esc[ key ].forceStyleOnReset ) { chainOptions.forceStyleOnReset = true ; }
				if ( this.root.esc[ key ].noFormat ) { chainOptions.noFormat = true ; }
				if ( this.root.esc[ key ].markupOnly ) { chainOptions.markupOnly = true ; }
				if ( this.root.esc[ key ].wrap ) { chainOptions.wrap = true ; }

				fn = applyEscape.bind( undefined , chainOptions ) ;

				// Yay, this is a nasty hack...
				Object.setPrototypeOf( fn , chainable ) ;
				fn.apply = Function.prototype.apply ;
				fn.root = this.root || this ;
				fn.options = chainOptions ;

				// Replace the getter by the newly created function, to speed up further call
				Object.defineProperty( this , key , { value: fn , configurable: true } ) ;

				//console.log( 'Create function:' , key ) ;

				return fn ;
			}
		} ) ;
	} ) ;

	// Format and markup config
	term.resetString = '' ;
	term.setResetString = function( str ) {
		term.resetString = string.markupMethod.call( term.formatConfig.rawMarkupConfig , str ) ;
	} ;

	var resetFn = ( extra ) => term.str.styleReset() + term.resetString + extra ;

	term.formatConfig = {
		fn: {} ,
		endingMarkupReset: true ,
		markupReset: resetFn.bind( undefined , '' ) ,
		//markupReset: term.str.styleReset() ,
		shiftMarkup: {
			'#': 'background'
		} ,
		markup: {
			":": resetFn.bind( undefined , '' ) ,
			" ": resetFn.bind( undefined , ' ' ) ,
			//":": term.str.styleReset() ,
			//" ": term.str.styleReset() + ' ' ,

			"-": term.str.dim() ,
			"+": term.str.bold() ,
			"_": term.str.underline() ,
			"/": term.str.italic() ,
			"!": term.str.inverse() ,

			"b": term.str.blue() ,
			"B": term.str.brightBlue() ,
			"c": term.str.cyan() ,
			"C": term.str.brightCyan() ,
			"g": term.str.green() ,
			"G": term.str.brightGreen() ,
			"k": term.str.black() ,
			"K": term.str.brightBlack() ,
			"m": term.str.magenta() ,
			"M": term.str.brightMagenta() ,
			"r": term.str.red() ,
			"R": term.str.brightRed() ,
			"w": term.str.white() ,
			"W": term.str.brightWhite() ,
			"y": term.str.yellow() ,
			"Y": term.str.brightYellow()
		} ,
		shiftedMarkup: {
			background: {
				":": resetFn.bind( undefined , '' ) ,
				" ": resetFn.bind( undefined , ' ' ) ,
				//":": term.str.styleReset() ,
				//" ": term.str.styleReset() + ' ' ,

				"b": term.str.bgBlue() ,
				"B": term.str.bgBrightBlue() ,
				"c": term.str.bgCyan() ,
				"C": term.str.bgBrightCyan() ,
				"g": term.str.bgGreen() ,
				"G": term.str.bgBrightGreen() ,
				"k": term.str.bgBlack() ,
				"K": term.str.bgBrightBlack() ,
				"m": term.str.bgMagenta() ,
				"M": term.str.bgBrightMagenta() ,
				"r": term.str.bgRed() ,
				"R": term.str.bgBrightRed() ,
				"w": term.str.bgWhite() ,
				"W": term.str.bgBrightWhite() ,
				"y": term.str.bgYellow() ,
				"Y": term.str.bgBrightYellow()
			}
		}
	} ;

	term.formatConfig.rawMarkupConfig = Object.create( term.formatConfig ) ;
	term.formatConfig.rawMarkupConfig.startingMarkupReset = false ;
	term.formatConfig.rawMarkupConfig.endingMarkupReset = false ;

	for ( k in term.escHandler ) { term.formatConfig.fn[ k ] = term.escHandler[ k ] ; }
	for ( k in term.escOffHandler ) { term.formatConfig.fn[ k + '_off' ] = term.escOffHandler[ k ] ; }

	term.format = string.createFormatter( term.formatConfig ) ;
	term.markup = string.createMarkup( term.formatConfig ) ;
	term.options = options ;

	// Should come after any escape sequence definitions
	createOptimized( term ) ;

	// Register various exit handler
	// Fix the issue #3, turn grabInput off on exit
	// Disable input grabbing at exit.
	// Note: the terminal can still send some garbage if it was about to do it when exit kickin.

	process.on( 'exit' , () => {
		//console.log( '>>> exit' ) ;
		// Cleanup was done from elsewhere, probably by .asyncCleanup()
		if ( term.shutdown ) { return ; }
		term.shutdown = true ;
		term.styleReset() ;
		term.grabInput( false ) ;
	} ) ;

	// Promise.asyncExit() produce this:
	process.on( 'asyncExit' , ( code , timeout , done ) => {
		//console.log( '>>> asyncExit' ) ;
		term.asyncCleanup().then( done ) ;
	} ) ;

	// The event loop is empty, we have more time to clean up things:
	// We keep the process running for a little bit of time, to prevent the terminal from displaying garbage.
	process.once( 'beforeExit' , () => {
		//console.log( '>>> beforeExit' ) ;
		term.asyncCleanup() ;
	} ) ;

	// Should be done at the end, once everything is working: it needs a configured terminal to generate escape sequences
	term.palette = new termkit.Palette( { system: true , term: term } ) ;

	return term ;
} ;





/* Optimized */



function createOptimized( term ) {
	// This is a subset of the terminal capability, mainly used to speed up ScreenBuffer and ScreenBufferHD
	var i ;

	term.optimized = {} ;

	// reset
	term.optimized.styleReset = term.str.styleReset() ;

	// Styles
	term.optimized.bold = term.str.bold() ;
	term.optimized.dim = term.str.dim() ;
	term.optimized.italic = term.str.italic() ;
	term.optimized.underline = term.str.underline() ;
	term.optimized.blink = term.str.blink() ;
	term.optimized.inverse = term.str.inverse() ;
	term.optimized.hidden = term.str.hidden() ;
	term.optimized.strike = term.str.strike() ;

	term.optimized.noBold = term.str.bold( false ) ;
	term.optimized.noDim = term.str.dim( false ) ;
	term.optimized.noItalic = term.str.italic( false ) ;
	term.optimized.noUnderline = term.str.underline( false ) ;
	term.optimized.noBlink = term.str.blink( false ) ;
	term.optimized.noInverse = term.str.inverse( false ) ;
	term.optimized.noHidden = term.str.hidden( false ) ;
	term.optimized.noStrike = term.str.strike( false ) ;

	// Colors
	term.optimized.color256 = [] ;
	term.optimized.bgColor256 = [] ;

	for ( i = 0 ; i <= 255 ; i ++ ) {
		term.optimized.color256[ i ] = term.str.color256( i ) ;
		term.optimized.bgColor256[ i ] = term.str.bgColor256( i ) ;
	}

	term.optimized.defaultColor = term.str.defaultColor() ;
	term.optimized.bgDefaultColor = term.str.bgDefaultColor() ;

	// Move To
	term.optimized.moveTo = term.esc.moveTo.optimized || term.str.moveTo ;

	// Move 1 char to the right
	term.optimized.right = term.str.right( 1 ) ;

	// 24 bits colors
	term.optimized.color24bits = term.esc.color24bits.optimized || term.str.color24bits ;
	term.optimized.bgColor24bits = term.esc.bgColor24bits.optimized || term.str.bgColor24bits ;
}





/* Apply */



// CAUTION: 'options' MUST NOT BE OVERWRITTEN!
// It is binded at the function creation and contains function specificities!
function applyEscape( options , ... args ) {
	var fn , newOptions , wrapOptions ;

	// Cause trouble because the shutting down process itself needs to send escape sequences asynchronously
	//if ( options.root.shutdown && ! options.str ) { return options.root ; }

	if ( options.bounded ) { args = options.bounded.concat( args ) ; }

	//console.error( args ) ;
	if ( options.bind ) {
		newOptions = Object.assign( {} , options , { bind: false , bounded: args } ) ;
		fn = applyEscape.bind( this , newOptions ) ;

		// Still a nasty hack...
		Object.setPrototypeOf( fn , Object.getPrototypeOf( options.root ) ) ;
		fn.apply = Function.prototype.apply ;
		fn.root = options.root ;
		fn.options = newOptions ;

		return fn ;
	}

	var onFormat = [ options.on ] , output , on , off ;
	var action = args[ options.params ] ;

	// If not enough arguments, return right now
	// Well... what about term.up(), term.previousLine(), and so on?
	//if ( arguments.length < 1 + options.params && ( action === null || action === false ) ) { return options.root ; }

	if ( options.params ) {
		onFormat = onFormat.concat( args.slice( 0 , options.params ) ) ;
	}

	//console.log( '\n>>> Action:' , action , '<<<\n' ) ;
	//console.log( 'Attributes:' , attributes ) ;
	if ( action === undefined || action === true ) {
		on = options.onHasFormatting ? options.root.format( ... onFormat ) : options.on ;
		if ( options.str ) { return on ; }
		options.out.write( on ) ;
		return options.root ;
	}

	if ( action === null || action === false ) {
		off = options.offHasFormatting ? options.root.format( options.off ) : options.off ;
		if ( options.str ) { return off ; }
		options.out.write( off ) ;
		return options.root ;
	}

	if ( typeof action !== 'string' ) {
		if ( typeof action.toString === 'function' ) { action = action.toString() ; }
		else { action = '' ; }
	}

	// So we have got a string

	on = options.onHasFormatting ? options.root.format( ... onFormat ) : options.on ;

	if ( options.markupOnly ) {
		action = options.root.markup( ... args.slice( options.params ) ) ;
	}
	else if ( ! options.noFormat ) {
		action = options.root.format( ... args.slice( options.params ) ) ;
	}

	if ( options.wrap ) {
		if ( options.root.wrapOptions.x && options.root.wrapOptions.x > 1 ) {
			wrapOptions = {
				width: options.root.wrapOptions.width || options.root.width - options.root.wrapOptions.x + 1 ,
				glue: '\n' + options.root.str.column( options.root.wrapOptions.x ) ,
				offset: options.root.wrapOptions.offset ,
				updateOffset: true ,
				skipFn: termkit.escapeSequenceSkipFn
			} ;

			action = string.wordwrap( action , wrapOptions ) ;

			if ( ! options.root.wrapOptions.continue ) {
				action = options.root.str.column( options.root.wrapOptions.x ) + action ;
			}

			options.root.wrapOptions.continue = true ;
			options.root.wrapOptions.offset = wrapOptions.offset ;
		}
		else {
			wrapOptions = {
				width: options.root.wrapOptions.width || options.root.width ,
				glue: '\n' ,
				offset: options.root.wrapOptions.offset ,
				updateOffset: true ,
				skipFn: termkit.escapeSequenceSkipFn
			} ;

			action = string.wordwrap( action , wrapOptions ) ;
			options.root.wrapOptions.continue = true ;
			options.root.wrapOptions.offset = wrapOptions.offset ;
		}
	}
	else {
		// All non-wrapped string display reset the offset
		options.root.wrapOptions.continue = false ;
		options.root.wrapOptions.offset = 0 ;
	}

	off = options.offHasFormatting ? options.root.format( options.off ) : options.off ;

	if ( options.forceStyleOnReset ) {
		action = action.replace( new RegExp( string.escape.regExp( options.root.optimized.styleReset ) , 'g' ) , options.root.optimized.styleReset + on ) ;
	}

	if ( options.root.resetString ) {
		output = options.root.resetString + on + action + off + options.root.resetString ;
	}
	else {
		output = on + action + off ;
	}

	// tmp hack?
	if ( options.crlf ) { output = output.replace( /\n/g , '\r\n' ) ; }

	if ( options.str ) { return output ; }

	options.out.write( output ) ;

	return options.root ;
}





/* Pseudo esc */



var pseudoEsc = {
	// It just set error:true so it will write to STDERR instead of STDOUT
	error: { err: true } ,

	// It just set str:true so it will not write anything, but return the value in a string
	str: { str: true } ,

	// It just set attr:true so it will not write anything, but return an attribute object
	attr: { attr: true } ,

	// It just set bind to an empty array so it will not do anything except returning a wrapper
	bindArgs: { bind: true } ,

	// It just set forceStyleOnReset:true so it will find style reset and recall the full chain
	forceStyleOnReset: { forceStyleOnReset: true } ,

	// It just set noFormat:true so it will not call string.format() on user input,
	// only useful for ScreenBuffer, so blit-like redraw() can perform slightly faster
	noFormat: { noFormat: true } ,

	// It just set markupOnly:true so it will not use format string but allow caret ^ markup
	markupOnly: { markupOnly: true } ,

	// It just set wrap:true so it will wrap words on different lines
	wrap: { wrap: true } ,

	move: {
		on: '%[move:%a%a]F' ,
		handler: function move( x , y ) {

			var sequence = '' ;

			if ( x ) {
				if ( x > 0 ) { sequence += this.root.format( this.root.esc.right.on , x ) ; }
				else { sequence += this.root.format( this.root.esc.left.on , -x ) ; }
			}

			if ( y ) {
				if ( y > 0 ) { sequence += this.root.format( this.root.esc.down.on , y ) ; }
				else { sequence += this.root.format( this.root.esc.up.on , -y ) ; }
			}

			return sequence ;
		}
	} ,

	color: {
		on: '%[color:%a]F' ,
		off: function() { return this.root.esc.defaultColor.on ; } ,
		handler: function color( c ) {
			if ( typeof c === 'string' ) { c = termkit.colorNameToIndex( c ) ; }
			if ( typeof c !== 'number' ) { return '' ; }

			c = Math.floor( c ) ;

			if ( c < 0 || c > 15 ) { return '' ; }

			if ( c <= 7 ) { return this.root.format( this.root.esc.darkColor.on , c ) ; }
			return this.root.format( this.root.esc.brightColor.on , c - 8 ) ;
		}
	} ,

	bgColor: {
		on: '%[bgColor:%a]F' ,
		off: function() { return this.root.esc.bgDefaultColor.on ; } ,
		handler: function bgColor( c ) {
			if ( typeof c === 'string' ) { c = termkit.colorNameToIndex( c ) ; }
			if ( typeof c !== 'number' ) { return '' ; }

			c = Math.floor( c ) ;

			if ( c < 0 || c > 15 ) { return '' ; }

			if ( c <= 7 ) { return this.root.format( this.root.esc.bgDarkColor.on , c ) ; }
			return this.root.format( this.root.esc.bgBrightColor.on , c - 8 ) ;
		}
	} ,

	colorRgb: {
		on: '%[colorRgb:%a%a%a]F' ,
		off: function() { return this.root.esc.defaultColor.on ; } ,
		handler: colorRgbHandler

	} ,

	bgColorRgb: {
		on: '%[bgColorRgb:%a%a%a]F' ,
		off: function() { return this.root.esc.bgDefaultColor.on ; } ,
		handler: bgColorRgbHandler
	} ,

	colorRgbHex: {
		on: '%[colorRgbHex:%a]F' ,
		off: function() { return this.root.esc.defaultColor.on ; } ,
		handler: colorRgbHandler

	} ,

	bgColorRgbHex: {
		on: '%[bgColorRgbHex:%a]F' ,
		off: function() { return this.root.esc.bgDefaultColor.on ; } ,
		handler: bgColorRgbHandler
	} ,

	colorGrayscale: {
		on: '%[colorGrayscale:%a]F' ,
		off: function() { return this.root.esc.defaultColor.on ; } ,
		handler: function colorGrayscale( g ) {
			var c ;

			if ( typeof g !== 'number' ) { return '' ; }
			if ( g < 0 || g > 255 ) { return '' ; }

			if ( ! this.root.esc.color24bits.na && ! this.root.esc.color24bits.fb ) {
				// The terminal supports 24bits! Yeah!
				return this.root.format( this.root.esc.color24bits.on , g , g , g ) ;
			}

			if ( ! this.root.esc.color256.na && ! this.root.esc.color256.fb ) {
				// The terminal supports 256 colors

				// Convert to 0..25 range
				g = Math.round( g * 25 / 255 ) ;

				if ( g < 0 || g > 25 ) { return '' ; }

				if ( g === 0 ) { c = 16 ; }
				else if ( g === 25 ) { c = 231 ; }
				else { c = g + 231 ; }

				return this.root.format( this.root.esc.color256.on , c ) ;
			}

			// The terminal does not support 256 colors, fallback
			c = this.root.registerForRgb( g , g , g , 0 , 15 ) ;
			return this.root.format( this.root.esc.color.on , c ) ;
		}
	} ,

	bgColorGrayscale: {
		on: '%[bgColorGrayscale:%a]F' ,
		off: function() { return this.root.esc.bgDefaultColor.on ; } ,
		handler: function bgColorGrayscale( g ) {
			var c ;

			if ( typeof g !== 'number' ) { return '' ; }
			if ( g < 0 || g > 255 ) { return '' ; }

			if ( ! this.root.esc.bgColor24bits.na && ! this.root.esc.bgColor24bits.fb ) {
				// The terminal supports 24bits! Yeah!
				return this.root.format( this.root.esc.bgColor24bits.on , g , g , g ) ;
			}

			if ( ! this.root.esc.bgColor256.na && ! this.root.esc.bgColor256.fb ) {
				// Convert to 0..25 range
				g = Math.round( g * 25 / 255 ) ;

				if ( g < 0 || g > 25 ) { return '' ; }

				if ( g === 0 ) { c = 16 ; }
				else if ( g === 25 ) { c = 231 ; }
				else { c = g + 231 ; }

				return this.root.format( this.root.esc.bgColor256.on , c ) ;
			}

			// The terminal does not support 256 colors, fallback
			c = this.root.registerForRgb( g , g , g , 0 , 15 ) ;
			return this.root.format( this.root.esc.bgColor.on , c ) ;
		}
	}
} ;





/* Internal/private functions */



function colorRgbHandler( r , g , b ) {
	var c , rgb ;

	if ( typeof r === 'string' ) {
		rgb = termkit.hexToRgba( r ) ;
		r = rgb.r ; g = rgb.g ; b = rgb.b ;
	}

	if (
		typeof r !== 'number' || isNaN( r ) ||
		typeof g !== 'number' || isNaN( g ) ||
		typeof b !== 'number' || isNaN( b ) ||
		r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255
	) {
		return '' ;
	}

	if ( ! this.root.esc.color24bits.na && ! this.root.esc.color24bits.fb ) {
		// The terminal supports 24bits! Yeah!
		return this.root.format( this.root.esc.color24bits.on , r , g , b ) ;
	}

	if ( ! this.root.esc.color256.na && ! this.root.esc.color256.fb ) {
		// The terminal supports 256 colors

		// Convert to 0..5 range
		r = Math.round( r * 5 / 255 ) ;
		g = Math.round( g * 5 / 255 ) ;
		b = Math.round( b * 5 / 255 ) ;

		c = 16 + r * 36 + g * 6 + b ;

		// min:16 max:231
		//if ( c < 16 || c > 231 ) { return '' ; }

		return this.root.format( this.root.esc.color256.on , c ) ;
	}

	// The terminal does not support 256 colors, fallback
	c = this.root.registerForRgb( r , g , b , 0 , 15 ) ;
	return this.root.format( this.root.esc.color.on , c ) ;
}



function bgColorRgbHandler( r , g , b ) {
	var c , rgb ;

	if ( typeof r === 'string' ) {
		rgb = termkit.hexToRgba( r ) ;
		r = rgb.r ; g = rgb.g ; b = rgb.b ;
	}

	if (
		typeof r !== 'number' || isNaN( r ) ||
		typeof g !== 'number' || isNaN( g ) ||
		typeof b !== 'number' || isNaN( b ) ||
		r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255
	) {
		return '' ;
	}

	if ( ! this.root.esc.bgColor24bits.na && ! this.root.esc.bgColor24bits.fb ) {
		// The terminal supports 24bits! Yeah!
		return this.root.format( this.root.esc.bgColor24bits.on , r , g , b ) ;
	}

	if ( ! this.root.esc.bgColor256.na && ! this.root.esc.bgColor256.fb ) {
		// The terminal supports 256 colors

		// Convert to 0..5 range
		r = Math.round( r * 5 / 255 ) ;
		g = Math.round( g * 5 / 255 ) ;
		b = Math.round( b * 5 / 255 ) ;

		c = 16 + r * 36 + g * 6 + b ;

		// min:16 max:231
		//if ( c < 16 || c > 231 ) { return '' ; }

		return this.root.format( this.root.esc.bgColor256.on , c ) ;
	}

	// The terminal does not support 256 colors, fallback
	c = this.root.registerForRgb( r , g , b , 0 , 15 ) ;
	return this.root.format( this.root.esc.bgColor.on , c ) ;
}



// Called by either SIGWINCH signal or stdout's 'resize' event.
// It is not meant to be used by end-user.
function onResize() {
	if ( this.stdout.columns && this.stdout.rows ) {
		this.width = this.stdout.columns ;
		this.height = this.stdout.rows ;
	}

	this.emit( 'resize' , this.width , this.height ) ;
}





/* Advanced methods */



// Complexes functions that cannot be chained.
// It is the ancestors of the terminal object, so it should inherit from async.EventEmitter.
var notChainable = Object.create( Terminal.prototype ) ;



// Complexes high-level features have their own file
notChainable.yesOrNo = __webpack_require__( 83 ) ;
notChainable.inputField = __webpack_require__( 84 ) ;
notChainable.fileInput = __webpack_require__( 85 ) ;
notChainable.singleRowMenu = notChainable.singleLineMenu = __webpack_require__( 87 ) ;
notChainable.singleColumnMenu = __webpack_require__( 88 ) ;
notChainable.gridMenu = __webpack_require__( 89 ) ;
notChainable.progressBar = __webpack_require__( 90 ) ;
notChainable.bar = __webpack_require__( 91 ) ;
notChainable.slowTyping = __webpack_require__( 93 ) ;



notChainable.createDocument = function( options ) {
	if ( ! options || typeof options !== 'object' ) { options = {} ; }
	options.outputDst = this ;
	options.eventSource = this ;
	return new termkit.Document( options ) ;
} ;



notChainable.createInlineElement = function( Type , options ) {
	return termkit.Element.createInline( this , Type , options ) ;
} ;



notChainable.table = function( table , options = {} ) {
	return termkit.Element.createInline( this , termkit.TextTable ,
		Object.assign( {} , options , {
			cellContents: table ,
			fit: options.fit !== undefined ? !! options.fit : true
		} )
	) ;
} ;



notChainable.spinner = function( options = {} ) {
	if ( typeof options === 'string' ) { options = { animation: options } ; }
	return termkit.Element.createInline( this , termkit.AnimatedText , options ) ;
} ;



/*
	.wrapColumn()
	.wrapColumn( width )
	.wrapColumn( x , width )
	.wrapColumn( namedParameters )

	width: the width for word-wrapping, null for terminal width
	x: x position (for column wrapping)
	continue: true if we are continuing
	offset: offset of the first line (default: 0)
*/
notChainable.wrapColumn = function( ... args ) {
	this.wrapOptions.continue = false ;
	this.wrapOptions.offset = 0 ;

	if ( ! args.length ) { return ; }

	if ( args[ 0 ] && typeof args[ 0 ] === 'object' ) {
		Object.assign( this.wrapOptions , args[ 0 ] ) ;
		return this.wrap ;
	}

	if ( args.length === 1 ) {
		this.wrapOptions.x = 1 ;
		this.wrapOptions.width = args[ 0 ] ;
		return this.wrap ;
	}

	this.wrapOptions.x = args[ 0 ] ;
	this.wrapOptions.width = args[ 1 ] ;
	return this.wrap ;
} ;



// Fail-safe alternate screen buffer
notChainable.fullscreen = function( options ) {
	if ( options === false ) {
		if ( ! this.state.fullscreen ) { return this ; }

		// Disable fullscreen mode
		this.state.fullscreen = false ;
		this.moveTo( 1 , this.height , '\n' ) ;
		this.alternateScreenBuffer( false ) ;
		return this ;
	}

	if ( ! options ) { options = {} ; }

	this.state.fullscreen = true ;
	if ( ! options.noAlternate ) { this.alternateScreenBuffer( true ) ; }
	this.clear() ;
} ;





/* Input management */



function onStdin( chunk ) {
	var i , j , buffer , startBuffer , char , codepoint ,
		keymapCode , keymapStartCode , keymap , keymapList ,
		regexp , matches , bytes , found , handlerResult ,
		accumulate = false ,
		index = 0 , length = chunk.length ;

	if ( this.shutdown ) { return ; }

	if ( this.prependStdinChunk ) {
		chunk = Buffer.concat( [ this.prependStdinChunk , chunk ] ) ;
	}

	while ( index < length ) {
		found = false ;
		bytes = 1 ;

		if ( chunk[ index ] <= 0x1f || chunk[ index ] === 0x7f ) {
			// Those are ASCII control character and DEL key

			for ( i = Math.min( length , Math.max( this.rKeymapMaxSize , this.rKeymapStarterMaxSize ) ) ; i > 0 ; i -- ) {
				buffer = chunk.slice( index ) ;
				keymapCode = buffer.toString() ;
				startBuffer = chunk.slice( index , index + i ) ;
				keymapStartCode = startBuffer.toString() ;


				if ( this.rKeymap[ i ] && this.rKeymap[ i ][ keymapStartCode ] ) {
					// First test fixed sequences

					keymap = this.rKeymap[ i ][ keymapStartCode ] ;
					found = true ;

					if ( keymap.handler ) {
						handlerResult = keymap.handler.call( this , keymap.name , chunk.slice( index + i ) ) ;
						bytes = i + handlerResult.eaten ;

						if ( ! handlerResult.disable ) {
							this.emit( keymap.event , handlerResult.name , handlerResult.data ) ;
						}
					}
					else if ( keymap.event ) {
						bytes = i ;
						this.emit( keymap.event , keymap.name , keymap.data , { code: startBuffer } ) ;
					}
					else {
						bytes = i ;
						this.emit( 'key' , keymap.name , keymap.matches , { isCharacter: false , code: startBuffer } ) ;
					}

					break ;
				}
				else if ( this.rKeymapStarter[ i ] && this.rKeymapStarter[ i ][ keymapStartCode ] ) {
					// Then test pattern sequences

					keymapList = this.rKeymapStarter[ i ][ keymapStartCode ] ;

					//console.log( 'for i:' , keymapList ) ;

					for ( j = 0 ; j < keymapList.length ; j ++ ) {
						keymap = keymapList[ j ] ;

						if ( keymap.altEnder ) {
							regexp = '^' +
								string.escape.regExp( keymap.starter ) +
								'([ -~]*?)' +	// [ -~] match only all ASCII non-control character
								'(' + string.escape.regExp( keymap.ender ) + '|' + string.escape.regExp( keymap.altEnder ) + ')' ;
						}
						else {
							regexp = '^' +
								string.escape.regExp( keymap.starter ) +
								'([ -~]*?)' +	// [ -~] match only all ASCII non-control character
								string.escape.regExp( keymap.ender ) ;
						}

						matches = keymapCode.match( new RegExp( regexp ) , 'g' ) ;

						//console.log( 'for j:' , keymap , regexp , matches ) ;

						if ( matches ) {
							found = true ;

							handlerResult = keymap.handler.call( this , keymap.name , matches[ 1 ] ) ;
							bytes = matches[ 0 ].length ;
							this.emit( keymap.event , handlerResult.name , handlerResult.data ) ;

							break ;
						}
						else if ( keymap.accumulate ) {
							found = true ;
							accumulate = true ;
							break ;
						}
					}

					if ( found ) { break ; }
				}
			}

			// Nothing was found, so to not emit trash, we just abort the current buffer processing
			if ( ! found ) { this.emit( 'unknown' , chunk ) ; break ; }
		}
		else if ( chunk[ index ] >= 0x80 ) {
			// Unicode bytes per char guessing
			if ( chunk[ index ] < 0xc0 ) { continue ; }	// We are in a middle of an unicode multibyte sequence... Something fails somewhere, we will just continue for now...
			else if ( chunk[ index ] < 0xe0 ) { bytes = 2 ; }
			else if ( chunk[ index ] < 0xf0 ) { bytes = 3 ; }
			else if ( chunk[ index ] < 0xf8 ) { bytes = 4 ; }
			else if ( chunk[ index ] < 0xfc ) { bytes = 5 ; }
			else { bytes = 6 ; }

			buffer = chunk.slice( index , index + bytes ) ;
			char = buffer.toString( 'utf8' ) ;

			//if ( bytes > 2 ) { codepoint = punycode.ucs2.decode( char )[ 0 ] ; }
			if ( bytes > 2 ) { codepoint = string.unicode.firstCodePoint( char ) ; }
			else { codepoint = char.charCodeAt( 0 ) ; }

			this.emit( 'key' , char , [ char ] , { isCharacter: true , codepoint: codepoint , code: buffer } ) ;
		}
		else {
			// Standard ASCII
			char = String.fromCharCode( chunk[ index ] ) ;
			this.emit( 'key' , char , [ char ] , { isCharacter: true , codepoint: chunk[ index ] , code: chunk[ index ] } ) ;
		}

		index += bytes ;
	}

	if ( accumulate ) {
		this.prependStdinChunk = chunk ;
	}
	else {
		this.prependStdinChunk = null ;
	}
}



/*
	* options `false` or `Object` where:
		* mouse `string` one of:
			* 'button'
			* 'drag'
			* 'motion'
		* focus `boolean`
	* safe `boolean` (optional), when set and when *options* is set to `false`, it turns *.grabInput()*
	  it returns a promise that resolve when input grabbing is safely turned off, avoiding extra junks to
	  be echoed when the terminal left the raw mode. It is mostly useful after grabbing mouse motion.
*/
notChainable.grabInput = function( options , safe ) {
	// RESET
	this.mouseButton( false ) ;
	this.mouseDrag( false ) ;
	this.mouseMotion( false ) ;
	//this.mouseSGR( false ) ;
	this.focusEvent( false ) ;
	this.stdin.removeListener( 'data' , this.onStdin ) ;

	// Start disabling everything
	this.grabbing = false ;
	this.mouseGrabbing = false ;
	this.focusGrabbing = false ;

	// Disable grabInput mode
	var disable = () => {
		// Very important: removing all listeners don't switch back to pause mode.
		// This is some nasty Node.js quirks (the documentation pleads for backward compatibility).
		this.stdin.pause() ;

		try {
			this.stdin.setRawMode( false ) ;
		}
		catch ( error ) {
			// That's not critical in any way and thus can be ignored: we are probably reading from a non-TTY
		}
	} ;

	if ( options === false ) {
		if ( safe ) {
			return Promise.resolveSafeTimeout( this.timeout / 2 ).then( disable ) ;
		}

		disable() ;
		return Promise.resolved ;
	}

	// Should not be moved before, because shutdown typically needs .grabInput( false )
	if ( this.shutdown ) { return Promise.resolved ; }

	this.grabbing = true ;

	if ( ! options ) { options = {} ; }

	// SET
	try {
		this.stdin.setRawMode( true ) ;
	}
	catch ( error ) {
		// Same here, that's not critical in any way and thus can be ignored: we are probably reading from a non-TTY
	}

	this.stdin.on( 'data' , this.onStdin ) ;

	// Very important: after the first this.stdin.pause(), listening for data seems to not switch back to flowing mode.
	// Again, a nasty Node.js quirk.
	this.stdin.resume() ;

	if ( options.mouse ) {
		this.mouseGrabbing = true ;

		switch ( options.mouse ) {
			case 'button' : this.mouseButton.mouseSGR() ; break ;
			case 'drag' : this.mouseDrag.mouseSGR() ; break ;
			case 'motion' : this.mouseMotion.mouseSGR() ; break ;
		}
	}

	if ( options.focus ) {
		this.focusEvent() ;
		this.focusGrabbing = true ;
	}

	return Promise.resolved ;
} ;



// Like process.exit(), but perform cleanup of the terminal first.
// It is asynchronous, so it should be followed by a 'return' if needed.
// A better way to handle that is to use Promise.asyncExit(), that is detected by the Terminal instance.
notChainable.processExit = function( code ) {
	this( '\n' ) ;
	this.asyncCleanup().then( () => process.exit( code ) ) ;
} ;



notChainable.asyncCleanup = async function() {
	if ( this.shutdown ) { return ; }
	this.shutdown = true ;

	this.styleReset() ;

	var wasGrabbing = this.grabbing ;

	await this.waitStreamDone( this.stdout ) ;

	if ( ! this.isTTY || ! wasGrabbing ) { return ; }

	await Promise.resolveSafeTimeout( this.timeout / 4 ) ;
	return this.grabInput( false , true ) ;
} ;



notChainable.waitStreamDone = function( stream ) {
	if ( ! stream._writableState.needDrain ) { return Promise.resolved ; }
	return Promise.onceEvent( stream , 'drain' ) ;
} ;



notChainable.object2attr = function( object ) {
	var attr = this.esc.styleReset.on ;

	if ( ! object || typeof object !== 'object' ) { object = {} ; }

	// Color part
	if ( typeof object.color === 'string' ) { object.color = termkit.colorNameToIndex( object.color ) ; }
	if ( typeof object.color !== 'number' || object.color < 0 || object.color > 255 ) { object.color = 7 ; }
	else { object.color = Math.floor( object.color ) ; }

	attr += this.str.color( object.color ) ;

	// Background color part
	if ( typeof object.bgColor === 'string' ) { object.bgColor = termkit.colorNameToIndex( object.bgColor ) ; }
	if ( typeof object.bgColor !== 'number' || object.bgColor < 0 || object.bgColor > 255 ) { object.bgColor = 0 ; }
	else { object.bgColor = Math.floor( object.bgColor ) ; }

	attr += this.str.bgColor( object.bgColor ) ;

	// Style part
	if ( object.bold ) { attr += this.esc.bold.on ; }
	if ( object.dim ) { attr += this.esc.dim.on ; }
	if ( object.italic ) { attr += this.esc.italic.on ; }
	if ( object.underline ) { attr += this.esc.underline.on ; }
	if ( object.blink ) { attr += this.esc.blink.on ; }
	if ( object.inverse ) { attr += this.esc.inverse.on ; }
	if ( object.hidden ) { attr += this.esc.hidden.on ; }
	if ( object.strike ) { attr += this.esc.strike.on ; }

	return attr ;
} ;



// Erase a whole rectangular area
// .eraseArea( x , y , [width] , [height] )
notChainable.eraseArea = function( xMin , yMin , width = 1 , height = 1 ) {
	xMin = Math.min( xMin , this.width ) ;
	yMin = Math.min( yMin , this.height ) ;

	var y ,
		xMax = Math.min( xMin + width , this.width + 1 ) ,
		yMax = Math.min( yMin + height , this.height + 1 ) ,
		str = ' '.repeat( xMax - xMin ) ;

	for ( y = yMin ; y < yMax ; y ++ ) {
		this.moveTo( xMin , y , str ) ;
	}
} ;



// A facility for those who don't want to deal with requestCursorLocation() and events...
notChainable.getCursorLocation = function( callback ) {
	var wasGrabbing = this.grabbing , alreadyCleanedUp = false , error ;

	if ( this.shutdown ) { return Promise.resolved ; }

	// First, check capabilities:
	if ( this.esc.requestCursorLocation.na ) {
		error = new Error( 'Terminal is not capable' ) ;
		if ( callback ) {
			callback( error ) ;
			return Promise.resolved ;
		}

		return Promise.reject( error ) ;
	}

	var promise = new Promise() ;

	// Now .getCursorLocation() cannot run in concurrency anymore
	if ( this.lock.getCursorLocation ) {
		this.once( 'unlock_getCursorLocation' , () => {
			this.getCursorLocation().then(
				data => {
					if ( callback ) { callback( undefined , data.x , data.y ) ; }
					else { promise.resolve( data ) ; }
				} ,
				error_ => {
					if ( callback ) { callback( error_ ) ; }
					else { promise.reject( error_ ) ; }
				}
			) ;
		} ) ;

		return promise ;
	}

	this.lock.getCursorLocation = true ;

	var cleanup = ( error_ , x , y ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		this.removeListener( 'terminal' , onTerminal ) ;
		if ( ! wasGrabbing ) { this.grabInput( false ) ; }

		if ( error_ ) {
			if ( this.shutdown ) { error_.code = 'shutdown' ; }

			if ( callback ) { callback( error_ ) ; }
			else { promise.reject( error_ ) ; }
			return ;
		}

		if ( callback ) { callback( undefined , x , y ) ; }
		else { promise.resolve( { x , y } ) ; }
	} ;

	var onTerminal = ( name , data ) => {
		if ( name !== 'CURSOR_LOCATION' ) { return ; }
		this.lock.getCursorLocation = false ;
		this.emit( 'unlock_getCursorLocation' ) ;
		cleanup( undefined , data.x , data.y ) ;
	} ;

	if ( ! wasGrabbing ) { this.grabInput() ; }

	this.on( 'terminal' , onTerminal ) ;
	this.requestCursorLocation() ;

	Promise.resolveSafeTimeout( this.timeout ).then( () => {
		if ( alreadyCleanedUp ) { return ; }
		var error_ = new Error( '.getCursorLocation() timed out' ) ;
		error_.code = 'timeout' ;
		cleanup( error_ ) ;
	} ) ;

	return promise ;
} ;



// Get the RGB value for a color register
notChainable.getColor = function( register , callback ) {
	var wasGrabbing = this.grabbing , alreadyCleanedUp = false , error ;

	if ( this.shutdown ) { return Promise.resolved ; }

	// First, check capabilities:
	if ( this.esc.requestColor.na ) {
		error = new Error( 'Terminal is not capable' ) ;

		if ( callback ) {
			callback( error ) ;
			return Promise.resolved ;
		}

		return Promise.reject( error ) ;
	}

	var promise = new Promise() ;

	var cleanup = ( error_ , data ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		this.removeListener( 'terminal' , onTerminal ) ;
		if ( ! wasGrabbing ) { this.grabInput( false ) ; }

		if ( error_ ) {
			if ( this.shutdown ) { error_.code = 'shutdown' ; }

			if ( callback ) { callback( error_ ) ; }
			else { promise.reject( error_ ) ; }
			return ;
		}

		if ( callback ) { callback( undefined , data ) ; }
		else { promise.resolve( data ) ; }
	} ;

	var onTerminal = ( name , data ) => {

		if ( name !== 'COLOR_REGISTER' ) { return ; }

		// We have got a color definition, but this is not for our register, so this is not our response
		if ( data.register !== register ) { return ; }

		// This is a good opportunity to update the color register
		if ( register < 16 ) { this.colorRegister[ register ] = { r: data.r , g: data.g , b: data.b } ; }

		// Everything is fine...
		cleanup( undefined , data ) ;
	} ;

	if ( ! wasGrabbing ) { this.grabInput() ; }

	this.requestColor( register ) ;
	this.on( 'terminal' , onTerminal ) ;

	Promise.resolveSafeTimeout( this.timeout ).then( () => {
		if ( alreadyCleanedUp ) { return ; }
		var error_ = new Error( '.getColor() timed out' ) ;
		error_.code = 'timeout' ;
		cleanup( error_ ) ;
	} ) ;

	return promise ;
} ;



// Get the current 16 colors palette of the terminal, if possible
notChainable.getPalette = function( callback ) {
	var defaultPalette ,
		wasGrabbing = this.grabbing ;

	if ( this.shutdown ) { return Promise.resolved ; }

	if ( ! wasGrabbing ) { this.grabInput() ; }

	// First, check capabilities, if not capable, return the default palette
	if ( this.esc.requestColor.na ) {
		defaultPalette = this.colorRegister.slice( 0 , 16 ) ;

		if ( callback ) {
			callback( undefined , defaultPalette ) ;
			return Promise.resolved ;
		}

		return Promise.resolve( defaultPalette ) ;
	}

	return Promise.concurrent(
		4 ,
		[ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ] ,
		register => this.getColor( register )
	)
		.then(
			palette => {
				if ( ! wasGrabbing ) { this.grabInput( false ) ; }
				if ( callback ) { callback( undefined , palette ) ; }
				else { return palette ; }
			} ,
			error => {
				if ( ! wasGrabbing ) { this.grabInput( false ) ; }

				if ( callback ) { callback( error ) ; }
				else { throw error ; }	// re-throw if not using callback
			}
		) ;
} ;



// Set the color for a register
notChainable.setColor = function( register , r , g , b , names ) {
	if ( r && typeof r === 'object' ) {
		b = r.b ;
		g = r.g ;
		r = r.r ;
		names = g ;
	}

	// Allow modification of register > 15 ? It looks like terminals don't allow it... (at least not gnome)
	if ( typeof register !== 'number' || register < 0 || register > 15 ) { throw new Error( 'Bad register value' ) ; }

	if ( ! Array.isArray( names ) ) { names = [] ; }

	if (
		typeof r !== 'number' || r < 0 || r > 255 ||
		typeof g !== 'number' || g < 0 || g > 255 ||
		typeof b !== 'number' || b < 0 || b > 255
	) {
		throw new Error( 'Bad RGB value' ) ;
	}

	// Issue an error, or not?
	if ( this.setColorLL.na ) { return ; }

	// This is a good opportunity to update the color register
	this.colorRegister[ register ] = {
		r: r , g: g , b: b , names: names
	} ;

	// Call the Low Level set color
	this.setColorLL( register , r , g , b ) ;
} ;



// Set the current 16 colors palette of the terminal, if possible
notChainable.setPalette = function( palette ) {
	var i ;

	if ( typeof palette === 'string' ) {
		try {
			palette = __webpack_require__(94)("./" + palette + '.json') ;
		}
		catch( error ) {
			throw new Error( '[terminal] .setPalette(): color scheme not found: ' + palette ) ;
		}
	}

	if ( ! Array.isArray( palette ) ) { throw new Error( '[terminal] .setPalette(): argument #0 should be an Array of RGB Object or a built-in color scheme' ) ; }

	// Issue an error, or not?
	if ( this.setColorLL.na ) { return ; }

	for ( i = 0 ; i <= 15 ; i ++ ) {
		if ( ! palette[ i ] || typeof palette[ i ] !== 'object' ) { continue ; }
		this.setColor( i , palette[ i ] ) ;
	}
} ;



notChainable.getClipboard = function( source = 'c' ) {
	var wasGrabbing = this.grabbing , alreadyCleanedUp = false , extClipboard ;

	if ( this.shutdown ) { return Promise.resolved ; }

	// First, check capabilities:
	if ( this.esc.requestClipboard.na ) {
		extClipboard = __webpack_require__( 42 ) ;
		return extClipboard.getClipboard( source ).catch( () => '' ) ;
	}

	var promise = new Promise() ;

	var cleanup = ( error_ , data ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		this.removeListener( 'terminal' , onTerminal ) ;
		if ( ! wasGrabbing ) { this.grabInput( false ) ; }

		if ( error_ ) {
			if ( this.shutdown ) { error_.code = 'shutdown' ; }
			promise.reject( error_ ) ;
			return ;
		}

		promise.resolve( data ) ;
	} ;

	var onTerminal = ( name , data ) => {
		//console.log( "EVENT: " , name , data ) ;
		if ( name !== 'CLIPBOARD' ) { return ; }

		// We have got some content, but this is not for our source, so this is not our response
		//if ( data.source !== source ) { return ; }

		// Everything is fine...
		cleanup( undefined , data.content ) ;
	} ;

	if ( ! wasGrabbing ) { this.grabInput() ; }

	this.requestClipboard( source[ 0 ] ) ;
	this.on( 'terminal' , onTerminal ) ;

	Promise.resolveSafeTimeout( this.timeout ).then( () => {
		if ( alreadyCleanedUp ) { return ; }
		var error_ = new Error( '.getClipboard() timed out' ) ;
		error_.code = 'timeout' ;
		cleanup( error_ ) ;
	} ) ;

	return promise ;
} ;



// Set the color for a register
notChainable.setClipboard = async function( str , source = 'c' ) {
	var extClipboard ;

	if ( this.esc.setClipboardLL.na ) {
		extClipboard = __webpack_require__( 42 ) ;
		return extClipboard.setClipboard( str , source ).catch( () => undefined ) ;
	}

	var base64 = Buffer.from( str ).toString( 'base64' ) ;

	//console.log( "base64:" , base64 , "retro:" , Buffer.from( base64 , 'base64' ).toString() ) ;

	// Call the Low Level set clipboard
	this.setClipboardLL( source[ 0 ] , base64 ) ;
	return Promise.resolved ;
} ;



// A facility for those who don't want to deal with requestCursorLocation() and events...
notChainable.getTerminfo = function( key ) {
	var wasGrabbing = this.grabbing , alreadyCleanedUp = false ;

	if ( this.shutdown ) { return Promise.resolved ; }

	// First, check capabilities:
	if ( this.esc.xtgettcapLL.na ) {
		return Promise.reject( new Error( 'Terminal is not capable' ) ) ;
	}

	var promise = new Promise() ;

	// Avoid concurrency
	if ( this.lock.getTerminfo ) {
		this.once( 'unlock_getTerminfo' , () => this.getTerminfo( key ).propagate( promise ) ) ;
		return promise ;
	}

	this.lock.getTerminfo = true ;

	var cleanup = ( error , data ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		this.removeListener( 'terminal' , onTerminal ) ;
		if ( ! wasGrabbing ) { this.grabInput( false ) ; }

		if ( error ) {
			if ( this.shutdown ) { error.code = 'shutdown' ; }
			promise.reject( error ) ;
			return ;
		}

		if ( ! data.valid || data.key !== key ) {
			promise.resolve() ;
			return ;
		}

		promise.resolve( data.value ) ;
	} ;

	var onTerminal = ( name , data ) => {
		if ( name !== 'TERMINFO' ) { return ; }
		this.lock.getTerminfo = false ;
		this.emit( 'unlock_getTerminfo' ) ;
		cleanup( undefined , data ) ;
	} ;

	if ( ! wasGrabbing ) { this.grabInput() ; }

	this.on( 'terminal' , onTerminal ) ;
	//this.xtgettcapLL( keys.map( key => Buffer.from( key ).toString( 'hex' ) ).join( ';' ) ) ;
	this.xtgettcapLL( Buffer.from( key ).toString( 'hex' ) ) ;

	Promise.resolveSafeTimeout( this.timeout ).then( () => {
		if ( alreadyCleanedUp ) { return ; }
		var error = new Error( '.getTerminfo() timed out' ) ;
		error.code = 'timeout' ;
		cleanup( error ) ;
	} ) ;

	return promise ;
} ;





/* Utilities */



// Default colors, used for guessing
var defaultColorRegister = __webpack_require__( 41 ) ;

( function buildDefaultColorRegister() {
	var register , offset , factor , l ;

	for ( register = 16 ; register < 232 ; register ++ ) {
		// RGB 6x6x6
		offset = register - 16 ;
		factor = 255 / 5 ;
		defaultColorRegister[ register ] = {
			r: Math.round( ( Math.floor( offset / 36 ) % 6 ) * factor ) ,
			g: Math.round( ( Math.floor( offset / 6 ) % 6 ) * factor ) ,
			b: Math.round( ( offset % 6 ) * factor ) ,
			names: []
		} ;
	}

	for ( register = 232 ; register <= 255 ; register ++ ) {
		// Grayscale 0..23
		offset = register - 231 ;	// not 232, because the first of them is not a #000000 black
		factor = 255 / 25 ;	// not 23, because the last is not a #ffffff white
		l = Math.round( offset * factor ) ;
		defaultColorRegister[ register ] = {
			r: l , g: l , b: l , names: []
		} ;
	}
} )() ;



// If register hasn't changed, this is used to get the RGB value for them
notChainable.rgbForRegister = function( register ) {
	if ( register < 0 || register > 255 ) { throw new Error( 'Bad register value' ) ; }

	// Simply clone it
	return {
		r: this.colorRegister[ register ].r ,
		g: this.colorRegister[ register ].g ,
		b: this.colorRegister[ register ].b
	} ;
} ;



// If register hasn't changed, this is used to get it for an RGB
// .registerForRgb( r , g , b , [minRegister] , [maxRegister] )
// .registerForRgb( rgbObject , [minRegister] , [maxRegister] )

// Lab HCL cylinder coordinate distance
notChainable.registerForRgb = function( r , g , b , minRegister , maxRegister ) {
	// Manage function arguments
	if ( r && typeof r === 'object' ) {
		// Manage the .registerForRgb( rgbObject , [minRegister] , [maxRegister] ) variante
		maxRegister = b ;
		minRegister = g ;
		b = r.b ;
		g = r.g ;
		r = r.r ;
	}

	if (
		typeof r !== 'number' || r < 0 || r > 255 ||
		typeof g !== 'number' || g < 0 || g > 255 ||
		typeof b !== 'number' || b < 0 || b > 255
	) {
		throw new Error( 'Bad RGB value' ) ;
	}

	if ( typeof maxRegister !== 'number' || maxRegister < 0 || maxRegister > 255 ) { maxRegister = 15 ; }
	if ( typeof minRegister !== 'number' || minRegister < 0 || minRegister > 255 ) { minRegister = 0 ; }

	if ( minRegister > maxRegister ) {
		var tmp ;
		tmp = maxRegister ;
		maxRegister = minRegister ;
		minRegister = tmp ;
	}

	return this._registerForRgb( r , g , b , minRegister , maxRegister ) ;
} ;



notChainable._registerForRgb = function( r , g , b , minRegister , maxRegister ) {
	// Search for the best match
	var register , delta ,
		minDelta = Infinity ,
		rgb = [ r , g , b ]  ;

	for ( register = minRegister ; register <= maxRegister ; register ++ ) {
		delta = termkit.chroma.distance( rgb , this.colorRegister[ register ] , 'hcl' ) ;
		if ( delta < minDelta ) {
			minDelta = delta ;
			minRegister = register ;
		}
	}

	return minRegister ;
} ;



notChainable.colorNameForRgb = function( r , g , b ) {
	return termkit.indexToColorName( this.registerForRgb( r , g , b , 0 , 15 ) ) ;
} ;



notChainable.colorNameForHex = function( hex ) {
	var rgba = termkit.hexToRgba( hex ) ;
	return this.colorNameForRgb( rgba.r , rgba.g , rgba.b ) ;
} ;



notChainable.registerForRgbCache = function( cache , r , g , b , minRegister , maxRegister ) {
	var key = r + '-' + g + '-' + b ;
	if ( cache[ key ] ) { return cache[ key ] ; }
	return ( cache[ key ] = this._registerForRgb( r , g , b , minRegister , maxRegister ) ) ;
} ;





/* ScreenBuffer compatible methods */



// Cursor is always drawn so there is nothing to do here
notChainable.drawCursor = function() {} ;

// /!\ Missing: markup, attr return
notChainable.put = function( options , str , ... args ) {
	var i , x , y , dx , dy , attr , wrap , characters , len , moveToNeeded , inline ;

	// Manage options
	if ( ! options ) { options = {} ; }

	wrap = options.wrap === undefined ? true : options.wrap ;

	x = options.x || 0 ;
	y = options.y || 0 ;

	if ( typeof x !== 'number' || x < 1 ) { x = 1 ; }
	else if ( x > this.width ) { x = this.width ; }
	else { x = Math.floor( x ) ; }

	if ( typeof y !== 'number' || y < 1 ) { y = 1 ; }
	else if ( y > this.height ) { y = this.height ; }
	else { y = Math.floor( y ) ; }


	// Process directions/increments
	dx = 1 ;
	dy = 0 ;

	switch ( options.direction ) {
		//case 'right' : // not needed, use the default dx & dy
		case 'left' :
			dx = -1 ;
			break ;
		case 'up' :
			dx = 0 ;
			dy = -1 ;
			break ;
		case 'down' :
			dx = 0 ;
			dy = 1 ;
			break ;
		case null :
		case 'none' :
			dx = 0 ;
			dy = 0 ;
			break ;
	}

	if ( typeof options.dx === 'number' ) { dx = options.dx ; }
	if ( typeof options.dy === 'number' ) { dy = options.dy ; }

	inline = ( dx === 1 && dy === 0 ) ;


	// Process attributes
	attr = options.attr || this.esc.styleReset.on ;

	if ( attr && typeof attr === 'object' ) { attr = this.object2attr( attr ) ; }
	if ( typeof attr !== 'string' ) { attr = this.esc.styleReset.on ; }


	// Process the input string
	if ( typeof str !== 'string' ) {
		if ( str.toString ) { str = str.toString() ; }
		else { return ; }
	}

	if ( args.length ) { str = string.format( str , ... args ) ; }
	str = termkit.stripControlChars( str ) ;

	//characters = punycode.ucs2.decode( str ) ;
	characters = string.unicode.toArray( str ) ;
	len = characters.length ;

	moveToNeeded = true ;
	this.stdout.write( attr ) ;

	for ( i = 0 ; i < len ; i ++ ) {
		if ( moveToNeeded ) { this.moveTo( x , y ) ; }
		this( characters[ i ] ) ;

		x += dx ;
		y += dy ;

		moveToNeeded = ! inline ;

		if ( x < 0 ) {
			if ( ! wrap ) { break ; }
			x = this.width - 1 ;
			y -- ;
			moveToNeeded = true ;
		}
		else if ( x >= this.width ) {
			if ( ! wrap ) { break ; }
			x = 0 ;
			y ++ ;
			moveToNeeded = true ;
		}

		if ( y < 0 ) { break ; }
		else if ( y >= this.height ) { break ; }
	}
} ;



notChainable.drawNdarrayImage = function( pixels /* , options */ ) {
	var x , xMax = Math.min( pixels.shape[ 0 ] , this.width ) ,
		y , yMax = Math.ceil( pixels.shape[ 1 ] / 2 ) ,
		hasAlpha = pixels.shape[ 2 ] === 4 ,
		maxRegister = this.support['256colors'] ? 255 : 15 ,
		fgColor , bgColor , fgAlpha , bgAlpha , cache = {} ;


	for ( y = 0 ; y < yMax ; y ++ ) {
		for ( x = 0 ; x < xMax ; x ++ ) {
			if ( this.support.trueColor ) {
				fgAlpha = hasAlpha ? pixels.get( x , y * 2 , 3 ) / 255 : 1 ;

				if ( y * 2 + 1 < pixels.shape[ 1 ] ) {
					bgAlpha = hasAlpha ? pixels.get( x , y * 2 + 1 , 3 ) / 255 : 1 ;

					this.noFormat(
						this.optimized.color24bits(
							Math.round( fgAlpha * pixels.get( x , y * 2 , 0 ) ) ,
							Math.round( fgAlpha * pixels.get( x , y * 2 , 1 ) ) ,
							Math.round( fgAlpha * pixels.get( x , y * 2 , 2 ) )
						) +
						this.optimized.bgColor24bits(
							Math.round( bgAlpha * pixels.get( x , y * 2 + 1 , 0 ) ) ,
							Math.round( bgAlpha * pixels.get( x , y * 2 + 1 , 1 ) ) ,
							Math.round( bgAlpha * pixels.get( x , y * 2 + 1 , 2 ) )
						) +
						'▀'
					) ;
				}
				else {
					this.noFormat(
						this.optimized.color24bits(
							Math.round( fgAlpha * pixels.get( x , y * 2 , 0 ) ) ,
							Math.round( fgAlpha * pixels.get( x , y * 2 , 1 ) ) ,
							Math.round( fgAlpha * pixels.get( x , y * 2 , 2 ) )
						) +
						this.optimized.bgColor24bits( 0 , 0 , 0 ) +
						'▀'
					) ;
				}
			}
			else {
				fgColor = hasAlpha && pixels.get( x , y * 2 , 3 ) < 127 ?
					0 :
					this.registerForRgbCache(
						cache ,
						pixels.get( x , y * 2 , 0 ) ,
						pixels.get( x , y * 2 , 1 ) ,
						pixels.get( x , y * 2 , 2 ) ,
						0 , maxRegister
					) ;

				if ( y * 2 + 1 < pixels.shape[ 1 ] ) {
					bgColor = hasAlpha && pixels.get( x , y * 2 + 1 , 3 ) < 127 ?
						0 :
						this.registerForRgbCache(
							cache ,
							pixels.get( x , y * 2 + 1 , 0 ) ,
							pixels.get( x , y * 2 + 1 , 1 ) ,
							pixels.get( x , y * 2 + 1 , 2 ) ,
							0 , maxRegister
						) ;

					this.noFormat( this.optimized.color256[ fgColor ] + this.optimized.bgColor256[ bgColor ] + '▀' ) ;
				}
				else {
					this.noFormat( this.optimized.color256[ fgColor ] + this.optimized.bgColor256[ 0 ] + '▀' ) ;
				}
			}
		}

		this.styleReset()( '\n' ) ;
	}
} ;



notChainable.drawImage = function( filepath , options , callback ) {
	return termkit.image.load.call( this , notChainable.drawNdarrayImage.bind( this ) , filepath , options , callback ) ;
} ;



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	== Extend function ==
*/

/*
	options:
		* own: only copy own properties that are enumerable
		* nonEnum: copy non-enumerable properties as well, works only with own:true
		* descriptor: preserve property's descriptor
		* deep: boolean/Array/Set, if true perform a deep (recursive) extend, if it is an Array/Set of prototypes, only deep-copy
			objects of those prototypes
			(it is a replacement for deepFilter.whitelist which was removed in Tree Kit 0.6).
		* immutables: an Array/Set of immutable object's prototypes that are filtered out for deep-copy
			(it is a replacement for deepFilter.blacklist which was removed in Tree Kit 0.6).
		* maxDepth: used in conjunction with deep, when max depth is reached an exception is raised, default to 100 when
			the 'circular' option is off, or default to null if 'circular' is on
		* circular: circular references reconnection
		* move: move properties to target (delete properties from the sources)
		* preserve: existing properties in the target object are not overwritten
		* nofunc: skip functions
		* deepFunc: in conjunction with 'deep', this will process sources functions like objects rather than
			copying/referencing them directly into the source, thus, the result will not be a function, it forces 'deep'
		* proto: try to clone objects with the right prototype, using Object.create() or mutating it with Object.setPrototypeOf(),
			it forces option 'own'.
		* inherit: rather than mutating target prototype for source prototype like the 'proto' option does, here it is
			the source itself that IS the prototype for the target. Force option 'own' and disable 'proto'.
		* skipRoot: the prototype of the target root object is NOT mutated only if this option is set.
		* flat: extend into the target top-level only, compose name with the path of the source, force 'deep',
			disable 'unflat', 'proto', 'inherit'
		* unflat: assume sources are in the 'flat' format, expand all properties deeply into the target, disable 'flat'
*/
function extend( options , target , ... sources ) {
	//console.log( "\nextend():\n" , arguments ) ;
	var i , source , newTarget = false , length = sources.length ;

	if ( ! length ) { return target ; }

	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	var runtime = { depth: 0 , prefix: '' } ;

	if ( options.deep ) {
		if ( Array.isArray( options.deep ) ) { options.deep = new Set( options.deep ) ; }
		else if ( ! ( options.deep instanceof Set ) ) { options.deep = true ; }
	}

	if ( options.immutables ) {
		if ( Array.isArray( options.immutables ) ) { options.immutables = new Set( options.immutables ) ; }
		else if ( ! ( options.immutables instanceof Set ) ) { delete options.immutables ; }
	}

	if ( ! options.maxDepth && options.deep && ! options.circular ) { options.maxDepth = 100 ; }

	if ( options.deepFunc ) { options.deep = true ; }

	// 'flat' option force 'deep'
	if ( options.flat ) {
		options.deep = true ;
		options.proto = false ;
		options.inherit = false ;
		options.unflat = false ;
		if ( typeof options.flat !== 'string' ) { options.flat = '.' ; }
	}

	if ( options.unflat ) {
		options.deep = false ;
		options.proto = false ;
		options.inherit = false ;
		options.flat = false ;
		if ( typeof options.unflat !== 'string' ) { options.unflat = '.' ; }
	}

	// If the prototype is applied, only owned properties should be copied
	if ( options.inherit ) { options.own = true ; options.proto = false ; }
	else if ( options.proto ) { options.own = true ; }

	if ( ! target || ( typeof target !== 'object' && typeof target !== 'function' ) ) {
		newTarget = true ;
	}

	if ( ! options.skipRoot && ( options.inherit || options.proto ) ) {
		for ( i = length - 1 ; i >= 0 ; i -- ) {
			source = sources[ i ] ;
			if ( source && ( typeof source === 'object' || typeof source === 'function' ) ) {
				if ( options.inherit ) {
					if ( newTarget ) { target = Object.create( source ) ; }
					else { Object.setPrototypeOf( target , source ) ; }
				}
				else if ( options.proto ) {
					if ( newTarget ) { target = Object.create( Object.getPrototypeOf( source ) ) ; }
					else { Object.setPrototypeOf( target , Object.getPrototypeOf( source ) ) ; }
				}

				break ;
			}
		}
	}
	else if ( newTarget ) {
		target = {} ;
	}

	runtime.references = { sources: [] , targets: [] } ;

	for ( i = 0 ; i < length ; i ++ ) {
		source = sources[ i ] ;
		if ( ! source || ( typeof source !== 'object' && typeof source !== 'function' ) ) { continue ; }
		extendOne( runtime , options , target , source ) ;
	}

	return target ;
}

module.exports = extend ;



function extendOne( runtime , options , target , source ) {
	//console.log( "\nextendOne():\n" , arguments ) ;
	//process.exit() ;

	var j , jmax , sourceKeys , sourceKey , sourceValue , sourceValueProto ,
		value , sourceDescriptor , targetKey , targetPointer , path ,
		indexOfSource = -1 ;

	// Max depth check
	if ( options.maxDepth && runtime.depth > options.maxDepth ) {
		throw new Error( '[tree] extend(): max depth reached(' + options.maxDepth + ')' ) ;
	}


	if ( options.circular ) {
		runtime.references.sources.push( source ) ;
		runtime.references.targets.push( target ) ;
	}

	if ( options.own ) {
		if ( options.nonEnum ) { sourceKeys = Object.getOwnPropertyNames( source ) ; }
		else { sourceKeys = Object.keys( source ) ; }
	}
	else { sourceKeys = source ; }

	for ( sourceKey in sourceKeys ) {
		if ( options.own ) { sourceKey = sourceKeys[ sourceKey ] ; }

		// OMG, this DEPRECATED __proto__ shit is still alive and can be used to hack anything ><
		if ( sourceKey === '__proto__' ) { continue ; }

		// If descriptor is on, get it now
		if ( options.descriptor ) {
			sourceDescriptor = Object.getOwnPropertyDescriptor( source , sourceKey ) ;
			sourceValue = sourceDescriptor.value ;
		}
		else {
			// We have to trigger an eventual getter only once
			sourceValue = source[ sourceKey ] ;
		}

		targetPointer = target ;
		targetKey = runtime.prefix + sourceKey ;

		// Do not copy if property is a function and we don't want them
		if ( options.nofunc && typeof sourceValue === 'function' ) { continue ; }

		// 'unflat' mode computing
		if ( options.unflat && runtime.depth === 0 ) {
			path = sourceKey.split( options.unflat ) ;
			jmax = path.length - 1 ;

			if ( jmax ) {
				for ( j = 0 ; j < jmax ; j ++ ) {
					if ( ! targetPointer[ path[ j ] ] ||
						( typeof targetPointer[ path[ j ] ] !== 'object' &&
							typeof targetPointer[ path[ j ] ] !== 'function' ) ) {
						targetPointer[ path[ j ] ] = {} ;
					}

					targetPointer = targetPointer[ path[ j ] ] ;
				}

				targetKey = runtime.prefix + path[ jmax ] ;
			}
		}


		if ( options.deep	// eslint-disable-line no-constant-condition
			&& sourceValue
			&& ( typeof sourceValue === 'object' || ( options.deepFunc && typeof sourceValue === 'function' ) )
			&& ( ! options.descriptor || ! sourceDescriptor.get )
			// not a condition we just cache sourceValueProto now... ok it's trashy ><
			&& ( ( sourceValueProto = Object.getPrototypeOf( sourceValue ) ) || true )
			&& ( ! ( options.deep instanceof Set ) || options.deep.has( sourceValueProto ) )
			&& ( ! options.immutables || ! options.immutables.has( sourceValueProto ) )
		) {
			if ( options.circular ) {
				indexOfSource = runtime.references.sources.indexOf( sourceValue ) ;
			}

			if ( options.flat ) {
				// No circular references reconnection when in 'flat' mode
				if ( indexOfSource >= 0 ) { continue ; }

				extendOne(
					{ depth: runtime.depth + 1 , prefix: runtime.prefix + sourceKey + options.flat , references: runtime.references } ,
					options , targetPointer , sourceValue
				) ;
			}
			else {
				if ( indexOfSource >= 0 ) {
					// Circular references reconnection...
					if ( options.descriptor ) {
						Object.defineProperty( targetPointer , targetKey , {
							value: runtime.references.targets[ indexOfSource ] ,
							enumerable: sourceDescriptor.enumerable ,
							writable: sourceDescriptor.writable ,
							configurable: sourceDescriptor.configurable
						} ) ;
					}
					else {
						targetPointer[ targetKey ] = runtime.references.targets[ indexOfSource ] ;
					}

					continue ;
				}

				if ( ! targetPointer[ targetKey ] || ! Object.prototype.hasOwnProperty.call( targetPointer , targetKey ) || ( typeof targetPointer[ targetKey ] !== 'object' && typeof targetPointer[ targetKey ] !== 'function' ) ) {
					if ( Array.isArray( sourceValue ) ) { value = [] ; }
					else if ( options.proto ) { value = Object.create( sourceValueProto ) ; }	// jshint ignore:line
					else if ( options.inherit ) { value = Object.create( sourceValue ) ; }
					else { value = {} ; }

					if ( options.descriptor ) {
						Object.defineProperty( targetPointer , targetKey , {
							value: value ,
							enumerable: sourceDescriptor.enumerable ,
							writable: sourceDescriptor.writable ,
							configurable: sourceDescriptor.configurable
						} ) ;
					}
					else {
						targetPointer[ targetKey ] = value ;
					}
				}
				else if ( options.proto && Object.getPrototypeOf( targetPointer[ targetKey ] ) !== sourceValueProto ) {
					Object.setPrototypeOf( targetPointer[ targetKey ] , sourceValueProto ) ;
				}
				else if ( options.inherit && Object.getPrototypeOf( targetPointer[ targetKey ] ) !== sourceValue ) {
					Object.setPrototypeOf( targetPointer[ targetKey ] , sourceValue ) ;
				}

				if ( options.circular ) {
					runtime.references.sources.push( sourceValue ) ;
					runtime.references.targets.push( targetPointer[ targetKey ] ) ;
				}

				// Recursively extends sub-object
				extendOne(
					{ depth: runtime.depth + 1 , prefix: '' , references: runtime.references } ,
					options , targetPointer[ targetKey ] , sourceValue
				) ;
			}
		}
		else if ( options.preserve && targetPointer[ targetKey ] !== undefined ) {
			// Do not overwrite, and so do not delete source's properties that were not moved
			continue ;
		}
		else if ( ! options.inherit ) {
			if ( options.descriptor ) { Object.defineProperty( targetPointer , targetKey , sourceDescriptor ) ; }
			else { targetPointer[ targetKey ] = sourceValue ; }
		}

		// Delete owned property of the source object
		if ( options.move ) { delete source[ sourceKey ] ; }
	}
}



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	Stand-alone fork of extend.js, without options.
*/

function clone( originalObject , circular ) {
	// First create an empty object with
	// same prototype of our original source

	var originalProto = Object.getPrototypeOf( originalObject ) ;

	// Opaque objects, like Date
	if ( clone.opaque.has( originalProto ) ) { return clone.opaque.get( originalProto )( originalObject ) ; }

	var propertyIndex , descriptor , keys , current , nextSource , proto ,
		copies = [ {
			source: originalObject ,
			target: Array.isArray( originalObject ) ? [] : Object.create( originalProto )
		} ] ,
		cloneObject = copies[ 0 ].target ,
		refMap = new Map() ;

	refMap.set( originalObject , cloneObject ) ;


	// First in, first out
	while ( ( current = copies.shift() ) ) {
		keys = Object.getOwnPropertyNames( current.source ) ;

		for ( propertyIndex = 0 ; propertyIndex < keys.length ; propertyIndex ++ ) {
			// Save the source's descriptor
			descriptor = Object.getOwnPropertyDescriptor( current.source , keys[ propertyIndex ] ) ;


			if ( ! descriptor.value || typeof descriptor.value !== 'object' ) {
				Object.defineProperty( current.target , keys[ propertyIndex ] , descriptor ) ;
				continue ;
			}

			nextSource = descriptor.value ;

			if ( circular ) {
				if ( refMap.has( nextSource ) ) {
					// The source is already referenced, just assign reference
					descriptor.value = refMap.get( nextSource ) ;
					Object.defineProperty( current.target , keys[ propertyIndex ] , descriptor ) ;
					continue ;
				}
			}

			proto = Object.getPrototypeOf( descriptor.value ) ;

			// Opaque objects, like Date, not recursivity for them
			if ( clone.opaque.has( proto ) ) {
				descriptor.value = clone.opaque.get( proto )( descriptor.value ) ;
				Object.defineProperty( current.target , keys[ propertyIndex ] , descriptor ) ;
				continue ;
			}

			descriptor.value = Array.isArray( nextSource ) ? [] : Object.create( proto ) ;

			if ( circular ) { refMap.set( nextSource , descriptor.value ) ; }

			Object.defineProperty( current.target , keys[ propertyIndex ] , descriptor ) ;
			copies.push( { source: nextSource , target: descriptor.value } ) ;
		}
	}

	return cloneObject ;
}

module.exports = clone ;



clone.opaque = new Map() ;
clone.opaque.set( Date.prototype , src => new Date( src ) ) ;



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var treePath = {} ;
module.exports = treePath ;



treePath.op = function op( type , object , path , value ) {
	var i , parts , last , pointer , key , isArray = false , pathArrayMode = false , isGenericSet , canBeEmpty = true ;

	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		return ;
	}

	if ( typeof path === 'string' ) {
		// Split the path into parts
		if ( path ) { parts = path.match( /([.#[\]]|[^.#[\]]+)/g ) ; }
		else { parts = [ '' ] ; }

		if ( parts[ 0 ] === '.' ) { parts.unshift( '' ) ; }
		if ( parts[ parts.length - 1 ] === '.' ) { parts.push( '' ) ; }
	}
	else if ( Array.isArray( path ) ) {
		parts = path ;
		pathArrayMode = true ;
	}
	else {
		throw new TypeError( '[tree.path] .' + type + '(): the path argument should be a string or an array' ) ;
	}

	switch ( type ) {
		case 'get' :
		case 'delete' :
			isGenericSet = false ;
			break ;
		case 'set' :
		case 'define' :
		case 'inc' :
		case 'dec' :
		case 'append' :
		case 'prepend' :
		case 'concat' :
		case 'insert' :
		case 'autoPush' :
			isGenericSet = true ;
			break ;
		default :
			throw new TypeError( "[tree.path] .op(): wrong type of operation '" + type + "'" ) ;
	}

	//console.log( parts ) ;
	// The pointer start at the object's root
	pointer = object ;

	last = parts.length - 1 ;

	for ( i = 0 ; i <= last ; i ++ ) {
		if ( pathArrayMode ) {
			if ( key === undefined ) {
				key = parts[ i ] ;
				continue ;
			}

			if ( ! pointer[ key ] || ( typeof pointer[ key ] !== 'object' && typeof pointer[ key ] !== 'function' ) ) {
				if ( ! isGenericSet ) { return undefined ; }
				pointer[ key ] = {} ;
			}

			pointer = pointer[ key ] ;
			key = parts[ i ] ;

			continue ;
		}
		else if ( parts[ i ] === '.' ) {
			isArray = false ;

			if ( key === undefined ) {
				if ( ! canBeEmpty ) {
					canBeEmpty = true ;
					continue ;
				}

				key = '' ;
			}

			if ( ! pointer[ key ] || ( typeof pointer[ key ] !== 'object' && typeof pointer[ key ] !== 'function' ) ) {
				if ( ! isGenericSet ) { return undefined ; }
				pointer[ key ] = {} ;
			}

			pointer = pointer[ key ] ;
			canBeEmpty = true ;

			continue ;
		}
		else if ( parts[ i ] === '#' || parts[ i ] === '[' ) {
			isArray = true ;
			canBeEmpty = false ;

			if ( key === undefined ) {
				// The root element cannot be altered, we are in trouble if an array is expected but we have only a regular object.
				if ( ! Array.isArray( pointer ) ) { return undefined ; }
				continue ;
			}

			if ( ! pointer[ key ] || ! Array.isArray( pointer[ key ] ) ) {
				if ( ! isGenericSet ) { return undefined ; }
				pointer[ key ] = [] ;
			}

			pointer = pointer[ key ] ;

			continue ;
		}
		else if ( parts[ i ] === ']' ) {
			// Closing bracket: do nothing
			canBeEmpty = false ;
			continue ;
		}

		canBeEmpty = false ;

		if ( ! isArray ) { key = parts[ i ] ; continue ; }

		switch ( parts[ i ] ) {
			case 'length' :
				key = parts[ i ] ;
				break ;

			// Pseudo-key
			case 'first' :
				key = 0 ;
				break ;
			case 'last' :
				key = pointer.length - 1 ;
				if ( key < 0 ) { key = 0 ; }
				break ;
			case 'next' :
				if ( ! isGenericSet ) { return undefined ; }
				key = pointer.length ;
				break ;
			case 'insert' :
				if ( ! isGenericSet ) { return undefined ; }
				pointer.unshift( undefined ) ;
				key = 0 ;
				break ;

			// default = number
			default :
				// Convert the string key to a numerical index
				key = parseInt( parts[ i ] , 10 ) ;
		}
	}

	switch ( type ) {
		case 'get' :
			return pointer[ key ] ;
		case 'delete' :
			if ( isArray && typeof key === 'number' ) { pointer.splice( key , 1 ) ; }
			else { delete pointer[ key ] ; }
			return ;
		case 'set' :
			pointer[ key ] = value ;
			return pointer[ key ] ;
		case 'define' :
			// define: set only if it doesn't exist
			if ( ! ( key in pointer ) ) { pointer[ key ] = value ; }
			return pointer[ key ] ;
		case 'inc' :
			if ( typeof pointer[ key ] === 'number' ) { pointer[ key ] ++ ; }
			else if ( ! pointer[ key ] || typeof pointer[ key ] !== 'object' ) { pointer[ key ] = 1 ; }
			return pointer[ key ] ;
		case 'dec' :
			if ( typeof pointer[ key ] === 'number' ) { pointer[ key ] -- ; }
			else if ( ! pointer[ key ] || typeof pointer[ key ] !== 'object' ) { pointer[ key ] = -1 ; }
			return pointer[ key ] ;
		case 'append' :
			if ( ! pointer[ key ] ) { pointer[ key ] = [ value ] ; }
			else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].push( value ) ; }
			//else ? do nothing???
			return pointer[ key ] ;
		case 'prepend' :
			if ( ! pointer[ key ] ) { pointer[ key ] = [ value ] ; }
			else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].unshift( value ) ; }
			//else ? do nothing???
			return pointer[ key ] ;
		case 'concat' :
			if ( ! pointer[ key ] ) { pointer[ key ] = value ; }
			else if ( Array.isArray( pointer[ key ] ) && Array.isArray( value ) ) {
				pointer[ key ] = pointer[ key ].concat( value ) ;
			}
			//else ? do nothing???
			return pointer[ key ] ;
		case 'insert' :
			if ( ! pointer[ key ] ) { pointer[ key ] = value ; }
			else if ( Array.isArray( pointer[ key ] ) && Array.isArray( value ) ) {
				pointer[ key ] = value.concat( pointer[ key ] ) ;
			}
			//else ? do nothing???
			return pointer[ key ] ;
		case 'autoPush' :
			if ( pointer[ key ] === undefined ) { pointer[ key ] = value ; }
			else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].push( value ) ; }
			else { pointer[ key ] = [ pointer[ key ] , value ] ; }
			return pointer[ key ] ;
	}
} ;



// get, set and delete use the same op() function
treePath.get = treePath.op.bind( undefined , 'get' ) ;
treePath.delete = treePath.op.bind( undefined , 'delete' ) ;
treePath.set = treePath.op.bind( undefined , 'set' ) ;
treePath.define = treePath.op.bind( undefined , 'define' ) ;
treePath.inc = treePath.op.bind( undefined , 'inc' ) ;
treePath.dec = treePath.op.bind( undefined , 'dec' ) ;
treePath.append = treePath.op.bind( undefined , 'append' ) ;
treePath.prepend = treePath.op.bind( undefined , 'prepend' ) ;
treePath.concat = treePath.op.bind( undefined , 'concat' ) ;
treePath.insert = treePath.op.bind( undefined , 'insert' ) ;
treePath.autoPush = treePath.op.bind( undefined , 'autoPush' ) ;



// Prototype used for object creation, so they can be created with Object.create( tree.path.prototype )
treePath.prototype = {
	get: function( path ) { return treePath.get( this , path ) ; } ,
	delete: function( path ) { return treePath.delete( this , path ) ; } ,
	set: function( path , value ) { return treePath.set( this , path , value ) ; } ,
	define: function( path , value ) { return treePath.define( this , path , value ) ; } ,
	inc: function( path , value ) { return treePath.inc( this , path , value ) ; } ,
	dec: function( path , value ) { return treePath.dec( this , path , value ) ; } ,
	append: function( path , value ) { return treePath.append( this , path , value ) ; } ,
	prepend: function( path , value ) { return treePath.prepend( this , path , value ) ; } ,
	concat: function( path , value ) { return treePath.concat( this , path , value ) ; } ,
	insert: function( path , value ) { return treePath.insert( this , path , value ) ; } ,
	autoPush: function( path , value ) { return treePath.autoPush( this , path , value ) ; }
} ;



// Upgrade an object so it can support get, set and delete at its root
treePath.upgrade = function upgrade( object ) {
	Object.defineProperties( object , {
		get: { value: treePath.op.bind( undefined , 'get' , object ) } ,
		delete: { value: treePath.op.bind( undefined , 'delete' , object ) } ,
		set: { value: treePath.op.bind( undefined , 'set' , object ) } ,
		define: { value: treePath.op.bind( undefined , 'define' , object ) } ,
		inc: { value: treePath.op.bind( undefined , 'inc' , object ) } ,
		dec: { value: treePath.op.bind( undefined , 'dec' , object ) } ,
		append: { value: treePath.op.bind( undefined , 'append' , object ) } ,
		prepend: { value: treePath.op.bind( undefined , 'prepend' , object ) } ,
		concat: { value: treePath.op.bind( undefined , 'concat' , object ) } ,
		insert: { value: treePath.op.bind( undefined , 'insert' , object ) } ,
		autoPush: { value: treePath.op.bind( undefined , 'autoPush' , object ) }
	} ) ;
} ;



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const dotPath = {} ;
module.exports = dotPath ;



const EMPTY_PATH = [] ;

function toPathArray( path ) {
	if ( Array.isArray( path ) ) {
		return path ;
	}
	else if ( ! path ) {
		return EMPTY_PATH ;
	}
	else if ( typeof path === 'string' ) {
		return path.split( '.' ) ;
	}

	throw new TypeError( '[tree.dotPath]: the path argument should be a string or an array' ) ;
}



// Walk the tree using the path array.
function walk( object , pathArray ) {
	var i , iMax ,
		pointer = object ;

	for ( i = 0 , iMax = pathArray.length ; i < iMax ; i ++ ) {
		if ( ! pointer || ( typeof pointer !== 'object' && typeof pointer !== 'function' ) ) {
			return undefined ;
		}

		pointer = pointer[ pathArray[ i ] ] ;
	}

	return pointer ;
}



// Walk the tree, stop before the last path part.
function walkBeforeLast( object , pathArray ) {
	var i , iMax ,
		pointer = object ;

	for ( i = 0 , iMax = pathArray.length - 1 ; i < iMax ; i ++ ) {
		if ( ! pointer || ( typeof pointer !== 'object' && typeof pointer !== 'function' ) ) {
			return undefined ;
		}

		pointer = pointer[ pathArray[ i ] ] ;
	}

	return pointer ;
}



// Walk the tree, create missing element: pave the path up to before the last part of the path.
// Return that before-the-last element.
// Object MUST be an object! no check are performed for the first step!
function pave( object , pathArray ) {
	var i , iMax ,
		key ,
		pointer = object ;

	for ( i = 0 , iMax = pathArray.length - 1 ; i < iMax ; i ++ ) {
		key = pathArray[ i ] ;

		if ( ! pointer[ key ] || ( typeof pointer[ key ] !== 'object' && typeof pointer[ key ] !== 'function' ) ) {
			pointer[ key ] = {} ;
		}

		pointer = pointer[ key ] ;
	}

	return pointer ;
}



dotPath.get = function( object , path ) {
	return walk( object , toPathArray( path ) ) ;
} ;



dotPath.set = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;

	pointer[ pathArray[ pathArray.length - 1 ] ] = value ;

	return value ;
} ;



dotPath.define = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;
	var key = pathArray[ pathArray.length - 1 ] ;

	if ( ! ( key in pointer ) ) { pointer[ key ] = value ; }

	return value ;
} ;



dotPath.inc = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;
	var key = pathArray[ pathArray.length - 1 ] ;

	if ( typeof pointer[ key ] === 'number' ) { pointer[ key ] ++ ; }
	else if ( ! pointer[ key ] || typeof pointer[ key ] !== 'object' ) { pointer[ key ] = 1 ; }

	return value ;
} ;



dotPath.dec = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;
	var key = pathArray[ pathArray.length - 1 ] ;

	if ( typeof pointer[ key ] === 'number' ) { pointer[ key ] -- ; }
	else if ( ! pointer[ key ] || typeof pointer[ key ] !== 'object' ) { pointer[ key ] = -1 ; }

	return value ;
} ;



dotPath.concat = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;
	var key = pathArray[ pathArray.length - 1 ] ;

	if ( ! pointer[ key ] ) { pointer[ key ] = value ; }
	else if ( Array.isArray( pointer[ key ] ) && Array.isArray( value ) ) {
		pointer[ key ] = pointer[ key ].concat( value ) ;
	}
	//else ? do nothing???

	return value ;
} ;



dotPath.insert = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;
	var key = pathArray[ pathArray.length - 1 ] ;

	if ( ! pointer[ key ] ) { pointer[ key ] = value ; }
	else if ( Array.isArray( pointer[ key ] ) && Array.isArray( value ) ) {
		pointer[ key ] = value.concat( pointer[ key ] ) ;
	}
	//else ? do nothing???

	return value ;
} ;



dotPath.delete = function( object , path ) {
	var pathArray = toPathArray( path ) ;
	var pointer = walkBeforeLast( object , pathArray ) ;

	if ( ! pointer || ( typeof pointer !== 'object' && typeof pointer !== 'function' ) ) {
		return false ;
	}

	return delete pointer[ pathArray[ pathArray.length - 1 ] ] ;
} ;



dotPath.autoPush = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;

	var key = pathArray[ pathArray.length - 1 ] ;

	if ( pointer[ key ] === undefined ) { pointer[ key ] = value ; }
	else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].push( value ) ; }
	else { pointer[ key ] = [ pointer[ key ] , value ] ; }

	return pointer[ key ] ;
} ;



dotPath.append = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;

	var key = pathArray[ pathArray.length - 1 ] ;

	if ( ! pointer[ key ] ) { pointer[ key ] = [ value ] ; }
	else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].push( value ) ; }
	//else ? do nothing???

	return pointer[ key ] ;
} ;



dotPath.prepend = function( object , path , value ) {
	if ( ! object || ( typeof object !== 'object' && typeof object !== 'function' ) ) {
		// Throw?
		return undefined ;
	}

	var pathArray = toPathArray( path ) ;
	var pointer = pave( object , pathArray ) ;

	var key = pathArray[ pathArray.length - 1 ] ;

	if ( ! pointer[ key ] ) { pointer[ key ] = [ value ] ; }
	else if ( Array.isArray( pointer[ key ] ) ) { pointer[ key ].unshift( value ) ; }
	//else ? do nothing???

	return pointer[ key ] ;
} ;



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	DEPRECATED, moved to its own module: lazyness
*/

exports.defineLazyProperty = function defineLazyProperty( object , name , func ) {
	Object.defineProperty( object , name , {
		configurable: true ,
		enumerable: true ,
		get: function() {

			var value = func() ;

			Object.defineProperty( object , name , {
				configurable: true ,
				enumerable: true ,
				writable: false ,
				value: value
			} ) ;

			return value ;
		}
	} ) ;
} ;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	== Diff function ==
*/

function diff( left , right , options ) {
	var i , key , keyPath ,
		leftKeys , rightKeys , leftTypeof , rightTypeof ,
		depth , diffObject , length , arrayMode ;

	leftTypeof = typeof left ;
	rightTypeof = typeof right ;

	if (
		! left || ( leftTypeof !== 'object' && leftTypeof !== 'function' ) ||
		! right || ( rightTypeof !== 'object' && rightTypeof !== 'function' )
	) {
		throw new Error( '[tree] diff() needs objects as argument #0 and #1' ) ;
	}

	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	depth = options.depth || 0 ;

	// Things applied only for the root, not for recursive call
	if ( ! depth ) {
		options.diffObject = {} ;
		if ( ! options.path ) { options.path = '' ; }
		if ( ! options.pathSeparator ) { options.pathSeparator = '.' ; }
	}

	diffObject = options.diffObject ;


	// Left part
	if ( Array.isArray( left ) ) {
		arrayMode = true ;
		length = left.length ;
	}
	else {
		arrayMode = false ;
		leftKeys = Object.keys( left ) ;
		length = leftKeys.length ;
	}

	for ( i = 0 ; i < length ; i ++ ) {
		key = arrayMode ? i : leftKeys[ i ] ;
		keyPath = options.path + options.pathSeparator + key ;
		//console.log( 'L keyPath:' , keyPath ) ;

		if ( ! Object.prototype.hasOwnProperty.call( right , key ) ) {
			diffObject[ keyPath ] = { path: keyPath , message: 'does not exist in right-hand side' } ;
			continue ;
		}

		leftTypeof = typeof left[ key ] ;
		rightTypeof = typeof right[ key ] ;

		if ( leftTypeof !== rightTypeof ) {
			diffObject[ keyPath ] = { path: keyPath , message: 'different typeof: ' + leftTypeof + ' - ' + rightTypeof } ;
			continue ;
		}

		if ( leftTypeof === 'object' || leftTypeof === 'function' ) {
			// Cleanup the 'null is an object' mess
			if ( ! left[ key ] ) {
				if ( right[ key ] ) { diffObject[ keyPath ] = { path: keyPath , message: 'different type: null - Object' } ; }
				continue ;
			}

			if ( ! right[ key ] ) {
				diffObject[ keyPath ] = { path: keyPath , message: 'different type: Object - null' } ;
				continue ;
			}

			if ( Array.isArray( left[ key ] ) && ! Array.isArray( right[ key ] ) ) {
				diffObject[ keyPath ] = { path: keyPath , message: 'different type: Array - Object' } ;
				continue ;
			}

			if ( ! Array.isArray( left[ key ] ) && Array.isArray( right[ key ] ) ) {
				diffObject[ keyPath ] = { path: keyPath , message: 'different type: Object - Array' } ;
				continue ;
			}

			diff( left[ key ] , right[ key ] , {
				path: keyPath , pathSeparator: options.pathSeparator , depth: depth + 1 , diffObject: diffObject
			} ) ;
			continue ;
		}

		if ( left[ key ] !== right[ key ] ) {
			diffObject[ keyPath ] = { path: keyPath , message: 'different value: ' + left[ key ] + ' - ' + right[ key ] } ;
			continue ;
		}
	}


	// Right part
	if ( Array.isArray( right ) ) {
		arrayMode = true ;
		length = right.length ;
	}
	else {
		arrayMode = false ;
		rightKeys = Object.keys( right ) ;
		length = rightKeys.length ;
	}

	for ( i = 0 ; i < length ; i ++ ) {
		key = arrayMode ? i : rightKeys[ i ] ;
		keyPath = options.path + options.pathSeparator + key ;
		//console.log( 'R keyPath:' , keyPath ) ;

		if ( ! Object.prototype.hasOwnProperty.call( left , key ) ) {
			diffObject[ keyPath ] = { path: keyPath , message: 'does not exist in left-hand side' } ;
			continue ;
		}
	}

	return Object.keys( diffObject ).length ? diffObject : null ;
}

exports.diff = diff ;



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Tree Kit

	Copyright (c) 2014 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var tree = __webpack_require__( 0 ) ;
var util = __webpack_require__( 78 ) ;



// Create and export
var masklib = {} ;
module.exports = masklib ;



/*
	== Mask-family class ==

	Recursively select values in the input object if the same path in the mask object is set.
*/

/*
	TODO:
	- negative mask
	- constraint check
	- Maskable object, like in csk-php
*/

masklib.Mask = function Mask() {
	throw new Error( 'Cannot create a tree.Mask() directly' ) ;
} ;



var maskDefaultOptions = {
	clone: false ,
	path: '<object>' ,
	pathSeparator: '.'
} ;



/*
	options:
		clone: the output clone the input rather than reference it
		pathSeperator: when expressing path, this is the separator
		leaf: a callback to exec for each mask leaf
		node? a callback to exec for each mask node
*/
masklib.createMask = function createMask( maskArgument , options ) {
	if ( maskArgument === null || typeof maskArgument !== 'object' ) {
		throw new TypeError( '[tree] .createMask() : Argument #1 should be an object' ) ;
	}

	if ( options !== null && typeof options === 'object' ) { options = tree.extend( null , {} , maskDefaultOptions , options ) ; }
	else { options = maskDefaultOptions ; }

	var mask = Object.create( masklib.Mask.prototype , {
		__options__: { value: options , writable: true  }
	} ) ;

	tree.extend( null , mask , maskArgument ) ;

	return mask ;
} ;



// Apply the mask to an input tree
masklib.Mask.prototype.applyTo = function applyTo( input , context , contextOverideDefault ) {
	// Arguments checking
	if ( input === null || typeof input !== 'object' ) {
		throw new TypeError( '[tree] .applyTo() : Argument #1 should be an object' ) ;
	}

	if ( contextOverideDefault ) {
		context = tree.extend( null ,
			{
				mask: this ,
				options: this.__options__ ,
				path: this.__options__.path
			} ,
			context
		) ;
	}
	else if ( context === undefined ) {
		context = {
			mask: this ,
			options: this.__options__ ,
			path: this.__options__.path
		} ;
	}


	// Init
	//console.log( context ) ;
	var result , nextPath , output ,
		i , key , maskValue ,
		maskKeyList = Object.keys( context.mask ) ,
		j , inputKey , inputValue , inputKeyList ;

	if ( Array.isArray( input ) ) { output = [] ; }
	else { output = {} ; }


	// Iterate through mask properties
	for ( i = 0 ; i < maskKeyList.length ; i ++ ) {
		key = maskKeyList[ i ] ;
		maskValue = context.mask[ key ] ;

		//console.log( '\nnext loop: ' , key , maskValue ) ;

		// The special key * is a wildcard, it match everything
		if ( key === '*' ) {
			//console.log( 'wildcard' ) ;
			inputKeyList = Object.keys( input ) ;

			for ( j = 0 ; j < inputKeyList.length ; j ++ ) {
				inputKey = inputKeyList[ j ] ;
				inputValue = input[ inputKey ] ;

				//console.log( '*: ' , inputKey ) ;
				nextPath = context.path + context.options.pathSeparator + inputKey ;

				// If it is an array or object, recursively check it
				if ( maskValue !== null && typeof maskValue === 'object' ) {
					if ( inputValue !== null && typeof inputValue === 'object' ) {
						if ( inputValue instanceof masklib.Mask ) {
							output[ inputKey ] = inputValue.applyTo( inputValue , { path: nextPath } , true ) ;
						}
						else {
							output[ inputKey ] = this.applyTo( inputValue , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
						}
					}
					else if ( typeof context.options.leaf === 'function' ) {
						output[ inputKey ] = this.applyTo( {} , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
					}
				}
				else if ( maskValue !== null && typeof context.options.leaf === 'function' ) {
					//console.log( 'leaf callback' ) ;
					result = context.options.leaf( input , inputKey , maskValue , nextPath ) ;
					if ( ! ( result instanceof Error ) ) { output[ inputKey ] = result ; }
				}
				else if ( context.options.clone && ( inputValue !== null && typeof inputValue === 'object' ) ) {
					output[ inputKey ] = tree.extend( { deep: true } , {} , inputValue ) ;
				}
				else {
					output[ inputKey ] = inputValue ;
				}
			}

			continue ;
		}


		nextPath = context.path + context.options.pathSeparator + key ;

		// If it is an object, recursively check it
		//if ( maskValue instanceof masklib.Mask )
		if ( maskValue !== null && typeof maskValue === 'object' ) {
			//console.log( 'sub' ) ;

			if ( Object.prototype.hasOwnProperty.call( input , key ) && input[ key ] !== null && typeof input[ key ] === 'object' ) {
				//console.log( 'recursive call' ) ;

				if ( input.key instanceof masklib.Mask ) {
					output[ key ] = input.key.applyTo( input[ key ] , { path: nextPath } , true ) ;
				}
				else {
					output[ key ] = this.applyTo( input[ key ] , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
				}
			}
			// recursive call only if there are callback
			else if ( context.options.leaf ) {
				//console.log( 'recursive call' ) ;
				output[ key ] = this.applyTo( {} , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
			}
		}
		// If mask exists, add the key
		else if ( Object.prototype.hasOwnProperty.call( input , key ) ) {
			//console.log( 'property found' ) ;

			if ( maskValue !== undefined && typeof context.options.leaf === 'function' ) {
				//console.log( 'leaf callback' ) ;
				result = context.options.leaf( input , key , maskValue , nextPath ) ;
				if ( ! ( result instanceof Error ) ) { output[ key ] = result ; }
			}
			else if ( context.options.clone && ( input[ key ] !== null && typeof input[ key ] === 'object' ) ) {
				output[ key ] = tree.extend( { deep: true } , {} , input[ key ] ) ;
			}
			else {
				output[ key ] = input[ key ] ;
			}
		}
		else if ( maskValue !== undefined && typeof context.options.leaf === 'function' ) {
			//console.log( 'leaf callback' ) ;
			result = context.options.leaf( input , key , maskValue , nextPath ) ;
			if ( ! ( result instanceof Error ) ) { output[ key ] = result ; }
		}
	}

	return output ;
} ;



// InverseMask: create an output tree from the input, by excluding properties of the mask

masklib.InverseMask = function InverseMask() {
	throw new Error( 'Cannot create a tree.InverseMask() directly' ) ;
} ;

util.inherits( masklib.InverseMask , masklib.Mask ) ;



/*
	options:
		clone: the output clone the input rather than reference it
		pathSeperator: when expressing path, this is the separator
*/
masklib.createInverseMask = function createInverseMask( maskArgument , options ) {
	if ( maskArgument === null || typeof maskArgument !== 'object' ) {
		throw new TypeError( '[tree] .createInverseMask() : Argument #1 should be an object' ) ;
	}

	if ( options !== null && typeof options === 'object' ) { options = tree.extend( null , {} , maskDefaultOptions , options ) ; }
	else { options = maskDefaultOptions ; }

	var mask = Object.create( masklib.InverseMask.prototype , {
		__options__: { value: options , writable: true  }
	} ) ;

	tree.extend( null , mask , maskArgument ) ;

	return mask ;
} ;



// Apply the mask to an input tree
masklib.InverseMask.prototype.applyTo = function applyTo( input , context , contextOverideDefault ) {
	// Arguments checking
	if ( input === null || typeof input !== 'object' ) {
		throw new TypeError( '[tree] .applyTo() : Argument #1 should be an object' ) ;
	}

	if ( contextOverideDefault ) {
		context = tree.extend( null ,
			{
				mask: this ,
				options: this.__options__ ,
				path: this.__options__.path
			} ,
			context
		) ;
	}
	else if ( context === undefined ) {
		context = {
			mask: this ,
			options: this.__options__ ,
			path: this.__options__.path
		} ;
	}


	// Init
	//console.log( context ) ;
	var nextPath , output ,
		i , key , maskValue ,
		maskKeyList = Object.keys( context.mask ) ,
		j , inputKey , inputValue , inputKeyList ;

	if ( Array.isArray( input ) ) { output = tree.extend( { deep: true } , [] , input ) ; }
	else { output = tree.extend( { deep: true } , {} , input ) ; }

	//console.log( output ) ;

	// Iterate through mask properties
	for ( i = 0 ; i < maskKeyList.length ; i ++ ) {
		key = maskKeyList[ i ] ;
		maskValue = context.mask[ key ] ;

		//console.log( '\nnext loop: ' , key , maskValue ) ;

		// The special key * is a wildcard, it match everything
		if ( key === '*' ) {
			//console.log( 'wildcard' ) ;
			inputKeyList = Object.keys( input ) ;

			for ( j = 0 ; j < inputKeyList.length ; j ++ ) {
				inputKey = inputKeyList[ j ] ;
				inputValue = input[ inputKey ] ;

				//console.log( '*: ' , inputKey ) ;
				nextPath = context.path + context.options.pathSeparator + inputKey ;

				// If it is an array or object, recursively check it
				if ( maskValue !== null && typeof maskValue === 'object' ) {
					if ( inputValue !== null && typeof inputValue === 'object' ) {
						if ( inputValue instanceof masklib.Mask ) {
							output[ inputKey ] = inputValue.applyTo( inputValue , { path: nextPath } , true ) ;
						}
						else {
							output[ inputKey ] = this.applyTo( inputValue , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
						}
					}
				}
				else {
					delete output[ inputKey ] ;
				}
			}

			continue ;
		}


		nextPath = context.path + context.options.pathSeparator + key ;

		// If it is an object, recursively check it
		//if ( maskValue instanceof masklib.Mask )
		if ( maskValue !== null && typeof maskValue === 'object' ) {
			//console.log( 'sub' ) ;

			if ( Object.prototype.hasOwnProperty.call( input , key ) && input[ key ] !== null && typeof input[ key ] === 'object' ) {
				//console.log( 'recursive call' ) ;

				if ( input.key instanceof masklib.Mask ) {
					output[ key ] = input.key.applyTo( input[ key ] , { path: nextPath } , true ) ;
				}
				else {
					output[ key ] = this.applyTo( input[ key ] , tree.extend( null , {} , context , { mask: maskValue , path: nextPath } ) ) ;
				}
			}
		}
		// If mask exists, remove the key
		else if ( Object.prototype.hasOwnProperty.call( input , key ) ) {
			delete output[ key ] ;
		}
	}

	return output ;
} ;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {"_from":"nextgen-events@^1.3.4","_id":"nextgen-events@1.3.4","_inBundle":false,"_integrity":"sha512-umMRD9VOvQ7+AeCvMETA7tekqrzG0xOX2HLrpyZRuW+4NlXR5baZwY/CP7Sq3x1BkKCIa1KnI1m2+Fs+fJpOiQ==","_location":"/nextgen-events","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"nextgen-events@^1.3.4","name":"nextgen-events","escapedName":"nextgen-events","rawSpec":"^1.3.4","saveSpec":null,"fetchSpec":"^1.3.4"},"_requiredBy":["/terminal-kit"],"_resolved":"https://registry.npmjs.org/nextgen-events/-/nextgen-events-1.3.4.tgz","_shasum":"4592242726e47da1ef7caaa414d6c5364ae66039","_spec":"nextgen-events@^1.3.4","_where":"/home/escapeoneone/sh/node_modules/terminal-kit","author":{"name":"Cédric Ronvel"},"bugs":{"url":"https://github.com/cronvel/nextgen-events/issues"},"bundleDependencies":false,"config":{"tea-time":{"coverDir":["lib"]}},"copyright":{"title":"Next-Gen Events","years":[2015,2019],"owner":"Cédric Ronvel"},"dependencies":{},"deprecated":false,"description":"The next generation of events handling for javascript! New: abstract away the network!","devDependencies":{"browserify":"^16.2.2","uglify-js-es6":"^2.8.9","ws":"^5.1.1"},"directories":{"test":"test"},"engines":{"node":">=6.0.0"},"homepage":"https://github.com/cronvel/nextgen-events#readme","keywords":["events","async","emit","listener","context","series","serialize","namespace","proxy","network"],"license":"MIT","main":"lib/NextGenEvents.js","name":"nextgen-events","repository":{"type":"git","url":"git+https://github.com/cronvel/nextgen-events.git"},"scripts":{"test":"tea-time -R dot"},"version":"1.3.4"}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Next-Gen Events

	Copyright (c) 2015 - 2019 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





function Proxy() {
	this.localServices = {} ;
	this.remoteServices = {} ;
	this.nextAckId = 1 ;
}

module.exports = Proxy ;

var NextGenEvents = __webpack_require__( 6 ) ;
var MESSAGE_TYPE = 'NextGenEvents/message' ;

function noop() {}



// Backward compatibility
Proxy.create = ( ... args ) => new Proxy( ... args ) ;



// Add a local service accessible remotely
Proxy.prototype.addLocalService = function( id , emitter , options ) {
	this.localServices[ id ] = LocalService.create( this , id , emitter , options ) ;
	return this.localServices[ id ] ;
} ;



// Add a remote service accessible locally
Proxy.prototype.addRemoteService = function( id ) {
	this.remoteServices[ id ] = RemoteService.create( this , id ) ;
	return this.remoteServices[ id ] ;
} ;



// Destroy the proxy
Proxy.prototype.destroy = function() {
	Object.keys( this.localServices ).forEach( ( id ) => {
		this.localServices[ id ].destroy() ;
		delete this.localServices[ id ] ;
	} ) ;

	Object.keys( this.remoteServices ).forEach( ( id ) => {
		this.remoteServices[ id ].destroy() ;
		delete this.remoteServices[ id ] ;
	} ) ;

	this.receive = this.send = noop ;
} ;



// Push an event message.
Proxy.prototype.push = function( message ) {
	if (
		message.__type !== MESSAGE_TYPE ||
		! message.service || typeof message.service !== 'string' ||
		! message.event || typeof message.event !== 'string' ||
		! message.method
	) {
		return ;
	}

	switch ( message.method ) {
		// Those methods target a remote service
		case 'event' :
			return this.remoteServices[ message.service ] && this.remoteServices[ message.service ].receiveEvent( message ) ;
		case 'ackEmit' :
			return this.remoteServices[ message.service ] && this.remoteServices[ message.service ].receiveAckEmit( message ) ;

		// Those methods target a local service
		case 'emit' :
			return this.localServices[ message.service ] && this.localServices[ message.service ].receiveEmit( message ) ;
		case 'listen' :
			return this.localServices[ message.service ] && this.localServices[ message.service ].receiveListen( message ) ;
		case 'ignore' :
			return this.localServices[ message.service ] && this.localServices[ message.service ].receiveIgnore( message ) ;
		case 'ackEvent' :
			return this.localServices[ message.service ] && this.localServices[ message.service ].receiveAckEvent( message ) ;

		default :
			return ;
	}
} ;



// This is the method to receive and decode data from the other side of the communication channel, most of time another proxy.
// In most case, this should be overwritten.
Proxy.prototype.receive = function( raw ) {
	this.push( raw ) ;
} ;



// This is the method used to send data to the other side of the communication channel, most of time another proxy.
// This MUST be overwritten in any case.
Proxy.prototype.send = function() {
	throw new Error( 'The send() method of the Proxy MUST be extended/overwritten' ) ;
} ;



/* Local Service */



function LocalService( proxy , id , emitter , options ) { return LocalService.create( proxy , id , emitter , options ) ; }
Proxy.LocalService = LocalService ;



LocalService.create = function( proxy , id , emitter , options ) {
	var self = Object.create( LocalService.prototype , {
		proxy: { value: proxy , enumerable: true } ,
		id: { value: id , enumerable: true } ,
		emitter: { value: emitter , writable: true , enumerable: true } ,
		internalEvents: { value: Object.create( NextGenEvents.prototype ) , writable: true , enumerable: true } ,
		events: { value: {} , enumerable: true } ,
		canListen: { value: !! options.listen , writable: true , enumerable: true } ,
		canEmit: { value: !! options.emit , writable: true , enumerable: true } ,
		canAck: { value: !! options.ack , writable: true , enumerable: true } ,
		canRpc: { value: !! options.rpc , writable: true , enumerable: true } ,
		destroyed: { value: false , writable: true , enumerable: true }
	} ) ;

	return self ;
} ;



// Destroy a service
LocalService.prototype.destroy = function() {
	Object.keys( this.events ).forEach( ( eventName ) => {
		this.emitter.off( eventName , this.events[ eventName ] ) ;
		delete this.events[ eventName ] ;
	} ) ;

	this.emitter = null ;
	this.destroyed = true ;
} ;



// Remote want to emit on the local service
LocalService.prototype.receiveEmit = function( message ) {
	if ( this.destroyed || ! this.canEmit || ( message.ack && ! this.canAck ) ) { return ; }

	var event = {
		emitter: this.emitter ,
		name: message.event ,
		args: message.args || []
	} ;

	if ( message.ack ) {
		event.callback = ( interruption ) => {

			this.proxy.send( {
				__type: MESSAGE_TYPE ,
				service: this.id ,
				method: 'ackEmit' ,
				ack: message.ack ,
				event: message.event ,
				interruption: interruption
			} ) ;
		} ;
	}

	NextGenEvents.emitEvent( event ) ;
} ;



// Remote want to listen to an event of the local service
LocalService.prototype.receiveListen = function( message ) {
	if ( this.destroyed || ! this.canListen || ( message.ack && ! this.canAck ) ) { return ; }

	if ( message.ack ) {
		if ( this.events[ message.event ] ) {
			if ( this.events[ message.event ].ack ) { return ; }

			// There is already an event, but not featuring ack, remove that listener now
			this.emitter.off( message.event , this.events[ message.event ] ) ;
		}

		this.events[ message.event ] = LocalService.forwardWithAck.bind( this ) ;
		this.events[ message.event ].ack = true ;
		this.emitter.on( message.event , this.events[ message.event ] , { eventObject: true , async: true } ) ;
	}
	else {
		if ( this.events[ message.event ] ) {
			if ( ! this.events[ message.event ].ack ) { return ; }

			// Remote want to downgrade:
			// there is already an event, but featuring ack so we remove that listener now
			this.emitter.off( message.event , this.events[ message.event ] ) ;
		}

		this.events[ message.event ] = LocalService.forward.bind( this ) ;
		this.events[ message.event ].ack = false ;
		this.emitter.on( message.event , this.events[ message.event ] , { eventObject: true } ) ;
	}
} ;



// Remote do not want to listen to that event of the local service anymore
LocalService.prototype.receiveIgnore = function( message ) {
	if ( this.destroyed || ! this.canListen ) { return ; }

	if ( ! this.events[ message.event ] ) { return ; }

	this.emitter.off( message.event , this.events[ message.event ] ) ;
	this.events[ message.event ] = null ;
} ;



//
LocalService.prototype.receiveAckEvent = function( message ) {
	if (
		this.destroyed || ! this.canListen || ! this.canAck || ! message.ack ||
		! this.events[ message.event ] || ! this.events[ message.event ].ack
	) {
		return ;
	}

	this.internalEvents.emit( 'ack' , message ) ;
} ;



// Send an event from the local service to remote
LocalService.forward = function( event ) {
	if ( this.destroyed ) { return ; }

	this.proxy.send( {
		__type: MESSAGE_TYPE ,
		service: this.id ,
		method: 'event' ,
		event: event.name ,
		args: event.args
	} ) ;
} ;

LocalService.forward.ack = false ;



// Send an event from the local service to remote, with ACK
LocalService.forwardWithAck = function( event , callback ) {
	if ( this.destroyed ) { return ; }

	if ( ! event.callback ) {
		// There is no emit callback, no need to ack this one
		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'event' ,
			event: event.name ,
			args: event.args
		} ) ;

		callback() ;
		return ;
	}

	var triggered = false ;
	var ackId = this.proxy.nextAckId ++ ;

	var onAck = ( message ) => {
		if ( triggered || message.ack !== ackId ) { return ; }	// Not our ack...
		//if ( message.event !== event ) { return ; }	// Do we care?
		triggered = true ;
		this.internalEvents.off( 'ack' , onAck ) ;
		callback() ;
	} ;

	this.internalEvents.on( 'ack' , onAck ) ;

	this.proxy.send( {
		__type: MESSAGE_TYPE ,
		service: this.id ,
		method: 'event' ,
		event: event.name ,
		ack: ackId ,
		args: event.args
	} ) ;
} ;

LocalService.forwardWithAck.ack = true ;



/* Remote Service */



function RemoteService( proxy , id ) { return RemoteService.create( proxy , id ) ; }
//RemoteService.prototype = Object.create( NextGenEvents.prototype ) ;
//RemoteService.prototype.constructor = RemoteService ;
Proxy.RemoteService = RemoteService ;



var EVENT_NO_ACK = 1 ;
var EVENT_ACK = 2 ;



RemoteService.create = function( proxy , id ) {
	var self = Object.create( RemoteService.prototype , {
		proxy: { value: proxy , enumerable: true } ,
		id: { value: id , enumerable: true } ,
		// This is the emitter where everything is routed to
		emitter: { value: Object.create( NextGenEvents.prototype ) , writable: true , enumerable: true } ,
		internalEvents: { value: Object.create( NextGenEvents.prototype ) , writable: true , enumerable: true } ,
		events: { value: {} , enumerable: true } ,
		destroyed: { value: false , writable: true , enumerable: true }

		/*	Useless for instance, unless some kind of service capabilities discovery mechanism exists
		canListen: { value: !! options.listen , writable: true , enumerable: true } ,
		canEmit: { value: !! options.emit , writable: true , enumerable: true } ,
		canAck: { value: !! options.ack , writable: true , enumerable: true } ,
		canRpc: { value: !! options.rpc , writable: true , enumerable: true } ,
		*/
	} ) ;

	return self ;
} ;



// Destroy a service
RemoteService.prototype.destroy = function() {
	this.emitter.removeAllListeners() ;
	this.emitter = null ;
	Object.keys( this.events ).forEach( ( eventName ) => { delete this.events[ eventName ] ; } ) ;
	this.destroyed = true ;
} ;



// Local code want to emit to remote service
RemoteService.prototype.emit = function( eventName , ... args ) {
	if ( this.destroyed ) { return ; }

	var callback , ackId , triggered ;

	if ( typeof eventName === 'number' ) { throw new TypeError( 'Cannot emit with a nice value on a remote service' ) ; }

	if ( typeof args[ args.length - 1 ] !== 'function' ) {
		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'emit' ,
			event: eventName ,
			args: args
		} ) ;

		return ;
	}

	callback = args.pop() ;
	ackId = this.proxy.nextAckId ++ ;
	triggered = false ;

	var onAck = ( message ) => {
		if ( triggered || message.ack !== ackId ) { return ; }	// Not our ack...
		//if ( message.event !== event ) { return ; }	// Do we care?
		triggered = true ;
		this.internalEvents.off( 'ack' , onAck ) ;
		callback( message.interruption ) ;
	} ;

	this.internalEvents.on( 'ack' , onAck ) ;

	this.proxy.send( {
		__type: MESSAGE_TYPE ,
		service: this.id ,
		method: 'emit' ,
		ack: ackId ,
		event: eventName ,
		args: args
	} ) ;
} ;



// Local code want to listen to an event of remote service
RemoteService.prototype.addListener = function( eventName , fn , options ) {
	if ( this.destroyed ) { return ; }

	// Manage arguments the same way NextGenEvents#addListener() does
	if ( typeof fn !== 'function' ) { options = fn ; fn = undefined ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }
	options.fn = fn || options.fn ;

	this.emitter.addListener( eventName , options ) ;

	// No event was added...
	if ( ! this.emitter.__ngev.listeners[ eventName ] || ! this.emitter.__ngev.listeners[ eventName ].length ) { return ; }

	// If the event is successfully listened to and was not remotely listened...
	if ( options.async && this.events[ eventName ] !== EVENT_ACK ) {
		// We need to listen to or upgrade this event
		this.events[ eventName ] = EVENT_ACK ;

		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'listen' ,
			ack: true ,
			event: eventName
		} ) ;
	}
	else if ( ! options.async && ! this.events[ eventName ] ) {
		// We need to listen to this event
		this.events[ eventName ] = EVENT_NO_ACK ;

		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'listen' ,
			event: eventName
		} ) ;
	}
} ;

RemoteService.prototype.on = RemoteService.prototype.addListener ;

// This is a shortcut to this.addListener()
RemoteService.prototype.once = NextGenEvents.prototype.once ;



// Local code want to ignore an event of remote service
RemoteService.prototype.removeListener = function( eventName , id ) {
	if ( this.destroyed ) { return ; }

	this.emitter.removeListener( eventName , id ) ;

	// If no more listener are locally tied to with event and the event was remotely listened...
	if (
		( ! this.emitter.__ngev.listeners[ eventName ] || ! this.emitter.__ngev.listeners[ eventName ].length ) &&
		this.events[ eventName ]
	) {
		this.events[ eventName ] = 0 ;

		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'ignore' ,
			event: eventName
		} ) ;
	}
} ;

RemoteService.prototype.off = RemoteService.prototype.removeListener ;



// A remote service sent an event we are listening to, emit on the service representing the remote
RemoteService.prototype.receiveEvent = function( message ) {
	if ( this.destroyed || ! this.events[ message.event ] ) { return ; }

	var event = {
		emitter: this.emitter ,
		name: message.event ,
		args: message.args || []
	} ;

	if ( message.ack ) {
		event.callback = () => {

			this.proxy.send( {
				__type: MESSAGE_TYPE ,
				service: this.id ,
				method: 'ackEvent' ,
				ack: message.ack ,
				event: message.event
			} ) ;
		} ;
	}

	NextGenEvents.emitEvent( event ) ;

	var eventName = event.name ;

	// Here we should catch if the event is still listened to ('once' type listeners)
	//if ( this.events[ eventName ]	) // not needed, already checked at the begining of the function
	if ( ! this.emitter.__ngev.listeners[ eventName ] || ! this.emitter.__ngev.listeners[ eventName ].length ) {
		this.events[ eventName ] = 0 ;

		this.proxy.send( {
			__type: MESSAGE_TYPE ,
			service: this.id ,
			method: 'ignore' ,
			event: eventName
		} ) ;
	}
} ;



//
RemoteService.prototype.receiveAckEmit = function( message ) {
	if ( this.destroyed || ! message.ack || this.events[ message.event ] !== EVENT_ACK ) {
		return ;
	}

	this.internalEvents.emit( 'ack' , message ) ;
} ;



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	This module try to stay close to the original GPM lib written in C.
*/



var net = __webpack_require__( 82 ) ;
var NextGenEvents = __webpack_require__( 6 ) ;
var termkit = __webpack_require__( 5 ) ;

var gpm = {} ;
module.exports = gpm ;





/* GPM structures & constants */
/* as found in the GPM source code: src/headers/gpm.h */



// Can't figure out the usage of the GPM_MAGIC constant ATM
var gpmMagic = Buffer.allocUnsafe( 4 ) ;
gpmMagic.writeUInt32LE( 0x47706D4C , 0 ) ;



// Return a Buffer containing a Gpm_Connect structure, using a pid and a ttyIndex
gpm.connectStructureBuffer = function connectStructureBuffer( gpmConnect ) {
	var buffer = Buffer.allocUnsafe( 16 ) ;

	if ( gpmConnect.eventMask === undefined ) { gpmConnect.eventMask = 65535 ; }
	if ( gpmConnect.defaultMask === undefined ) { gpmConnect.defaultMask = 0 ; }
	if ( gpmConnect.minMod === undefined ) { gpmConnect.minMod = 0 ; }
	if ( gpmConnect.maxMod === undefined ) { gpmConnect.maxMod = 65535 ; }

	//Looks like it want Little Endian
	buffer.writeUInt16LE( gpmConnect.eventMask , 0 ) ;	// eventMask: wanted events
	buffer.writeUInt16LE( gpmConnect.defaultMask , 2 ) ;	// defaultMask: things handled by default
	buffer.writeUInt16LE( gpmConnect.minMod , 4 ) ;	// minMod: want everything (modifier keys)
	buffer.writeUInt16LE( gpmConnect.maxMod , 6 ) ;	// maxMod: all modifiers keys included
	buffer.writeUInt32LE( gpmConnect.pid , 8 ) ;	// pid
	buffer.writeUInt32LE( gpmConnect.vc , 12 ) ;	// vc: the TTY index

	//console.log( buffer ) ;

	return buffer ;
} ;



// Extract a Gpm_Event from a Buffer
gpm.eventStructure = function eventStructure( buffer ) {
	var event = {} ;

	//Looks like it is in Little Endian
	event.buttons = buffer.readUInt8( 0 ) ;
	event.modifiers = buffer.readUInt8( 1 ) ;

	event.vc = buffer.readUInt16LE( 2 ) ;

	event.dx = buffer.readInt16LE( 4 ) ;
	event.dy = buffer.readInt16LE( 6 ) ;
	event.x = buffer.readInt16LE( 8 ) ;
	event.y = buffer.readInt16LE( 10 ) ;

	event.eType = buffer.readUInt32LE( 12 ) ;

	event.clicks = buffer.readUInt32LE( 16 ) ;

	event.margin = buffer.readUInt32LE( 20 ) ;

	event.wdx = buffer.readInt16LE( 24 ) ;
	event.wdy = buffer.readInt16LE( 26 ) ;

	//console.log( event ) ;

	return event ;
} ;



//enum Gpm_Etype (comments are copy-paste of gpm.h)

gpm.MOVE = 1 ;
gpm.DRAG = 2 ;	// exactly one of the bare ones is active at a time
gpm.DOWN = 4 ;
gpm.UP = 8 ;

gpm.SINGLE = 16 ;	// at most one in three is set
gpm.DOUBLE = 32 ;
gpm.TRIPLE = 64 ;	// WARNING: I depend on the values

gpm.MFLAG = 128 ;	// motion during click?
gpm.HARD = 256 ;	// if set in the defaultMask, force an already used event to pass over to another handler

gpm.ENTER = 512 ;	// enter event, user in Roi's (Region Of Interest)
gpm.LEAVE = 1024 ;	// leave event, used in Roi's



//enum Gpm_Margin

gpm.TOP = 1 ;
gpm.BOT = 2 ;
gpm.LFT = 4 ;
gpm.RGT = 8 ;





/* GPM event handler */



gpm.Handler = function Handler() { throw new Error( '[terminal] Cannot create a gpm.Handler object directly, use gpm.createHandler() instead' ) ; } ;
gpm.Handler.prototype = Object.create( NextGenEvents.prototype ) ;
gpm.Handler.prototype.constructor = gpm.Handler ;



// Create a new GPM Handler
gpm.createHandler = function createHandler( options ) {
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( options.raw === undefined ) { options.raw = true ; }
	if ( options.stdin === undefined ) { options.stdin = 0 ; /*process.stdin ;*/ }
	if ( options.mode === undefined ) { options.mode = 'motion' ; }

	var connectMode = { pid: process.pid } ;

	connectMode.defaultMask =
		gpm.MOVE | gpm.DRAG | gpm.DOWN | gpm.UP | gpm.SINGLE | gpm.DOUBLE | gpm.TRIPLE | gpm.MFLAG | gpm.HARD ;

	switch ( options.mode ) {
		case 'button' :
			connectMode.eventMask = gpm.DOWN | gpm.UP ;
			break ;
		case 'drag' :
			connectMode.eventMask = gpm.DRAG | gpm.DOWN | gpm.UP ;
			break ;
		case 'motion' :
		default :
			connectMode.eventMask = gpm.MOVE | gpm.DRAG | gpm.DOWN | gpm.UP ;
			break ;
	}

	var handler = Object.create( gpm.Handler.prototype ) ;


	var tty = termkit.tty.getPath( options.stdin ) ;

	//if ( ! tty.index ) { handler.emit( 'error' , new Error( 'Not a TTY' ) ) ; return ; }

	//console.log( 'TTY:' , tty.index ) ;
	connectMode.vc = tty.index || 0 ;

	handler.socket = new net.Socket() ;
	var gpmConnect = gpm.connectStructureBuffer( connectMode ) ;

	handler.socket.connect( '/dev/gpmctl' , () => {
		//console.log( 'Connected' ) ;
		handler.socket.write( gpmConnect ) ;
	} ) ;

	// Re-emit event
	handler.socket.on( 'error' , ( error ) => { handler.emit( 'error' , error ) ; handler.close() ; } ) ;
	handler.socket.on( 'end' , () => { handler.emit( 'end' ) ; } ) ;
	handler.socket.on( 'close' , () => { handler.emit( 'close' ) ; handler.close() ; } ) ;

	handler.socket.on( 'data' , ( buffer ) => {

		//console.log( 'data' , buffer.length , buffer , '\n' , eventStructure( buffer ) ) ;
		var rawEvent = gpm.eventStructure( buffer ) ;

		if ( options.raw ) { handler.emit( 'mouse' , rawEvent ) ; return ; }

		var terminalKitEvent = gpm.raw2terminalKitEvent( rawEvent ) ;
		handler.emit( 'mouse' , terminalKitEvent[ 0 ] , terminalKitEvent[ 1 ] ) ;
	} ) ;

	return handler ;
} ;



// End/Close the underlying connection
gpm.Handler.prototype.close = function handlerClose() {
	if ( this.socket ) {
		this.socket.destroy() ;
		this.socket = undefined ;
	}
} ;



// Transform raw GPM event to terminal-kit event
gpm.raw2terminalKitEvent = function raw2terminalKitEvent( event ) {
	var name ;

	var terminalKitEvent = {
		shift: !! ( event.modifiers & 1 ) ,
		//altGr: event.modifiers & 2 ? true : false ,	// terminal-kit do not use altGr
		ctrl: !! ( event.modifiers & 4 ) ,
		alt: !! ( event.modifiers & 8 ) ,
		x: event.x ,
		y: event.y
	} ;

	if ( event.eType & gpm.DOWN ) {
		name = 'MOUSE_LEFT_BUTTON_PRESSED' ;
	}
	else if ( event.eType & gpm.UP ) {
		name = 'MOUSE_LEFT_BUTTON_RELEASED' ;
	}
	else if ( event.eType & gpm.MOVE || event.eType & gpm.DRAG ) {
		name = 'MOUSE_MOTION' ;
	}
	else {
		name = 'MOUSE_UNKNOWN' ;
	}

	return [ name , terminalKitEvent ] ;
} ;




/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var Promise = __webpack_require__( 1 ) ;



/*
	yesOrNo( [yes] , [no] , callback )
		* options `Object`
			* yes `string` or `Array` contains a key code or an array of key code that will trigger the yes
			* no `string` or `Array` contains a key code or an array of key code that will trigger the no
			* echoYes `string` if defined this will be what will be outputed in case of yes
			* echoNo `string` if defined this will be what will be outputed in case of no
		* callback( error , result )
			* result: true for 'yes' or false for 'no'
*/
module.exports = function yesOrNo( options , callback ) {
	if ( typeof options === 'function' ) { callback = options ; options = undefined ; }

	if ( ! options || typeof options !== 'object' ) {
		options = {
			yes: [ 'y' , 'Y' ] ,
			no: [ 'n' , 'N' ] ,
			echoYes: 'yes' ,
			echoNo: 'no'
		} ;
	}

	if ( typeof options.yes === 'string' ) { options.yes = [ options.yes ] ; }
	if ( ! Array.isArray( options.yes ) ) { options.yes = [ 'y' , 'Y' ] ; }

	if ( typeof options.no === 'string' ) { options.no = [ options.no ] ; }
	if ( ! Array.isArray( options.no ) ) { options.no = [ 'n' , 'N' ] ; }

	if ( ! this.grabbing ) { this.grabInput() ; }

	var onKey = key => {
		if ( options.yes.indexOf( key ) !== -1 ) {
			if ( options.echoYes ) { this( options.echoYes ) ; }
			this.removeListener( 'key' , onKey ) ;

			if ( callback ) { callback( undefined , true ) ; }
			else { controller.promise.resolve( true ) ; }
		}
		else if ( options.no.indexOf( key ) !== -1 ) {
			if ( options.echoNo ) { this( options.echoNo ) ; }
			this.removeListener( 'key' , onKey ) ;

			if ( callback ) { callback( undefined , false ) ; }
			else { controller.promise.resolve( false ) ; }
		}
	} ;

	this.on( 'key' , onKey ) ;

	var controller = {} ; //Object.create( NextGenEvents.prototype ) ;

	// Stop everything and do not even call the callback
	controller.abort = () => {
		this.removeListener( 'key' , onKey ) ;
	} ;

	controller.promise = new Promise() ;

	return controller ;
} ;



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const NextGenEvents = __webpack_require__( 6 ) ;
const Promise = __webpack_require__( 1 ) ;
const string = __webpack_require__( 4 ) ;
const autoComplete = __webpack_require__( 40 ) ;



const defaultKeyBindings = {
	ENTER: 'submit' ,
	KP_ENTER: 'submit' ,
	ESCAPE: 'cancel' ,
	BACKSPACE: 'backDelete' ,
	DELETE: 'delete' ,
	LEFT: 'backward' ,
	RIGHT: 'forward' ,
	UP: 'historyPrevious' ,
	DOWN: 'historyNext' ,
	HOME: 'startOfInput' ,
	END: 'endOfInput' ,
	TAB: 'autoComplete' ,
	CTRL_R: 'autoCompleteUsingHistory' ,
	CTRL_LEFT: 'previousWord' ,
	CTRL_RIGHT: 'nextWord' ,
	ALT_D: 'deleteNextWord' ,
	CTRL_W: 'deletePreviousWord' ,
	CTRL_U: 'deleteAllBefore' ,
	CTRL_K: 'deleteAllAfter'
} ;



const defaultTokenRegExp = /\S+/g ;



/*
	inputField( [options] , callback )
		* options `Object` where:
			* y `number` the line where the input field will start (default to the current cursor location)
			* x `number` the column where the input field will start (default to the current cursor location,
			  or 1 if the *y* option is defined)
			* echo `boolean` if true (the default), input are displayed on the terminal
			* echoChar `string` or `true` if set, all characters are replaced by this one (useful for password fields),
			  if true, it is replaced by a dot: •
			* default `string` default input/placeholder
			* cursorPosition `integer` (default: -1, end of input) set the cursor position/offset in the input,
			  negative value starts from the end
			* cancelable `boolean` if true (default: false), it is cancelable by user using the cancel key (default: ESC),
			  thus will return undefined
			* style `Function` style used, default to the terminal instance (no style)
			* hintStyle `Function` style used for hint (auto-completion preview), default to `terminal.brightBlack` (gray)
			* maxLength `number` maximum length of the input
			* minLength `number` minimum length of the input
			* history `Array` (optional) an history array, so UP and DOWN keys move up and down in the history
			* autoComplete `Array` or `Function( inputString , [callback] )` (optional) an array of possible completion,
			  so the TAB key will auto-complete the input field. If it is a function, it should accept an input `string`
			  and return the completed `string` (if no completion can be done, it should return the input string,
			  if multiple candidate are possible, it should return an array of string), if **the function accepts 2 arguments**
			  (checked using *function*.length), then **the auto-completer will be asynchronous**!
			  If it does not accept a callback but returns a *thenable* (Promise-like), it will be asynchronous too.
				/!\ Also, if autoCompleteMenu is set and the array contains a special property 'prefix', it will be prepended
				after autoCompleteMenu()!
			* autoCompleteMenu `boolean` or `Object` of options, used in conjunction with the 'autoComplete' options, if *truthy*
			  any auto-complete attempt having many completion candidates will display a menu to let the user choose between each
			  possibilities. If an object is given, it should contain options for the [.singleLineMenu()](#ref.singleLineMenu)
			  that is used for the completion (notice: some options are overwritten: 'y' and 'exitOnUnexpectedKey')
			* autoCompleteHint `boolean` if true (default: false) use the hintStyle to write the auto-completion preview
			  at the right of the input
			* keyBindings `Object` overide default key bindings
			* tokenHook `Function( token , isEndOfInput , previousTokens , term , config )` this is a hook called for each
			  token of the input, where:
				* token `String` is the current token
				* isEndOfInput `boolean` true if this is the **last token and if it ends the input string**
				  (e.g. it is possible for the last token to be followed by some blank char, in that case *isEndOfInput*
				  would be false)
				* previousTokens `Array` of `String` is a array containing all tokens before the current one
				* term is a Terminal instance
				* config `Object` is an object containing dynamic settings that can be altered by the hook, where:
					* style `Function` style in use (see the *style* option)
					* hintStyle `Function` style in use for hint (see the *hintStyle* option)
					* tokenRegExp `RegExp` the regexp in use for tokenization (see the *tokenRegExp* option)
					* autoComplete `Array` or `Function( inputString , [callback] )` (see the *autoComplete* option)
					* autoCompleteMenu `boolean` or `Object` (see the *autoCompleteMenu* option)
					* autoCompleteHint `boolean` enable/disable the auto-completion preview (see the *autoCompleteHint* option)
			  The config settings are always reset on new input, on new tokenization pass.
			  The hook can return a *style* (`Function`, like the *style* option) that will be used to print that token.
			  Used together, this can achieve syntax hilighting, as well as dynamic behavior suitable for a shell.
			  Finally, it can return a string, styled or not, that will be displayed in place of that token,
			  useful if the token should have multiple styles (but that string **MUST** contains the same number of
			  printable character, or it would lead hazardous behavior).
			* tokenResetHook `Function( term , config )` this is a hook called before the first token
			* tokenRegExp `RegExp` this is the regex used to tokenize the input, by default a token is space-delimited,
			  so "one two three" would be tokenized as [ "one" , "two" , "three" ].
		* callback( error , input )
			* error `mixed` truthy if an underlying error occurs
			* input `string` the user input
*/
module.exports = function inputField( options , callback ) {
	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( options.echo === undefined ) { options.echo = true ; }

	if ( typeof options.maxLength !== 'number' ) { options.maxLength = Infinity ; }
	if ( typeof options.minLength !== 'number' ) { options.minLength = 0 ; }

	if ( options.echoChar && typeof options.echoChar !== 'string' ) { options.echoChar = '•' ; }

	if ( options.autoCompleteMenu ) {
		if ( typeof options.autoCompleteMenu !== 'object' ) { options.autoCompleteMenu = {} ; }
		options.autoCompleteMenu.exitOnUnexpectedKey = true ;
		delete options.autoCompleteMenu.y ;
	}

	var keyBindings = options.keyBindings || defaultKeyBindings ;

	if ( options.tokenRegExp && ( ! ( options.tokenRegExp instanceof RegExp ) || ! options.tokenRegExp.flags.includes( 'g' ) ) ) {
		throw new Error( ".inputField(): if set, the 'tokenRegExp' option should be a RegExp with the 'g' flag" ) ;
	}

	if ( ! this.grabbing ) { this.grabInput() ; }



	var controller , finished = false , paused = false , alreadyCleanedUp = false ,
		offset = options.cursorPosition !== undefined ? options.cursorPosition : -1 ,
		echo = !! options.echo ,
		start = {} , end = {} , cursor = {} , endHint = {} ,
		inputs = [] , inputIndex ,
		alwaysRedraw = options.tokenHook || options.autoCompleteHint ,
		hint = [] , meta = false ;

	var dynamic = {
		style: options.style || this ,
		hintStyle: options.hintStyle || this.brightBlack ,
		tokenRegExp: options.tokenRegExp || defaultTokenRegExp ,
		autoComplete: options.autoComplete ,
		autoCompleteMenu: options.autoCompleteMenu ,
		autoCompleteHint: !! options.autoCompleteHint
	} ;



	// Now inputs is an array of input, input being an array of char (thanks to JS using UCS-2 instead of UTF-8)

	if ( Array.isArray( options.history ) ) {
		inputs = options.history.map( str => string.unicode.toArray( str ).slice( 0 , options.maxLength ) ) ;
	}


	if ( options.default && typeof options.default === 'string' ) {
		inputs.push( string.unicode.toArray( options.default ).slice( 0 , options.maxLength ) ) ;
	}
	else {
		inputs.push( [] ) ;
	}



	var init = () => {
		inputIndex = inputs.length - 1 ;
		offset = boundOffset( offset ) ;

		if ( options.y !== undefined ) {
			options.x = options.x || 1 ;
			this.moveTo.eraseLineAfter( options.x , options.y ) ;
			finishInit( options.x , options.y ) ;
		}
		else {
			// Get the cursor location before getting started
			this.getCursorLocation( ( error , x , y ) => {
				if ( error ) {
					// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
					// So we just move to the last line, create a new line, and add a little prompt (it would be misleading otherwise).
					//cleanup( error ) ; return ;
					this.row.eraseLineAfter( this.height )( '\n> ' ) ;
					x = 3 ;
					y = this.height ;
				}

				finishInit( x , y ) ;
			} ) ;
		}
	} ;



	var finishInit = ( x , y ) => {
		start.x = end.x = cursor.x = x ;
		start.y = end.y = cursor.y = y ;

		if ( inputs[ inputIndex ].length ) {
			// There is already something (placeholder, ...), so redraw now!
			computeAllCoordinate() ;
			redraw() ;
		}

		this.on( 'key' , onKey ) ;
		//controller.ready = true ;
		controller.emit( 'ready' ) ;
	} ;



	var cleanup = ( error , input ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		finished = true ;
		this.removeListener( 'key' , onKey ) ;

		if ( error === 'abort' ) { return ; }

		this.styleReset() ;

		if ( error ) {
			if ( callback ) { callback( error ) ; }
			else { controller.promise.reject( error ) ; }
			return ;
		}

		var value ;

		if ( typeof input === 'string' ) { value = input ; }
		else if ( input ) { value = input.join( '' ) ; }

		if ( callback ) { callback( undefined , value ) ; }
		else { controller.promise.resolve( value ) ; }
	} ;



	// Compute the coordinate of the cursor and end of a string, given a start coordinate
	var computeAllCoordinate = () => {
		var scroll ,
			inputWidth = string.unicode.arrayWidth( inputs[ inputIndex ] ) ,
			hintWidth = string.unicode.arrayWidth( hint ) ;

		end = offsetCoordinate( inputWidth ) ;
		endHint = offsetCoordinate( inputWidth + hintWidth ) ;

		if ( endHint.y > this.height ) {
			// We have gone out of the screen, scroll!
			scroll = endHint.y - this.height ;

			dynamic.style.noFormat( '\n'.repeat( scroll ) ) ;

			start.y -= scroll ;
			end.y -= scroll ;
			endHint.y -= scroll ;
		}

		cursorCoordinate() ;
	} ;



	// Cursor coordinate from the current offset
	var cursorCoordinate = () => {
		cursor = offsetCoordinate( string.unicode.arrayWidth( inputs[ inputIndex ] , offset ) ) ;
	} ;



	// Compute the coordinate of an offset, given a start coordinate
	var offsetCoordinate = offset_ => {
		return {
			x: 1 + ( start.x + offset_ - 1 ) % this.width ,
			y: start.y + Math.floor( ( start.x + offset_ - 1 ) / this.width )
		} ;
	} ;



	var boundOffset = offset_ => {
		if ( typeof offset_ !== 'number' || isNaN( offset_ ) ) { return inputs[ inputIndex ].length ; }

		if ( offset_ < 0 ) { offset_ = inputs[ inputIndex ].length + 1 + offset_ ; }

		if ( offset_ < 0 ) { offset_ = 0 ; }
		else if ( offset_ >= inputs[ inputIndex ].length ) { offset_ = inputs[ inputIndex ].length ; }

		return offset_ ;
	} ;



	// Compute the coordinate of the end of a string, given a start coordinate
	var redraw = ( extraLines , forceClear ) => {
		var i , hintCleared ;

		extraLines = extraLines || 0 ;

		if ( ! dynamic.autoCompleteHint && forceClear ) {
			// Used by history, when autoCompleteHint is off, the current line is not erased
			this.moveTo( end.x , end.y ) ;
			dynamic.style.noFormat.eraseLineAfter( '' ) ;
		}

		this.moveTo( start.x , start.y ) ;

		if ( options.tokenHook ) { writeTokens( inputs[ inputIndex ].join( '' ) ) ; }
		else if ( options.echoChar ) { dynamic.style.noFormat( options.echoChar.repeat( inputs[ inputIndex ].length ) ) ; }
		else { dynamic.style.noFormat( inputs[ inputIndex ].join( '' ) ) ; }

		hintCleared = clearHint() ;

		if ( extraLines > 0 ) {
			// If the previous input was using more lines, erase them now
			for ( i = 1 ; i <= extraLines ; i ++ ) {
				this.moveTo( 1 , end.y + i ) ;
				dynamic.style.noFormat.eraseLineAfter( '' ) ;
			}
		}

		if ( ! hintCleared && ( cursor.y < end.y || end.x === this.width ) ) {
			this.moveTo( end.x , end.y ) ;
			dynamic.style.noFormat.eraseLineAfter( '' ) ;
		}

		this.moveTo( cursor.x , cursor.y ) ;
	} ;



	// Not used internally for instance, only for controller.redrawCursor()
	var redrawCursor = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , redrawCursor ) ; return ; }
		this.moveTo( cursor.x , cursor.y ) ;
	} ;



	var pause = () => {
		if ( paused ) { return ; }
		paused = true ;

		// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
		//if ( controller.hasState( 'ready' ) ) { redraw() ; }
	} ;



	var resume = () => {
		if ( ! paused ) { return ; }
		paused = false ;

		// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
		if ( controller.hasState( 'ready' ) ) { redraw() ; }
	} ;



	var clearHint = () => {
		// First, check if there are some hints to be cleared
		if ( ! dynamic.autoCompleteHint ) { return false ; }

		var y = end.y ;

		this.moveTo( end.x , end.y ) ;
		dynamic.style.noFormat.eraseLineAfter( '' ) ;

		// If the previous input was using more lines, erase them now
		while ( y < endHint.y ) {
			y ++ ;
			this.moveTo( 1 , y ) ;
			dynamic.style.noFormat.eraseLineAfter( '' ) ;
		}

		this.moveTo( cursor.x , cursor.y ) ;

		return true ;
	} ;



	// Compute the coordinate of the end of a string, given a start coordinate
	var autoCompleteMenu = ( menu ) => {
		paused = true ;

		this.singleLineMenu( menu , dynamic.autoCompleteMenu , ( error , response ) => {
			// Unpause unconditionnally
			paused = false ;
			if ( error ) { return ; }

			if ( response.selectedText ) {
				// Prepend something before the text
				if ( menu.prefix ) { response.selectedText = menu.prefix + response.selectedText ; }

				// Append something after the text
				if ( menu.postfix ) { response.selectedText += menu.postfix ; }

				response.selectedText = string.unicode.toArray( response.selectedText ).slice( 0 , options.maxLength ) ;

				inputs[ inputIndex ] = response.selectedText.concat(
					inputs[ inputIndex ].slice( offset , options.maxLength + offset - response.selectedText.length )
				) ;

				offset = response.selectedText.length ;
			}

			if ( echo ) {
				// Erase the menu
				this.column.eraseLineAfter( 1 ) ;

				// If the input field was ending on the last line, we need to move it one line up
				if ( end.y >= this.height && start.y > 1 ) { start.y -- ; }

				computeAllCoordinate() ;
				redraw() ;
				this.moveTo( cursor.x , cursor.y ) ;
			}

			if ( response.unexpectedKey && response.unexpectedKey !== 'TAB' ) {
				// Forward the key to the event handler
				onKey( response.unexpectedKey , undefined , response.unexpectedKeyData ) ;
			}
		} )
			.on( 'highlight' , eventData => controller.emit( 'highlight' ,  eventData ) ) ;
	} ;



	var writeTokens = ( text ) => {
		var match , lastIndex , lastEndIndex = 0 , tokens = [] , tokenStyle , isEndOfInput ;

		// Reset dynamic stuffs
		dynamic.style = options.style || this ;
		dynamic.hintStyle = options.hintStyle || this.brightBlack ;
		dynamic.tokenRegExp = options.tokenRegExp || defaultTokenRegExp ;
		dynamic.autoComplete = options.autoComplete ;
		dynamic.autoCompleteMenu = options.autoCompleteMenu ;
		dynamic.autoCompleteHint = !! options.autoCompleteHint ;

		dynamic.tokenRegExp.lastIndex = 0 ;

		if ( options.tokenResetHook ) { options.tokenResetHook( this , dynamic ) ; }

		while ( ( match = dynamic.tokenRegExp.exec( text ) ) !== null ) {
			// Back-up that now, since it can be modified by the hook
			lastIndex = dynamic.tokenRegExp.lastIndex ;

			if ( match.index > lastEndIndex ) { dynamic.style.noFormat( text.slice( lastEndIndex , match.index ) ) ; }

			isEndOfInput = match.index + match[ 0 ].length === text.length ;

			tokenStyle = options.tokenHook( match[ 0 ] , isEndOfInput , tokens , this , dynamic ) ;

			if ( typeof tokenStyle === 'function' ) { tokenStyle.noFormat( match[ 0 ] ) ; }
			else if ( typeof tokenStyle === 'string' ) { this.noFormat( tokenStyle ) ; }
			else { dynamic.style.noFormat( match[ 0 ] ) ; }

			tokens.push( match[ 0 ] ) ;

			lastEndIndex = match.index + match[ 0 ].length ;

			// Restore it, if it was modified
			dynamic.tokenRegExp.lastIndex = lastIndex ;
		}

		if ( lastEndIndex < text.length ) { dynamic.style.noFormat( text.slice( lastEndIndex ) ) ; }
	} ;



	var autoCompleteHint = () => {
		// The cursor should be at the end ATM
		if ( ! dynamic.autoComplete || ! dynamic.autoCompleteHint || offset < inputs[ inputIndex ].length ) {
			return ;
		}

		var autoCompleted , inputText = inputs[ inputIndex ].join( '' ) ;

		var finishCompletion = () => {
			if ( Array.isArray( autoCompleted ) ) { return ; }

			hint = string.unicode.toArray( autoCompleted.slice( inputText.length ) )
				.slice( 0 , options.maxLength - inputs[ inputIndex ].length ) ;

			computeAllCoordinate() ;
			this.moveTo( end.x , end.y ) ;	// computeAllCoordinate() can add some newline
			dynamic.hintStyle.noFormat( hint.join( '' ) ) ;
			this.moveTo( cursor.x , cursor.y ) ;
		} ;

		if ( Array.isArray( dynamic.autoComplete ) ) {
			autoCompleted = autoComplete( dynamic.autoComplete , inputText , dynamic.autoCompleteMenu ) ;
		}
		else if ( typeof dynamic.autoComplete === 'function' ) {
			if ( dynamic.autoComplete.length === 2 ) {
				dynamic.autoComplete( inputText , ( error , autoCompleted_ ) => {
					if ( error ) { cleanup( error ) ; return ; }

					autoCompleted = autoCompleted_ ;
					finishCompletion() ;
				} ) ;
				return ;
			}

			autoCompleted = dynamic.autoComplete( inputText ) ;

			if ( Promise.isThenable( autoCompleted ) ) {
				autoCompleted.then(
					autoCompleted_ => {
						autoCompleted = autoCompleted_ ;
						finishCompletion() ;
					} ,
					error => { cleanup( error ) ; }
				) ;
				return ;
			}
		}

		finishCompletion() ;
	} ;



	// The main method: the key event handler
	var onKey = ( key , trash , data ) => {

		if ( finished || paused ) { return ; }

		var leftPart , autoCompleteUsed , autoCompleted , extraLines , charToDelete , cutOffset , altKey ,
			lastOffset = offset ;

		// if previous keystroke triggered the 'meta' keybinding, prepend ALT_ to this key
		if ( meta ) {
			meta = false ;
			altKey = 'ALT_' + key.toUpperCase() ;

			if ( data ) { data.isCharacter = false ; }
			if ( keyBindings[ altKey ] ) { key = altKey ; }
		}

		if ( data && data.isCharacter ) {
			// if data.isCharacter, this is a regular UTF-8 character, not a special key

			if ( inputs[ inputIndex ].length >= options.maxLength ) { return ; }

			// Insert version
			//inputs[ inputIndex ] = inputs[ inputIndex ].slice( 0 , offset ) + key + inputs[ inputIndex ].slice( offset ) ;
			inputs[ inputIndex ].splice( offset , 0 , key ) ;
			offset ++ ;

			if ( echo ) {
				if ( offset === inputs[ inputIndex ].length && ! alwaysRedraw ) {
					dynamic.style.noFormat( options.echoChar || key ) ;
					// Now it's done by computeAllCoordinate()
					//if ( cursor.x >= this.width ) { dynamic.style.noFormat( '\n' ) ; }
					computeAllCoordinate() ;
				}
				else {
					// redraw() is mandatory in insert mode
					computeAllCoordinate() ;
					redraw() ;
					if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
				}
			}
		}
		else {
			// Here we have a special key

			switch( keyBindings[ key ] ) {
				case 'submit' :
					if ( inputs[ inputIndex ].length < options.minLength ) { break ; }
					clearHint() ;
					cleanup( undefined , inputs[ inputIndex ] ) ;
					break ;

				case 'cancel' :
					if ( options.cancelable ) { cleanup() ; }
					break ;

				case 'meta' :
					meta = true ;
					break ;

				case 'backDelete' :
					if ( inputs[ inputIndex ].length && offset > 0 ) {
						charToDelete = inputs[ inputIndex ][ offset - 1 ] ;
						inputs[ inputIndex ].splice( offset - 1 , 1 ) ;
						offset -- ;

						if ( echo ) {
							// The cursor position check should happen BEFORE we modify it with computeAllCoordinate()
							if ( cursor.y < end.y || cursor.x === 1 || alwaysRedraw ) {
								computeAllCoordinate() ;
								// Every time something is deleted, we need a redraw with the forceClear option on
								redraw( undefined , true ) ;
								if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
							}
							else {
								computeAllCoordinate() ;

								// .backDelete() does not work with full-width, Terminal Kit should stop using it until a reliable escape sequence combo is found
								//this.backDelete() ;
								if ( string.unicode.isFullWidth( charToDelete ) ) {
									this.left( 2 ) ;
									this.delete( 2 ) ;
								}
								else {
									this.left( 1 ) ;
									this.delete( 1 ) ;
								}
							}
						}
					}
					break ;

				case 'delete' :
					if ( inputs[ inputIndex ].length && offset < inputs[ inputIndex ].length ) {
						charToDelete = inputs[ inputIndex ][ offset ] ;
						inputs[ inputIndex ].splice( offset , 1 ) ;

						if ( echo ) {
							// The cursor position check should happen BEFORE we modify it with computeAllCoordinate()
							if ( cursor.y < end.y || alwaysRedraw ) {
								computeAllCoordinate() ;
								// Every time something is deleted, we need a redraw with the forceClear option on
								redraw( undefined , true ) ;
								if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
							}
							else {
								computeAllCoordinate() ;
								this.delete( string.unicode.isFullWidth( charToDelete ) ? 2 : 1 ) ;
							}
						}
					}
					break ;

				case 'deleteAllBefore' :
					if ( inputs[ inputIndex ].length && offset > 0 ) {
						//inputs[ inputIndex ] = inputs[ inputIndex ].slice( 0 , offset - 1 ) + inputs[ inputIndex ].slice( offset ) ;
						inputs[ inputIndex ].splice( 0 , offset ) ;
						offset = 0 ;

						if ( echo ) {
							computeAllCoordinate() ;
							// Need forceClear
							redraw( undefined , true ) ;
						}
					}
					break ;

				case 'deleteAllAfter' :
					if ( inputs[ inputIndex ].length && offset < inputs[ inputIndex ].length ) {
						inputs[ inputIndex ].splice( offset , inputs[ inputIndex ].length - offset ) ;

						if ( echo ) {
							computeAllCoordinate() ;
							// Need forceClear
							redraw( undefined , true ) ;
							if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
						}
					}
					break ;

				case 'backward' :
					if ( inputs[ inputIndex ].length && offset > 0 ) {
						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							clearHint() ;
						}

						offset -- ;

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
						}
					}
					break ;

				case 'forward' :
					if ( inputs[ inputIndex ].length && offset < inputs[ inputIndex ].length ) {
						offset ++ ;

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
						}

						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							autoCompleteHint() ;
						}
					}

					break ;

				case 'deletePreviousWord' :
					if ( inputs[ inputIndex ].length && offset > 0 ) {
						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							clearHint() ;
						}

						cutOffset = offset -- ;

						while ( offset > 0 && inputs[ inputIndex ][ offset ] === ' ' ) { offset -- ; }
						while ( offset > 0 && inputs[ inputIndex ][ offset - 1 ] !== ' ' ) { offset -- ; }

						inputs[ inputIndex ].splice( offset , cutOffset - offset ) ;

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
							redraw( undefined , true ) ;
						}
					}
					break ;

				case 'deleteNextWord' :
					if ( inputs[ inputIndex ].length && offset < inputs[ inputIndex ].length ) {
						cutOffset = offset ;

						while ( offset < inputs[ inputIndex ].length && inputs[ inputIndex ][ offset ] === ' ' ) { offset ++ ; }
						while ( offset < inputs[ inputIndex ].length && inputs[ inputIndex ][ offset ] !== ' ' ) { offset ++ ; }
						while ( offset < inputs[ inputIndex ].length && inputs[ inputIndex ][ offset ] === ' ' ) { offset ++ ; }

						inputs[ inputIndex ].splice( cutOffset , offset - cutOffset ) ;
						offset = Math.min( inputs[ inputIndex ].length , cutOffset ) ;

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
							redraw( undefined , true ) ;
						}

						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							autoCompleteHint() ;
						}
					}
					break ;

				case 'previousWord' :
					if ( inputs[ inputIndex ].length && offset > 0 ) {
						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							clearHint() ;
						}

						offset -- ;

						while ( offset > 0 && inputs[ inputIndex ][ offset ] === ' ' ) { offset -- ; }
						while ( offset > 0 && inputs[ inputIndex ][ offset - 1 ] !== ' ' ) { offset -- ; }

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
						}
					}
					break ;

				case 'nextWord' :
					if ( inputs[ inputIndex ].length && offset < inputs[ inputIndex ].length ) {
						while ( offset < inputs[ inputIndex ].length && inputs[ inputIndex ][ offset ] === ' ' ) { offset ++ ; }
						while ( offset < inputs[ inputIndex ].length && inputs[ inputIndex ][ offset ] !== ' ' ) { offset ++ ; }

						if ( echo ) {
							computeAllCoordinate() ;
							this.moveTo( cursor.x , cursor.y ) ;
						}

						if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
							autoCompleteHint() ;
						}
					}

					break ;

				case 'startOfInput' :
					if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
						clearHint() ;
					}

					offset = 0 ;

					if ( echo ) {
						computeAllCoordinate() ;
						this.moveTo( cursor.x , cursor.y ) ;
					}
					break ;

				case 'endOfInput' :
					offset = inputs[ inputIndex ].length ;

					if ( echo ) {
						computeAllCoordinate() ;
						this.moveTo( cursor.x , cursor.y ) ;
					}

					if ( dynamic.autoCompleteHint && lastOffset !== inputs[ inputIndex ].length ) {
						autoCompleteHint() ;
					}

					break ;

				case 'historyNext' :
					if ( inputIndex < inputs.length - 1 ) {
						inputIndex ++ ;
						offset = inputs[ inputIndex ].length ;

						if ( echo ) {
							extraLines = end.y - start.y ;
							computeAllCoordinate() ;
							extraLines -= end.y - start.y ;
							redraw( extraLines , true ) ;
							this.moveTo( cursor.x , cursor.y ) ;
						}

						// Not sure if this is desirable
						//if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
					}
					break ;

				case 'historyPrevious' :
					if ( inputIndex > 0 ) {
						inputIndex -- ;
						offset = inputs[ inputIndex ].length ;

						if ( echo ) {
							extraLines = end.y - start.y ;
							computeAllCoordinate() ;
							extraLines -= end.y - start.y ;
							redraw( extraLines , true ) ;
							this.moveTo( cursor.x , cursor.y ) ;
						}

						// Not sure if this is desirable
						//if ( dynamic.autoCompleteHint ) { autoCompleteHint() ; }
					}
					break ;

				case 'autoCompleteUsingHistory' :
				case 'autoComplete' :
					autoCompleteUsed = keyBindings[ key ] === 'autoCompleteUsingHistory' ? options.history : dynamic.autoComplete ;

					if ( ! autoCompleteUsed ) { break ; }

					leftPart = inputs[ inputIndex ].slice( 0 , offset ) ;

					var finishCompletion = () => {
						if ( Array.isArray( autoCompleted ) ) {
							if ( dynamic.autoCompleteMenu ) { autoCompleteMenu( autoCompleted ) ; }
							return ;
						}

						leftPart = string.unicode.toArray( autoCompleted ).slice( 0 , options.maxLength ) ;

						inputs[ inputIndex ] = leftPart.concat(
							inputs[ inputIndex ].slice( offset , options.maxLength + offset - leftPart.length )
						) ;

						offset = leftPart.length ;

						if ( echo ) {
							computeAllCoordinate() ;
							redraw() ;
						}
					} ;

					if ( Array.isArray( autoCompleteUsed ) ) {
						autoCompleted = autoComplete( autoCompleteUsed , leftPart.join( '' ) , dynamic.autoCompleteMenu ) ;
					}
					else if ( typeof autoCompleteUsed === 'function' ) {
						if ( autoCompleteUsed.length === 2 ) {
							autoCompleteUsed( leftPart.join( '' ) , ( error , autoCompleted_ ) => {
								if ( error ) { cleanup( error ) ; return ; }

								autoCompleted = autoCompleted_ ;
								finishCompletion() ;
							} ) ;
							return ;
						}

						autoCompleted = autoCompleteUsed( leftPart.join( '' ) ) ;

						if ( Promise.isThenable( autoCompleted ) ) {
							autoCompleted.then(
								autoCompleted_ => {
									autoCompleted = autoCompleted_ ;
									finishCompletion() ;
								} ,
								error => { cleanup( error ) ; }
							) ;
							return ;
						}
					}

					finishCompletion() ;

					break ;
			}
		}
	} ;


	// Return a controller for the input field

	controller = Object.create( NextGenEvents.prototype ) ;

	controller.defineStates( 'ready' ) ;

	// /!\ .ready is deprecated, it is now a getter to .hasState('ready')
	Object.defineProperty( controller , 'ready' , {
		get: function() { return this.hasState( 'ready' ) ; }
	} ) ;

	// Tmp, for compatibility
	controller.widgetType = 'inputField' ;

	// Stop everything and do not even call the callback
	controller.abort = () => {
		if ( finished ) { return ; }
		cleanup( 'abort' ) ;
	} ;

	// Stop and call the completion callback with the current input
	controller.stop = () => {
		if ( finished ) { return ; }
		cleanup( undefined , inputs[ inputIndex ] ) ;
	} ;

	// Pause and resume: the input field will not respond to event when paused
	controller.pause = pause ;
	controller.resume = resume ;
	controller.focus = ( value ) => {
		if ( value ) { resume() ; }
		else { pause() ; }
	} ;

	// Get the current input
	controller.getInput = () => inputs[ inputIndex ].join( '' ) ;

	controller.value = controller.getInput ;

	// Get the current position
	controller.getPosition = () => ( { x: start.x , y: start.y } ) ;

	// Hide the input field
	controller.hide = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.hide ) ; return ; }

		var i , j ;

		for ( i = start.x , j = start.y ; j <= end.y ; i = 1 , j ++ ) {
			this.moveTo.eraseLineAfter( i , j ) ;
		}

		echo = false ;
	} ;

	// Show the input field
	controller.show = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.show ) ; return ; }
		echo = true ;
		redraw() ;
	} ;

	// Redraw the input field
	controller.redraw = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.redraw ) ; return ; }
		redraw( undefined , true ) ;
	} ;

	// Redraw the cursor
	controller.redrawCursor = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.redrawCursor ) ; return ; }
		redrawCursor() ;
	} ;

	controller.getCursorPosition = () => offset ;

	controller.setCursorPosition = newOffset => {
		newOffset = boundOffset( newOffset ) ;

		if ( newOffset !== offset ) {
			if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
				clearHint() ;
			}

			offset = newOffset ;

			if ( echo ) {
				computeAllCoordinate() ;
				this.moveTo( cursor.x , cursor.y ) ;
			}

			if ( dynamic.autoCompleteHint && offset === inputs[ inputIndex ].length ) {
				autoCompleteHint() ;
			}
		}
	} ;

	// Rebase the input field where the cursor is
	controller.rebase = ( x , y ) => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.rebase ) ; return ; }

		var rebaseTo = ( x_ , y_ ) => {

			start.x = x_ ;
			start.y = y_ ;

			if ( options.echo ) {
				echo = true ;
				computeAllCoordinate() ;
				redraw() ;
			}

			controller.emit( 'rebased' ) ;
		} ;

		if ( x !== undefined && y !== undefined ) {
			rebaseTo( x , y ) ;
			return ;
		}

		// First, disable echoing: getCursorLocation is async!
		echo = false ;

		this.getCursorLocation( ( error , x_ , y_ ) => {
			if ( error ) {
				// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
				// Here we just ignore the rebase.
				//cleanup( error ) ;
				return ;
			}

			rebaseTo( x_ , y_ ) ;
		} ) ;
	} ;

	controller.promise = new Promise() ;


	// Init the input field
	init() ;

	return controller ;
} ;



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var Promise = __webpack_require__( 1 ) ;
var autoComplete = __webpack_require__( 40 ) ;
var fs = __webpack_require__( 86 ) ;
var path = __webpack_require__( 24 ) ;



/*
	/!\ Document that!!! /!\
*/
module.exports = function fileInput( options , callback ) {
	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	var baseDir ;

	var promise = new Promise() ;

	if ( options.baseDir ) {
		baseDir = path.resolve( options.baseDir ) ;

		if ( ! path.isAbsolute( baseDir ) ) {
			fs.realpath( options.baseDir , ( error , resolvedPath ) => {
				if ( error ) {
					if ( callback ) { callback( error ) ; }
					else { promise.reject( error ) ; }
					return ;
				}

				options.baseDir = resolvedPath ;

				this.fileInput( options ).then(
					input => {
						if ( callback ) { callback( input ) ; }
						else { promise.resolve( input ) ; }
					} ,
					error_ => {
						if ( callback ) { callback( error_ ) ; }
						else { promise.reject( error_ ) ; }
					}
				) ;
			} ) ;

			return promise ;
		}
	}
	else {
		baseDir = process.cwd() ;
	}

	if ( baseDir[ baseDir.length - 1 ] !== '/' ) { baseDir += '/' ; }

	var autoCompleter = async function autoCompleter( inputString ) {
		var inputDir , inputFile , currentDir , files , completion ;

		if ( inputString[ inputString.length - 1 ] === '/' ) {
			inputDir = inputString ;
			inputFile = '' ;
		}
		else {
			inputDir = path.dirname( inputString ) ;
			inputDir = inputDir === '.' ? '' : inputDir + '/' ;
			inputFile = path.basename( inputString ) ;
		}


		// If the input start with a '/', then forget about the baseDir
		if ( path.isAbsolute( inputString ) ) { currentDir = inputDir ; }
		else { currentDir = baseDir + inputDir ; }


		//console.error( "### '" + inputDir +"' '"+ inputFile +"' '"+ currentDir + "'" ) ;
		try {
			files = await readdir( currentDir ) ;
		}
		catch ( error ) {
			return inputString ;
		}

		if ( ! Array.isArray( files ) || ! files.length ) { return inputString ; }

		completion = autoComplete( files , inputFile , true ) ;

		// force inputField() to prefix that *AFTER* singleLineMenu()
		if ( Array.isArray( completion ) ) { completion.prefix = inputDir ;	}
		else { completion = path.normalize( inputDir + completion ) ; }

		return completion ;
	} ;

	// Transmit options to inputField()
	options = Object.assign( {} , options , { autoComplete: autoCompleter , autoCompleteMenu: true , minLength: 1 } ) ;

	this.inputField( options ).promise.then(
		input => {
			if ( ! input && typeof input !== 'string' ) {
				input = undefined ;
			}
			else {
				input = path.resolve( path.isAbsolute( input ) ? input : baseDir + input ) ;
			}

			if ( callback ) { callback( undefined , input ) ; }
			else { promise.resolve( input ) ; }
		} ,
		error => {
			if ( callback ) { callback( error ) ; }
			else { promise.reject( error ) ; }
		}
	) ;

	return promise ;
} ;



// Like fs.readdir(), but performs fs.stat() for each file in order to add a '/' to directories
function readdir( dir ) {
	var promise = new Promise() ;

	if ( dir[ dir.length - 1 ] !== '/' ) { dir += '/' ; }

	fs.readdir( dir , ( error , files ) => {

		if ( error ) { promise.reject( error ) ; return ; }

		Promise.map( files , file => {
			return new Promise( ( resolve , reject ) => {
				fs.lstat( dir + file , ( error_ , stats ) => {
					if ( error_ ) { reject( error_ ) ; return ; }
					if ( stats.isDirectory() ) { file += '/' ; }
					resolve( file ) ;
				} ) ;
			} ) ;
		} )
			.toPromise( promise ) ;
	} ) ;

	return promise ;
}



/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const termkit = __webpack_require__( 5 ) ;
const stringWidth = termkit.stringWidth ;
const NextGenEvents = __webpack_require__( 6 ) ;
const Promise = __webpack_require__( 1 ) ;



const defaultKeyBindings = {
	ENTER: 'submit' ,
	KP_ENTER: 'submit' ,
	LEFT: 'previous' ,
	RIGHT: 'next' ,
	UP: 'previousPage' ,
	DOWN: 'nextPage' ,
	TAB: 'cycleNext' ,
	SHIFT_TAB: 'cyclePrevious' ,
	HOME: 'first' ,
	END: 'last' ,
	ESCAPE: 'escape'
} ;



/*
	singleLineMenu( menuItems , [options] , callback )
		* menuItems `array` of menu item text
		* options `object` of options, where:
			* y `number` the line where the menu will be displayed, default to the next line
			* separator `string` (default: '  ') the string separating each menu item
			* nextPageHint `string` (default: ' » ') string indicator for a next page
			* previousPageHint `string` (default: ' « ') string indicator for a previous page
			* style `function` the style of unselected items, default to `term`
			* selectedStyle `function` the style of the selected item, default to `term.dim.blue.bgGreen`
			* selectedIndex `number` selected index at initialization (default: 0)
			* align `string` one of 'left' (default), 'right' or 'center', align the menu accordingly
			* fillIn `boolean` if true (default: false), the menu will fill in the whole line with white chars
			* keyBindings `Object` overide default key bindings
			* cancelable `boolean` if ESCAPE is pressed, it exits, calling the callback with undefined values
			* exitOnUnexpectedKey `boolean` if an unexpected key is pressed, it exits, calling the callback with undefined values
		* callback( error , response ), where:
			* error
			* response `Object` where:
				* selectedIndex `number` the user-selected menu item index
				* selectedText `string` the user-selected menu item text
				* x `number` the x coordinate of the selected menu item (the first character)
				* y `number` the y coordinate of the selected menu item (same coordinate for all items since it's a single line menu)
				* unexpectedKey `string` when 'exitOnUnexpectedKey' option is set, this contains the key that produced the exit
				* canceled `bool` when 'cancelable' option is set, this is set to true
*/
module.exports = function singleLineMenu( menuItems_ , options , callback ) {
	if ( arguments.length < 1 ) { throw new Error( '[terminal] singleLineMenu() needs at least an array of menuItems' ) ; }
	if ( ! Array.isArray( menuItems_ ) || ! menuItems_.length ) { throw new TypeError( '[terminal] singleLineMenu(): argument #0 should be a non-empty array' ) ; }

	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( options.separator === undefined ) { options.separator = '  ' ; }
	if ( options.nextPageHint === undefined ) { options.nextPageHint = ' » ' ; }
	if ( options.previousPageHint === undefined ) { options.previousPageHint = ' « ' ; }
	if ( ! options.style ) { options.style = this ; }
	if ( ! options.selectedStyle ) { options.selectedStyle = this.dim.blue.bgGreen ; }

	if ( ! options.y ) { this( '\n' ) ; }
	else { this.moveTo( 1 , options.y ) ; }

	var keyBindings = options.keyBindings || defaultKeyBindings ;

	if ( ! this.grabbing ) { this.grabInput() ; }

	var menuItems = menuItems_.map( e => typeof e === 'string' ? e : '' + e ) ;

	var selectedIndexInPage = options.selectedIndex = options.selectedIndex || 0 ;
	var start = {} , selectedPage = 0 , finished = false , menuPages = [] , alreadyCleanedUp = false ;

	// Width
	var nextPageHintWidth = stringWidth( options.nextPageHint ) ,
		previousPageHintWidth = stringWidth( options.previousPageHint ) ,
		separatorWidth = stringWidth( options.separator ) ;

	var computePages = () => {
		var i , itemWidth , displayText , p = 0 , endX = 1 , nextEndX , firstItem = true ,
			lastItem , lineWidth , offset ,
			xMax = this.width - nextPageHintWidth ;

		menuPages = [ [] ] ;

		for ( i = 0 ; i < menuItems.length ; i ++ ) {
			if ( p >= menuPages.length ) { menuPages.push( [] ) ; }

			itemWidth = stringWidth( menuItems[ i ] ) ;
			nextEndX = endX + itemWidth + separatorWidth ;

			if ( nextEndX > xMax ) {
				if ( firstItem ) {
					itemWidth = xMax - endX ;
					displayText = termkit.truncateString( menuItems[ i ] , itemWidth - 1 ) + '…' ;

					if ( i === options.selectedIndex ) {
						selectedPage = p ;
						selectedIndexInPage = menuPages[ p ].length ;
					}

					menuPages[ p ].push( {
						index: i ,
						text: menuItems[ i ] ,
						displayText: displayText ,
						displayTextWidth: itemWidth ,
						x: endX
					} ) ;
				}
				else {
					i -- ;
				}

				p ++ ;
				endX = 1 + previousPageHintWidth ;
				firstItem = true ;

				continue ;
			}

			if ( i === options.selectedIndex ) {
				selectedPage = p ;
				selectedIndexInPage = menuPages[ p ].length ;
			}

			menuPages[ p ].push( {
				index: i ,
				text: menuItems[ i ] ,
				displayText: menuItems[ i ] ,
				displayTextWidth: itemWidth ,
				x: endX
			} ) ;

			endX = nextEndX ;
			firstItem = false ;
		}

		for ( p = 0 ; p < menuPages.length ; p ++ ) {
			lastItem = menuPages[ p ][ menuPages[ p ].length - 1 ] ;
			lineWidth = lastItem.x + lastItem.displayTextWidth - 1 ;
			if ( p < menuPages.length - 1 ) { lineWidth += nextPageHintWidth ; }

			menuPages[ p ].x = 1 ;

			if ( lineWidth < this.width ) {
				if ( options.align === 'right' ) { offset = this.width - lineWidth ; }
				else if ( options.align === 'center' ) { offset = Math.floor( ( this.width - lineWidth ) / 2 ) ; }
				else { offset = 0 ; }

				menuPages[ p ].x += offset ;

				if ( offset ) {
					menuPages[ p ].forEach( item => item.x += offset ) ;
				}
			}
		}
	} ;

	var cleanup = ( error , data ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		finished = true ;
		this.removeListener( 'key' , onKey ) ;
		this.removeListener( 'mouse' , onMouse ) ;

		if ( error ) {
			if ( callback ) { callback( error ) ; }
			else { controller.promise.reject( error ) ; }
			return ;
		}

		var page = menuPages[ selectedPage ] ;

		var value = data !== undefined ? data : {
			selectedIndex: page[ selectedIndexInPage ].index ,
			selectedText: page[ selectedIndexInPage ].text ,
			x: page[ selectedIndexInPage ].x ,
			y: start.y
		} ;

		if ( callback ) { callback( undefined , value ) ; }
		else { controller.promise.resolve( value ) ; }
	} ;

	// Compute the coordinate of the end of a string, given a start coordinate
	var redraw = () => {
		var i , cursorX ,
			page = menuPages[ selectedPage ] ,
			endX = page.x ;

		this.moveTo.eraseLineAfter( 1 , start.y ) ;

		if ( options.fillIn && endX > 1 ) { options.style.noFormat( ' '.repeat( endX - 1 ) ) ; }
		else { this.column( endX ) ; }

		if ( selectedPage ) {
			options.style.forceStyleOnReset.noFormat( options.previousPageHint ) ;
			endX += previousPageHintWidth ;
		}

		for ( i = 0 ; i < page.length ; i ++ ) {
			if ( i ) {
				options.style.forceStyleOnReset.noFormat( options.separator ) ;
				endX += separatorWidth ;
			}

			if ( i === selectedIndexInPage ) {
				options.selectedStyle.forceStyleOnReset.noFormat( page[ i ].displayText ) ;
				cursorX = endX ;
			}
			else {
				options.style.forceStyleOnReset.noFormat( page[ i ].displayText ) ;
			}

			endX += page[ i ].displayTextWidth ;
		}

		if ( selectedPage < menuPages.length - 1 ) {
			options.style.forceStyleOnReset.noFormat( options.nextPageHint ) ;
			endX += nextPageHintWidth ;
		}

		if ( options.fillIn && endX < this.width ) { options.style.noFormat( ' '.repeat( this.width - endX ) ) ; }

		this.column( cursorX ) ;
	} ;

	var emitHighlight = () => {
		var item = menuPages[ selectedPage ][ selectedIndexInPage ] ;

		controller.emit( 'highlight' , {
			highlightedIndex: item.index ,
			highlightedText: item.text ,
			x: item.x ,
			y: start.y
		} ) ;
	} ;


	var onKey = ( key , trash , data ) => {
		if ( finished ) { return ; }

		var changed = false ,
			page = menuPages[ selectedPage ] ;

		switch( keyBindings[ key ] ) {
			case 'submit' :
				cleanup() ;
				break ;

			case 'previous' :
				if ( selectedIndexInPage > 0 ) {
					selectedIndexInPage -- ;
					changed = true ;
				}
				else if ( selectedPage > 0 ) {
					selectedPage -- ;
					selectedIndexInPage = menuPages[ selectedPage ].length - 1 ;
					changed = true ;
				}
				break ;

			case 'next' :
				if ( selectedIndexInPage < page.length - 1 ) {
					selectedIndexInPage ++ ;
					changed = true ;
				}
				else if ( selectedPage < menuPages.length - 1 ) {
					selectedPage ++ ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				break ;

			case 'cycleNext' :
				if ( selectedPage === menuPages.length - 1 && selectedIndexInPage === page.length - 1 ) {
					selectedPage = 0 ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				else if ( selectedIndexInPage < page.length - 1 ) {
					selectedIndexInPage ++ ;
					changed = true ;
				}
				else if ( selectedPage < menuPages.length - 1 ) {
					selectedPage ++ ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				break ;

			case 'cyclePrevious' :
				if ( selectedPage === 0 && selectedIndexInPage === 0 ) {
					selectedPage = menuPages.length - 1 ;
					selectedIndexInPage = menuPages[ selectedPage ].length - 1 ;
					changed = true ;
				}
				else if ( selectedIndexInPage > 0 ) {
					selectedIndexInPage -- ;
					changed = true ;
				}
				else if ( selectedPage > 0 ) {
					selectedPage -- ;
					selectedIndexInPage = menuPages[ selectedPage ].length - 1 ;
					changed = true ;
				}
				break ;

			case 'first' :
				if ( selectedPage !== 0 || selectedIndexInPage !== 0 ) {
					selectedPage = 0 ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				break ;

			case 'last' :
				if ( selectedPage !== menuPages.length - 1 || selectedIndexInPage !== menuPages[ selectedPage ].length - 1 ) {
					selectedPage = menuPages.length - 1 ;
					selectedIndexInPage = menuPages[ selectedPage ].length - 1 ;
					changed = true ;
				}
				break ;

			case 'previousPage' :
				if ( selectedPage > 0 ) {
					selectedPage -- ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				break ;

			case 'nextPage' :
				if ( selectedPage < menuPages.length - 1 ) {
					selectedPage ++ ;
					selectedIndexInPage = 0 ;
					changed = true ;
				}
				break ;

			case 'escape' :
				if ( options.cancelable ) {
					cleanup( undefined , { canceled: true } ) ;
				}
				if ( options.exitOnUnexpectedKey ) {
					cleanup( undefined , { unexpectedKey: key , unexpectedKeyData: data } ) ;
				}
				break ;

			default :
				if ( options.exitOnUnexpectedKey ) {
					cleanup( undefined , { unexpectedKey: key , unexpectedKeyData: data } ) ;
				}
				break ;

		}

		if ( changed ) {
			redraw() ;
			emitHighlight() ;
		}
	} ;


	var onMouse = ( name , data ) => {
		if ( finished ) { return ; }

		// If out of bounds, exit now!
		if ( data.y !== start.y ) { return ; }

		var i , item , nextButtonX ,
			inBounds = false ,
			page = menuPages[ selectedPage ] ;

		// First check previous/next page button click
		if ( name === 'MOUSE_LEFT_BUTTON_PRESSED' ) {
			if ( selectedPage > 0 && data.x >= 1 && data.x < 1 + previousPageHintWidth ) {
				selectedPage -- ;
				selectedIndexInPage = 0 ;
				redraw() ;
				emitHighlight() ;
				return ;
			}

			nextButtonX = page[ page.length - 1 ].x + page[ page.length - 1 ].displayTextWidth ;

			if ( selectedPage < menuPages.length - 1 && data.x >= nextButtonX && data.x < nextButtonX + nextPageHintWidth ) {
				selectedPage ++ ;
				selectedIndexInPage = 0 ;
				redraw() ;
				emitHighlight() ;
				return ;
			}
		}

		for ( i = 0 ; i < page.length ; i ++ ) {
			item = page[ i ] ;

			if ( data.x >= item.x && data.x < item.x + item.displayTextWidth ) {
				inBounds = true ;

				if ( selectedIndexInPage !== i ) {
					selectedIndexInPage = i ;
					redraw() ;
					emitHighlight() ;
				}

				break ;
			}
		}

		if ( inBounds && name === 'MOUSE_LEFT_BUTTON_PRESSED' ) {
			cleanup() ;
		}
	} ;

	var controller = Object.create( NextGenEvents.prototype ) ;

	controller.promise = new Promise() ;

	this.getCursorLocation( ( error , x , y ) => {
		if ( error ) {
			// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
			// So we just move to the last line and create a new line.
			//cleanup( error ) ; return ;
			this.row.eraseLineAfter( this.height )( '\n' ) ;
			x = 1 ;
			y = this.height ;
		}

		start.x = x ;
		start.y = y ;
		computePages() ;
		redraw() ;

		// Emit the first auto-selected item
		emitHighlight() ;

		this.on( 'key' , onKey ) ;
		if ( this.mouseGrabbing ) { this.on( 'mouse' , onMouse ) ; }
	} ) ;

	return controller ;
} ;



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const termkit = __webpack_require__( 5 ) ;
const stringWidth = termkit.stringWidth ;
const string = __webpack_require__( 4 ) ;
const NextGenEvents = __webpack_require__( 6 ) ;
const Promise = __webpack_require__( 1 ) ;



const defaultKeyBindings = {
	ENTER: 'submit' ,
	KP_ENTER: 'submit' ,
	UP: 'previous' ,
	DOWN: 'next' ,
	TAB: 'cycleNext' ,
	SHIFT_TAB: 'cyclePrevious' ,
	HOME: 'first' ,
	END: 'last' ,
	BACKSPACE: 'cancel' ,
	DELETE: 'cancel' ,
	ESCAPE: 'escape'
} ;



/*
	singleColumnMenu( menuItems , [options] , callback )
		* menuItems `array` of menu item text
		* options `object` of options, where:
			* y `number` the line where the menu will be displayed, default to the next line
			* style `function` the style of unselected items, default to `term`
			* selectedStyle `function` the style of the selected item, default to `term.inverse`
			* submittedStyle `function` the style of the submitted item, default to `term.bgGray.bold`
			* disabledStyle `function` the style of unselected items **when the menu is paused/disabled**,
			  default to `term.dim`
			* disabledSelectedStyle `function` the style of the selected item **when the menu is paused/disabled**,
			  default to `term.bgGray.dim`
			* disabledSubmittedStyle `function` the style of the submitted item **when the menu is paused/disabled**,
			  default to `term.bgGray`
			* leftPadding `string` the text to put before a menu item, default to ' '
			* selectedLeftPadding `string` the text to put before a selected menu item, default to ' '
			* submittedLeftPadding `string` the text to put before a submitted menu item, default to ' '
			* extraLines `number` ensure that many lines after the bottom of the menu
			* oneLineItem `boolean` if true (default: false), big items do not span multiple lines, instead they are truncated
			  and ended with an ellipsis char
			* itemMaxWidth `number` the max width for an item, default to the terminal width
			* continueOnSubmit `boolean` if true, the submit action does not end the menu, the callback argument is ignored.
			  The 'submit' event should be listened instead.
			* selectedIndex `number` selected index at initialization (default: 0)
			* unsubmittableIndexes `Array` of `boolean` indexes that are not submittable (default: [])
			* submitted `boolean` if true, selected index is already submitted at initialization (default: false)
			* paused `boolean` (default: false) true if the menu start in paused/disabled mode
			* scrollRegionBottom `number` if set, it indicates the bottom line of the current scroll region
			* keyBindings `Object` overide default key bindings
			* cancelable `boolean` if ESCAPE is pressed, it exits, calling the callback with undefined values
			* exitOnUnexpectedKey `boolean` if an unexpected key is pressed, it exits, calling the callback with undefined values
		* callback( error , response ), where:
			* error
			* response `Object` where:
				* selectedIndex `number` the user-selected menu item index
				* selectedText `string` the user-selected menu item text
				* x `number` the x coordinate of the selected menu item (the first character)
				* y `number` the y coordinate of the selected menu item
				* unexpectedKey `string` when 'exitOnUnexpectedKey' option is set, this contains the key that produced the exit
				* canceled `bool` when 'cancelable' option is set, this is set to true
*/
module.exports = function singleColumnMenu( menuItemsArg , options , callback ) {
	if ( arguments.length < 1 ) { throw new Error( '[terminal] singleColumnMenu() needs at least an array of menuItems' ) ; }
	if ( ! Array.isArray( menuItemsArg ) || ! menuItemsArg.length ) { throw new TypeError( '[terminal] singleColumnMenu(): argument #0 should be a non-empty array' ) ; }

	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( ! options.style ) { options.style = this ; }
	if ( ! options.selectedStyle ) { options.selectedStyle = this.inverse ; }
	if ( ! options.submittedStyle ) { options.submittedStyle = this.bgGray.bold ; }
	if ( ! options.disabledStyle ) { options.disabledStyle = this.dim ; }
	if ( ! options.disabledSelectedStyle ) { options.disabledSelectedStyle = this.bgGray.dim ; }
	if ( ! options.disabledSubmittedStyle ) { options.disabledSubmittedStyle = this.bgGray ; }

	if ( options.leftPadding === undefined ) { options.leftPadding = ' ' ; }
	if ( options.selectedLeftPadding === undefined ) { options.selectedLeftPadding = options.leftPadding ; }
	if ( options.submittedLeftPadding === undefined ) { options.submittedLeftPadding = options.leftPadding ; }

	if ( typeof options.extraLines !== 'number' || options.extraLines < 0 ) { options.extraLines = 1 ; }

	if ( ! options.itemMaxWidth ) { options.itemMaxWidth = this.width - 1 ; }

	if ( ! options.unsubmittableIndexes ) { options.unsubmittableIndexes = [] ; }

	var selectedIndex = options.selectedIndex || 0 ;
	var submittedIndex = options.submitted ? options.selectedIndex : null ;
	var paused = !! options.paused ;

	var keyBindings = options.keyBindings || defaultKeyBindings ;

	if ( ! this.grabbing ) { this.grabInput() ; }


	var start = {} , end = {} , textWidth , outerWidth , paddingLength ,
		menuItems , offsetY = 0 , lineCount = 0 , scrollLines = 0 ,
		controller , finished = false , alreadyCleanedUp = false ;



	// Functions...



	var init = () => {
		computeItems( menuItemsArg ) ;

		if ( options.y !== undefined ) {
			this.moveTo( 1 , options.y ) ;
			finishInit( 1 , options.y ) ;
		}
		else {
			this( '\n' ) ;
			this.getCursorLocation( ( error , x , y ) => {
				if ( error ) {
					// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
					// So we just move to the last line and create a new line.
					//cleanup( error ) ; return ;
					this.row.eraseLineAfter( this.height )( '\n' ) ;
					x = 1 ;
					y = this.height ;
				}

				finishInit( x , y ) ;
			} ) ;
		}
	} ;



	var computeItems = ( menuItems_ ) => {
		textWidth = 0 ;

		paddingLength = Math.max( stringWidth( options.leftPadding ) , stringWidth( options.selectedLeftPadding ) ) ;

		menuItems_ = menuItems_.map( element => {
			if ( typeof element !== 'string' ) { element = '' + element ; }
			textWidth = Math.max( textWidth , stringWidth( element ) ) ;
			return element ;
		} ) ;

		if ( ! options.oneLineItem && textWidth > options.itemMaxWidth - paddingLength ) {
			outerWidth = Math.min( textWidth + paddingLength , this.width ) ;

			menuItems = menuItems_.map( ( element , index ) => {

				var item , lines ,
					lineLength = options.itemMaxWidth - paddingLength ;

				lines = string.wordwrap( element , {
					width: lineLength ,
					noJoin: true ,
					fill: true ,
					skipFn: termkit.escapeSequenceSkipFn
				} ) ;

				item = {
					offsetY: offsetY ,
					index: index ,
					text: element ,
					displayText: lines
				} ;

				offsetY += lines.length ;

				return item ;
			} ) ;

			lineCount = offsetY ;
		}
		else {
			textWidth = Math.min( textWidth , options.itemMaxWidth - paddingLength ) ;
			outerWidth = Math.min( textWidth + paddingLength , this.width ) ;

			menuItems = menuItems_.map( ( element , index ) => {
				var elementWidth = stringWidth( element ) ;

				return {
					offsetY: index ,
					index: index ,
					text: element ,
					displayText: [ elementWidth > textWidth ?
						element.slice( 0 , textWidth - 1 ) + '…' :
						element + ' '.repeat( textWidth - elementWidth ) ]
				} ;
			} ) ;

			lineCount = menuItems.length ;
		}
	} ;



	var finishInit = ( x , y ) => {
		// It is possible for userland to end the menu immediately
		if ( finished ) { return ; }

		prepareArea( x , y ) ;
		redraw() ;

		this.on( 'key' , onKey ) ;
		if ( this.mouseGrabbing ) { this.on( 'mouse' , onMouse ) ; }

		controller.emit( 'ready' ) ;
		emitHighlight() ;
	} ;



	var emitHighlight = () => {
		var item = menuItems[ selectedIndex ] ;

		controller.emit( 'highlight' , {
			highlightedIndex: item.index ,
			highlightedText: item.text ,
			submitted: submittedIndex !== null ,
			x: 1 ,
			y: start.y + item.offsetY
		} ) ;

	} ;



	var prepareArea = ( x , y ) => {
		start.x = x ;
		start.y = y ;

		end.x = 1 ;
		end.y = y + lineCount ;

		scrollLines = start.y + lineCount - ( options.scrollRegionBottom || this.height ) - 1 + options.extraLines ;

		if ( scrollLines > 0 ) {
			// create extra lines
			this( '\n'.repeat( scrollLines ) ) ;
			start.y -= scrollLines ;
			end.y -= scrollLines ;
		}
	} ;



	var cleanup = ( error , data , eraseMenu ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		finished = true ;
		this.removeListener( 'key' , onKey ) ;
		this.removeListener( 'mouse' , onMouse ) ;

		if ( error === 'abort' ) { return ; }

		if ( controller.hasState( 'ready' ) ) {
			if ( eraseMenu ) { erase() ; }
			else { this.moveTo( 1 , end.y ) ; }
		}

		if ( error ) {
			if ( callback ) { callback( error ) ; }
			else { controller.promise.reject( error ) ; }
			return ;
		}

		var value = data !== undefined ? data : {
			selectedIndex: selectedIndex ,
			selectedText: menuItems[ selectedIndex ].text ,
			submitted: submittedIndex !== null ,
			x: 1 ,
			y: start.y + menuItems[ selectedIndex ].offsetY
		} ;

		if ( callback ) { callback( undefined , value ) ; }
		else { controller.promise.resolve( value ) ; }
	} ;



	var erase = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , erase ) ; return ; }

		var i , j ;

		for ( i = start.x , j = start.y ; j <= end.y ; i = 1 , j ++ ) {
			this.moveTo.eraseLineAfter( i , j ) ;
		}

		this.moveTo( 1 , start.y ) ;
	} ;



	// Compute the coordinate of the end of a string, given a start coordinate
	var redraw = () => {
		for ( var i = 0 ; i < menuItems.length ; i ++ ) { redrawItem( i ) ; }
		redrawCursor() ;
	} ;



	var redrawItem = ( index ) => {

		// Called by finishInit before emitting 'ready'
		//if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , redrawItem.bind( undefined , index ) ) ; return ; }

		var item = menuItems[ index ] ;

		item.displayText.forEach( ( text , line ) => {

			this.moveTo( 1 , start.y + item.offsetY + line ) ;

			if ( paused || options.unsubmittableIndexes[ index ] ) {
				if ( index === submittedIndex ) {
					if ( line ) { options.disabledSubmittedStyle.forceStyleOnReset.noFormat( options.leftPadding ) ; }
					else { options.disabledSubmittedStyle.forceStyleOnReset.noFormat( options.submittedLeftPadding ) ; }

					options.disabledSubmittedStyle.forceStyleOnReset.noFormat( text ) ;
				}
				else if ( index === selectedIndex ) {
					if ( line ) { options.disabledSelectedStyle.forceStyleOnReset.noFormat( options.leftPadding ) ; }
					else { options.disabledSelectedStyle.forceStyleOnReset.noFormat( options.selectedLeftPadding ) ; }

					options.disabledSelectedStyle.forceStyleOnReset.noFormat( text ) ;
				}
				else {
					options.disabledStyle.forceStyleOnReset.noFormat( options.leftPadding ) ;
					options.disabledStyle.forceStyleOnReset.noFormat( text ) ;
				}
			}
			else if ( index === submittedIndex ) {
				if ( line ) { options.submittedStyle.forceStyleOnReset.noFormat( options.leftPadding ) ; }
				else { options.submittedStyle.forceStyleOnReset.noFormat( options.submittedLeftPadding ) ; }

				options.submittedStyle.forceStyleOnReset.noFormat( text ) ;
			}
			else if ( index === selectedIndex ) {
				if ( line ) { options.selectedStyle.forceStyleOnReset.noFormat( options.leftPadding ) ; }
				else { options.selectedStyle.forceStyleOnReset.noFormat( options.selectedLeftPadding ) ; }

				options.selectedStyle.forceStyleOnReset.noFormat( text ) ;
			}
			else {
				options.style.forceStyleOnReset.noFormat( options.leftPadding ) ;
				options.style.forceStyleOnReset.noFormat( text ) ;
			}
		} ) ;
	} ;



	var redrawCursor = () => {
		// Called by finishInit before emitting 'ready'
		//if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , redrawCursor ) ; return ; }
		this.moveTo( 1 , start.y + menuItems[ selectedIndex ].offsetY ) ;
	} ;



	var select = ( index ) => {
		var oldSelectedIndex = selectedIndex ;

		if ( selectedIndex !== index && index >= 0 && index < menuItems.length ) {
			selectedIndex = index ;

			// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
			if ( controller.hasState( 'ready' ) ) {
				redrawItem( oldSelectedIndex ) ;
				redrawItem( selectedIndex ) ;
				redrawCursor() ;
				emitHighlight() ;
			}
		}
	} ;



	var submit = () => {
		if ( submittedIndex !== null || options.unsubmittableIndexes[ selectedIndex ] ) { return ; }
		submittedIndex = selectedIndex ;

		// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
		if ( controller.hasState( 'ready' ) ) {
			redrawItem( submittedIndex ) ;
			redrawCursor() ;
		}

		controller.emit( 'submit' , {
			selectedIndex: submittedIndex ,
			selectedText: menuItems[ submittedIndex ].text ,
			submitted: true ,
			x: 1 ,
			y: start.y + menuItems[ submittedIndex ].offsetY
		} ) ;

		if ( ! options.continueOnSubmit ) { cleanup() ; }
	} ;



	var cancel = () => {
		var oldSelectedIndex = submittedIndex ;

		if ( submittedIndex === null ) { return ; }
		submittedIndex = null ;
		redrawItem( oldSelectedIndex ) ;
		redrawCursor() ;
		controller.emit( 'cancel' ) ;
	} ;



	var pause = () => {
		if ( paused ) { return ; }
		paused = true ;

		// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
		if ( controller.hasState( 'ready' ) ) { redraw() ; }
	} ;



	var resume = () => {
		if ( ! paused ) { return ; }
		paused = false ;

		// Don't redraw now if not ready, it will be drawn once ready (avoid double-draw)
		if ( controller.hasState( 'ready' ) ) { redraw() ; }
	} ;



	var onKey = ( key , trash , data ) => {

		if ( finished || paused ) { return ; }

		var oldSelectedIndex = selectedIndex ;

		switch ( keyBindings[ key ] ) {
			case 'submit' :
				submit() ;
				break ;

			case 'previous' :
				if ( submittedIndex !== null ) { return ; }
				if ( selectedIndex > 0 ) {
					selectedIndex -- ;
					redrawItem( selectedIndex ) ;
					redrawItem( selectedIndex + 1 ) ;
					redrawCursor() ;
					//redraw() ;
					emitHighlight() ;
				}
				break ;

			case 'next' :
				if ( submittedIndex !== null ) { return ; }
				if ( selectedIndex < menuItems.length - 1 ) {
					selectedIndex ++ ;
					redrawItem( selectedIndex - 1 ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
					emitHighlight() ;
				}
				break ;

			case 'cyclePrevious' :
				if ( submittedIndex !== null ) { return ; }
				selectedIndex -- ;

				if ( selectedIndex < 0 ) { selectedIndex = menuItems.length - 1 ; }

				redrawItem( oldSelectedIndex ) ;
				redrawItem( selectedIndex ) ;
				redrawCursor() ;
				//redraw() ;
				emitHighlight() ;
				break ;

			case 'cycleNext' :
				if ( submittedIndex !== null ) { return ; }
				selectedIndex ++ ;

				if ( selectedIndex >= menuItems.length ) { selectedIndex = 0 ; }

				redrawItem( oldSelectedIndex ) ;
				redrawItem( selectedIndex ) ;
				redrawCursor() ;
				//redraw() ;
				emitHighlight() ;
				break ;

			case 'first' :
				if ( submittedIndex !== null ) { return ; }
				if ( selectedIndex !== 0 ) {
					selectedIndex = 0 ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
					emitHighlight() ;
				}
				break ;

			case 'last' :
				if ( submittedIndex !== null ) { return ; }
				if ( selectedIndex !== menuItems.length - 1 ) {
					selectedIndex = menuItems.length - 1 ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
					emitHighlight() ;
				}
				break ;

			case 'cancel' :
				cancel() ;
				break ;

			case 'escape' :
				if ( options.cancelable ) {
					cleanup( undefined , { canceled: true } ) ;
				}
				if ( options.exitOnUnexpectedKey ) {
					cleanup( undefined , { unexpectedKey: key , unexpectedKeyData: data } ) ;
				}
				break ;

			default :
				if ( options.exitOnUnexpectedKey ) {
					cleanup( undefined , { unexpectedKey: key , unexpectedKeyData: data } ) ;
				}
				break ;
		}
	} ;



	var onMouse = ( name , data ) => {

		if ( finished || paused || submittedIndex !== null ) { return ; }

		// If out of bounds, exit now!
		if ( data.y < start.y || data.y >= end.y ) { return ; }

		var i , yMin , yMax ,
			inBounds = false ;

		for ( i = 0 ; i < menuItems.length ; i ++ ) {
			yMin = start.y + menuItems[ i ].offsetY ;
			yMax = start.y + menuItems[ i ].offsetY + menuItems[ i ].displayText.length - 1 ;

			if ( data.y >= yMin && data.y <= yMax && data.x < 1 + outerWidth ) {
				inBounds = true ;
				select( i ) ;
				break ;
			}
		}

		if ( inBounds && name === 'MOUSE_LEFT_BUTTON_PRESSED' ) {
			submit() ;
		}
	} ;



	// Return a controller for the menu

	controller = Object.create( NextGenEvents.prototype ) ;

	controller.defineStates( 'ready' ) ;

	// Stop everything and do not even call the callback
	controller.abort = () => {
		if ( finished ) { return ; }
		cleanup( 'abort' ) ;
	} ;

	// Stop and call the completion callback with no item
	controller.stop = ( eraseMenu ) => {
		if ( finished ) { return ; }
		cleanup( undefined , undefined , eraseMenu ) ;
	} ;

	controller.select = select ;
	controller.submit = submit ;
	controller.cancel = cancel ;
	controller.erase = erase ;

	// Pause and resume: the menu will not respond to event when paused
	controller.pause = pause ;
	controller.resume = resume ;
	controller.focus = ( value ) => {
		if ( value ) { resume() ; }
		else { pause() ; }
	} ;

	// Get the current state
	controller.getState = () => ( {
		selectedIndex: selectedIndex ,
		selectedText: menuItems[ selectedIndex ].text ,
		submitted: submittedIndex !== null ,
		start: start ,
		end: end ,
		x: 1 ,
		y: start.y + menuItems[ selectedIndex ].offsetY
		//scrollLines: scrollLines
	} ) ;

	// Get the current position
	controller.getPosition = () => ( { x: start.x , y: start.y } ) ;

	// Hide the menu
	controller.hide = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.hide ) ; return ; }
		erase() ;
	} ;

	// Show the menu
	controller.show = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.show ) ; return ; }
		redraw() ;
	} ;

	// Redraw the menu
	controller.redraw = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.redraw ) ; return ; }
		redraw() ;
	} ;

	// Redraw the cursor
	controller.redrawCursor = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.redrawCursor ) ; return ; }
		redrawCursor() ;
	} ;

	// Rebase the menu where the cursor is
	controller.rebase = () => {
		if ( ! controller.hasState( 'ready' ) ) { controller.once( 'ready' , controller.rebase ) ; return ; }

		// First, disable the menu: getCursorLocation is async!
		var wasPaused = paused ;
		paused = true ;

		this.getCursorLocation( ( error , x , y ) => {
			if ( error ) {
				// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
				// Here we just ignore the rebase.
				//cleanup( error ) ;
				return ;
			}

			paused = wasPaused ;
			prepareArea( x , y ) ;
			redraw() ;
			controller.emit( 'rebased' ) ;
		} ) ;
	} ;

	controller.promise = new Promise() ;

	// Init the menu
	init() ;

	return controller ;
} ;



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var Promise = __webpack_require__( 1 ) ;



var defaultKeyBindings = {
	ENTER: 'submit' ,
	KP_ENTER: 'submit' ,
	//LEFT: 'previous' ,
	//RIGHT: 'next' ,
	//UP: 'previousRow' ,
	//DOWN: 'nextRow' ,
	UP: 'previous' ,
	DOWN: 'next' ,
	LEFT: 'previousColumn' ,
	RIGHT: 'nextColumn' ,
	TAB: 'cycleNext' ,
	SHIFT_TAB: 'cyclePrevious' ,
	HOME: 'first' ,
	END: 'last'
} ;



/*
	gridMenu( menuItems , [options] , callback )
		* menuItems `array` of menu item text
		* options `object` of options, where:
			* y `number` the line where the menu will be displayed, default to the next line
			* x `number` the column where the menu will be displayed (default: 1)
			* width `number` the maximum width of the grid menu (default: terminal's width)
			* style `function` the style of unselected items, default to `term`
			* selectedStyle `function` the style of the selected item, default to `term.inverse`
			* leftPadding `string` the text to put before a menu item, default to ' '
			* selectedLeftPadding `string` the text to put before a selected menu item, default to ' '
			* rightPadding `string` the text to put after a menu item, default to ' '
			* selectedRightPadding `string` the text to put after a selected menu item, default to ' '
			* itemMaxWidth `number` the max width for an item, default to the 1/3 of the terminal width
			  or of the specified width option
			* keyBindings `Object` overide default key bindings
			* exitOnUnexpectedKey `boolean` if an unexpected key is pressed, it exits, calling the callback with undefined values
		* callback( error , response ), where:
			* error
			* response `Object` where:
				* selectedIndex `number` the user-selected menu item index
				* selectedText `string` the user-selected menu item text
				* x `number` the x coordinate of the selected menu item (the first character)
				* y `number` the y coordinate of the selected menu item
				* unexpectedKey `string` when 'exitOnUnexpectedKey' option is set, this contains the key that produced the exit
*/
module.exports = function gridMenu( menuItems_ , options , callback ) {
	if ( arguments.length < 1 ) { throw new Error( '[terminal] gridMenu() needs at least an array of menuItems argument' ) ; }

	if ( ! Array.isArray( menuItems_ ) || ! menuItems_.length ) { throw new TypeError( '[terminal] gridMenu(): argument #0 should be a non-empty array' ) ; }

	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	else if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( ! options.style ) { options.style = this ; }
	if ( ! options.selectedStyle ) { options.selectedStyle = this.inverse ; }

	if ( options.leftPadding === undefined ) { options.leftPadding = ' ' ; }
	if ( options.selectedLeftPadding === undefined ) { options.selectedLeftPadding = ' ' ; }
	if ( options.rightPadding === undefined ) { options.rightPadding = ' ' ; }
	if ( options.selectedRightPadding === undefined ) { options.selectedRightPadding = ' ' ; }

	if ( ! options.x ) { options.x = 1 ; }

	if ( ! options.y ) { this( '\n' ) ; }
	else { this.moveTo( options.x , options.y ) ; }

	if ( ! options.width ) { options.width = this.width - options.x + 1 ; }

	// itemMaxWidth default to 1/3 of the terminal width
	if ( ! options.itemMaxWidth ) { options.itemMaxWidth = Math.floor( ( options.width - 1 ) / 3 ) ; }

	var keyBindings = options.keyBindings || defaultKeyBindings ;

	if ( ! this.grabbing ) { this.grabInput() ; }


	var start = {} , selectedIndex = 0 , finished = false , alreadyCleanedUp = false ,
		itemInnerWidth = 0 , itemOuterWidth = 0 ,
		menuItems , columns , rows , padLength ;

	padLength = Math.max( options.leftPadding.length , options.selectedLeftPadding.length ) +
		Math.max( options.rightPadding.length , options.selectedRightPadding.length ) ;

	menuItems_ = menuItems_.map( element => {
		if ( typeof element !== 'string' ) { element = '' + element ; }
		itemInnerWidth = Math.max( itemInnerWidth , element.length ) ;
		return element ;
	} ) ;

	itemInnerWidth = Math.min( itemInnerWidth , options.itemMaxWidth - padLength ) ;
	itemOuterWidth = itemInnerWidth + padLength ;
	columns = Math.floor( options.width / itemOuterWidth ) ;
	rows = Math.ceil( menuItems_.length / columns ) ;

	menuItems = menuItems_.map( ( element , index ) => ( {
		// row first
		//offsetX: ( index % columns ) * itemOuterWidth ,
		//offsetY: Math.floor( index / columns ) ,

		// column first
		offsetY: index % rows ,
		offsetX: options.x - 1 + Math.floor( index / rows ) * itemOuterWidth ,

		index: index ,
		text: element ,
		displayText: element.length > itemInnerWidth ?
			element.slice( 0 , itemInnerWidth - 1 ) + '…' :
			element + ' '.repeat( itemInnerWidth - element.length )
	} ) ) ;


	//console.log( menuItems ) ; process.exit() ;

	var cleanup = ( error , data ) => {
		if ( alreadyCleanedUp ) { return ; }
		alreadyCleanedUp = true ;

		finished = true ;
		this.removeListener( 'key' , onKey ) ;
		this.removeListener( 'mouse' , onMouse ) ;
		this.moveTo( 1 , start.y + rows ) ;

		if ( error ) {
			if ( callback ) { callback( error ) ; }
			else { controller.promise.reject( error ) ; }
			return ;
		}

		var value = data !== undefined ? data : {
			selectedIndex: selectedIndex ,
			selectedText: menuItems[ selectedIndex ].text ,
			x: 1 + menuItems[ selectedIndex ].offsetX ,
			y: start.y + menuItems[ selectedIndex ].offsetY
		} ;

		if ( callback ) { callback( undefined , value ) ; }
		else { controller.promise.resolve( value ) ; }
	} ;

	// Compute the coordinate of the end of a string, given a start coordinate
	var redraw = () => {
		for ( var i = 0 ; i < menuItems.length ; i ++ ) { redrawItem( i ) ; }
		redrawCursor() ;
	} ;

	var redrawItem = ( index ) => {
		var item = menuItems[ index ] ;

		this.moveTo( 1 + item.offsetX , start.y + item.offsetY ) ;

		if ( index === selectedIndex ) {
			options.selectedStyle.noFormat( options.selectedLeftPadding ) ;
			options.selectedStyle.noFormat( item.displayText ) ;
			options.selectedStyle.noFormat( options.selectedRightPadding ) ;
		}
		else {
			options.style.noFormat( options.leftPadding ) ;
			options.style.noFormat( item.displayText ) ;
			options.style.noFormat( options.rightPadding ) ;
		}
	} ;

	var redrawCursor = () => {
		this.moveTo( 1 + menuItems[ selectedIndex ].offsetX , start.y + menuItems[ selectedIndex ].offsetY ) ;
	} ;


	var onKey = ( key , trash , data ) => {
		if ( finished ) { return ; }

		var oldSelectedIndex = selectedIndex ;

		switch( keyBindings[ key ] ) {
			case 'submit' :
				cleanup() ;
				break ;

			case 'previous' :
				if ( selectedIndex > 0 ) {
					selectedIndex -- ;
					redrawItem( selectedIndex ) ;
					redrawItem( selectedIndex + 1 ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			case 'next' :
				if ( selectedIndex < menuItems.length - 1 ) {
					selectedIndex ++ ;
					redrawItem( selectedIndex - 1 ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;
			/*
			case 'previousRow' :
				if ( selectedIndex >= columns )
				{
					selectedIndex -= columns ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			case 'nextRow' :
				if ( selectedIndex < menuItems.length - columns )
				{
					selectedIndex += columns ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;
			*/
			case 'previousColumn' :
				if ( selectedIndex >= rows ) {
					selectedIndex -= rows ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			case 'nextColumn' :
				if ( selectedIndex < menuItems.length - rows ) {
					selectedIndex += rows ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			case 'cyclePrevious' :
				selectedIndex -- ;

				if ( selectedIndex < 0 ) { selectedIndex = menuItems.length - 1 ; }

				redrawItem( oldSelectedIndex ) ;
				redrawItem( selectedIndex ) ;
				redrawCursor() ;
				//redraw() ;
				break ;

			case 'cycleNext' :
				selectedIndex ++ ;

				if ( selectedIndex >= menuItems.length ) { selectedIndex = 0 ; }

				redrawItem( oldSelectedIndex ) ;
				redrawItem( selectedIndex ) ;
				redrawCursor() ;
				//redraw() ;
				break ;

			case 'first' :
				if ( selectedIndex !== 0 ) {
					selectedIndex = 0 ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			case 'last' :
				if ( selectedIndex !== menuItems.length - 1 ) {
					selectedIndex = menuItems.length - 1 ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
					//redraw() ;
				}
				break ;

			default :
				if ( options.exitOnUnexpectedKey ) {
					cleanup( undefined , { unexpectedKey: key , unexpectedKeyData: data } ) ;
				}
				break ;
		}
	} ;


	var onMouse = ( name , data ) => {

		if ( finished ) { return ; }

		// If out of bounds, exit now!
		if ( data.y < start.y || data.y >= start.y + rows ) { return ; }

		var i , inBounds = false ,
			oldSelectedIndex = selectedIndex ;

		for ( i = 0 ; i < menuItems.length ; i ++ ) {
			if (
				data.y === start.y + menuItems[ i ].offsetY &&
				data.x >= 1 + menuItems[ i ].offsetX &&
				data.x < 1 + menuItems[ i ].offsetX + itemOuterWidth
			) {
				inBounds = true ;

				if ( selectedIndex !== i ) {
					selectedIndex = i ;
					redrawItem( oldSelectedIndex ) ;
					redrawItem( selectedIndex ) ;
					redrawCursor() ;
				}

				break ;
			}
		}

		if ( inBounds && name === 'MOUSE_LEFT_BUTTON_PRESSED' ) {
			cleanup() ;
		}
	} ;


	this.getCursorLocation( ( error , x , y ) => {
		if ( error ) {
			// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
			// So we just move to the last line and create a new line.
			//cleanup( error ) ; return ;
			this.row.eraseLineAfter( this.height )( '\n' ) ;
			x = 1 ;
			y = this.height ;
		}

		start.x = x ;
		start.y = y ;

		var extra = start.y + rows - this.height ;

		if ( extra > 0 ) {
			// create extra lines
			this( '\n'.repeat( extra ) ) ;
			start.y -= extra ;
		}

		redraw() ;

		this.on( 'key' , onKey ) ;
		if ( this.mouseGrabbing ) { this.on( 'mouse' , onMouse ) ; }
	} ) ;

	// For compatibility
	var controller = {} ;

	controller.promise = new Promise() ;

	return controller ;
} ;



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





//var string = require( 'string-kit' ) ;



/*
	progressBar( options )
		* options `object` of options, all of them are OPTIONAL, where:
			* width: `number` the total width of the progress bar, default to the max available width
			* percent: `boolean` if true, it shows the progress in percent alongside with the progress bar
			* eta: `boolean` if true, it shows the Estimated Time of Arrival alongside with the progress bar
			* items `number` the number of items, turns the 'item mode' on
			* title `string` the title of the current progress bar, turns the 'title mode' on
			* barStyle `function` the style of the progress bar items, default to `term.cyan`
			* barBracketStyle `function` the style of the progress bar bracket character, default to options.barStyle if given
			  or `term.blue`
			* percentStyle `function` the style of percent value string, default to `term.yellow`
			* etaStyle `function` the style of the ETA display, default to `term.bold`
			* itemStyle `function` the style of the item display, default to `term.dim`
			* titleStyle `function` the style of the title display, default to `term.bold`
			* itemSize `number` the size of the item status, default to 33% of width
			* titleSize `number` the size of the title, default to 33% of width or title.length depending on context
			* barChar `string` the char used for the bar, default to '='
			* barHeadChar `string` the char used for the bar, default to '>'
			* maxRefreshTime `number` the maximum time between two refresh in ms, default to 500ms
			* minRefreshTime `number` the minimum time between two refresh in ms, default to 100ms
			* inline `boolean` (default: false) if true it is not locked in place, i.e. it redraws itself on the current line
			* syncMode `boolean` true if it should work in sync mode
			* y `integer` if set, display the progressBar on that line y-coord
			* x `integer` if set and the 'y' option is set, display the progressBar starting on that x-coord
*/
module.exports = function progressBar_( options ) {
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	var controller = {} , progress , ready = false , pause = false ,
		maxItems , itemsDone = 0 , itemsStarted = [] , itemFiller ,
		title , titleFiller ,
		width , y , startX , endX , oldWidth ,
		wheel , wheelCounter = 0 , itemRollCounter = 0 ,
		updateCount = 0 , progressUpdateCount = 0 ,
		lastUpdateTime , lastRedrawTime ,
		startingTime , redrawTimer ,
		etaStartingTime , lastEta , etaFiller ;

	etaStartingTime = startingTime = ( new Date() ).getTime() ;

	wheel = [ '|' , '/' , '-' , '\\' ] ;

	options.syncMode = !! options.syncMode ;

	width = options.width || this.width - 1 ;

	if ( ! options.barBracketStyle ) {
		if ( options.barStyle ) { options.barBracketStyle = options.barStyle ; }
		else { options.barBracketStyle = this.blue ; }
	}

	if ( ! options.barStyle ) { options.barStyle = this.cyan ; }
	if ( ! options.percentStyle ) { options.percentStyle = this.yellow ; }
	if ( ! options.etaStyle ) { options.etaStyle = this.bold ; }
	if ( ! options.itemStyle ) { options.itemStyle = this.dim ; }
	if ( ! options.titleStyle ) { options.titleStyle = this.bold ; }

	if ( ! options.barChar ) { options.barChar = '=' ; }
	else { options.barChar = options.barChar[ 0 ] ; }

	if ( ! options.barHeadChar ) { options.barHeadChar = '>' ; }
	else { options.barHeadChar = options.barHeadChar[ 0 ] ; }

	if ( typeof options.maxRefreshTime !== 'number' ) { options.maxRefreshTime = 500 ; }
	if ( typeof options.minRefreshTime !== 'number' ) { options.minRefreshTime = 100 ; }

	if ( typeof options.items === 'number' ) { maxItems = options.items ; }
	if ( maxItems && typeof options.itemSize !== 'number' ) { options.itemSize = Math.round( width / 3 ) ; }

	itemFiller = ' '.repeat( options.itemSize ) ;


	if ( options.title && typeof options.title === 'string' ) {
		title = options.title ;

		if ( typeof options.titleSize !== 'number' ) {
			options.titleSize = Math.round( Math.min( options.title.length + 1 , width / 3 ) ) ;
		}
	}

	titleFiller = ' '.repeat( options.titleSize ) ;


	etaFiller = '           ' ;	// 11 chars

	// This is a naive ETA for instance...
	var etaString = updated => {
		var eta = '' , elapsedTime , elapsedEtaTime , remainingTime ,
			averageUpdateDelay , averageUpdateProgress , lastUpdateElapsedTime , fakeProgress ;

		if ( progress >= 1 ) {
			eta = ' done' ;
		}
		else if ( progress > 0 ) {
			elapsedTime = ( new Date() ).getTime() - startingTime ;
			elapsedEtaTime = ( new Date() ).getTime() - etaStartingTime ;

			if ( ! updated && progressUpdateCount > 1 ) {
				lastUpdateElapsedTime = ( new Date() ).getTime() - lastUpdateTime ;
				averageUpdateDelay = elapsedEtaTime / progressUpdateCount ;
				averageUpdateProgress = progress / progressUpdateCount ;

				//console.log( '\n' , elapsedEtaTime , lastUpdateElapsedTime , averageUpdateDelay , averageUpdateProgress , '\n' ) ;

				// Do not update ETA if it's not an update, except if update time is too long
				if ( lastUpdateElapsedTime < averageUpdateDelay ) {
					fakeProgress = progress + averageUpdateProgress * lastUpdateElapsedTime / averageUpdateDelay ;
				}
				else {
					fakeProgress = progress + averageUpdateProgress ;
				}

				if ( fakeProgress > 0.99 ) { fakeProgress = 0.99 ; }
			}
			else {
				fakeProgress = progress ;
			}

			remainingTime = elapsedEtaTime * ( ( 1 - fakeProgress ) / fakeProgress ) / 1000 ;

			eta = ' in ' ;

			if ( remainingTime < 10 ) { eta += Math.round( remainingTime * 10 ) / 10 + 's' ; }
			else if ( remainingTime < 120 ) { eta += Math.round( remainingTime ) + 's' ; }
			else if ( remainingTime < 7200 ) { eta += Math.round( remainingTime / 60 ) + 'min' ; }
			else if ( remainingTime < 172800 ) { eta += Math.round( remainingTime / 3600 ) + 'hours' ; }
			else if ( remainingTime < 31536000 ) { eta += Math.round( remainingTime / 86400 ) + 'days' ; }
			else { eta = 'few years' ; }
		}
		else {
			etaStartingTime = ( new Date() ).getTime() ;
		}

		eta = ( eta + etaFiller ).slice( 0 , etaFiller.length ) ;
		lastEta = eta ;

		return eta ;
	} ;



	var redraw = updated => {
		var time , itemIndex , itemName = itemFiller , titleName = titleFiller ,
			innerBarSize , progressSize , voidSize ,
			progressBar = '' , voidBar = '' , percent = '' , eta = '' ;

		if ( ! ready || pause ) { return ; }

		time = ( new Date() ).getTime() ;

		// If progress is >= 1, then it's finished, so we should redraw NOW (before the program eventually quit)
		if ( ( ! progress || progress < 1 ) && lastRedrawTime && time < lastRedrawTime + options.minRefreshTime ) {
			if ( ! options.syncMode ) {
				if ( redrawTimer ) { clearTimeout( redrawTimer ) ; }
				redrawTimer = setTimeout( redraw.bind( this , updated ) , lastRedrawTime + options.minRefreshTime - time ) ;
			}
			return ;
		}


		this.saveCursor() ;

		// If 'y' is null, we are in the blind mode, we haven't get the cursor location
		if ( y === null ) { this.column( startX ) ; }
		else { this.moveTo( startX , y ) ; }

		//this.noFormat( Math.floor( progress * 100 ) + '%' ) ;

		innerBarSize = width - 2 ;

		if ( options.percent ) {
			innerBarSize -= 4 ;
			percent = ( '   ' + Math.round( ( progress || 0 ) * 100 ) + '%' ).slice( -4 ) ;
		}

		if ( options.eta ) {
			eta = etaString( updated ) ;
			innerBarSize -= eta.length ;
		}

		innerBarSize -= options.itemSize || 0 ;
		if ( maxItems ) {
			if ( ! itemsStarted.length ) {
				itemName = '' ;
			}
			else if ( itemsStarted.length === 1 ) {
				itemName = ' ' + itemsStarted[ 0 ] ;
			}
			else {
				itemIndex = ( itemRollCounter ++ ) % itemsStarted.length ;
				itemName = ' [' + ( itemIndex + 1 ) + '/' + itemsStarted.length + '] ' + itemsStarted[ itemIndex ] ;
			}

			if ( itemName.length > itemFiller.length ) { itemName = itemName.slice( 0 , itemFiller.length - 1 ) + '…' ; }
			else if ( itemName.length < itemFiller.length ) { itemName = ( itemName + itemFiller ).slice( 0 , itemFiller.length ) ; }
		}

		innerBarSize -= options.titleSize || 0 ;
		if ( title ) {
			titleName = title ;

			if ( titleName.length >= titleFiller.length ) { titleName = titleName.slice( 0 , titleFiller.length - 2 ) + '… ' ; }
			else { titleName = ( titleName + titleFiller ).slice( 0 , titleFiller.length ) ; }
		}

		progressSize = progress === undefined ? 1 : Math.round( innerBarSize * Math.max( Math.min( progress , 1 ) , 0 ) ) ;
		voidSize = innerBarSize - progressSize ;

		/*
		console.log( "Size:" , width ,
			voidSize , innerBarSize , progressSize , eta.length , title.length , itemName.length ,
			voidSize + progressSize + eta.length + title.length + itemName.length
		) ;
		//*/

		if ( progressSize ) {
			if ( progress === undefined ) {
				progressBar = wheel[ ++ wheelCounter % wheel.length ] ;
			}
			else {
				progressBar += options.barChar.repeat( progressSize - 1 ) ;
				progressBar += options.barHeadChar ;
			}
		}

		voidBar += ' '.repeat( voidSize ) ;

		options.titleStyle( titleName ) ;

		if ( percent ) { options.percentStyle( percent ) ; }

		if ( progress === undefined ) { this( ' ' ) ; }
		else { options.barBracketStyle( '[' ) ; }

		options.barStyle( progressBar ) ;
		this( voidBar ) ;

		if ( progress === undefined ) { this( ' ' ) ; /*this( '+' ) ;*/ }
		else { options.barBracketStyle( ']' ) ; }

		options.etaStyle( eta ) ;
		//this( '*' ) ;
		options.itemStyle( itemName ) ;
		//this( '&' ) ;

		this.restoreCursor() ;

		if ( ! options.syncMode ) {
			if ( redrawTimer ) { clearTimeout( redrawTimer ) ; }
			if ( ! progress || progress < 1 ) { redrawTimer = setTimeout( redraw , options.maxRefreshTime ) ; }
		}

		lastRedrawTime = time ;
	} ;


	if ( options.syncMode || options.inline || options.y ) {
		oldWidth = width ;

		if ( options.y ) {
			startX = + options.x || 1 ;
			y = + options.y || 1 ;
		}
		else {
			startX = 1 ;
			y = null ;
		}

		endX = Math.min( startX + width , this.width ) ;
		width = endX - startX ;

		if ( width !== oldWidth ) {
			// Should resize all part here
			if ( options.titleSize ) { options.titleSize = Math.floor( options.titleSize * width / oldWidth ) ; }
			if ( options.itemSize ) { options.itemSize = Math.floor( options.itemSize * width / oldWidth ) ; }
		}

		ready = true ;
		redraw() ;
	}
	else {
		// Get the cursor location before getting started
		this.getCursorLocation( ( error , x_ , y_ ) => {
			if ( error ) {
				// Some bad terminals (windows...) doesn't support cursor location request, we should fallback to a decent behavior.
				// So we just move to the last line and create a new line.
				//cleanup( error ) ; return ;
				this.row.eraseLineAfter( this.height )( '\n' ) ;
				x_ = 1 ;
				y_ = this.height ;
			}

			var oldWidth_ = width ;

			startX = x_ ;
			endX = Math.min( x_ + width , this.width ) ;
			y = y_ ;
			width = endX - startX ;

			if ( width !== oldWidth_ ) {
				// Should resize all part here
				if ( options.titleSize ) { options.titleSize = Math.floor( options.titleSize * width / oldWidth_ ) ; }
				if ( options.itemSize ) { options.itemSize = Math.floor( options.itemSize * width / oldWidth_ ) ; }
			}

			ready = true ;
			redraw() ;
		} ) ;
	}

	controller.startItem = name => {
		itemsStarted.push( name ) ;

		// No need to redraw NOW if there are other items running.
		// Let the timer do the job.
		if ( itemsStarted.length === 1 ) {
			// If progress is >= 1, then it's finished, so we should redraw NOW (before the program eventually quit)
			if ( progress >= 1 ) { redraw() ; return ; }

			if ( options.syncMode ) {
				redraw() ;
			}
			else {
				// Using a setTimeout with a 0ms time and redrawTimer clearing has a nice effect:
				// if multiple synchronous update are performed, redraw will be called once
				if ( redrawTimer ) { clearTimeout( redrawTimer ) ; }
				redrawTimer = setTimeout( redraw , 0 ) ;
			}
		}
	} ;

	controller.itemDone = name => {
		var index ;

		itemsDone ++ ;

		if ( maxItems ) { progress = itemsDone / maxItems ; }
		else { progress = undefined ; }

		lastUpdateTime = ( new Date() ).getTime() ;
		updateCount ++ ;
		progressUpdateCount ++ ;

		index = itemsStarted.indexOf( name ) ;
		if ( index >= 0 ) { itemsStarted.splice( index , 1 ) ; }

		// If progress is >= 1, then it's finished, so we should redraw NOW (before the program eventually quit)
		if ( progress >= 1 ) { redraw( true ) ; return ; }

		if ( options.syncMode ) {
			redraw() ;
		}
		else {
			// Using a setTimeout with a 0ms time and redrawTimer clearing has a nice effect:
			// if multiple synchronous update are performed, redraw will be called once
			if ( redrawTimer ) { clearTimeout( redrawTimer ) ; }
			redrawTimer = setTimeout( redraw.bind( this , true ) , 0 ) ;
		}
	} ;

	controller.update = toUpdate => {
		if ( ! toUpdate ) { toUpdate = {} ; }
		else if ( typeof toUpdate === 'number' ) { toUpdate = { progress: toUpdate } ; }

		if ( 'progress' in toUpdate ) {
			if ( typeof toUpdate.progress !== 'number' ) {
				progress = undefined ;
			}
			else {
				// Not sure if it is a good thing to let the user set progress to a value that is lesser than the current one
				progress = toUpdate.progress ;

				if ( progress > 1 ) { progress = 1 ; }
				else if ( progress < 0 ) { progress = 0 ; }

				if ( progress > 0 ) { progressUpdateCount ++ ; }

				lastUpdateTime = ( new Date() ).getTime() ;
				updateCount ++ ;
			}
		}

		if ( typeof toUpdate.items === 'number' ) {
			maxItems = toUpdate.items ;
			if ( maxItems ) { progress = itemsDone / maxItems ; }

			if ( typeof options.itemSize !== 'number' ) {
				options.itemSize = Math.round( width / 3 ) ;
				itemFiller = ' '.repeat( options.itemSize ) ;
			}
		}

		if ( typeof toUpdate.title === 'string' ) {
			title = toUpdate.title ;

			if ( typeof options.titleSize !== 'number' ) {
				options.titleSize = Math.round( width / 3 ) ;
				titleFiller = ' '.repeat( options.titleSize ) ;
			}
		}

		// If progress is >= 1, then it's finished, so we should redraw NOW (before the program eventually quit)
		if ( progress >= 1 ) { redraw( true ) ; return ; }

		if ( options.syncMode ) {
			redraw() ;
		}
		else {
			// Using a setTimeout with a 0ms time and redrawTimer clearing has a nice effect:
			// if multiple synchronous update are performed, redraw will be called once
			if ( redrawTimer ) { clearTimeout( redrawTimer ) ; }
			redrawTimer = setTimeout( redraw.bind( this , true ) , 0 ) ;
		}
	} ;

	controller.pause = controller.stop = () => {
		pause = true ;
	} ;

	controller.resume = () => {
		if ( pause ) {
			pause = false ;
			redraw() ;
		}
	} ;

	controller.reset = () => {
		etaStartingTime = startingTime = ( new Date() ).getTime() ;
		itemsDone = 0 ;
		progress = undefined ;
		itemsStarted.length = 0 ;
		wheelCounter = itemRollCounter = updateCount = progressUpdateCount = 0 ;
		redraw() ;
	} ;

	return controller ;
} ;



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const spChars = __webpack_require__( 92 ) ;



/*
	bar( value , options )
		* value `number` the value to display as bar
		* options `object` of options, where:
			* innerSize `number` the inner width in characters (default: 10)
			* barStyle `function` the style of the bar, default to term.blue
			* str `boolean` (default: false) if true it outputs nothing, instead it returns a string
*/
module.exports = function( value , options ) {
	var str = '' , barString = '' ;

	options = options || {} ;

	if ( isNaN( value ) || value < 0 ) { value = 0 ; }
	else if ( value > 1 ) { value = 1 ; }

	var innerSize = options.innerSize || 10 ;
	var fullBlocks = Math.floor( value * innerSize ) ;
	var partialBlock = Math.round( ( value * innerSize - fullBlocks ) * 8 ) ;
	var barStyle = options.barStyle || this.blue ;

	barString += '█'.repeat( fullBlocks ) ;

	if ( fullBlocks < innerSize ) {
		barString += spChars.enlargingBlock[ partialBlock ] ;
		barString += ' '.repeat( innerSize - fullBlocks - 1 ) ;
	}

	if ( options.str ) {
		str += this.str.inverse( '▉' ) ;
		str += barStyle.str( barString ) ;
		str += this.str( '▏' ) ;
		return str ;
	}

	this.inverse( '▉' ) ;
	barStyle( barString ) ;
	this( '▏' ) ;

	return this ;
} ;



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





// Characters that are hard to type
// Comments explain how to type it on a linux platform, using a fr layout keyboard

const BIT_DOTS = "⠀⠁⠂⠃⠄⠅⠆⠇⡀⡁⡂⡃⡄⡅⡆⡇⠈⠉⠊⠋⠌⠍⠎⠏⡈⡉⡊⡋⡌⡍⡎⡏⠐⠑⠒⠓⠔⠕⠖⠗⡐⡑⡒⡓⡔⡕⡖⡗⠘⠙⠚⠛⠜⠝⠞⠟⡘⡙⡚⡛⡜⡝⡞⡟⠠⠡⠢⠣⠤⠥⠦⠧⡠⡡⡢⡣⡤⡥⡦⡧⠨⠩⠪⠫⠬⠭⠮⠯⡨⡩⡪⡫⡬⡭⡮⡯⠰⠱⠲⠳⠴⠵⠶⠷⡰⡱⡲⡳⡴⡵⡶⡷⠸⠹⠺⠻⠼⠽⠾⠿⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⣀⣁⣂⣃⣄⣅⣆⣇⢈⢉⢊⢋⢌⢍⢎⢏⣈⣉⣊⣋⣌⣍⣎⣏⢐⢑⢒⢓⢔⢕⢖⢗⣐⣑⣒⣓⣔⣕⣖⣗⢘⢙⢚⢛⢜⢝⢞⢟⣘⣙⣚⣛⣜⣝⣞⣟⢠⢡⢢⢣⢤⢥⢦⢧⣠⣡⣢⣣⣤⣥⣦⣧⢨⢩⢪⢫⢬⢭⢮⢯⣨⣩⣪⣫⣬⣭⣮⣯⢰⢱⢲⢳⢴⢵⢶⢷⣰⣱⣲⣳⣴⣵⣶⣷⢸⢹⢺⢻⢼⢽⢾⢿⣸⣹⣺⣻⣼⣽⣾⣿".split( '' ) ;
const GROWING_BLOCK =   [ ' ' , '▁' , '▂' , '▃' , '▄' , '▅' , '▆' , '▇' , '█' ] ;
const ENLARGING_BLOCK = [ ' ' , '▏' , '▎' , '▍' , '▌' , '▋' , '▊' , '▉' , '█' ] ;



module.exports = {
	password: '●' ,		// Currently: the same as blackCircle

	forwardSingleQuote: '´' ,	// Altgr + ,
	overscore: '¯' ,	// Altgr + Shift + $
	multiply: '×' ,		// Altgr + Shift + ;
	divide: '÷' ,		// Altgr + Shift + :

	// Arrows
	up: '↑' ,			// Altgr + Shift + u
	down: '↓' ,			// Altgr + u
	left: '←' ,			// Altgr + y
	right: '→' ,		// Altgr + i
	leftAndRight: '↔' ,
	upAndDown: '↕' ,
	upLeft: '↖' ,
	upRight: '↗' ,
	downRight: '↘' ,
	downLeft: '↙' ,
	upLeftAndDownRight: '⤡' ,
	upRightAndDownLeft: '⤢' ,

	// Those names are most common in the UTF-8 parlance
	northWest: '↖' ,
	northEast: '↗' ,
	southEast: '↘' ,
	southWest: '↙' ,
	northWestAndSouthEast: '⤡' ,
	northEastAndSouthWest: '⤢' ,

	fullBlock: '█' ,
	upperHalfBlock: '▀' ,
	lowerHalfBlock: '▄' ,

	// Array of 0-8 growing/enlarging blocks
	growingBlock: GROWING_BLOCK ,
	enlargingBlock: ENLARGING_BLOCK ,

	bitDots: BIT_DOTS ,

	// When editing this, update spChars.md doc
	bar: {
		classic: {
			border: [ '[' , ']' ] ,
			body: [ '=' , ' ' ]
		} ,
		classicWithArrow: {
			border: [ '[' , ']' ] ,
			body: [ '=' , '>' , ' ' ]
		} ,
		classicWithHalf: {
			border: [ '[' , ']' ] ,
			body: [ '=' , ' ' , '-' , '=' , ' ' ]
		} ,
		solid: {
			border: [ '^!▉' , '▏' ] ,
			body: [ '█' , ... ENLARGING_BLOCK , ' ' ]
		}
	} ,

	// When editing this, update spChars.md doc
	box: {
		plain: {
			vertical: '█' ,
			horizontal: '█' ,
			topLeft: '█' ,
			topRight: '█' ,
			bottomLeft: '█' ,
			bottomRight: '█' ,
			topTee: '█' ,
			bottomTee: '█' ,
			leftTee: '█' ,
			rightTee: '█' ,
			cross: '█'
		} ,
		empty: {
			vertical: ' ' ,
			horizontal: ' ' ,
			topLeft: ' ' ,
			topRight: ' ' ,
			bottomLeft: ' ' ,
			bottomRight: ' ' ,
			topTee: ' ' ,
			bottomTee: ' ' ,
			leftTee: ' ' ,
			rightTee: ' ' ,
			cross: ' '
		} ,
		ascii: {
			vertical: '|' ,
			horizontal: '-' ,
			topLeft: '|' ,
			topRight: '|' ,
			bottomLeft: '|' ,
			bottomRight: '|' ,
			topTee: '-' ,
			bottomTee: '-' ,
			leftTee: '|' ,
			rightTee: '|' ,
			cross: '+'
		} ,
		light: {
			vertical: '│' ,
			horizontal: '─' ,
			topLeft: '┌' ,
			topRight: '┐' ,
			bottomLeft: '└' ,
			bottomRight: '┘' ,
			topTee: '┬' ,
			bottomTee: '┴' ,
			leftTee: '├' ,
			rightTee: '┤' ,
			cross: '┼'
		} ,
		lightRounded: {
			vertical: '│' ,
			horizontal: '─' ,
			topLeft: '╭' ,
			topRight: '╮' ,
			bottomLeft: '╰' ,
			bottomRight: '╯' ,
			topTee: '┬' ,
			bottomTee: '┴' ,
			leftTee: '├' ,
			rightTee: '┤' ,
			cross: '┼'
		} ,
		heavy: {
			vertical: '┃' ,
			horizontal: '━' ,
			topLeft: '┏' ,
			topRight: '┓' ,
			bottomLeft: '┗' ,
			bottomRight: '┛' ,
			topTee: '┳' ,
			bottomTee: '┻' ,
			leftTee: '┣' ,
			rightTee: '┫' ,
			cross: '╋'
		} ,
		double: {
			vertical: '║' ,
			horizontal: '═' ,
			topLeft: '╔' ,
			topRight: '╗' ,
			bottomLeft: '╚' ,
			bottomRight: '╝' ,
			topTee: '╦' ,
			bottomTee: '╩' ,
			leftTee: '╠' ,
			rightTee: '╣' ,
			cross: '╬'
		} ,
		dotted: {
			vertical: '┊' ,
			horizontal: '┄' ,
			topLeft: '┌' ,
			topRight: '┐' ,
			bottomLeft: '└' ,
			bottomRight: '┘' ,
			topTee: '┬' ,
			bottomTee: '┴' ,
			leftTee: '├' ,
			rightTee: '┤' ,
			cross: '┼'
		}
	} ,

	// When editing this, update spChars.md doc
	animation: {
		asciiSpinner: [ '│' , '/' , '-' , '\\' ] ,
		lineSpinner: [ '│' , '/' , '─' , '\\' ] ,
		dotSpinner: [
			BIT_DOTS[ 7 ] ,
			BIT_DOTS[ 19 ] ,
			BIT_DOTS[ 49 ] ,
			BIT_DOTS[ 112 ] ,
			BIT_DOTS[ 224 ] ,
			BIT_DOTS[ 200 ] ,
			BIT_DOTS[ 140 ] ,
			BIT_DOTS[ 14 ]
		] ,
		bitDots: BIT_DOTS ,
		impulse: [
			"∙∙∙" ,
			"●∙∙" ,
			"∙●∙" ,
			"∙∙●" ,
			"∙●∙" ,
			"●∙∙" ,
			"∙∙∙" ,
			"∙∙∙"
		] ,
		unboxing: [ ' ' , '▁' , '▂' , '▃' , '▄' , '▅' , '▆' , '▇' , '█' , '▉' , '▊' , '▋' , '▌' , '▍' , '▎' , '▏' ] ,
		'unboxing-color': [
			'^r^#^b ' , '^r^#^b▁' , '^r^#^b▂' , '^r^#^b▃' , '^r^#^b▄' , '^r^#^b▅' , '^r^#^b▆' , '^r^#^b▇' , '^r^#^m█' , '^r^#^m▉' , '^r^#^m▊' , '^r^#^m▋' , '^r^#^m▌' , '^r^#^m▍' , '^r^#^m▎' , '^r^#^m▏' ,
			'^m^#^y█' , '^m^#^y▇' , '^m^#^y▆' , '^m^#^y▅' , '^m^#^y▄' , '^m^#^y▃' , '^m^#^y▂' , '^m^#^y▁' , '^b^#^y ' , '^b^#^y▏' , '^b^#^y▎' , '^b^#^y▍' , '^b^#^y▌' , '^b^#^y▋' , '^b^#^y▊' , '^b^#^y▉'
		]
	} ,

	blackSquare: '■' ,
	whiteSquare: '□' ,
	blackCircle: '●' ,
	whiteCircle: '○' ,
	blackUpTriangle: '▲' ,
	whiteUpTriangle: '△' ,
	blackDownTriangle: '▼' ,
	whiteDownTriangle: '▽' ,
	blackLeftTriangle: '◀' ,
	whiteLeftTriangle: '◁' ,
	blackRightTriangle: '▶' ,
	whiteRightTriangle: '▷' ,
	blackDiamond: '◆' ,
	whiteDiamond: '◇' ,
	blackStar: '★' ,
	whiteStar: '☆' ,
	spadeSuit: '♠' ,
	heartSuit: '♥' ,
	diamondSuit: '♦' ,
	clubSuit: '♣' ,

	// Powerline specific characters (https://powerline.readthedocs.io)
	// It is displayed only with the appropriate font
	powerline: {
		branch: '' ,
		line: '' ,
		readOnly: '' ,
		rightTriangleSeparator: '' ,
		rightArrowSeparator: '' ,
		leftTriangleSeparator: '' ,
		leftArrowSeparator: ''
	}
} ;



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





var Promise = __webpack_require__( 1 ) ;



/*
	fakeTyping( str , [options] , callback )
		* str
		* options
			* style
			* delay
			* flashStyle
			* flashDelay
		* callback
*/
module.exports = function slowTyping( str , options , callback ) {
	if ( typeof str !== 'string' ) { throw new TypeError( '[terminal] slowTyping(): argument #0 should be a string' ) ; }
	if ( typeof options === 'function' ) { callback = options ; options = {} ; }
	if ( ! options || typeof options !== 'object' ) { options = {} ; }

	if ( ! options.style ) { options.style = this.green ; }
	if ( ! options.delay ) { options.delay = 150 ; }
	if ( ! options.flashStyle ) { options.flashStyle = this.bold.brightGreen ; }
	if ( ! options.flashDelay ) { options.flashDelay = 100 ; }

	var index , unflashTimer , promise = new Promise() ;

	var printChar = () => {
		if ( unflashTimer ) {
			clearTimeout( unflashTimer ) ;
			unflashTimer = null ;
			unflash() ;
		}

		if ( index === undefined ) {
			index = 0 ;
		}
		else if ( index >= str.length ) {
			if ( callback ) { callback() ; }
			else { promise.resolve() ; }
			return ;
		}
		else {
			if ( options.flashStyle && str[ index ].match( /\S/ ) ) {
				options.flashStyle( str[ index ] ) ;
				unflashTimer = setTimeout( unflash , options.flashDelay ) ;
			}
			else {
				options.style( str[ index ] ) ;
			}

			index ++ ;
		}

		setTimeout( printChar , ( 0.2 + Math.random() * 1.8 ) * options.delay ) ;
	} ;

	var unflash = () => {
		this.left( 1 ) ;
		options.style( str[ index - 1 ] ) ;
		unflashTimer = null ;
	} ;

	printChar() ;

	return promise ;
} ;



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atomic-terminal.json": 26,
	"./default.json": 41,
	"./gnome.json": 13,
	"./konsole.json": 30,
	"./linux.json": 20,
	"./solarized.json": 95,
	"./vga.json": 9,
	"./xfce.json": 37,
	"./xterm.json": 12
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 94;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = [{"r":7,"g":54,"b":66,"names":["base02"]},{"r":220,"g":50,"b":47,"names":["red"]},{"r":133,"g":153,"b":0,"names":["green"]},{"r":181,"g":137,"b":0,"names":["yellow"]},{"r":38,"g":139,"b":210,"names":["blue"]},{"r":211,"g":54,"b":130,"names":["magenta"]},{"r":42,"g":161,"b":152,"names":["cyan"]},{"r":238,"g":232,"b":213,"names":["base2"]},{"r":0,"g":43,"b":54,"names":["base03"]},{"r":203,"g":75,"b":22,"names":["orange"]},{"r":88,"g":110,"b":117,"names":["base01"]},{"r":101,"g":123,"b":131,"names":["base00"]},{"r":131,"g":148,"b":150,"names":["base0"]},{"r":108,"g":113,"b":196,"names":["violet"]},{"r":147,"g":161,"b":161,"names":["base1"]},{"r":253,"g":246,"b":227,"names":["base3"]}]

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





const Promise = __webpack_require__( 1 ) ;

// Patch the child process module to support asyncness
Promise.promisifyNodeApi( __webpack_require__( 7 ) ) ;



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
	Terminal Kit

	Copyright (c) 2009 - 2021 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/





/*
	Windows compatibility.
*/

module.exports = function( termkit ) {
	termkit.globalConfig.preferProcessSigwinch = true ;
} ;




/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map