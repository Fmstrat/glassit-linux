"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let opacity = vscode.workspace.getConfiguration("glassit-linux").get("opacity");
    if (!opacity) {
        opacity = 97;
    }
    const cmd = `bash -c 'for W in $(wmctrl -l |grep "Visual Studio Code" |awk '"'"'{print $1}'"'"'); do xprop -id $W -format _NET_WM_WINDOW_OPACITY 32c -set _NET_WM_WINDOW_OPACITY $(printf 0x%x $((0xffffffff * ${opacity} / 100))); done'`;
    const terminal = vscode.window.createTerminal('glassit-linux');
    terminal.sendText(cmd);
    terminal.sendText(`exit`);
}
exports.activate = activate;
