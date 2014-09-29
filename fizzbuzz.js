function fizzbuzzLoop(start, end) {
  var range = [];
  for (i = start; i <= end; i++) {
    range.push(fizzbuzz(i));
  };
  console.log(range);
  return range;
};

function fizzbuzz(num) {
  if (!fizz(num) && !buzz(num)) {
    return num;
  } else {
    result = '';
    if (fizz(num)) {
      result += 'fizz';
    }
    if (buzz(num)) {
      result += 'buzz';
    };
  };
  return result;
};

function fizz(num) {
  return ((num % 3) === 0);
};

function buzz(num) {
  return ((num % 5) === 0);
};

module.exports = {
  fizzbuzzLoop: fizzbuzzLoop,
  fizzbuzz: fizzbuzz,
  fizz: fizz,
  buzz: buzz
};
