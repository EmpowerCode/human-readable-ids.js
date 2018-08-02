/*jshint -W054 */
(function(exports) {
  "use strict";

  var lists = exports.humanReadableIds || require("./lists"),
    shuffle = exports.knuthShuffle || require("knuth-shuffle").knuthShuffle,
    nouns = [],
    verbs = [],
    adverbs = [],
    adjectives = [],
    numbers = [];

  function genNumbers() {
    var i = 2;

    numbers = [];
    numbers.push(0);
    // 1 is not plural, so we skip it
    for (i = 2; i <= 9999; i += 1) {
      numbers.push(i);
    }

    return shuffle(numbers);
  }

  function random() {
    if (!adjectives.length) {
      adjectives = shuffle(lists.adjectives.slice(0));
    }
    if (!nouns.length) {
      nouns = shuffle(lists.nouns.slice(0));
    }
    if (!verbs.length) {
      verbs = shuffle(lists.verbs.slice(0));
    }
    if (!adverbs.length) {
      adverbs = shuffle(lists.adverbs.slice(0));
    }
    if (!numbers.length) {
      numbers = shuffle(genNumbers());
    }

    return (
      adjectives.pop() +
      "-" +
      nouns.pop() +
      "-" +
      verbs.pop() +
      "-" +
      adverbs.pop() +
      "-" +
      numbers.pop()
    );
  }

  exports.humanReadableIds = { random: random };
  exports.hri = exports.humanReadableIds;
})(
  ("undefined" !== typeof exports && exports) || new Function("return this")()
);
