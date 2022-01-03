function titleCaseEdit(title) {
  let words = title.split(" ").map(function(word){
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  });
  return words.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;