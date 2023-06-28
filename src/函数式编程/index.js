const add = function (x) {
	return function (y) {
		return x + y;
	};
};

const increment = add(1);
increment(2);

const curry = require("lodash").curry;

const match = curry(function (what, str) {
	return str.match(what);
});

const replace = curry(function (what, replacement, str) {
	return str.replace(what, replacement);
});

const filter = curry(function (f, ary) {
	return ary.filter(f);
});

const map = curry(function (f, ary) {
	return ary.map(f);
});
