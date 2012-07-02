

global.to_i = function(s){ return parseInt(s);};
global.int = function(s) { return to_i(s); };
global.to_f = function(s){ return parseFloat(s);};
global.tonumber = function(s){ return Number(s); };
global.to_s = function(n){ return n.toString(); };
global.tostring = global.to_s;
global.print = console.log;
global.p = console.log;