function fizzbuzzLoop(start, end) {
  for (i = start; i == end; i++) {
    fizzbuzz(num)
  }
}

function fizzbuzz(num) {
  if (!fizz(num) && !buzz(num)) {
    return console.log(num)
  } else {
    result = ''
    if (fizz(num)) {
      result + 'fizz'
    }
    if (buzz(num)) {
      result + 'buzz'
    }
  }
  console.log(result)
}

function fizz(num) {
  return num % 3 == 0
}

function buzz(num) {
  return num % 5 == 0
}


