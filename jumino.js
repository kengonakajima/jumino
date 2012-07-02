
to_i = function(s){ return parseInt(s);};
int = function(s){ return parseInt(s);};
to_f = function(s){ return parseFloat(s);};
tonumber = function(s){ return Number(s); };
to_s = function(n){ return n.toString(); };
tostring = to_s;

// logging
function argtoarray(a){ return [].slice.apply(a); }
p = function(){
    console.log( argtoarray(arguments).join(" "));
}
print = p;


