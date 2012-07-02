
to_i = function(s){ return parseInt(s);};
int = function(s){ return parseInt(s);};
to_f = function(s){ return parseFloat(s);};
tonumber = function(s){ return Number(s); };
to_s = function(n){ return n.toString(); };
tostring = to_s;

// logging
function argtoarray(a){ return [].slice.apply(a); }
p = function(a,b,c,d,e,f,g,h,i,j,k){
    var code = "console.log(";
    var ary = [];
    if(a){ ary.push("a"); }
    if(b){ ary.push("b"); }
    if(c){ ary.push("c"); }
    if(d){ ary.push("d"); }
    if(e){ ary.push("e"); }
    if(f){ ary.push("f"); }
    if(g){ ary.push("g"); }
    if(h){ ary.push("h"); }
    if(i){ ary.push("i"); }
    if(j){ ary.push("j"); }
    if(k){ ary.push("k"); }
    code += ary.join(",") + ")";
    eval(code);
}
print = p;


