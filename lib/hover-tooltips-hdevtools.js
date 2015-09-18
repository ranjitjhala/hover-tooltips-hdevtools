/// <reference path="../typings/hover.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var hover_tooltips_1 = require('./hover-tooltips');
function hdevtoolsResult(msg) {
    try {
        var ls = msg[0].split('\n');
        var l0 = ls[0];
        var ty = l0.match(/\".*\"/i);
        var n = ty[0].length;
        var res = ty[0].substring(1, n - 1);
        return res;
    }
    catch (e) {
        return null;
    }
}
function hdevtoolsCommand(p) {
    var execP = atom.config.get('hover-tooltips-hdevtools.executablePath');
    var socketP = atom.config.get('hover-tooltips-hdevtools.socketPath');
    return { cmd: execP,
        args: ['type',
            '-s', socketP,
            ("" + p.file), ("" + p.line), ("" + p.column)
        ]
    };
}
var hdevtoolsProvider = {
    result: hdevtoolsResult,
    command: hdevtoolsCommand
};
var HdevtoolsTooltips = (function (_super) {
    __extends(HdevtoolsTooltips, _super);
    function HdevtoolsTooltips() {
        _super.apply(this, arguments);
        this.provider = hover_tooltips_1.provider(hdevtoolsProvider);
        this.syntax = 'source.haskell';
        this.config = { executablePath: { type: 'string',
                default: 'hdevtools' },
            socketPath: { type: 'string',
                default: '~/.hdevtools-socket-atom' }
        };
    }
    return HdevtoolsTooltips;
})(hover_tooltips_1.HoverTooltips);
exports.HdevtoolsTooltips = HdevtoolsTooltips;
module.exports = new HdevtoolsTooltips();
