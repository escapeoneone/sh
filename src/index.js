var termkit = require('terminal-kit');
var term = require('terminal-kit').terminal;
var fs = require("fs");
var os = require('os');
var pty = require('node-pty');
const readline = require('readline');

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

let PATH = [
    "/usr/bin"
];

var MODE = "SH";

term('shell> ');


// Allows us to listen for events from stdin
readline.emitKeypressEvents(process.stdin);

// Raw mode gets rid of standard keypress events and other
// functionality Node.js adds by default
process.stdin.setRawMode(true);



var autoComplete = [
    'dnf install',
    'dnf install nodejs',
    'dnf search',
    'sudo',
    'sudo dnf install',
    'sudo dnf install nodejs',
    'sudo dnf search',
];

var commands = [];
for(var i = 0; i < PATH.length; i++){
    fs.readdir(PATH[i], function (error, files) {
        commands.push(...files);
        commands = uniq(commands);
        //console.log(commands);
    });
}

var autoCompleter = function autoCompleter(inputString, callback) {
    callback(undefined, termkit.autoComplete(commands, inputString, true));
};

term.inputField(
    {
        autoComplete:  autoCompleter,
        autoCompleteHint: true,
        autoCompleteMenu: true,
        tokenHook: function (token, isEndOfInput, previousTokens, term, config) {
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
                        term.brightCyan : null;
            }
        }
    },
    function (error, input) {
        ptyProcess.write(input);
        //term.green("\nYour command is: '%s'\n", input);
    }
);


var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.on('data', function(data) {
  process.stdout.write(data);
});

// Start the keypress listener for the process
process.stdin.on('keypress', (str, key) => {

    // "Raw" mode so we must do our own kill switch
    if(key.sequence === '\u0003') {
        process.exit();
    }

    // User has triggered a keypress, now do whatever we want!
    // ...

});