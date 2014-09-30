var colors = require('./node_modules/colors/colors');

function fizzbuzzLoop(start, end) {
  for (i = start; i == end; i++) {
    fizzbuzz(num);
  };
};

function fizzbuzz(num) {
  if (!fizz(num) && !buzz(num)) {
    return num;
  } else {
    result = '';
    if (fizz(num)) {
      result += 'fizz';
    };
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

// Tests

function test1() {
  var should = (fizzbuzz(3) === 'fizz');
  var msg = 'Returns fizz for inputs divisible by 3';
  test_output(should, msg);
};

function test2() {
  var should = (fizzbuzz(5) === 'buzz');
  var msg = 'Returns buzz for inputs divisible by 5';
  test_output(should, msg);
};

function test3() {
  var should = (fizzbuzz(15) === 'fizzbuzz');
  var msg = 'Returns fizzbuzz for numbers divisible by 3 and 5';
  test_output(should, msg);
};

function test4() {
  var should = (fizzbuzz(4) === 4);
  var msg = 'Returns input if not divisible by 3 or 5';
  test_output(should, msg);
}

// Test Reporter

function test_output(should, msg) {
  if (should == true) {
    console.log('PASS: ' + msg);
  } else {
    console.log('FAIL: ' + msg);
  };
};

test1();
test2();
test3();
test4();
console.log('hello'.green)
