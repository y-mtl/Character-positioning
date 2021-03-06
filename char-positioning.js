function charPositioning(string){
  var charPosition = {};

  for (var i = 0; i < string.length; i++) {
    var letter = string[i];

    if(letter === ' '){
      continue;
    }

    if(!charPosition[letter]){
      charPosition[letter] = [i];
    } else {
      charPosition[letter].push(i);
    }

  }
  return charPosition;
}

console.log(charPositioning("lighthouse in the house"));


// if statement can be removed by the followings
// characterPositions[letter] = characterPositions[letter] || [];
// charPosition[letter].push(i);
