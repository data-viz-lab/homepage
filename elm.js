(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (_v0) {
	var width = _v0.width;
	var height = _v0.height;
	return _Utils_Tuple2(
		{height: height, width: width},
		$elm$core$Platform$Cmd$none);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$subscriptions = function (_v0) {
	return $elm$core$Platform$Sub$batch(_List_Nil);
};
var $author$project$Main$update = F2(
	function (msg, model) {
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $data_viz_lab$elm_chart_builder$Chart$Bar$Accessor = F3(
	function (xGroup, xValue, yValue) {
		return {xGroup: xGroup, xValue: xValue, yValue: yValue};
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Bar$accessor = A3(
	$data_viz_lab$elm_chart_builder$Chart$Bar$Accessor,
	A2(
		$elm$core$Basics$composeR,
		function ($) {
			return $.groupLabel;
		},
		$elm$core$Maybe$Just),
	function ($) {
		return $.x;
	},
	function ($) {
		return $.y;
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$scaleFrom255 = function (c) {
	return c / 255;
};
var $avh4$elm_color$Color$rgb255 = F3(
	function (r, g, b) {
		return A4(
			$avh4$elm_color$Color$RgbaSpace,
			$avh4$elm_color$Color$scaleFrom255(r),
			$avh4$elm_color$Color$scaleFrom255(g),
			$avh4$elm_color$Color$scaleFrom255(b),
			1.0);
	});
var $author$project$Bar$colorScheme = _List_fromArray(
	[
		A3($avh4$elm_color$Color$rgb255, 38, 70, 83),
		A3($avh4$elm_color$Color$rgb255, 233, 196, 106),
		A3($avh4$elm_color$Color$rgb255, 231, 111, 81)
	]);
var $author$project$Bar$data = _List_fromArray(
	[
		{groupLabel: 'A', x: 'a', y: 1000},
		{groupLabel: 'A', x: 'b', y: 1300},
		{groupLabel: 'A', x: 'c', y: 1600},
		{groupLabel: 'B', x: 'a', y: 1100},
		{groupLabel: 'B', x: 'b', y: 2300},
		{groupLabel: 'B', x: 'c', y: 1600}
	]);
var $author$project$Bar$height = 300;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityTableNoLabels = {$: 'AccessibilityTableNoLabels'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom = function (a) {
	return {$: 'Bottom', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorNone = {$: 'ColorNone'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand = function (a) {
	return {$: 'DomainBand', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous = function (a) {
	return {$: 'DomainContinuous', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime = function (a) {
	return {$: 'DomainTime', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left = function (a) {
	return {$: 'Left', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$LinearScale = {$: 'LinearScale'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoColumnTitle = {$: 'NoColumnTitle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoLabel = {$: 'NoLabel'};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultHeight = 400;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar = {$: 'GroupedBar'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultLayout = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultMargin = {bottom: 20, left: 30, right: 20, top: 1};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical = {$: 'Vertical'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultOrientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultWidth = 600;
var $elm$core$String$fromFloat = _String_fromNumber;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainBandStruct = {bandGroup: $elm$core$Maybe$Nothing, bandSingle: $elm$core$Maybe$Nothing, continuous: $elm$core$Maybe$Nothing};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainContinuousStruct = {x: $elm$core$Maybe$Nothing, y: $elm$core$Maybe$Nothing};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainTimeStruct = {x: $elm$core$Maybe$Nothing, y: $elm$core$Maybe$Nothing};
var $folkertdev$one_true_path_experiment$SubPath$Empty = {$: 'Empty'};
var $folkertdev$one_true_path_experiment$SubPath$empty = $folkertdev$one_true_path_experiment$SubPath$Empty;
var $folkertdev$one_true_path_experiment$LowLevel$Command$LineTo = function (a) {
	return {$: 'LineTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$lineTo = $folkertdev$one_true_path_experiment$LowLevel$Command$LineTo;
var $folkertdev$one_true_path_experiment$LowLevel$Command$MoveTo = function (a) {
	return {$: 'MoveTo', a: a};
};
var $folkertdev$one_true_path_experiment$LowLevel$Command$moveTo = $folkertdev$one_true_path_experiment$LowLevel$Command$MoveTo;
var $folkertdev$one_true_path_experiment$SubPath$SubPath = function (a) {
	return {$: 'SubPath', a: a};
};
var $folkertdev$elm_deque$Deque$Deque = function (a) {
	return {$: 'Deque', a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $folkertdev$elm_deque$Internal$rebalance = function (deque) {
	var sizeF = deque.sizeF;
	var sizeR = deque.sizeR;
	var front = deque.front;
	var rear = deque.rear;
	var size1 = ((sizeF + sizeR) / 2) | 0;
	var size2 = (sizeF + sizeR) - size1;
	var balanceConstant = 4;
	if ((sizeF + sizeR) < 2) {
		return deque;
	} else {
		if (_Utils_cmp(sizeF, (balanceConstant * sizeR) + 1) > 0) {
			var newRear = _Utils_ap(
				rear,
				$elm$core$List$reverse(
					A2($elm$core$List$drop, size1, front)));
			var newFront = A2($elm$core$List$take, size1, front);
			return {front: newFront, rear: newRear, sizeF: size1, sizeR: size2};
		} else {
			if (_Utils_cmp(sizeR, (balanceConstant * sizeF) + 1) > 0) {
				var newRear = A2($elm$core$List$take, size1, rear);
				var newFront = _Utils_ap(
					front,
					$elm$core$List$reverse(
						A2($elm$core$List$drop, size1, rear)));
				return {front: newFront, rear: newRear, sizeF: size1, sizeR: size2};
			} else {
				return deque;
			}
		}
	}
};
var $folkertdev$elm_deque$Internal$fromList = function (list) {
	return $folkertdev$elm_deque$Internal$rebalance(
		{
			front: list,
			rear: _List_Nil,
			sizeF: $elm$core$List$length(list),
			sizeR: 0
		});
};
var $folkertdev$elm_deque$Deque$fromList = A2($elm$core$Basics$composeL, $folkertdev$elm_deque$Deque$Deque, $folkertdev$elm_deque$Internal$fromList);
var $folkertdev$one_true_path_experiment$SubPath$with = F2(
	function (moveto, drawtos) {
		return $folkertdev$one_true_path_experiment$SubPath$SubPath(
			{
				drawtos: $folkertdev$elm_deque$Deque$fromList(drawtos),
				moveto: moveto
			});
	});
var $folkertdev$one_true_path_experiment$Curve$linear = function (points) {
	if (!points.b) {
		return $folkertdev$one_true_path_experiment$SubPath$empty;
	} else {
		var x = points.a;
		var xs = points.b;
		return A2(
			$folkertdev$one_true_path_experiment$SubPath$with,
			$folkertdev$one_true_path_experiment$LowLevel$Command$moveTo(x),
			_List_fromArray(
				[
					$folkertdev$one_true_path_experiment$LowLevel$Command$lineTo(xs)
				]));
	}
};
var $gampleman$elm_visualization$Shape$linearCurve = $folkertdev$one_true_path_experiment$Curve$linear;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Config = function (a) {
	return {$: 'Config', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Config(config);
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultConfig = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
	{
		accessibilityContent: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$AccessibilityTableNoLabels,
		annotations: _List_Nil,
		axisXBand: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisXContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisXTime: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Bottom(_List_Nil),
		axisYContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left(_List_Nil),
		colorResource: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorNone,
		coreStyle: _List_Nil,
		coreStyleFromPointBandX: $elm$core$Basics$always(_List_Nil),
		curve: function (d) {
			return $gampleman$elm_visualization$Shape$linearCurve(d);
		},
		domainBand: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainBandStruct),
		domainContinuous: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainContinuous($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainContinuousStruct),
		domainTime: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainTime($data_viz_lab$elm_chart_builder$Chart$Internal$Type$initialDomainTimeStruct),
		events: _List_Nil,
		height: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultHeight,
		histogramDomain: $elm$core$Maybe$Nothing,
		layout: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultLayout,
		margin: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultMargin,
		orientation: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultOrientation,
		showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoColumnTitle,
		showDataPoints: false,
		showGroupLabels: false,
		showLabels: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$NoLabel,
		showXAxis: true,
		showYAxis: true,
		svgDesc: '',
		svgTitle: '',
		symbols: _List_Nil,
		tableFloatFormat: $elm$core$String$fromFloat,
		tablePosixFormat: A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$String$fromInt),
		width: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultWidth,
		yScale: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$LinearScale,
		zone: $elm$time$Time$utc
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap = 2;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap = 4;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDimensions = F2(
	function (_v0, _v1) {
		var margin = _v0.margin;
		var width = _v0.width;
		var height = _v0.height;
		var c = _v1.a;
		var left = margin.left + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap;
		var bottom = margin.bottom + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					height: (height - margin.top) - bottom,
					margin: _Utils_update(
						margin,
						{bottom: bottom, left: left}),
					width: (width - left) - margin.right
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$init = function (c) {
	return A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setDimensions,
		{height: c.height, margin: c.margin, width: c.width},
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$defaultConfig);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand = function (a) {
	return {$: 'DataBand', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromExternalData = function (_v0) {
	var data = _v0.a;
	return data;
};
var $elm_community$list_extra$List$Extra$groupWhile = F2(
	function (isSameGroup, items) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					if (!acc.b) {
						return _List_fromArray(
							[
								_Utils_Tuple2(x, _List_Nil)
							]);
					} else {
						var _v1 = acc.a;
						var y = _v1.a;
						var restOfGroup = _v1.b;
						var groups = acc.b;
						return A2(isSameGroup, x, y) ? A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								x,
								A2($elm$core$List$cons, y, restOfGroup)),
							groups) : A2(
							$elm$core$List$cons,
							_Utils_Tuple2(x, _List_Nil),
							acc);
					}
				}),
			_List_Nil,
			items);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$List$sortWith = _List_sortWith;
var $elm$core$String$toFloat = _String_toFloat;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$sortStrings = F2(
	function (accessor, strings) {
		return A2(
			$elm$core$List$sortWith,
			F2(
				function (a_, b_) {
					var b = accessor(b_);
					var a = accessor(a_);
					var _v0 = _Utils_Tuple2(
						$elm$core$String$toFloat(a),
						$elm$core$String$toFloat(b));
					if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
						var floatA = _v0.a.a;
						var floatB = _v0.b.a;
						return A2($elm$core$Basics$compare, floatA, floatB);
					} else {
						return A2($elm$core$Basics$compare, a, b);
					}
				}),
			strings);
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataBand = F2(
	function (externalData, accessor) {
		var data = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromExternalData(externalData);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand(
			A2(
				$elm$core$List$map,
				function (d) {
					var groupLabel = accessor.xGroup(d.a);
					var firstPoint = function (p) {
						return _Utils_Tuple2(
							accessor.xValue(p),
							accessor.yValue(p));
					}(d.a);
					var points = A2(
						$elm$core$List$cons,
						firstPoint,
						A2(
							$elm$core$List$map,
							function (p) {
								return _Utils_Tuple2(
									accessor.xValue(p),
									accessor.yValue(p));
							},
							d.b));
					return {groupLabel: groupLabel, points: points};
				},
				A2(
					$elm_community$list_extra$List$Extra$groupWhile,
					F2(
						function (a, b) {
							return _Utils_eq(
								accessor.xGroup(a),
								accessor.xGroup(b));
						}),
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$sortStrings,
						A2(
							$elm$core$Basics$composeR,
							accessor.xGroup,
							$elm$core$Maybe$withDefault('')),
						data))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig = function (_v0) {
	var config = _v0.a;
	return config;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart = {$: 'RenderChart'};
var $elm_community$typed_svg$TypedSvg$Types$Translate = F2(
	function (a, b) {
		return {$: 'Translate', a: a, b: b};
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden = A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby = function (label) {
	return A2($elm$html$Html$Attributes$attribute, 'aria-labelledby', label);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent = function (c) {
	var _v0 = c.accessibilityContent;
	if (_v0.$ === 'AccessibilityNone') {
		return ((c.svgDesc !== '') && (c.svgTitle !== '')) ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgDesc + (' ' + c.svgTitle))
			]) : ((c.svgDesc !== '') ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgDesc)
			]) : ((c.svgTitle !== '') ? _List_fromArray(
			[
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledby(c.svgTitle)
			]) : _List_Nil));
	} else {
		return _List_fromArray(
			[$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden]);
	}
};
var $gampleman$elm_visualization$Scale$Scale = function (a) {
	return {$: 'Scale', a: a};
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $gampleman$elm_visualization$Scale$Band$normalizeConfig = function (_v0) {
	var paddingInner = _v0.paddingInner;
	var paddingOuter = _v0.paddingOuter;
	var align = _v0.align;
	return {
		align: A3($elm$core$Basics$clamp, 0, 1, align),
		paddingInner: A3($elm$core$Basics$clamp, 0, 1, paddingInner),
		paddingOuter: A3($elm$core$Basics$clamp, 0, 1, paddingOuter)
	};
};
var $gampleman$elm_visualization$Scale$Band$bandwidth = F3(
	function (cfg, domain, _v0) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		var n = $elm$core$List$length(domain);
		var _v1 = (_Utils_cmp(d0, d1) < 0) ? _Utils_Tuple2(d0, d1) : _Utils_Tuple2(d1, d0);
		var start = _v1.a;
		var stop = _v1.b;
		var _v2 = $gampleman$elm_visualization$Scale$Band$normalizeConfig(cfg);
		var paddingInner = _v2.paddingInner;
		var paddingOuter = _v2.paddingOuter;
		var step = (stop - start) / A2($elm$core$Basics$max, 1, (n - paddingInner) + (paddingOuter * 2));
		return step * (1 - paddingInner);
	});
var $gampleman$elm_visualization$Scale$Band$computePositions = F3(
	function (cfg, n, _v0) {
		var start = _v0.a;
		var stop = _v0.b;
		var _v1 = $gampleman$elm_visualization$Scale$Band$normalizeConfig(cfg);
		var paddingInner = _v1.paddingInner;
		var paddingOuter = _v1.paddingOuter;
		var align = _v1.align;
		var step = (stop - start) / A2($elm$core$Basics$max, 1, (n - paddingInner) + (paddingOuter * 2));
		var start2 = start + (((stop - start) - (step * (n - paddingInner))) * align);
		return _Utils_Tuple2(start2, step);
	});
var $gampleman$elm_visualization$Scale$Band$indexOfHelp = F3(
	function (index, value, list) {
		indexOfHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (_Utils_eq(value, x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$value = value,
						$temp$list = xs;
					index = $temp$index;
					value = $temp$value;
					list = $temp$list;
					continue indexOfHelp;
				}
			}
		}
	});
var $gampleman$elm_visualization$Scale$Band$indexOf = $gampleman$elm_visualization$Scale$Band$indexOfHelp(0);
var $gampleman$elm_visualization$Scale$Band$convert = F4(
	function (cfg, domain, _v0, value) {
		var start = _v0.a;
		var stop = _v0.b;
		var _v1 = A2($gampleman$elm_visualization$Scale$Band$indexOf, value, domain);
		if (_v1.$ === 'Just') {
			var index = _v1.a;
			var n = $elm$core$List$length(domain);
			if (_Utils_cmp(start, stop) < 0) {
				var _v2 = A3(
					$gampleman$elm_visualization$Scale$Band$computePositions,
					cfg,
					n,
					_Utils_Tuple2(start, stop));
				var start2 = _v2.a;
				var step = _v2.b;
				return start2 + (step * index);
			} else {
				var _v3 = A3(
					$gampleman$elm_visualization$Scale$Band$computePositions,
					cfg,
					n,
					_Utils_Tuple2(stop, start));
				var stop2 = _v3.a;
				var step = _v3.b;
				return stop2 + (step * ((n - index) - 1));
			}
		} else {
			return 0 / 0;
		}
	});
var $gampleman$elm_visualization$Scale$band = F3(
	function (config, range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			{
				bandwidth: A3($gampleman$elm_visualization$Scale$Band$bandwidth, config, domain_, range_),
				convert: $gampleman$elm_visualization$Scale$Band$convert(config),
				domain: domain_,
				range: range_
			});
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName = 'chart-builder__axis';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName = 'chart-builder__axis--x';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName = 'chart-builder__axis--y';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName = 'chart-builder__axis--y-right';
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $gampleman$elm_visualization$Scale$tickFormat = function (_v0) {
	var opts = _v0.a;
	return opts.tickFormat(opts.domain);
};
var $gampleman$elm_visualization$Scale$ticks = F2(
	function (_v0, count) {
		var scale = _v0.a;
		return A2(scale.ticks, scale.domain, count);
	});
var $gampleman$elm_visualization$Axis$computeOptions = F2(
	function (attrs, scale) {
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (attr, _v1) {
					var babyOpts = _v1.a;
					var post = _v1.b;
					switch (attr.$) {
						case 'TickCount':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickCount: val}),
								post);
						case 'TickSizeInner':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickSizeInner: val}),
								post);
						case 'TickSizeOuter':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickSizeOuter: val}),
								post);
						case 'TickPadding':
							var val = attr.a;
							return _Utils_Tuple2(
								_Utils_update(
									babyOpts,
									{tickPadding: val}),
								post);
						default:
							return _Utils_Tuple2(
								babyOpts,
								A2($elm$core$List$cons, attr, post));
					}
				}),
			_Utils_Tuple2(
				{tickCount: 10, tickPadding: 3, tickSizeInner: 6, tickSizeOuter: 6},
				_List_Nil),
			attrs);
		var opts = _v0.a;
		var postList = _v0.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (attr, options) {
					switch (attr.$) {
						case 'Ticks':
							var val = attr.a;
							return _Utils_update(
								options,
								{ticks: val});
						case 'TickFormat':
							var val = attr.a;
							return _Utils_update(
								options,
								{tickFormat: val});
						default:
							return options;
					}
				}),
			{
				tickCount: opts.tickCount,
				tickFormat: A2($gampleman$elm_visualization$Scale$tickFormat, scale, opts.tickCount),
				tickPadding: opts.tickPadding,
				tickSizeInner: opts.tickSizeInner,
				tickSizeOuter: opts.tickSizeOuter,
				ticks: A2($gampleman$elm_visualization$Scale$ticks, scale, opts.tickCount)
			},
			postList);
	});
var $gampleman$elm_visualization$Scale$convert = F2(
	function (_v0, value) {
		var scale = _v0.a;
		return A3(scale.convert, scale.domain, scale.range, value);
	});
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$dy = _VirtualDom_attribute('dy');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fontFamily = _VirtualDom_attribute('font-family');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $gampleman$elm_visualization$Scale$rangeExtent = function (_v0) {
	var options = _v0.a;
	return A2(options.rangeExtent, options.domain, options.range);
};
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $gampleman$elm_visualization$Axis$element = F4(
	function (_v0, k, displacement, textAnchorPosition) {
		var x = _v0.x;
		var y = _v0.y;
		var x1 = _v0.x1;
		var x2 = _v0.x2;
		var y1 = _v0.y1;
		var y2 = _v0.y2;
		var translate = _v0.translate;
		var horizontal = _v0.horizontal;
		return F2(
			function (attrs, scale) {
				var rangeExtent = $gampleman$elm_visualization$Scale$rangeExtent(scale);
				var range1 = rangeExtent.b + 0.5;
				var range0 = rangeExtent.a + 0.5;
				var position = $gampleman$elm_visualization$Scale$convert(scale);
				var opts = A2($gampleman$elm_visualization$Axis$computeOptions, attrs, scale);
				var spacing = A2($elm$core$Basics$max, opts.tickSizeInner, 0) + opts.tickPadding;
				var drawTick = function (tick) {
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$class('tick'),
								$elm$svg$Svg$Attributes$transform(
								translate(
									position(tick)))
							]),
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$line,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$stroke('#000'),
										x2(k * opts.tickSizeInner),
										y1(0.5),
										y2(0.5)
									]),
								_List_Nil),
								A2(
								$elm$svg$Svg$text_,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$fill('#000'),
										x(k * spacing),
										y(0.5),
										$elm$svg$Svg$Attributes$dy(displacement)
									]),
								_List_fromArray(
									[
										$elm$svg$Svg$text(
										opts.tickFormat(tick))
									]))
							]));
				};
				var domainLine = horizontal ? ('M' + ($elm$core$String$fromFloat(k * opts.tickSizeOuter) + (',' + ($elm$core$String$fromFloat(range0) + ('H0.5V' + ($elm$core$String$fromFloat(range1) + ('H' + $elm$core$String$fromFloat(k * opts.tickSizeOuter)))))))) : ('M' + ($elm$core$String$fromFloat(range0) + (',' + ($elm$core$String$fromFloat(k * opts.tickSizeOuter) + ('V0.5H' + ($elm$core$String$fromFloat(range1) + ('V' + $elm$core$String$fromFloat(k * opts.tickSizeOuter))))))));
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('none'),
							$elm$svg$Svg$Attributes$fontSize('10'),
							$elm$svg$Svg$Attributes$fontFamily('sans-serif'),
							$elm$svg$Svg$Attributes$textAnchor(textAnchorPosition)
						]),
					A2(
						$elm$core$List$cons,
						A2(
							$elm$svg$Svg$path,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('domain'),
									$elm$svg$Svg$Attributes$stroke('#000'),
									$elm$svg$Svg$Attributes$d(domainLine)
								]),
							_List_Nil),
						A2($elm$core$List$map, drawTick, opts.ticks)));
			});
	});
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $gampleman$elm_visualization$Axis$verticalAttrs = {
	horizontal: false,
	translate: function (x) {
		return 'translate(' + ($elm$core$String$fromFloat(x) + ', 0)');
	},
	x: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y, $elm$core$String$fromFloat),
	x1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y1, $elm$core$String$fromFloat),
	x2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y2, $elm$core$String$fromFloat),
	y: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x, $elm$core$String$fromFloat),
	y1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x1, $elm$core$String$fromFloat),
	y2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x2, $elm$core$String$fromFloat)
};
var $gampleman$elm_visualization$Axis$bottom = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$verticalAttrs, 1, '0.71em', 'middle');
var $elm_community$typed_svg$TypedSvg$Core$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm_community$typed_svg$TypedSvg$Attributes$class = function (names) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'class',
		A2($elm$core$String$join, ' ', names));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName = 'chart-builder__component';
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm_community$typed_svg$TypedSvg$Core$node = $elm$virtual_dom$VirtualDom$nodeNS('http://www.w3.org/2000/svg');
var $elm_community$typed_svg$TypedSvg$g = $elm_community$typed_svg$TypedSvg$Core$node('g');
var $gampleman$elm_visualization$Axis$horizontalAttrs = {
	horizontal: true,
	translate: function (y) {
		return 'translate(0, ' + ($elm$core$String$fromFloat(y) + ')');
	},
	x: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x, $elm$core$String$fromFloat),
	x1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x1, $elm$core$String$fromFloat),
	x2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$x2, $elm$core$String$fromFloat),
	y: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y, $elm$core$String$fromFloat),
	y1: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y1, $elm$core$String$fromFloat),
	y2: A2($elm$core$Basics$composeL, $elm$svg$Svg$Attributes$y2, $elm$core$String$fromFloat)
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $gampleman$elm_visualization$Axis$left = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$horizontalAttrs, -1, '0.32em', 'end');
var $gampleman$elm_visualization$Axis$right = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$horizontalAttrs, 1, '0.32em', 'start');
var $gampleman$elm_visualization$Axis$TickPadding = function (a) {
	return {$: 'TickPadding', a: a};
};
var $gampleman$elm_visualization$Axis$tickPadding = $gampleman$elm_visualization$Axis$TickPadding;
var $gampleman$elm_visualization$Axis$TickSizeInner = function (a) {
	return {$: 'TickSizeInner', a: a};
};
var $gampleman$elm_visualization$Axis$tickSizeInner = $gampleman$elm_visualization$Axis$TickSizeInner;
var $gampleman$elm_visualization$Axis$TickSizeOuter = function (a) {
	return {$: 'TickSizeOuter', a: a};
};
var $gampleman$elm_visualization$Axis$tickSizeOuter = $gampleman$elm_visualization$Axis$TickSizeOuter;
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm_community$typed_svg$TypedSvg$TypesToStrings$transformToString = function (xform) {
	var tr = F2(
		function (name, args) {
			return $elm$core$String$concat(
				_List_fromArray(
					[
						name,
						'(',
						A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, $elm$core$String$fromFloat, args)),
						')'
					]));
		});
	switch (xform.$) {
		case 'Matrix':
			var a = xform.a;
			var b = xform.b;
			var c = xform.c;
			var d = xform.d;
			var e = xform.e;
			var f = xform.f;
			return A2(
				tr,
				'matrix',
				_List_fromArray(
					[a, b, c, d, e, f]));
		case 'Rotate':
			var a = xform.a;
			var x = xform.b;
			var y = xform.c;
			return A2(
				tr,
				'rotate',
				_List_fromArray(
					[a, x, y]));
		case 'Scale':
			var x = xform.a;
			var y = xform.b;
			return A2(
				tr,
				'scale',
				_List_fromArray(
					[x, y]));
		case 'SkewX':
			var x = xform.a;
			return A2(
				tr,
				'skewX',
				_List_fromArray(
					[x]));
		case 'SkewY':
			var y = xform.a;
			return A2(
				tr,
				'skewY',
				_List_fromArray(
					[y]));
		default:
			var x = xform.a;
			var y = xform.b;
			return A2(
				tr,
				'translate',
				_List_fromArray(
					[x, y]));
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$transform = function (transforms) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'transform',
		A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, $elm_community$typed_svg$TypedSvg$TypesToStrings$transformToString, transforms)));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis = F3(
	function (c, iconOffset, continuousScale) {
		if (c.showYAxis) {
			var _v0 = _Utils_Tuple2(c.orientation, c.axisYContinuous);
			if (_v0.a.$ === 'Vertical') {
				switch (_v0.b.$) {
					case 'Left':
						var _v1 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, iconOffset + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$left, attributes, continuousScale)
									]))
							]);
					case 'Right':
						var _v2 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, (c.width + c.margin.left) + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, iconOffset + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$right, attributes, continuousScale)
									]))
							]);
					default:
						var _v3 = _v0.a;
						var attributes = _v0.b.a;
						var rightAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(c.width),
									$gampleman$elm_visualization$Axis$tickPadding(c.margin.right + c.margin.left),
									$gampleman$elm_visualization$Axis$tickSizeOuter(0)
								]));
						var leftAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(0)
								]));
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, iconOffset + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$left, leftAttrs, continuousScale)
									])),
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$right, rightAttrs, continuousScale)
									]))
							]);
				}
			} else {
				switch (_v0.b.$) {
					case 'Left':
						var _v4 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, attributes, continuousScale)
									]))
							]);
					case 'Right':
						var _v5 = _v0.a;
						var attributes = _v0.b.a;
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, attributes, continuousScale)
									]))
							]);
					default:
						var _v6 = _v0.a;
						var attributes = _v0.b.a;
						var topAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(c.height),
									$gampleman$elm_visualization$Axis$tickSizeOuter(0),
									$gampleman$elm_visualization$Axis$tickPadding(c.margin.top + c.margin.bottom)
								]));
						var bottomAttrs = _Utils_ap(
							attributes,
							_List_fromArray(
								[
									$gampleman$elm_visualization$Axis$tickSizeInner(0)
								]));
						return _List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap) + c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, bottomAttrs, continuousScale)
									])),
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, c.margin.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYRightClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								_List_fromArray(
									[
										A2($gampleman$elm_visualization$Axis$bottom, topAttrs, continuousScale)
									]))
							]);
				}
			}
		} else {
			return _List_Nil;
		}
	});
var $gampleman$elm_visualization$Scale$toRenderable = F2(
	function (toString, _v0) {
		var scale = _v0.a;
		return $gampleman$elm_visualization$Scale$Scale(
			{
				convert: F3(
					function (dmn, rng, value) {
						return A3(scale.convert, dmn, rng, value) + (A2($elm$core$Basics$max, scale.bandwidth - 1, 0) / 2);
					}),
				domain: scale.domain,
				range: scale.range,
				rangeExtent: F2(
					function (_v1, rng) {
						return rng;
					}),
				tickFormat: F2(
					function (_v2, _v3) {
						return toString;
					}),
				ticks: F2(
					function (dmn, _v4) {
						return dmn;
					})
			});
	});
var $gampleman$elm_visualization$Axis$top = A4($gampleman$elm_visualization$Axis$element, $gampleman$elm_visualization$Axis$verticalAttrs, -1, '0em', 'middle');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis = F2(
	function (c, bandScale) {
		if (c.showXAxis) {
			var _v0 = _Utils_Tuple2(c.orientation, c.axisXBand);
			if (_v0.a.$ === 'Vertical') {
				if (_v0.b.$ === 'Bottom') {
					var _v1 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, (c.height + $data_viz_lab$elm_chart_builder$Chart$Internal$Type$bottomGap) + c.margin.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$bottom,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				} else {
					var _v2 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left, c.margin.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisXClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$top,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				}
			} else {
				if (_v0.b.$ === 'Bottom') {
					var _v3 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, c.margin.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$left,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				} else {
					var _v4 = _v0.a;
					var attributes = _v0.b.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, c.margin.left - $data_viz_lab$elm_chart_builder$Chart$Internal$Type$leftGap, c.margin.top)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$axisYClassName, $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							_List_fromArray(
								[
									A2(
									$gampleman$elm_visualization$Axis$right,
									attributes,
									A2($gampleman$elm_visualization$Scale$toRenderable, $elm$core$Basics$identity, bandScale))
								]))
						]);
				}
			}
		} else {
			return _List_Nil;
		}
	});
var $gampleman$elm_visualization$Scale$bandwidth = function (_v0) {
	var scale = _v0.a;
	return scale.bandwidth;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName = 'chart-builder--bar';
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $gampleman$elm_visualization$Scale$clamp = function (_v0) {
	var scale = _v0.a;
	var convert_ = F3(
		function (_v1, range_, value) {
			var mi = _v1.a;
			var ma = _v1.b;
			return A3(
				scale.convert,
				_Utils_Tuple2(mi, ma),
				range_,
				A3(
					$elm$core$Basics$clamp,
					A2($elm$core$Basics$min, mi, ma),
					A2($elm$core$Basics$max, mi, ma),
					value));
		});
	return $gampleman$elm_visualization$Scale$Scale(
		_Utils_update(
			scale,
			{convert: convert_}));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName = 'chart-builder__column';
var $elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges = {$: 'RenderCrispEdges'};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$round = _Basics_round;
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor = F2(
	function (palette, idx) {
		var moduleIndex = A2(
			$elm$core$Basics$modBy,
			$elm$core$List$length(palette),
			idx);
		return $avh4$elm_color$Color$toCssString(
			A2(
				$elm$core$Maybe$withDefault,
				$avh4$elm_color$Color$white,
				$elm$core$List$head(
					A2($elm$core$List$drop, moduleIndex, palette))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle = F3(
	function (c, idx, interpolatorInput) {
		var _v0 = _Utils_Tuple3(c.colorResource, idx, interpolatorInput);
		_v0$3:
		while (true) {
			switch (_v0.a.$) {
				case 'ColorPalette':
					if (_v0.b.$ === 'Just') {
						var colors = _v0.a.a;
						var i = _v0.b.a;
						return 'fill: ' + (A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, i) + (';stroke: ' + A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, i)));
					} else {
						break _v0$3;
					}
				case 'ColorInterpolator':
					if (_v0.c.$ === 'Just') {
						var interpolator = _v0.a.a;
						var i = _v0.c.a;
						return 'fill: ' + ($avh4$elm_color$Color$toCssString(
							interpolator(i)) + (';stroke: ' + $avh4$elm_color$Color$toCssString(
							interpolator(i))));
					} else {
						break _v0$3;
					}
				case 'Color':
					if ((_v0.b.$ === 'Nothing') && (_v0.c.$ === 'Nothing')) {
						var color = _v0.a.a;
						var _v1 = _v0.b;
						var _v2 = _v0.c;
						return 'fill: ' + ($avh4$elm_color$Color$toCssString(color) + (';stroke: ' + $avh4$elm_color$Color$toCssString(color)));
					} else {
						break _v0$3;
					}
				default:
					break _v0$3;
			}
		}
		return 'stroke:grey';
	});
var $elm_community$typed_svg$TypedSvg$Core$text = $elm$virtual_dom$VirtualDom$text;
var $elm_community$typed_svg$TypedSvg$title = $elm_community$typed_svg$TypedSvg$Core$node('title');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText = F2(
	function (config, point) {
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showColumnTitle;
		switch (_v1.$) {
			case 'YColumnTitle':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalColumnTitle':
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString = function (length) {
	switch (length.$) {
		case 'Cm':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'cm';
		case 'Em':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'em';
		case 'Ex':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'ex';
		case 'In':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'in';
		case 'Mm':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'mm';
		case 'Num':
			var x = length.a;
			return $elm$core$String$fromFloat(x);
		case 'Pc':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'pc';
		case 'Percent':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + '%';
		case 'Pt':
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'pt';
		default:
			var x = length.a;
			return $elm$core$String$fromFloat(x) + 'px';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$height = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'height',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Types$Px = function (a) {
	return {$: 'Px', a: a};
};
var $elm_community$typed_svg$TypedSvg$Types$px = $elm_community$typed_svg$TypedSvg$Types$Px;
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$height = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$height(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Types$AnchorStart = {$: 'AnchorStart'};
var $elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle = {$: 'DominantBaselineMiddle'};
var $elm_community$typed_svg$TypedSvg$TypesToStrings$dominantBaselineToString = function (dominantBaseline) {
	switch (dominantBaseline.$) {
		case 'DominantBaselineAuto':
			return 'auto';
		case 'DominantBaselineUseScript':
			return 'use-script';
		case 'DominantBaselineNoChange':
			return 'no-change';
		case 'DominantBaselineResetSize':
			return 'reset-size';
		case 'DominantBaselineIdeographic':
			return 'ideographic';
		case 'DominantBaselineAlphabetic':
			return 'alphabetic';
		case 'DominantBaselineHanging':
			return 'hanging';
		case 'DominantBaselineMathematical':
			return 'mathematical';
		case 'DominantBaselineCentral':
			return 'central';
		case 'DominantBaselineMiddle':
			return 'middle';
		case 'DominantBaselineTextAfterEdge':
			return 'text-after-edge';
		case 'DominantBaselineTextBeforeEdge':
			return 'text-before-edge';
		default:
			return 'inherit';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline = function (baseline) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'dominant-baseline',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$dominantBaselineToString(baseline));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName = 'chart-builder__label';
var $elm_community$typed_svg$TypedSvg$TypesToStrings$anchorAlignmentToString = function (anchorAlignment) {
	switch (anchorAlignment.$) {
		case 'AnchorInherit':
			return 'inherit';
		case 'AnchorStart':
			return 'start';
		case 'AnchorMiddle':
			return 'middle';
		default:
			return 'end';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$textAnchor = function (anchorAlignment) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'text-anchor',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$anchorAlignmentToString(anchorAlignment));
};
var $elm_community$typed_svg$TypedSvg$text_ = $elm_community$typed_svg$TypedSvg$Core$node('text');
var $elm_community$typed_svg$TypedSvg$Attributes$x = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'x',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$x = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$x(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$y = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'y',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$y = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$y(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalLabel = F4(
	function (config, xPos, yPos, point) {
		var txt = $elm_community$typed_svg$TypedSvg$text_(
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos),
					$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorStart),
					$elm_community$typed_svg$TypedSvg$Attributes$dominantBaseline($elm_community$typed_svg$TypedSvg$Types$DominantBaselineMiddle),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
				]));
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showLabels;
		switch (_v1.$) {
			case 'YLabel':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalLabel':
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol = {$: 'NoSymbol'};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex = F2(
	function (all, idx) {
		return ($elm$core$List$length(all) > 0) ? A2(
			$elm$core$Maybe$withDefault,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol,
			A2(
				$elm_community$list_extra$List$Extra$getAt,
				A2(
					$elm$core$Basics$modBy,
					$elm$core$List$length(all),
					idx),
				all)) : $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$NoSymbol;
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles = F2(
	function (_new, existing) {
		return A2(
			$elm$core$String$join,
			';',
			A3(
				$elm$core$List$foldl,
				F2(
					function (newTuple, existingStrings) {
						var newString = newTuple.a + (':' + newTuple.b);
						var existingString = A2($elm$core$String$join, ';', existingStrings);
						return A2($elm$core$String$contains, newTuple.a, existingString) ? A2(
							$elm$core$List$cons,
							newString,
							A2(
								$elm$core$List$filter,
								function (s) {
									return function (v) {
										return !_Utils_eq(v, newTuple.a);
									}(
										A2(
											$elm$core$Maybe$withDefault,
											'',
											$elm$core$List$head(
												A2($elm$core$String$split, ':', s))));
								},
								existingStrings)) : A2($elm$core$List$cons, newString, existingStrings);
					}),
				A2($elm$core$String$split, ';', existing),
				_new));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons = function (_v0) {
	var c = _v0.a;
	return function (l) {
		return l > 0;
	}(
		$elm$core$List$length(c.symbols));
};
var $elm_community$typed_svg$TypedSvg$Attributes$style = function (value) {
	return A2($elm_community$typed_svg$TypedSvg$Core$attribute, 'style', value);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName = 'chart-builder__symbol';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap = 2.0;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId = function (symbol) {
	switch (symbol.$) {
		case 'Circle':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Custom':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Corner':
			var identifier = symbol.a.identifier;
			return identifier;
		case 'Triangle':
			var identifier = symbol.a.identifier;
			return identifier;
		default:
			return '';
	}
};
var $elm_community$typed_svg$TypedSvg$use = $elm_community$typed_svg$TypedSvg$Core$node('use');
var $elm$virtual_dom$VirtualDom$attributeNS = F3(
	function (namespace, key, value) {
		return A3(
			_VirtualDom_attributeNS,
			namespace,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm_community$typed_svg$TypedSvg$Core$attributeNS = $elm$virtual_dom$VirtualDom$attributeNS;
var $elm_community$typed_svg$TypedSvg$Attributes$xlinkHref = A2($elm_community$typed_svg$TypedSvg$Core$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalSymbol = F2(
	function (config, _v0) {
		var idx = _v0.idx;
		var w = _v0.w;
		var y_ = _v0.y_;
		var styleStr = _v0.styleStr;
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).symbols,
			idx);
		var symbolRef = _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$use,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$xlinkHref(
						'#' + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
					]),
				_List_Nil)
			]);
		var st = function (styles) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, styles, styleStr));
		};
		if ($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config)) {
			switch (symbol.$) {
				case 'Triangle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Circle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Corner':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Custom':
					var c = symbol.a;
					var gap = c.useGap ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap : 0;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, w + gap, y_)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				default:
					return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap = 2;
var $elm_community$typed_svg$TypedSvg$rect = $elm_community$typed_svg$TypedSvg$Core$node('rect');
var $elm_community$typed_svg$TypedSvg$TypesToStrings$shapeRenderingToString = function (shapeRendering) {
	switch (shapeRendering.$) {
		case 'RenderAuto':
			return 'auto';
		case 'RenderOptimizeSpeed':
			return 'optimizeSpeed';
		case 'RenderCrispEdges':
			return 'crispEdges';
		case 'RenderGeometricPrecision':
			return 'geometricPrecision';
		default:
			return 'inherit';
	}
};
var $elm_community$typed_svg$TypedSvg$Attributes$shapeRendering = function (rendering) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'shape-rendering',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$shapeRenderingToString(rendering));
};
var $elm_community$typed_svg$TypedSvg$Attributes$width = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'width',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$width = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$width(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRect = F6(
	function (config, bandSingleScale, continuousScale, colorScale, idx, point) {
		var h = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var labelOffset = $elm$core$List$isEmpty(c.symbols) ? 0 : h;
		var _v0 = point;
		var x__ = _v0.a;
		var y__ = _v0.b;
		var coreStyleFromX = c.coreStyleFromPointBandX(x__);
		var y_ = A2($gampleman$elm_visualization$Scale$convert, bandSingleScale, x__);
		var colorStyles = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
			c,
			$elm$core$Maybe$Just(idx),
			$elm$core$Maybe$Just(
				A2($gampleman$elm_visualization$Scale$convert, colorScale, y__)));
		var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
				coreStyleFromX,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, c.coreStyle, colorStyles)));
		var w = A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__);
		var label = A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalLabel, config, (w + $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap) + labelOffset, y_ + (h / 2), point);
		var rect_ = A2(
			$elm_community$typed_svg$TypedSvg$rect,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(0),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(y_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(w),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(h),
					$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
					coreStyle
				]),
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText, config, point));
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalSymbol,
			config,
			{h: h, idx: idx, styleStr: colorStyles, w: w, y_: y_});
		return A2(
			$elm$core$List$cons,
			rect_,
			_Utils_ap(symbol, label));
	});
var $elm_community$typed_svg$TypedSvg$Types$AnchorMiddle = {$: 'AnchorMiddle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalLabel = F4(
	function (config, xPos, yPos, point) {
		var txt = $elm_community$typed_svg$TypedSvg$text_(
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(xPos),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(yPos),
					$elm_community$typed_svg$TypedSvg$Attributes$textAnchor($elm_community$typed_svg$TypedSvg$Types$AnchorMiddle),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$labelClassName]))
				]));
		var _v0 = point;
		var xVal = _v0.a;
		var yVal = _v0.b;
		var _v1 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).showLabels;
		switch (_v1.$) {
			case 'YLabel':
				var formatter = _v1.a;
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(yVal))
							]))
					]);
			case 'XOrdinalLabel':
				return _List_fromArray(
					[
						txt(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(xVal)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace = F3(
	function (orientation, localDimension, conf) {
		if (orientation.$ === 'Horizontal') {
			var scalingFactor = localDimension / conf.viewBoxHeight;
			return scalingFactor * conf.viewBoxWidth;
		} else {
			var scalingFactor = localDimension / conf.viewBoxWidth;
			return scalingFactor * conf.viewBoxHeight;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalSymbol = F2(
	function (config, _v0) {
		var idx = _v0.idx;
		var w = _v0.w;
		var y_ = _v0.y_;
		var x_ = _v0.x_;
		var styleStr = _v0.styleStr;
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$getSymbolByIndex,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).symbols,
			idx);
		var symbolRef = _List_fromArray(
			[
				A2(
				$elm_community$typed_svg$TypedSvg$use,
				_List_fromArray(
					[
						$elm_community$typed_svg$TypedSvg$Attributes$xlinkHref(
						'#' + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
					]),
				_List_Nil)
			]);
		var st = function (styles) {
			return $elm_community$typed_svg$TypedSvg$Attributes$style(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, styles, styleStr));
		};
		if ($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config)) {
			switch (symbol.$) {
				case 'Triangle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Circle':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Corner':
					var c = symbol.a;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - w) - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				case 'Custom':
					var c = symbol.a;
					var space = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical, w, c);
					var gap = c.useGap ? $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap : 0;
					return _List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A2($elm_community$typed_svg$TypedSvg$Types$Translate, x_, (y_ - space) - gap)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$symbolClassName])),
									st(c.styles)
								]),
							symbolRef)
						]);
				default:
					return _List_Nil;
			}
		} else {
			return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRect = F7(
	function (config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point) {
		var w = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var labelOffset = $elm$core$List$isEmpty(c.symbols) ? 0 : w;
		var _v0 = point;
		var x__ = _v0.a;
		var y__ = _v0.b;
		var coreStyleFromX = c.coreStyleFromPointBandX(x__);
		var x_ = A2($gampleman$elm_visualization$Scale$convert, bandSingleScale, x__);
		var colorStyles = A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorStyle,
			c,
			$elm$core$Maybe$Just(idx),
			$elm$core$Maybe$Just(
				A2($gampleman$elm_visualization$Scale$convert, colorScale, y__)));
		var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
				coreStyleFromX,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles, c.coreStyle, colorStyles)));
		var h = (c.height - A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__)) - iconOffset;
		var y_ = A2($gampleman$elm_visualization$Scale$convert, continuousScale, y__) + iconOffset;
		var label = A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalLabel, config, x_ + (w / 2), (y_ - $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$labelGap) - labelOffset, point);
		var rect_ = A2(
			$elm_community$typed_svg$TypedSvg$rect,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(x_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(y_),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(w),
					$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(h),
					$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
					coreStyle
				]),
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columnTitleText, config, point));
		var symbol = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalSymbol,
			config,
			{idx: idx, styleStr: colorStyles, w: w, x_: x_, y_: y_});
		return A2(
			$elm$core$List$cons,
			rect_,
			_Utils_ap(symbol, label));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$column = F7(
	function (config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point) {
		var rectangle = function () {
			var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
			if (_v0.$ === 'Vertical') {
				return A7($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRect, config, iconOffset, bandSingleScale, continuousScale, colorScale, idx, point);
			} else {
				return A6($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRect, config, bandSingleScale, continuousScale, colorScale, idx, point);
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[
							$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
							$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
						]))
				]),
			rectangle);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$dataGroupClassName = 'chart-builder__data-group';
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation = F2(
	function (bandGroupScale, dataGroup) {
		var _v0 = dataGroup.groupLabel;
		if (_v0.$ === 'Nothing') {
			return 0;
		} else {
			var l = _v0.a;
			return A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, l);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columns = F7(
	function (config, iconOffset, bandGroupScale, bandSingleScale, continuousScale, colorScale, dataGroup) {
		var tr = function () {
			var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
			if (_v0.$ === 'Vertical') {
				return A2(
					$elm_community$typed_svg$TypedSvg$Types$Translate,
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation, bandGroupScale, dataGroup),
					0);
			} else {
				return A2(
					$elm_community$typed_svg$TypedSvg$Types$Translate,
					0,
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$dataGroupTranslation, bandGroupScale, dataGroup));
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$transform(
					_List_fromArray(
						[tr])),
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$dataGroupClassName]))
				]),
			A2(
				$elm$core$List$indexedMap,
				A5($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$column, config, iconOffset, bandSingleScale, continuousScale, colorScale),
				dataGroup.points));
	});
var $gampleman$elm_visualization$Scale$defaultBandConfig = {align: 0.5, paddingInner: 0.0, paddingOuter: 0.0};
var $elm_community$typed_svg$TypedSvg$desc = $elm_community$typed_svg$TypedSvg$Core$node('desc');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle = function (c) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (_v0, acc) {
				var el = _v0.a;
				var str = _v0.b;
				return (str === '') ? acc : A2(
					$elm$core$List$cons,
					el(
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(str)
							])),
					acc);
			}),
		_List_Nil,
		_List_fromArray(
			[
				_Utils_Tuple2(
				$elm_community$typed_svg$TypedSvg$title(_List_Nil),
				c.svgTitle),
				_Utils_Tuple2(
				$elm_community$typed_svg$TypedSvg$desc(_List_Nil),
				c.svgDesc)
			]));
};
var $elm$html$Html$figure = _VirtualDom_node('figure');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange = F3(
	function (config, width, height) {
		var orientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
		if (orientation.$ === 'Horizontal') {
			return _Utils_Tuple2(height, 0);
		} else {
			return _Utils_Tuple2(0, width);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange = F2(
	function (config, value) {
		var orientation = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).orientation;
		if (orientation.$ === 'Horizontal') {
			return _Utils_Tuple2(
				$elm$core$Basics$floor(value),
				0);
		} else {
			return _Utils_Tuple2(
				0,
				$elm$core$Basics$floor(value));
		}
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace = F3(
	function (orientation, bandSingleScale, symbols) {
		var localDimension = $elm$core$Basics$floor(
			$gampleman$elm_visualization$Scale$bandwidth(bandSingleScale));
		return $elm$core$Basics$floor(
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$List$maximum(
					A2(
						$elm$core$List$map,
						function (symbol) {
							switch (symbol.$) {
								case 'Circle':
									return localDimension / 2;
								case 'Custom':
									var conf = symbol.a;
									return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolCustomSpace, orientation, localDimension, conf);
								case 'Corner':
									return localDimension;
								case 'Triangle':
									return localDimension;
								default:
									return 0;
							}
						},
						symbols))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange = F5(
	function (config, renderContext, width, height, bandScale) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var layout = c.layout;
		var orientation = c.orientation;
		if (orientation.$ === 'Horizontal') {
			if (layout.$ === 'GroupedBar') {
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? _Utils_Tuple2(
					0,
					(width - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap) - A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, c.orientation, bandScale, c.symbols)) : _Utils_Tuple2(0, width);
			} else {
				if (renderContext.$ === 'RenderChart') {
					return _Utils_Tuple2(width, 0);
				} else {
					return _Utils_Tuple2(0, width);
				}
			}
		} else {
			if (layout.$ === 'GroupedBar') {
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? _Utils_Tuple2(
					(height - $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap) - A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, c.orientation, bandScale, c.symbols),
					0) : _Utils_Tuple2(height, 0);
			} else {
				return _Utils_Tuple2(height, 0);
			}
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth = function (data) {
	return $elm$core$List$length(
		A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			$elm$core$List$head(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)))));
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand = function (_v0) {
	var d = _v0.a;
	return d;
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBand = function (config) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).domainBand);
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData = F2(
	function (data, config) {
		var domain = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBand(config);
		var d = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDomainBand(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$DomainBand(
				{
					bandGroup: function () {
						var _v0 = domain.bandGroup;
						if (_v0.$ === 'Just') {
							var bandGroup = _v0.a;
							return $elm$core$Maybe$Just(bandGroup);
						} else {
							return $elm$core$Maybe$Just(
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (i, g) {
											return A2(
												$elm$core$Maybe$withDefault,
												$elm$core$String$fromInt(i),
												g);
										}),
									A2(
										$elm$core$List$map,
										function ($) {
											return $.groupLabel;
										},
										d)));
						}
					}(),
					bandSingle: function () {
						var _v1 = domain.bandSingle;
						if (_v1.$ === 'Just') {
							var bandSingle = _v1.a;
							return $elm$core$Maybe$Just(bandSingle);
						} else {
							return $elm$core$Maybe$Just(
								A3(
									$elm$core$List$foldr,
									F2(
										function (x, acc) {
											return A2($elm$core$List$member, x, acc) ? acc : A2($elm$core$List$cons, x, acc);
										}),
									_List_Nil,
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$first,
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												function ($) {
													return $.points;
												},
												d)))));
						}
					}(),
					continuous: function () {
						var _v2 = domain.continuous;
						if (_v2.$ === 'Just') {
							var continuous = _v2.a;
							return $elm$core$Maybe$Just(continuous);
						} else {
							return $elm$core$Maybe$Just(
								function (dd) {
									var _v3 = c.layout;
									if ((_v3.$ === 'StackedBar') && (_v3.a.$ === 'Diverging')) {
										var _v4 = _v3.a;
										return _Utils_Tuple2(
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$minimum(dd)),
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									} else {
										return _Utils_Tuple2(
											0,
											A2(
												$elm$core$Maybe$withDefault,
												0,
												$elm$core$List$maximum(dd)));
									}
								}(
									A2(
										$elm$core$List$map,
										$elm$core$Tuple$second,
										$elm$core$List$concat(
											A2(
												$elm$core$List$map,
												function ($) {
													return $.points;
												},
												d)))));
						}
					}()
				}));
	});
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $gampleman$elm_visualization$Scale$Continuous$normalize = F2(
	function (a, b) {
		var c = b - a;
		return (!c) ? $elm$core$Basics$always(0.5) : ($elm$core$Basics$isNaN(c) ? $elm$core$Basics$always(0 / 0) : function (x) {
			return (x - a) / c;
		});
	});
var $gampleman$elm_visualization$Scale$Continuous$bimap = F3(
	function (_v0, _v1, interpolate) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		var r0 = _v1.a;
		var r1 = _v1.b;
		var _v2 = (_Utils_cmp(d1, d0) < 0) ? _Utils_Tuple2(
			A2($gampleman$elm_visualization$Scale$Continuous$normalize, d1, d0),
			A2(interpolate, r1, r0)) : _Utils_Tuple2(
			A2($gampleman$elm_visualization$Scale$Continuous$normalize, d0, d1),
			A2(interpolate, r0, r1));
		var de = _v2.a;
		var re = _v2.b;
		return A2($elm$core$Basics$composeL, re, de);
	});
var $gampleman$elm_visualization$Scale$Continuous$convertTransform = F4(
	function (transform, interpolate, _v0, range) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		return A2(
			$elm$core$Basics$composeR,
			transform,
			A3(
				$gampleman$elm_visualization$Scale$Continuous$bimap,
				_Utils_Tuple2(
					transform(d0),
					transform(d1)),
				range,
				interpolate));
	});
var $gampleman$elm_visualization$Interpolation$float = F2(
	function (a, to) {
		var b = to - a;
		return function (t) {
			return a + (b * t);
		};
	});
var $gampleman$elm_visualization$Scale$Continuous$invertTransform = F4(
	function (transform, untransform, _v0, range) {
		var d0 = _v0.a;
		var d1 = _v0.b;
		return A2(
			$elm$core$Basics$composeR,
			A3(
				$gampleman$elm_visualization$Scale$Continuous$bimap,
				range,
				_Utils_Tuple2(
					transform(d0),
					transform(d1)),
				$gampleman$elm_visualization$Interpolation$float),
			untransform);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $gampleman$elm_visualization$Scale$Continuous$fixPoint = F3(
	function (maxIterations, initialInput, fn) {
		var helper = F2(
			function (iters, _v0) {
				helper:
				while (true) {
					var a = _v0.a;
					var b = _v0.b;
					if (_Utils_cmp(iters + 1, maxIterations) > -1) {
						return b;
					} else {
						var _v1 = fn(b);
						var outA = _v1.a;
						var outB = _v1.b;
						if (_Utils_eq(outA, a)) {
							return b;
						} else {
							if (!outA) {
								return b;
							} else {
								var $temp$iters = iters + 1,
									$temp$_v0 = _Utils_Tuple2(outA, outB);
								iters = $temp$iters;
								_v0 = $temp$_v0;
								continue helper;
							}
						}
					}
				}
			});
		return A2(
			helper,
			1,
			fn(initialInput));
	});
var $elm$core$Basics$e = _Basics_e;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $gampleman$elm_visualization$Scale$Continuous$e10 = $elm$core$Basics$sqrt(50);
var $gampleman$elm_visualization$Scale$Continuous$e2 = $elm$core$Basics$sqrt(2);
var $gampleman$elm_visualization$Scale$Continuous$e5 = $elm$core$Basics$sqrt(10);
var $gampleman$elm_visualization$Scale$Continuous$ln10 = A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10);
var $elm$core$Basics$pow = _Basics_pow;
var $gampleman$elm_visualization$Scale$Continuous$tickIncrement = F3(
	function (start, stop, count) {
		var step = (stop - start) / A2($elm$core$Basics$max, 0, count);
		var powr = $elm$core$Basics$floor(
			A2($elm$core$Basics$logBase, $elm$core$Basics$e, step) / $gampleman$elm_visualization$Scale$Continuous$ln10);
		var error = step / A2($elm$core$Basics$pow, 10, powr);
		var order = (_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e10) > -1) ? 10 : ((_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e5) > -1) ? 5 : ((_Utils_cmp(error, $gampleman$elm_visualization$Scale$Continuous$e2) > -1) ? 2 : 1));
		return (powr >= 0) ? (order * A2($elm$core$Basics$pow, 10, powr)) : ((-A2($elm$core$Basics$pow, 10, -powr)) / order);
	});
var $gampleman$elm_visualization$Scale$Continuous$withNormalizedDomain = F2(
	function (fn, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		if (_Utils_cmp(a, b) < 0) {
			return fn(
				_Utils_Tuple2(a, b));
		} else {
			var _v1 = fn(
				_Utils_Tuple2(b, a));
			var d = _v1.a;
			var c = _v1.b;
			return _Utils_Tuple2(c, d);
		}
	});
var $gampleman$elm_visualization$Scale$Continuous$nice = F2(
	function (domain, count) {
		var computation = function (_v0) {
			var start = _v0.a;
			var stop = _v0.b;
			var step = A3($gampleman$elm_visualization$Scale$Continuous$tickIncrement, start, stop, count);
			return _Utils_Tuple2(
				step,
				(step > 0) ? _Utils_Tuple2(
					$elm$core$Basics$floor(start / step) * step,
					$elm$core$Basics$ceiling(stop / step) * step) : ((step < 0) ? _Utils_Tuple2(
					$elm$core$Basics$ceiling(start * step) / step,
					$elm$core$Basics$floor(stop * step) / step) : _Utils_Tuple2(start, stop)));
		};
		return A2(
			$gampleman$elm_visualization$Scale$Continuous$withNormalizedDomain,
			function (dmn) {
				return A3($gampleman$elm_visualization$Scale$Continuous$fixPoint, 10, dmn, computation);
			},
			domain);
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $gampleman$elm_visualization$Scale$Continuous$exponent = function (x) {
	return (!x) ? 0 : ((x < 1) ? (1 + $gampleman$elm_visualization$Scale$Continuous$exponent(x * 10)) : 0);
};
var $gampleman$elm_visualization$Scale$Continuous$precisionFixed = function (step) {
	return A2(
		$elm$core$Basics$max,
		0,
		$gampleman$elm_visualization$Scale$Continuous$exponent(
			$elm$core$Basics$abs(step)));
};
var $gampleman$elm_visualization$Statistics$tickStep = F3(
	function (start, stop, count) {
		var step0 = $elm$core$Basics$abs(stop - start) / A2($elm$core$Basics$max, 0, count);
		var step1 = A2(
			$elm$core$Basics$pow,
			10,
			$elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Basics$e, step0) / A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10)));
		var error = step0 / step1;
		var step2 = (_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(50)) > -1) ? (step1 * 10) : ((_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(10)) > -1) ? (step1 * 5) : ((_Utils_cmp(
			error,
			$elm$core$Basics$sqrt(2)) > -1) ? (step1 * 2) : step1));
		return (_Utils_cmp(stop, start) < 0) ? (-step2) : step2;
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $gampleman$elm_visualization$Scale$Continuous$toFixed = F2(
	function (precision, value) {
		var power_ = A2($elm$core$Basics$pow, 10, precision);
		var pad = function (num) {
			_v0$2:
			while (true) {
				if (num.b) {
					if (num.b.b) {
						if (!num.b.b.b) {
							var x = num.a;
							var _v1 = num.b;
							var y = _v1.a;
							return _List_fromArray(
								[
									x,
									A3(
									$elm$core$String$padRight,
									precision,
									_Utils_chr('0'),
									y)
								]);
						} else {
							break _v0$2;
						}
					} else {
						var val = num.a;
						return (precision > 0) ? _List_fromArray(
							[
								val,
								A3(
								$elm$core$String$padRight,
								precision,
								_Utils_chr('0'),
								'')
							]) : _List_fromArray(
							[val]);
					}
				} else {
					break _v0$2;
				}
			}
			var val = num;
			return val;
		};
		return A2(
			$elm$core$String$join,
			'.',
			pad(
				A2(
					$elm$core$String$split,
					'.',
					$elm$core$String$fromFloat(
						$elm$core$Basics$round(value * power_) / power_))));
	});
var $gampleman$elm_visualization$Scale$Continuous$tickFormat = F2(
	function (_v0, count) {
		var start = _v0.a;
		var stop = _v0.b;
		return $gampleman$elm_visualization$Scale$Continuous$toFixed(
			$gampleman$elm_visualization$Scale$Continuous$precisionFixed(
				A3($gampleman$elm_visualization$Statistics$tickStep, start, stop, count)));
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $gampleman$elm_visualization$Statistics$range = F3(
	function (start, stop, step) {
		var n = A2(
			$elm$core$Basics$max,
			0,
			0 | $elm$core$Basics$ceiling((stop - start) / step));
		var helper = F2(
			function (i, list) {
				return (i >= 0) ? A2(
					helper,
					i - 1,
					A2($elm$core$List$cons, start + (step * i), list)) : list;
			});
		return A2(helper, n - 1, _List_Nil);
	});
var $gampleman$elm_visualization$Statistics$ticks = F3(
	function (start, stop, count) {
		var step = A3($gampleman$elm_visualization$Statistics$tickStep, start, stop, count);
		var end = ($elm$core$Basics$floor(stop / step) * step) + (step / 2);
		var beg = $elm$core$Basics$ceiling(start / step) * step;
		return A3($gampleman$elm_visualization$Statistics$range, beg, end, step);
	});
var $gampleman$elm_visualization$Scale$Continuous$ticks = F2(
	function (_v0, count) {
		var start = _v0.a;
		var end = _v0.b;
		return A3($gampleman$elm_visualization$Statistics$ticks, start, end, count);
	});
var $gampleman$elm_visualization$Scale$Continuous$scaleWithTransform = F4(
	function (transform, untransform, range_, domain_) {
		return {
			convert: A2($gampleman$elm_visualization$Scale$Continuous$convertTransform, transform, $gampleman$elm_visualization$Interpolation$float),
			domain: domain_,
			invert: A2($gampleman$elm_visualization$Scale$Continuous$invertTransform, transform, untransform),
			nice: $gampleman$elm_visualization$Scale$Continuous$nice,
			range: range_,
			rangeExtent: F2(
				function (_v0, r) {
					return r;
				}),
			tickFormat: $gampleman$elm_visualization$Scale$Continuous$tickFormat,
			ticks: $gampleman$elm_visualization$Scale$Continuous$ticks
		};
	});
var $gampleman$elm_visualization$Scale$Continuous$linear = A2($gampleman$elm_visualization$Scale$Continuous$scaleWithTransform, $elm$core$Basics$identity, $elm$core$Basics$identity);
var $gampleman$elm_visualization$Scale$linear = F2(
	function (range_, domain_) {
		return $gampleman$elm_visualization$Scale$Scale(
			A2($gampleman$elm_visualization$Scale$Continuous$linear, range_, domain_));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$role = function (name) {
	return A2($elm$html$Html$Attributes$attribute, 'role', name);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName = 'chart-builder';
var $elm_community$typed_svg$TypedSvg$svg = $elm_community$typed_svg$TypedSvg$Core$node('svg');
var $elm_community$typed_svg$TypedSvg$circle = $elm_community$typed_svg$TypedSvg$Core$node('circle');
var $elm_community$typed_svg$TypedSvg$Attributes$cx = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'cx',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$cx = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$cx(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$cy = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'cy',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$cy = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$cy(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $elm_community$typed_svg$TypedSvg$Attributes$r = function (length) {
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'r',
		$elm_community$typed_svg$TypedSvg$TypesToStrings$lengthToString(length));
};
var $elm_community$typed_svg$TypedSvg$Attributes$InPx$r = function (value) {
	return $elm_community$typed_svg$TypedSvg$Attributes$r(
		$elm_community$typed_svg$TypedSvg$Types$px(value));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_ = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$circle,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$cx(size / 2),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$cy(size / 2),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$r(size / 2)
			]),
		_List_Nil);
};
var $elm_community$typed_svg$TypedSvg$Attributes$points = function (pts) {
	var pointToString = function (_v0) {
		var xx = _v0.a;
		var yy = _v0.b;
		return $elm$core$String$fromFloat(xx) + (', ' + $elm$core$String$fromFloat(yy));
	};
	return A2(
		$elm_community$typed_svg$TypedSvg$Core$attribute,
		'points',
		A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, pointToString, pts)));
};
var $elm_community$typed_svg$TypedSvg$polygon = $elm_community$typed_svg$TypedSvg$Core$node('polygon');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$polygon,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$points(
				_List_fromArray(
					[
						_Utils_Tuple2(0.0, 0.0),
						_Utils_Tuple2(size, 0.0),
						_Utils_Tuple2(size, size)
					]))
			]),
		_List_Nil);
};
var $elm_community$typed_svg$TypedSvg$Types$Scale = F2(
	function (a, b) {
		return {$: 'Scale', a: a, b: b};
	});
var $elm_community$typed_svg$TypedSvg$Attributes$d = $elm_community$typed_svg$TypedSvg$Core$attribute('d');
var $elm_community$typed_svg$TypedSvg$path = $elm_community$typed_svg$TypedSvg$Core$node('path');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom = F2(
	function (scaleFactor, conf) {
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$transform(
					_List_fromArray(
						[
							A2($elm_community$typed_svg$TypedSvg$Types$Scale, scaleFactor, scaleFactor)
						]))
				]),
			A2(
				$elm$core$List$map,
				function (d_) {
					return A2(
						$elm_community$typed_svg$TypedSvg$path,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Attributes$d(d_)
							]),
						_List_Nil);
				},
				conf.paths));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm_community$typed_svg$TypedSvg$symbol = $elm_community$typed_svg$TypedSvg$Core$node('symbol');
var $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle = function (size) {
	return A2(
		$elm_community$typed_svg$TypedSvg$polygon,
		_List_fromArray(
			[
				$elm_community$typed_svg$TypedSvg$Attributes$points(
				_List_fromArray(
					[
						_Utils_Tuple2(size / 2, 0.0),
						_Utils_Tuple2(size, size),
						_Utils_Tuple2(0.0, size)
					]))
			]),
		_List_Nil);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$symbolsToSymbolElements = F3(
	function (orientation, bandSingleScale, symbols) {
		var localDimension = $gampleman$elm_visualization$Scale$bandwidth(bandSingleScale);
		return A2(
			$elm$core$List$map,
			function (symbol) {
				var s = $elm_community$typed_svg$TypedSvg$symbol(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolToId(symbol))
						]));
				switch (symbol.$) {
					case 'Circle':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$circle_(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					case 'Custom':
						var conf = symbol.a;
						var scaleFactor = function () {
							if (orientation.$ === 'Vertical') {
								return localDimension / conf.viewBoxWidth;
							} else {
								return localDimension / conf.viewBoxHeight;
							}
						}();
						return s(
							_List_fromArray(
								[
									A2($data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$custom, scaleFactor, conf)
								]));
					case 'Corner':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$corner(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					case 'Triangle':
						var conf = symbol.a;
						return s(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$triangle(
									A2($elm$core$Maybe$withDefault, localDimension, conf.size))
								]));
					default:
						return s(_List_Nil);
				}
			},
			symbols);
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_community$list_extra$List$Extra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_community$list_extra$List$Extra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_community$list_extra$List$Extra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableData = F2(
	function (_v0, data) {
		var tableFloatFormat = _v0.tableFloatFormat;
		return A2(
			$elm$core$List$map,
			function (points) {
				return $elm$core$List$concat(
					A2(
						$elm$core$List$map,
						function (p) {
							return _List_fromArray(
								[
									p.a,
									tableFloatFormat(p.b)
								]);
						},
						points));
			},
			$elm_community$list_extra$List$Extra$transpose(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ComplexHeadings = function (a) {
	return {$: 'ComplexHeadings', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$HeadingAndSubHeadings = F2(
	function (a, b) {
		return {$: 'HeadingAndSubHeadings', a: a, b: b};
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Headings = function (a) {
	return {$: 'Headings', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent = function (content) {
	if (content.$ === 'AccessibilityTable') {
		var _v1 = content.a;
		var xLabel = _v1.a;
		var yLabel = _v1.b;
		return _List_fromArray(
			[xLabel, yLabel]);
	} else {
		return _List_fromArray(
			['x', 'y']);
	}
};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$noGroups = function (data) {
	return A2(
		$elm$core$List$all,
		function (d) {
			return _Utils_eq(d, $elm$core$Maybe$Nothing);
		},
		A2(
			$elm$core$List$map,
			function ($) {
				return $.groupLabel;
			},
			data));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableHeadings = F2(
	function (data, content) {
		return function (dataBand) {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$noGroups(dataBand) ? A2(
				$elm$core$Basics$always,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$Headings(
					$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content)),
				dataBand) : $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ComplexHeadings(
				A2(
					$elm$core$List$map,
					function (d) {
						return A2(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Table$HeadingAndSubHeadings,
							A2($elm$core$Maybe$withDefault, '', d.groupLabel),
							$data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$getLabelsFromContent(content));
					},
					dataBand));
		}(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$errorToString = function (error) {
	switch (error.$) {
		case 'NoData':
			return 'No Data';
		case 'RowLengthsDoNotMatch':
			var rowNumber = error.a;
			return 'Every line of data should be equal in length, but row ' + ($elm$core$String$fromInt(rowNumber) + ' has a different number of data points');
		default:
			return 'The number of column headings does not match the number of data points in each row. ';
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Cell = function (a) {
	return {$: 'Cell', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading = function (a) {
	return {$: 'ColumnHeading', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle = function (a) {
	return {$: 'ColumnHeadingSingle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple = function (a) {
	return {$: 'ColumnHeadingsSimple', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeading = function (a) {
	return {$: 'RowHeading', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingSingle = function (a) {
	return {$: 'RowHeadingSingle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingsSimple = function (a) {
	return {$: 'RowHeadingsSimple', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration = function (a) {
	return {$: 'TableConfiguration', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowLengthsDoNotMatch = function (a) {
	return {$: 'RowLengthsDoNotMatch', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLengthHelper = F3(
	function (rowLength, rowNumber, remainingRows) {
		allRowsEqualLengthHelper:
		while (true) {
			if (!remainingRows.b) {
				return $elm$core$Result$Ok(rowLength);
			} else {
				var thisRow = remainingRows.a;
				var rest = remainingRows.b;
				if (_Utils_eq(
					$elm$core$List$length(thisRow),
					rowLength)) {
					var $temp$rowLength = rowLength,
						$temp$rowNumber = rowNumber + 1,
						$temp$remainingRows = rest;
					rowLength = $temp$rowLength;
					rowNumber = $temp$rowNumber;
					remainingRows = $temp$remainingRows;
					continue allRowsEqualLengthHelper;
				} else {
					return $elm$core$Result$Err(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowLengthsDoNotMatch(rowNumber));
				}
			}
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLength = function (data) {
	if (!data.b) {
		return $elm$core$Result$Ok(0);
	} else {
		var row1 = data.a;
		var remainingRows = data.b;
		return A3(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLengthHelper,
			$elm$core$List$length(row1),
			2,
			remainingRows);
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$generate = function (data) {
	var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Table$allRowsEqualLength(data);
	if (_v0.$ === 'Ok') {
		var noOfCols = _v0.a;
		return $elm$core$Result$Ok(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
				{
					attributes: _List_Nil,
					caption: $elm$core$Maybe$Nothing,
					cells: A2(
						$elm$core$List$map,
						function (row) {
							return A2(
								$elm$core$List$map,
								function (v) {
									return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$Cell(
										{
											attributes: _List_Nil,
											value: $elm$html$Html$text(v)
										});
								},
								row);
						},
						data),
					columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple(
						A2(
							$elm$core$List$map,
							function (colNo) {
								return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle(
									$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
										{
											attributes: _List_Nil,
											label: $elm$html$Html$text(
												'Column ' + $elm$core$String$fromInt(colNo))
										}));
							},
							A2($elm$core$List$range, 1, noOfCols))),
					columnHeadingsShown: true,
					rowHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingsSimple(
						A2(
							$elm$core$List$map,
							function (rowNo) {
								return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeadingSingle(
									$data_viz_lab$elm_chart_builder$Chart$Internal$Table$RowHeading(
										{
											attributes: _List_Nil,
											label: $elm$html$Html$text(
												'Row ' + $elm$core$String$fromInt(rowNo))
										}));
							},
							A2(
								$elm$core$List$range,
								1,
								$elm$core$List$length(data)))),
					rowHeadingsShown: true,
					summary: $elm$core$Maybe$Nothing
				}));
	} else {
		var error = _v0.a;
		return $elm$core$Result$Err(error);
	}
};
var $elm$html$Html$figcaption = _VirtualDom_node('figcaption');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$invisibleFigcaption = function (content) {
	return A2(
		$elm$html$Html$figcaption,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'border', '0'),
				A2($elm$html$Html$Attributes$style, 'clip', 'rect(0 0 0 0)'),
				A2($elm$html$Html$Attributes$style, 'height', '1px'),
				A2($elm$html$Html$Attributes$style, 'margin', '-1px'),
				A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
				A2($elm$html$Html$Attributes$style, 'padding', '0'),
				A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
				A2($elm$html$Html$Attributes$style, 'width', '1px')
			]),
		content);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingGroup = F2(
	function (a, b) {
		return {$: 'ColumnHeadingGroup', a: a, b: b};
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch = {$: 'ColumnHeadingMismatch'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsComplex = function (a) {
	return {$: 'ColumnHeadingsComplex', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$noOfComplexHeadings = function (complexHeadings) {
	var addHeaders = F2(
		function (header, acc) {
			if (!header.b.b) {
				return acc + 1;
			} else {
				var subHeadings = header.b;
				return acc + $elm$core$List$length(subHeadings);
			}
		});
	return A3($elm$core$List$foldl, addHeaders, 0, complexHeadings);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$setColumnHeadings = F2(
	function (headings_, resultConfig) {
		if (headings_.$ === 'Headings') {
			var headings = headings_.a;
			return A2(
				$elm$core$Result$andThen,
				function (_v2) {
					var tableConfig = _v2.a;
					return _Utils_eq(
						$elm$core$List$length(headings),
						$elm$core$List$length(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								$elm$core$List$head(tableConfig.cells)))) ? $elm$core$Result$Ok(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(tableConfig)) : $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch);
				},
				A2(
					$elm$core$Result$map,
					function (_v1) {
						var tableConfig = _v1.a;
						return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
							_Utils_update(
								tableConfig,
								{
									columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsSimple(
										A2(
											$elm$core$List$map,
											function (label) {
												return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingSingle(
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
														{
															attributes: _List_Nil,
															label: $elm$html$Html$text(label)
														}));
											},
											headings))
								}));
					},
					resultConfig));
		} else {
			var complexHeadings = headings_.a;
			return A2(
				$elm$core$Result$andThen,
				function (_v5) {
					var tableConfig = _v5.a;
					return _Utils_eq(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$noOfComplexHeadings(complexHeadings),
						$elm$core$List$length(
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								$elm$core$List$head(tableConfig.cells)))) ? $elm$core$Result$Ok(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(tableConfig)) : $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingMismatch);
				},
				A2(
					$elm$core$Result$map,
					function (_v3) {
						var tableConfig = _v3.a;
						return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$TableConfiguration(
							_Utils_update(
								tableConfig,
								{
									columnHeadings: $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingsComplex(
										A2(
											$elm$core$List$map,
											function (_v4) {
												var mainHeading = _v4.a;
												var subHeadings = _v4.b;
												return A2(
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeadingGroup,
													$data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
														{
															attributes: _List_Nil,
															label: $elm$html$Html$text(mainHeading)
														}),
													A2(
														$elm$core$List$map,
														function (subHeading) {
															return $data_viz_lab$elm_chart_builder$Chart$Internal$Table$ColumnHeading(
																{
																	attributes: _List_Nil,
																	label: $elm$html$Html$text(subHeading)
																});
														},
														subHeadings));
											},
											complexHeadings))
								}));
					},
					resultConfig));
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$NoData = {$: 'NoData'};
var $elm$html$Html$col = _VirtualDom_node('col');
var $elm$html$Html$colgroup = _VirtualDom_node('colgroup');
var $elm$html$Html$Attributes$colspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'colspan',
		$elm$core$String$fromInt(n));
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$hidden = $elm$html$Html$Attributes$boolProperty('hidden');
var $elm$html$Html$Attributes$rowspan = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rowspan',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Attributes$scope = $elm$html$Html$Attributes$stringProperty('scope');
var $elm$html$Html$table = _VirtualDom_node('table');
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $data_viz_lab$elm_chart_builder$Chart$Internal$Table$view = function (config) {
	if (config.$ === 'Ok') {
		var tableConfig = config.a.a;
		var columnHeadings = function () {
			var _v6 = tableConfig.columnHeadings;
			if (_v6.$ === 'ColumnHeadingsSimple') {
				if (!_v6.a.b) {
					return _List_Nil;
				} else {
					var cols = _v6.a;
					var spacer = tableConfig.rowHeadingsShown ? _List_fromArray(
						[
							A2($elm$html$Html$td, _List_Nil, _List_Nil)
						]) : _List_Nil;
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$thead,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$tr,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
										]),
									_Utils_ap(
										spacer,
										A2(
											$elm$core$List$map,
											function (_v7) {
												var colInfo = _v7.a.a;
												return A2(
													$elm$html$Html$th,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$scope('col')
														]),
													_List_fromArray(
														[colInfo.label]));
											},
											cols)))
								]))
						]);
				}
			} else {
				if (!_v6.a.b) {
					return _List_Nil;
				} else {
					var complexHeadings = _v6.a;
					var subHeadings = $elm$core$List$concat(
						A2(
							$elm$core$List$map,
							function (_v10) {
								var subHeads = _v10.b;
								return A2(
									$elm$core$List$map,
									function (_v11) {
										var colInfo = _v11.a;
										return A2(
											$elm$html$Html$th,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$scope('col')
												]),
											_List_fromArray(
												[colInfo.label]));
									},
									subHeads);
							},
							complexHeadings));
					var spacer = tableConfig.rowHeadingsShown ? _List_fromArray(
						[
							A2(
							$elm$html$Html$td,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$rowspan(2)
								]),
							_List_Nil)
						]) : _List_Nil;
					var mainHeadings = function () {
						var cols = function (n) {
							return (!n) ? _List_fromArray(
								[
									$elm$html$Html$Attributes$scope('col'),
									$elm$html$Html$Attributes$rowspan(2)
								]) : _List_fromArray(
								[
									$elm$html$Html$Attributes$scope('colgroup'),
									$elm$html$Html$Attributes$colspan(n)
								]);
						};
						return A2(
							$elm$core$List$map,
							function (_v9) {
								var colInfo = _v9.a.a;
								var subHeads = _v9.b;
								return A2(
									$elm$html$Html$th,
									cols(
										$elm$core$List$length(subHeads)),
									_List_fromArray(
										[colInfo.label]));
							},
							complexHeadings);
					}();
					var colStructure = function () {
						var colgroup_ = function (n) {
							return (!n) ? A2($elm$html$Html$col, _List_Nil, _List_Nil) : A2(
								$elm$html$Html$colgroup,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$Attributes$attribute,
										'span',
										$elm$core$String$fromInt(n))
									]),
								_List_Nil);
						};
						var colSpacer = tableConfig.rowHeadingsShown ? _List_fromArray(
							[
								A2($elm$html$Html$col, _List_Nil, _List_Nil)
							]) : _List_Nil;
						return _Utils_ap(
							colSpacer,
							A2(
								$elm$core$List$map,
								function (_v8) {
									var subHeads = _v8.b;
									return colgroup_(
										$elm$core$List$length(subHeads));
								},
								complexHeadings));
					}();
					return _Utils_ap(
						colStructure,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$thead,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$tr,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
											]),
										_Utils_ap(spacer, mainHeadings)),
										A2(
										$elm$html$Html$tr,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$hidden(!tableConfig.columnHeadingsShown)
											]),
										subHeadings)
									]))
							]));
				}
			}
		}();
		var body = function () {
			var _v2 = tableConfig.cells;
			if (!_v2.b) {
				return _List_Nil;
			} else {
				var _v3 = tableConfig.rowHeadings;
				var rowHeadings = _v3.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$tbody,
						_List_Nil,
						A2(
							$elm$core$List$map,
							function (_v4) {
								var rowDataInfo = _v4.a;
								var rowHeadingInfo = _v4.b.a.a;
								return A2(
									$elm$html$Html$tr,
									_List_Nil,
									_Utils_ap(
										_List_fromArray(
											[
												A2(
												$elm$html$Html$th,
												_Utils_ap(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$scope('row'),
															$elm$html$Html$Attributes$hidden(!tableConfig.rowHeadingsShown)
														]),
													rowHeadingInfo.attributes),
												_List_fromArray(
													[rowHeadingInfo.label]))
											]),
										A2(
											$elm$core$List$map,
											function (_v5) {
												var cell = _v5.a;
												return A2(
													$elm$html$Html$td,
													cell.attributes,
													_List_fromArray(
														[cell.value]));
											},
											rowDataInfo)));
							},
							A2($elm_community$list_extra$List$Extra$zip, tableConfig.cells, rowHeadings)))
					]);
			}
		}();
		if (!body.b) {
			return $elm$core$Result$Err($data_viz_lab$elm_chart_builder$Chart$Internal$Table$NoData);
		} else {
			return $elm$core$Result$Ok(
				A2(
					$elm$html$Html$table,
					_List_Nil,
					_Utils_ap(columnHeadings, body)));
		}
	} else {
		var error = config.a;
		return $elm$core$Result$Err(error);
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement = F2(
	function (config, data) {
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var tableData = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableData, c, data);
		var tableHeadings = A2($data_viz_lab$elm_chart_builder$Chart$Internal$TableHelpers$dataBandToTableHeadings, data, c.accessibilityContent);
		var table = $data_viz_lab$elm_chart_builder$Chart$Internal$Table$view(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$setColumnHeadings,
				tableHeadings,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Table$generate(tableData)));
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$invisibleFigcaption(
			_List_fromArray(
				[
					function () {
					if (table.$ === 'Ok') {
						var table_ = table.a;
						return A2(
							$elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[table_]));
					} else {
						var error = table.a;
						return $elm$html$Html$text(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Table$errorToString(error));
					}
				}()
				]));
	});
var $elm_community$typed_svg$TypedSvg$Attributes$viewBox = F4(
	function (minX, minY, vWidth, vHeight) {
		return A2(
			$elm_community$typed_svg$TypedSvg$Core$attribute,
			'viewBox',
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromFloat,
					_List_fromArray(
						[minX, minY, vWidth, vHeight]))));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandGrouped = function (_v0) {
	var data = _v0.a;
	var config = _v0.b;
	var paddingInner = A2(
		$gampleman$elm_visualization$Scale$convert,
		$gampleman$elm_visualization$Scale$clamp(
			A2(
				$gampleman$elm_visualization$Scale$linear,
				_Utils_Tuple2(0.2, 0.999),
				_Utils_Tuple2(0, 500))),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth(data));
	var domain = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config);
	var dataLength = $elm$core$List$length(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data));
	var paddingInnerGroup = (dataLength === 1) ? 0 : 0.1;
	var colorScale = A2(
		$gampleman$elm_visualization$Scale$linear,
		_Utils_Tuple2(0, 1),
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			domain.continuous));
	var classNames = $elm$html$Html$Attributes$classList(
		_List_fromArray(
			[
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName, true)
			]));
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var h = c.height;
	var m = c.margin;
	var outerH = (h + m.top) + m.bottom;
	var w = c.width;
	var outerW = (w + m.left) + m.right;
	var svgElAttrs = _Utils_ap(
		_List_fromArray(
			[
				A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img'),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden
			]),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c));
	var bandGroupRange = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange, config, w, h);
	var bandGroupScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: paddingInnerGroup, paddingOuter: paddingInnerGroup}),
		bandGroupRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup));
	var bandSingleRange = A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange,
		config,
		$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale));
	var bandSingleScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: paddingInner, paddingOuter: paddingInner / 2}),
		bandSingleRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandSingle));
	var continuousRange = A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart, w, h, bandSingleScale);
	var continuousScale = A2(
		$gampleman$elm_visualization$Scale$linear,
		continuousRange,
		A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			domain.continuous));
	var iconOffset = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$symbolSpace, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$Vertical, bandSingleScale, c.symbols) + $data_viz_lab$elm_chart_builder$Chart$Internal$Symbol$symbolGap;
	var symbolElements = function () {
		var _v2 = c.layout;
		if (_v2.$ === 'GroupedBar') {
			return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showIcons(config) ? A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$symbolsToSymbolElements, c.orientation, bandSingleScale, c.symbols) : _List_Nil;
		} else {
			return _List_Nil;
		}
	}();
	var axisBandScale = ($elm$core$List$length(
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup)) > 1) ? bandGroupScale : bandSingleScale;
	var svgEl = A2(
		$elm_community$typed_svg$TypedSvg$svg,
		svgElAttrs,
		_Utils_ap(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
			_Utils_ap(
				A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis, c, iconOffset, continuousScale),
				_Utils_ap(
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis, c, axisBandScale),
					_Utils_ap(
						_List_fromArray(
							[
								A2(
								$elm_community$typed_svg$TypedSvg$g,
								_List_fromArray(
									[
										$elm_community$typed_svg$TypedSvg$Attributes$transform(
										_List_fromArray(
											[
												A2($elm_community$typed_svg$TypedSvg$Types$Translate, m.left, m.top)
											])),
										$elm_community$typed_svg$TypedSvg$Attributes$class(
										_List_fromArray(
											[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
									]),
								A2(
									$elm$core$List$map,
									A6($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$columns, config, iconOffset, bandGroupScale, bandSingleScale, continuousScale, colorScale),
									$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)))
							]),
						symbolElements)))));
	var _v1 = c.accessibilityContent;
	if (_v1.$ === 'AccessibilityNone') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[svgEl]));
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$figure,
					_List_Nil,
					_List_fromArray(
						[
							svgEl,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement, config, data)
						]))
				]));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderAxis = {$: 'RenderAxis'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange = F3(
	function (config, stackedDepth, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var layout = c.layout;
		var orientation = c.orientation;
		if (orientation.$ === 'Horizontal') {
			if (layout.$ === 'GroupedBar') {
				return _Utils_Tuple2(a, b);
			} else {
				return _Utils_Tuple2(a + stackedDepth, b);
			}
		} else {
			return _Utils_Tuple2(a - stackedDepth, b);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataBandToDataStacked = F2(
	function (config, data) {
		var seed = A2(
			$elm$core$List$map,
			function (d) {
				return _Utils_Tuple2(d, _List_Nil);
			},
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config).bandSingle));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (d, acc) {
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_eq(d.a, a.a) ? _Utils_Tuple2(
								a.a,
								A2($elm$core$List$cons, d.b, a.b)) : a;
						},
						acc);
				}),
			seed,
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.points;
					},
					$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data))));
	});
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$List$sortBy = _List_sortBy;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toDataBand = function (dataBand) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$DataBand(dataBand);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fillGapsForStack = function (data) {
	var d = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data);
	var allStrings = $elm$core$Set$fromList(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.points;
					},
					$elm$core$List$map($elm$core$Tuple$first)),
				d)));
	var fillGaps = function (dataGroupBand) {
		var points = A2($elm$core$List$map, $elm$core$Tuple$first, dataGroupBand.points);
		var newPoints = A2(
			$elm$core$List$sortBy,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$append,
				dataGroupBand.points,
				A3(
					$elm$core$Set$foldr,
					F2(
						function (s, acc) {
							return A2($elm$core$List$member, s, points) ? acc : A2(
								$elm$core$List$cons,
								_Utils_Tuple2(s, 0),
								acc);
						}),
					_List_Nil,
					allStrings)));
		return _Utils_update(
			dataGroupBand,
			{points: newPoints});
	};
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toDataBand(
		A2($elm$core$List$map, fillGaps, d));
};
var $gampleman$elm_visualization$Shape$Stack$offsetDiverging = function (series) {
	var folder = F2(
		function (_v1, _v2) {
			var x = _v1.a;
			var y = _v1.b;
			var yp = _v2.a;
			var yn = _v2.b;
			var accum = _v2.c;
			var dy = y - x;
			return (dy >= 0) ? _Utils_Tuple3(
				yp + dy,
				yn,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yp, yp + dy),
					accum)) : ((dy < 0) ? _Utils_Tuple3(
				yp,
				yn + dy,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yn + dy, yn),
					accum)) : _Utils_Tuple3(
				yp,
				yn,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(yp, y),
					accum)));
		});
	var modifyColumn = function (column) {
		return $elm$core$List$reverse(
			function (_v0) {
				var newColumn = _v0.c;
				return newColumn;
			}(
				A3(
					$elm$core$List$foldl,
					folder,
					_Utils_Tuple3(0, 0, _List_Nil),
					column)));
	};
	return $elm_community$list_extra$List$Extra$transpose(
		A2(
			$elm$core$List$map,
			modifyColumn,
			$elm_community$list_extra$List$Extra$transpose(series)));
};
var $gampleman$elm_visualization$Shape$stackOffsetDiverging = $gampleman$elm_visualization$Shape$Stack$offsetDiverging;
var $gampleman$elm_visualization$Shape$Stack$offsetNone = function (series) {
	if (!series.b) {
		return _List_Nil;
	} else {
		var x = series.a;
		var xs = series.b;
		var weirdAdd = F2(
			function (_v3, _v4) {
				var s11 = _v3.b;
				var s00 = _v4.a;
				var s01 = _v4.b;
				return $elm$core$Basics$isNaN(s01) ? _Utils_Tuple2(s00, s11 + s00) : _Utils_Tuple2(s01, s11 + s01);
			});
		var helper = F2(
			function (s1, _v2) {
				var s0 = _v2.a;
				var accum = _v2.b;
				return _Utils_Tuple2(
					A3($elm$core$List$map2, weirdAdd, s1, s0),
					A2($elm$core$List$cons, s0, accum));
			});
		return $elm$core$List$reverse(
			function (_v1) {
				var a = _v1.a;
				var b = _v1.b;
				return A2($elm$core$List$cons, a, b);
			}(
				A3(
					$elm$core$List$foldl,
					helper,
					_Utils_Tuple2(x, _List_Nil),
					xs)));
	}
};
var $gampleman$elm_visualization$Shape$stackOffsetNone = $gampleman$elm_visualization$Shape$Stack$offsetNone;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getOffset = function (config) {
	var _v0 = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config).layout;
	if (_v0.$ === 'StackedBar') {
		var direction = _v0.a;
		if (direction.$ === 'Diverging') {
			return $gampleman$elm_visualization$Shape$stackOffsetDiverging;
		} else {
			return $gampleman$elm_visualization$Shape$stackOffsetNone;
		}
	} else {
		return $gampleman$elm_visualization$Shape$stackOffsetNone;
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getStackedValuesAndGroupes = F2(
	function (values, data) {
		var m = $elm$core$List$map2(
			F2(
				function (d, v) {
					return A3(
						$elm$core$List$map2,
						F2(
							function (stackedValue, rawValue) {
								return {rawValue: rawValue.b, stackedValue: stackedValue};
							}),
						v,
						d.points);
				}));
		return _Utils_Tuple2(
			A2(
				m,
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data),
				$elm$core$List$reverse(
					$elm_community$list_extra$List$Extra$transpose(values))),
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (idx, s) {
						return A2(
							$elm$core$Maybe$withDefault,
							$elm$core$String$fromInt(idx),
							s.groupLabel);
					}),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromDataBand(data)));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $gampleman$elm_visualization$Shape$Stack$calculateExtremes = function (coords) {
	var folder = F2(
		function (_v2, _v3) {
			var y1 = _v2.a;
			var y2 = _v2.b;
			var accmin = _v3.a;
			var accmax = _v3.b;
			return _Utils_Tuple2(
				A2(
					$elm$core$Basics$min,
					accmin,
					A2($elm$core$Basics$min, y1, y2)),
				A2(
					$elm$core$Basics$max,
					accmax,
					A2($elm$core$Basics$max, y1, y2)));
		});
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, _v1) {
				var mi = _v0.a;
				var ma = _v0.b;
				var accmin = _v1.a;
				var accmax = _v1.b;
				return _Utils_Tuple2(
					A2($elm$core$Basics$min, mi, accmin),
					A2($elm$core$Basics$max, ma, accmax));
			}),
		_Utils_Tuple2(0, 0),
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$List$foldl,
				folder,
				_Utils_Tuple2(0, 0)),
			coords));
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $gampleman$elm_visualization$Shape$Stack$computeStack = function (_v0) {
	var offset = _v0.offset;
	var order = _v0.order;
	var data = _v0.data;
	var _v1 = $elm$core$List$unzip(
		order(data));
	var labels = _v1.a;
	var values = _v1.b;
	var stacked = offset(
		A2(
			$elm$core$List$map,
			$elm$core$List$map(
				function (e) {
					return _Utils_Tuple2(0, e);
				}),
			values));
	return {
		extent: $gampleman$elm_visualization$Shape$Stack$calculateExtremes(stacked),
		labels: labels,
		values: stacked
	};
};
var $gampleman$elm_visualization$Shape$stack = $gampleman$elm_visualization$Shape$Stack$computeStack;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle = F2(
	function (c, idx) {
		var _v0 = c.colorResource;
		if (_v0.$ === 'ColorPalette') {
			var colors = _v0.a;
			return 'fill: ' + A2($data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$colorPaletteToColor, colors, idx);
		} else {
			return '';
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel = F2(
	function (idx, l) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm_community$list_extra$List$Extra$getAt, idx, l));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText = F4(
	function (c, idx, labels, value) {
		var ordinalValue = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel, idx, labels);
		var _v0 = c.showColumnTitle;
		switch (_v0.$) {
			case 'StackedColumnTitle':
				var formatter = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								ordinalValue + (': ' + formatter(value)))
							]))
					]);
			case 'YColumnTitle':
				var formatter = _v0.a;
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(
								formatter(value))
							]))
					]);
			case 'XOrdinalColumnTitle':
				return _List_fromArray(
					[
						A2(
						$elm_community$typed_svg$TypedSvg$title,
						_List_Nil,
						_List_fromArray(
							[
								$elm_community$typed_svg$TypedSvg$Core$text(ordinalValue)
							]))
					]);
			default:
				return _List_Nil;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$stackedValuesInverse = F2(
	function (width, values) {
		return A2(
			$elm$core$List$map,
			function (v) {
				var _v0 = v.stackedValue;
				var left = _v0.a;
				var right = _v0.b;
				return _Utils_update(
					v,
					{
						stackedValue: _Utils_Tuple2(
							$elm$core$Basics$abs(left - width),
							$elm$core$Basics$abs(right - width))
					});
			},
			values);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRectsStacked = F3(
	function (c, bandGroupScale, _v0) {
		var group = _v0.a;
		var values = _v0.b;
		var labels = _v0.c;
		var block = F2(
			function (idx, _v2) {
				var rawValue = _v2.rawValue;
				var stackedValue = _v2.stackedValue;
				var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						c.coreStyle,
						A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle, c, idx)));
				var _v1 = stackedValue;
				var lower = _v1.a;
				var upper = _v1.b;
				var rect_ = A2(
					$elm_community$typed_svg$TypedSvg$rect,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(
							A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, group)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(lower + idx),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(
							$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(
							$elm$core$Basics$abs(upper - lower)),
							$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
							coreStyle
						]),
					A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText, c, idx, labels, rawValue));
				return A2(
					$elm_community$typed_svg$TypedSvg$g,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$class(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
								]))
						]),
					_List_fromArray(
						[rect_]));
			});
		return A2(
			$elm$core$List$indexedMap,
			function (idx) {
				return block(idx);
			},
			A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$stackedValuesInverse, c.width, values));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRectsStacked = F3(
	function (c, bandGroupScale, _v0) {
		var group = _v0.a;
		var values = _v0.b;
		var labels = _v0.c;
		var bandValue = A2($gampleman$elm_visualization$Scale$convert, bandGroupScale, group);
		var block = F2(
			function (idx, _v2) {
				var rawValue = _v2.rawValue;
				var stackedValue = _v2.stackedValue;
				var coreStyleFromX = c.coreStyleFromPointBandX(
					A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$getStackedLabel, idx, labels));
				var coreStyle = $elm_community$typed_svg$TypedSvg$Attributes$style(
					A2(
						$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
						coreStyleFromX,
						A2(
							$data_viz_lab$elm_chart_builder$Chart$Internal$Helpers$mergeStyles,
							c.coreStyle,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$colorCategoricalStyle, c, idx))));
				var _v1 = stackedValue;
				var upper = _v1.a;
				var lower = _v1.b;
				var rect_ = A2(
					$elm_community$typed_svg$TypedSvg$rect,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$x(bandValue),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$y(lower - idx),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(
							$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale)),
							$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(
							$elm$core$Basics$abs(upper - lower)),
							$elm_community$typed_svg$TypedSvg$Attributes$shapeRendering($elm_community$typed_svg$TypedSvg$Types$RenderCrispEdges),
							coreStyle
						]),
					A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumnTitleText, c, idx, labels, rawValue));
				return A2(
					$elm_community$typed_svg$TypedSvg$g,
					_List_fromArray(
						[
							$elm_community$typed_svg$TypedSvg$Attributes$class(
							_List_fromArray(
								[
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName,
									$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName + ('-' + $elm$core$String$fromInt(idx))
								]))
						]),
					_List_fromArray(
						[rect_]));
			});
		return A2(
			$elm$core$List$indexedMap,
			function (idx) {
				return block(idx);
			},
			values);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumns = F3(
	function (config, bandGroupScale, payload) {
		var rects = function () {
			var _v0 = config.orientation;
			if (_v0.$ === 'Vertical') {
				return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$verticalRectsStacked, config, bandGroupScale, payload);
			} else {
				return A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$horizontalRectsStacked, config, bandGroupScale, payload);
			}
		}();
		return A2(
			$elm_community$typed_svg$TypedSvg$g,
			_List_fromArray(
				[
					$elm_community$typed_svg$TypedSvg$Attributes$class(
					_List_fromArray(
						[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$columnClassName]))
				]),
			rects);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedContainerTranslate = F4(
	function (config, a, b, offset) {
		var orientation = config.orientation;
		if (orientation.$ === 'Horizontal') {
			return A2($elm_community$typed_svg$TypedSvg$Types$Translate, a - offset, b);
		} else {
			return A2($elm_community$typed_svg$TypedSvg$Types$Translate, a, b + offset);
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandStacked = function (_v0) {
	var data = _v0.a;
	var config = _v0.b;
	var noGapsData = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fillGapsForStack(data);
	var stackDepth = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDataBandDepth(noGapsData);
	var domain = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getDomainBandFromData, data, config);
	var dataStacked = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$dataBandToDataStacked, config, noGapsData);
	var stackedConfig = {
		data: dataStacked,
		offset: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$getOffset(config),
		order: $elm$core$Basics$identity
	};
	var continuousDomain = domain.continuous;
	var classNames = $elm$html$Html$Attributes$classList(
		_List_fromArray(
			[
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$rootClassName, true),
				_Utils_Tuple2($data_viz_lab$elm_chart_builder$Chart$Internal$Constants$barClassName, true)
			]));
	var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
	var h = c.height;
	var m = c.margin;
	var outerH = (h + m.top) + m.bottom;
	var w = c.width;
	var outerW = (w + m.left) + m.right;
	var svgElAttrs = _Utils_ap(
		_List_fromArray(
			[
				A4($elm_community$typed_svg$TypedSvg$Attributes$viewBox, 0, 0, outerW, outerH),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$width(outerW),
				$elm_community$typed_svg$TypedSvg$Attributes$InPx$height(outerH),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$role('img'),
				$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaHidden
			]),
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ariaLabelledbyContent(c));
	var bandGroupRange = A3($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandGroupRange, config, w, h);
	var bandGroupScale = A3(
		$gampleman$elm_visualization$Scale$band,
		_Utils_update(
			$gampleman$elm_visualization$Scale$defaultBandConfig,
			{paddingInner: 0.1, paddingOuter: 0.05}),
		bandGroupRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandGroup));
	var bandSingleRange = A2(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$getBandSingleRange,
		config,
		$gampleman$elm_visualization$Scale$bandwidth(bandGroupScale));
	var bandSingleScale = A3(
		$gampleman$elm_visualization$Scale$band,
		$gampleman$elm_visualization$Scale$defaultBandConfig,
		bandSingleRange,
		A2($elm$core$Maybe$withDefault, _List_Nil, domain.bandSingle));
	var continuousRange = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange,
		config,
		stackDepth,
		A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderChart, w, h, bandSingleScale));
	var continuousRangeAxis = A3(
		$data_viz_lab$elm_chart_builder$Chart$Internal$Type$adjustContinuousRange,
		config,
		stackDepth,
		A5($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getContinuousRange, config, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$RenderAxis, w, h, bandSingleScale));
	var axisBandScale = bandGroupScale;
	var _v1 = $gampleman$elm_visualization$Shape$stack(stackedConfig);
	var values = _v1.values;
	var labels = _v1.labels;
	var extent = _v1.extent;
	var continuousExtent = function () {
		if (continuousDomain.$ === 'Just') {
			var ld = continuousDomain.a;
			var _v6 = c.layout;
			if (_v6.$ === 'StackedBar') {
				var direction = _v6.a;
				if (direction.$ === 'Diverging') {
					return A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2(0, 0),
						A2(
							$elm$core$Maybe$map,
							function (max) {
								return _Utils_Tuple2(max * (-1), max);
							},
							$elm$core$List$maximum(
								_List_fromArray(
									[
										$elm$core$Basics$abs(ld.a),
										$elm$core$Basics$abs(ld.b)
									]))));
				} else {
					return extent;
				}
			} else {
				return extent;
			}
		} else {
			return extent;
		}
	}();
	var continuousScale = A2($gampleman$elm_visualization$Scale$linear, continuousRange, continuousExtent);
	var continuousScaleAxis = A2($gampleman$elm_visualization$Scale$linear, continuousRangeAxis, continuousExtent);
	var _v2 = A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$getStackedValuesAndGroupes, values, noGapsData);
	var columnValues = _v2.a;
	var columnGroupes = _v2.b;
	var scaledValues = A2(
		$elm$core$List$map,
		$elm$core$List$map(
			function (vals) {
				var _v4 = vals.stackedValue;
				var a1 = _v4.a;
				var a2 = _v4.b;
				return _Utils_update(
					vals,
					{
						stackedValue: _Utils_Tuple2(
							A2($gampleman$elm_visualization$Scale$convert, continuousScale, a1),
							A2($gampleman$elm_visualization$Scale$convert, continuousScale, a2))
					});
			}),
		columnValues);
	var svgEl = A2(
		$elm_community$typed_svg$TypedSvg$svg,
		svgElAttrs,
		_Utils_ap(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$descAndTitle(c),
			_Utils_ap(
				A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandXAxis, c, axisBandScale),
				_Utils_ap(
					A3($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$bandGroupedYAxis, c, 0, continuousScaleAxis),
					_List_fromArray(
						[
							A2(
							$elm_community$typed_svg$TypedSvg$g,
							_List_fromArray(
								[
									$elm_community$typed_svg$TypedSvg$Attributes$transform(
									_List_fromArray(
										[
											A4($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedContainerTranslate, c, m.left, m.top, stackDepth)
										])),
									$elm_community$typed_svg$TypedSvg$Attributes$class(
									_List_fromArray(
										[$data_viz_lab$elm_chart_builder$Chart$Internal$Constants$componentClassName]))
								]),
							A2(
								$elm$core$List$map,
								A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$stackedColumns, c, bandGroupScale),
								A3(
									$elm$core$List$map2,
									F2(
										function (a, b) {
											return _Utils_Tuple3(a, b, labels);
										}),
									columnGroupes,
									scaledValues)))
						])))));
	var _v3 = c.accessibilityContent;
	if (_v3.$ === 'AccessibilityNone') {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[svgEl]));
	} else {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[classNames]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$figure,
					_List_Nil,
					_List_fromArray(
						[
							svgEl,
							A2($data_viz_lab$elm_chart_builder$Chart$Internal$Bar$tableElement, config, noGapsData)
						]))
				]));
	}
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ExternalData = function (a) {
	return {$: 'ExternalData', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toExternalData = function (data) {
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ExternalData(data);
};
var $data_viz_lab$elm_chart_builder$Chart$Bar$render = F2(
	function (_v0, config) {
		var externalData = _v0.a;
		var accessor = _v0.b;
		var data = A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$externalToDataBand,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$toExternalData(externalData),
			accessor);
		var c = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$fromConfig(config);
		var _v1 = c.layout;
		switch (_v1.$) {
			case 'GroupedBar':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandGrouped(
					_Utils_Tuple2(data, config));
			case 'StackedBar':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Bar$renderBandStacked(
					_Utils_Tuple2(data, config));
			default:
				return $elm$html$Html$text('');
		}
	});
var $cuducos$elm_format_number$FormatNumber$Locales$Exact = function (a) {
	return {$: 'Exact', a: a};
};
var $cuducos$elm_format_number$FormatNumber$Parser$FormattedNumber = F5(
	function (original, integers, decimals, prefix, suffix) {
		return {decimals: decimals, integers: integers, original: original, prefix: prefix, suffix: suffix};
	});
var $cuducos$elm_format_number$FormatNumber$Parser$Negative = {$: 'Negative'};
var $cuducos$elm_format_number$FormatNumber$Parser$Positive = {$: 'Positive'};
var $cuducos$elm_format_number$FormatNumber$Parser$Zero = {$: 'Zero'};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $cuducos$elm_format_number$FormatNumber$Parser$classify = function (formatted) {
	var onlyZeros = A2(
		$elm$core$String$all,
		function (_char) {
			return _Utils_eq(
				_char,
				_Utils_chr('0'));
		},
		$elm$core$String$concat(
			A2(
				$elm$core$List$append,
				formatted.integers,
				$elm$core$List$singleton(formatted.decimals))));
	return onlyZeros ? $cuducos$elm_format_number$FormatNumber$Parser$Zero : ((formatted.original < 0) ? $cuducos$elm_format_number$FormatNumber$Parser$Negative : $cuducos$elm_format_number$FormatNumber$Parser$Positive);
};
var $elm$core$String$filter = _String_filter;
var $cuducos$elm_format_number$FormatNumber$Parser$addZerosToFit = F2(
	function (desiredLength, value) {
		var length = $elm$core$String$length(value);
		var missing = (_Utils_cmp(length, desiredLength) < 0) ? $elm$core$Basics$abs(desiredLength - length) : 0;
		return _Utils_ap(
			value,
			A2($elm$core$String$repeat, missing, '0'));
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $cuducos$elm_format_number$FormatNumber$Parser$removeZeros = function (decimals) {
	return (A2($elm$core$String$right, 1, decimals) !== '0') ? decimals : $cuducos$elm_format_number$FormatNumber$Parser$removeZeros(
		A2($elm$core$String$dropRight, 1, decimals));
};
var $cuducos$elm_format_number$FormatNumber$Parser$getDecimals = F2(
	function (locale, digits) {
		var _v0 = locale.decimals;
		switch (_v0.$) {
			case 'Max':
				return $cuducos$elm_format_number$FormatNumber$Parser$removeZeros(digits);
			case 'Exact':
				return digits;
			default:
				var min = _v0.a;
				return A2($cuducos$elm_format_number$FormatNumber$Parser$addZerosToFit, min, digits);
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				_Utils_chr('0'),
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$String$reverse = _String_reverse;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				$elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					$elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _v0.a.a.valueOf()) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $cuducos$elm_format_number$FormatNumber$Parser$splitInParts = F2(
	function (locale, value) {
		var toString = function () {
			var _v1 = locale.decimals;
			switch (_v1.$) {
				case 'Max':
					var max = _v1.a;
					return $myrho$elm_round$Round$round(max);
				case 'Min':
					return $elm$core$String$fromFloat;
				default:
					var exact = _v1.a;
					return $myrho$elm_round$Round$round(exact);
			}
		}();
		var asList = A2(
			$elm$core$String$split,
			'.',
			toString(value));
		var decimals = function () {
			var _v0 = $elm$core$List$tail(asList);
			if (_v0.$ === 'Just') {
				var values = _v0.a;
				return A2(
					$elm$core$Maybe$withDefault,
					'',
					$elm$core$List$head(values));
			} else {
				return '';
			}
		}();
		var integers = A2(
			$elm$core$Maybe$withDefault,
			'',
			$elm$core$List$head(asList));
		return _Utils_Tuple2(integers, decimals);
	});
var $cuducos$elm_format_number$FormatNumber$Parser$splitByIndian = function (integers) {
	var thousand = ($elm$core$String$length(integers) > 3) ? A2($elm$core$String$right, 3, integers) : integers;
	var reversedSplitHundreds = function (value) {
		return ($elm$core$String$length(value) > 2) ? A2(
			$elm$core$List$cons,
			A2($elm$core$String$right, 2, value),
			reversedSplitHundreds(
				A2($elm$core$String$dropRight, 2, value))) : ((!$elm$core$String$length(value)) ? _List_Nil : _List_fromArray(
			[value]));
	};
	return $elm$core$List$reverse(
		A2(
			$elm$core$List$cons,
			thousand,
			reversedSplitHundreds(
				A2($elm$core$String$dropRight, 3, integers))));
};
var $cuducos$elm_format_number$FormatNumber$Parser$splitByWestern = function (integers) {
	var reversedSplitThousands = function (value) {
		return ($elm$core$String$length(value) > 3) ? A2(
			$elm$core$List$cons,
			A2($elm$core$String$right, 3, value),
			reversedSplitThousands(
				A2($elm$core$String$dropRight, 3, value))) : _List_fromArray(
			[value]);
	};
	return $elm$core$List$reverse(
		reversedSplitThousands(integers));
};
var $cuducos$elm_format_number$FormatNumber$Parser$splitIntegers = F2(
	function (system, integers) {
		if (system.$ === 'Western') {
			return $cuducos$elm_format_number$FormatNumber$Parser$splitByWestern(
				A2($elm$core$String$filter, $elm$core$Char$isDigit, integers));
		} else {
			return $cuducos$elm_format_number$FormatNumber$Parser$splitByIndian(
				A2($elm$core$String$filter, $elm$core$Char$isDigit, integers));
		}
	});
var $cuducos$elm_format_number$FormatNumber$Parser$parse = F2(
	function (locale, original) {
		var parts = A2($cuducos$elm_format_number$FormatNumber$Parser$splitInParts, locale, original);
		var integers = A2(
			$cuducos$elm_format_number$FormatNumber$Parser$splitIntegers,
			locale.system,
			A2($elm$core$String$filter, $elm$core$Char$isDigit, parts.a));
		var decimals = A2($cuducos$elm_format_number$FormatNumber$Parser$getDecimals, locale, parts.b);
		var partial = A5($cuducos$elm_format_number$FormatNumber$Parser$FormattedNumber, original, integers, decimals, '', '');
		var _v0 = $cuducos$elm_format_number$FormatNumber$Parser$classify(partial);
		switch (_v0.$) {
			case 'Negative':
				return _Utils_update(
					partial,
					{prefix: locale.negativePrefix, suffix: locale.negativeSuffix});
			case 'Positive':
				return _Utils_update(
					partial,
					{prefix: locale.positivePrefix, suffix: locale.positiveSuffix});
			default:
				return _Utils_update(
					partial,
					{prefix: locale.zeroPrefix, suffix: locale.zeroSuffix});
		}
	});
var $cuducos$elm_format_number$FormatNumber$Stringfy$formatDecimals = F2(
	function (locale, decimals) {
		return (decimals === '') ? '' : _Utils_ap(locale.decimalSeparator, decimals);
	});
var $cuducos$elm_format_number$FormatNumber$Stringfy$stringfy = F2(
	function (locale, formatted) {
		var stringfyDecimals = $cuducos$elm_format_number$FormatNumber$Stringfy$formatDecimals(locale);
		var integers = A2($elm$core$String$join, locale.thousandSeparator, formatted.integers);
		var decimals = stringfyDecimals(formatted.decimals);
		return $elm$core$String$concat(
			_List_fromArray(
				[formatted.prefix, integers, decimals, formatted.suffix]));
	});
var $cuducos$elm_format_number$FormatNumber$format = F2(
	function (locale, number_) {
		return A2(
			$cuducos$elm_format_number$FormatNumber$Stringfy$stringfy,
			locale,
			A2($cuducos$elm_format_number$FormatNumber$Parser$parse, locale, number_));
	});
var $cuducos$elm_format_number$FormatNumber$Locales$Min = function (a) {
	return {$: 'Min', a: a};
};
var $cuducos$elm_format_number$FormatNumber$Locales$Western = {$: 'Western'};
var $cuducos$elm_format_number$FormatNumber$Locales$base = {
	decimalSeparator: '.',
	decimals: $cuducos$elm_format_number$FormatNumber$Locales$Min(0),
	negativePrefix: '−',
	negativeSuffix: '',
	positivePrefix: '',
	positiveSuffix: '',
	system: $cuducos$elm_format_number$FormatNumber$Locales$Western,
	thousandSeparator: '',
	zeroPrefix: '',
	zeroSuffix: ''
};
var $cuducos$elm_format_number$FormatNumber$Locales$usLocale = _Utils_update(
	$cuducos$elm_format_number$FormatNumber$Locales$base,
	{
		decimals: $cuducos$elm_format_number$FormatNumber$Locales$Exact(2),
		thousandSeparator: ','
	});
var $author$project$Bar$valueFormatter = $cuducos$elm_format_number$FormatNumber$format(
	_Utils_update(
		$cuducos$elm_format_number$FormatNumber$Locales$usLocale,
		{
			decimals: $cuducos$elm_format_number$FormatNumber$Locales$Exact(0)
		}));
var $author$project$Bar$width = 400;
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorPalette = function (a) {
	return {$: 'ColorPalette', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setColorResource = F2(
	function (resource, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{colorResource: resource}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withColorPalette = F2(
	function (palette, config) {
		return A2(
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$setColorResource,
			$data_viz_lab$elm_chart_builder$Chart$Internal$Type$ColorPalette(palette),
			config);
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedColumnTitle = function (a) {
	return {$: 'StackedColumnTitle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showStackedColumnTitle = F2(
	function (formatter, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$StackedColumnTitle(formatter)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XOrdinalColumnTitle = {$: 'XOrdinalColumnTitle'};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXOrdinalColumnTitle = function (_v0) {
	var c = _v0.a;
	return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
		_Utils_update(
			c,
			{showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$XOrdinalColumnTitle}));
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle = function (a) {
	return {$: 'YColumnTitle', a: a};
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showYColumnTitle = F2(
	function (formatter, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{
					showColumnTitle: $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle(formatter)
				}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withColumnTitle = F2(
	function (title, config) {
		switch (title.$) {
			case 'YColumnTitle':
				var formatter = title.a;
				return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showYColumnTitle, formatter, config);
			case 'XOrdinalColumnTitle':
				return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$showXOrdinalColumnTitle(config);
			case 'StackedColumnTitle':
				var formatter = title.a;
				return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$showStackedColumnTitle, formatter, config);
			default:
				return config;
		}
	});
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout = F2(
	function (layout, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{layout: layout}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withGroupedLayout = function (config) {
	return A2($data_viz_lab$elm_chart_builder$Chart$Internal$Type$setLayout, $data_viz_lab$elm_chart_builder$Chart$Internal$Type$GroupedBar, config);
};
var $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setYAxisContinuous = F2(
	function (orientation, _v0) {
		var c = _v0.a;
		return $data_viz_lab$elm_chart_builder$Chart$Internal$Type$toConfig(
			_Utils_update(
				c,
				{axisYContinuous: orientation}));
	});
var $data_viz_lab$elm_chart_builder$Chart$Bar$withYAxis = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$setYAxisContinuous;
var $data_viz_lab$elm_chart_builder$Chart$Bar$axisLeft = $data_viz_lab$elm_chart_builder$Chart$Internal$Axis$Left;
var $gampleman$elm_visualization$Axis$TickCount = function (a) {
	return {$: 'TickCount', a: a};
};
var $gampleman$elm_visualization$Axis$tickCount = $gampleman$elm_visualization$Axis$TickCount;
var $gampleman$elm_visualization$Axis$TickFormat = function (a) {
	return {$: 'TickFormat', a: a};
};
var $gampleman$elm_visualization$Axis$tickFormat = $gampleman$elm_visualization$Axis$TickFormat;
var $author$project$Bar$yAxis = $data_viz_lab$elm_chart_builder$Chart$Bar$axisLeft(
	_List_fromArray(
		[
			$gampleman$elm_visualization$Axis$tickCount(5),
			$gampleman$elm_visualization$Axis$tickFormat($author$project$Bar$valueFormatter)
		]));
var $data_viz_lab$elm_chart_builder$Chart$Bar$yColumnTitle = $data_viz_lab$elm_chart_builder$Chart$Internal$Type$YColumnTitle;
var $author$project$Bar$verticalGrouped = A2(
	$data_viz_lab$elm_chart_builder$Chart$Bar$render,
	_Utils_Tuple2($author$project$Bar$data, $author$project$Bar$accessor),
	A2(
		$data_viz_lab$elm_chart_builder$Chart$Bar$withYAxis,
		$author$project$Bar$yAxis,
		$data_viz_lab$elm_chart_builder$Chart$Bar$withGroupedLayout(
			A2(
				$data_viz_lab$elm_chart_builder$Chart$Bar$withColumnTitle,
				$data_viz_lab$elm_chart_builder$Chart$Bar$yColumnTitle($author$project$Bar$valueFormatter),
				A2(
					$data_viz_lab$elm_chart_builder$Chart$Bar$withColorPalette,
					$author$project$Bar$colorScheme,
					$data_viz_lab$elm_chart_builder$Chart$Bar$init(
						{
							height: $author$project$Bar$height,
							margin: {bottom: 20, left: 40, right: 10, top: 5},
							width: $author$project$Bar$width
						}))))));
var $author$project$Main$view = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[$author$project$Bar$verticalGrouped]));
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (height) {
					return $elm$json$Json$Decode$succeed(
						{height: height, width: width});
				},
				A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$int));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));