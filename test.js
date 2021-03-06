
var assert = require("assert");
require( "./jumino");


assert(true);

assert(int("100")==100);
assert(to_i("100")==100);
assert(to_f("0.0188")==0.0188); // TODO: problematic....
assert(tonumber("101.11")==101.11);
assert(tonumber("101.11")!=101.12); 

assert(to_s(999.99)=="999.99");
assert(tostring(999.99)=="999.99");

p(1,2,"3",{a:1,b:2});
p("done");

var r = rect(1,1,3,3);
assert(r.minx==1);
assert(r.miny==1);
assert(r.maxx==3);
assert(r.maxy==3);
var r2 = rect(2,2,4,4);
var r3 = rect(5,5,6,6);
assert( hit(r,r2) );
assert( !hit(r,r3) );

var ir1 = intersect(r,r2);
p(ir1);
assert( ir1.minx==2 );
assert( ir1.miny==2 );
assert( ir1.maxy==3 );
assert( ir1.maxy==3 );
var ir2 = intersect(r2,r);
p(ir2);
assert( ir2.minx==2 );
assert( ir2.miny==2 );
assert( ir2.maxy==3 );
assert( ir2.maxy==3 );
var ir3 = intersect(r,r3);
assert(ir3==null);
var r4 = rect(0,0,10,10)
var ir4 = intersect(r,r4);
assert(ir4.minx==1);
assert(ir4.miny==1);
assert(ir4.maxx==3);
assert(ir4.maxy==3);

assert( area( rect(1,1,2,2) ) == (1*1) );
assert( area( rect(2,2,1,1) ) == (1*1) );
        
assert( min(1,2)==1);
assert( min(2,1)==1);
assert( max(2,1)==2);
assert( max(1,2)==2);

var t = now();
p("now():",t);
p("nowi():",nowi());

//
var a = new Array(1,-30,20,5);
var sa = numsort(a);
assert(sa[0]==-30);
assert(sa[1]==1);
assert(sa[2]==5);
assert(sa[3]==20);

// types
muststring( "hello" );
mustnumber( 1.5 );
mustobject( {a:1})
mustthrow( function() { muststring(1);  });
mustthrow( function() { mustnumber({a:1}); });
mustthrow( function() { mustobject("aaa");  });
    
