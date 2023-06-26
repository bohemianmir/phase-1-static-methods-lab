class Formatter {
  
  
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    static sanitize(string) {
      let regex = /[^A-Za-z0-9 '-]/g;
      return string.replace(regex, "");
    }
  
    static titleize(string) {
      let words = string.split(" ");
      let firstWord = words.shift();
      let titleized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
      let exceptions = [
        "the",
        "a",
        "an",
        "but",
        "of",
        "and",
        "for",
        "at",
        "by",
        "from",
      ];
      let titleizedWords = words.map((word) => {
        if (exceptions.includes(word)) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      titleizedWords.unshift(titleized);
      return titleizedWords.join(" ");
    }
  }
