var memoize = function(f) {
  console.dir(f)
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

var squareNumber = memoize(function(x) {
  return x * x;
});

squareNumber(4)
squareNumber(4)
squareNumber(5)
squareNumber(5)
