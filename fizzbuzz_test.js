require('./node_modules/colors/colors');
var fbMod = require('./fizzbuzz');

function divisibleByThreeReturnsFizzTest() {
  var msg = 'Returns fizz for inputs divisible by 3';
  var should = (fbMod.fizzbuzz(3) === 'fizz');
  test_output(should, msg);
};

function divisibleByFiveReturnsBuzzTest() {
  var msg = 'Returns buzz for inputs divisible by 5';
  var should = (fbMod.fizzbuzz(5) === 'buzz');
  test_output(should, msg);
};

function divisibleByBothReturnsFizzbuzzTest() {
  var msg = 'Returns fizzbuzz for numbers divisible by 3 and 5';
  var should = (fbMod.fizzbuzz(15) === 'fizzbuzz');
  test_output(should, msg);
};

function divisibleByNeitherReturnsInputTest() {
  var msg = 'Returns input if not divisible by 3 or 5';
  var should = (fbMod.fizzbuzz(4) === 4);
  test_output(should, msg);
};

function canReturnRangeOfFizzbuzzValuesTest() {
  var msg = 'Returns an array of fizzbuzz values from 1 to 5';
  var should = (fbMod.fizzbuzzLoop(1, 5) === [1, 2, 'fizz', 4, 'buzz']);
  test_output(should, msg);
};



function test_output(should, msg) {
  if (should == true) {
    var test_report = 'PASS: '.green + msg;
  } else {
    var test_report = 'FAIL: '.red + msg;
  };
  console.log(test_report)
};

divisibleByThreeReturnsFizzTest();
divisibleByFiveReturnsBuzzTest();
divisibleByBothReturnsFizzbuzzTest();
divisibleByNeitherReturnsInputTest();
canReturnRangeOfFizzbuzzValuesTest();

var _ = require("...lodash");
_.isEqual(array1,array2);
