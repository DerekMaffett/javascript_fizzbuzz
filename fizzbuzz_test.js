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

function exampleTest() {
  var should = true
  var msg = 'This example should be true'
  test_output(should, msg)
}

function test_output(should, msg) {
  if (should == true) {
    console.log('PASS: ' + msg);
  } else {
    console.log('FAIL: ' + msg);
  };
};

