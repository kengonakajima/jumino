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


p("done");
