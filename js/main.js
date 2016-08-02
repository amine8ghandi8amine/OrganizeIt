//Remove all function
function removeAll(n) {
    while (n.firstChild) {
        n.removeChild(n.firstChild);
    }
}
//Remove all function
function debugge(funcToDebug) {
    debugger;
    funcToDebug();
}
