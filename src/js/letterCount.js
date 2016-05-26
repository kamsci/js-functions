var objResult = {};

function letterCount(string) {
  var stringLower = string.toLowerCase();
  for (var i = 0; i < stringLower.length; i++) {
    if (objResult.hasOwnProperty(stringLower[i])) {
      objResult[stringLower[i]] += 1;
    } else {
      objResult[stringLower[i]] = 1;
    }
  }
  console.log(objResult);
}
letterCount('MissIssippI');

