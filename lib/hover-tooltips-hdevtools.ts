/// <reference path="../typings/hover.d.ts" />

import {HoverTooltips, provider, debug} from 'hover-tooltips';

function hdevtoolsResult(msg:string[]):string{
  try {
   // debug("PARSE (text): " + msg + "\nJSON: " + JSON.stringify(msg));
   var ls = msg[0].split('\n');
   // debug("PARSE (ls): " + ls);
   var l0 = ls[0];
   // debug("PARSE (l0): " + l0);
   // e.g. text = 12 10 12 14 "Int -> Int"
   var ty = l0.match(/\".*\"/i);
   // debug("PARSE (ty): " + ty);
   // e.g  ty   = "Int -> Int"
   var n  = ty[0].length;
   // e.g res   = Int -> Int
   var res = ty[0].substring(1, n-1);
   // debug("PARSE (res): " + res);
   return res;
 } catch (e) {
   // debug("PARSE ERROR: " + e.toString());
   return null;
}
}

function hdevtoolsCommand(p:Hover.Position):Hover.Command {
  var execP   = atom.config.get('hover-tooltips-hdevtools.executablePath');
  var socketP = atom.config.get('hover-tooltips-hdevtools.socketPath');
  return { cmd: execP
         , args: [ 'type'
                 , '-s', socketP
                 , `${p.file}`, `${p.line}`, `${p.column}`
                 ]
         };
}

var hdevtoolsProvider : Hover.Provider = {
    result: hdevtoolsResult
  , command: hdevtoolsCommand
  }

export class HdevtoolsTooltips extends HoverTooltips {

  provider:Hover.IProvider = provider(hdevtoolsProvider);

  syntax = 'source.haskell'

  config = { executablePath: { type: 'string'
                             , default: 'hdevtools'}
           , socketPath    : { type: 'string'
                             , default: '~/.hdevtools-socket-atom'}
           }
}

module.exports = new HdevtoolsTooltips();
