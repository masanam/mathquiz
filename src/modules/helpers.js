exports.randomTitle = function() {
  const titles = [
    "Foobar is coming home",
    "Foobar is not here",
    "Foobar is alone"
  ];

  const randomInt = getRandomIntInclusive(0, titles.length - 1);

  return titles[randomInt];
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

    // getRandomEntry= () => {
    //   return questions[Math.round(Math.random() * (questions.length - 1))];
    // }

    // entryExists = (entry) =>  {
    //   return randomEntries.indexOf(entry) > -1;
    // }

    // getData = () => {
    // for (let i = 0; i < 10; i++) {
    //   let entry
    //   do {
    //     entry = getRandomEntry();
    //   } while(entryExists(entry))
    //     randomEntries.push(entry);
    //     console.log(entry._id);
    //     }
    //     this.state = { randomEntries };
    //   }