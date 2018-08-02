human-readable-ids-js
=====================

Use JavaScript to generate (fairly) human-readable ids from a lists of nouns and adjectives.

Generate ids in the format of `adjective-noun-verb-adverb-#` such as

* sedative-dualist-ware-lonesomely-6035
* workless-Odessa-wases-unbecomingly-5897
* herding-Chaldee-sheens-untunefully-625
* ratite-tod-insheathed-sadly-4816

Currently the id space is about 5,007,349,794,000,000,000,000,000,000,000 ids.
That's 5 thousand billion billion billion.

Usage
=======

### npm

```bash
# from npm
npm install --save big-human-readable-ids
```

```javascript
'use strict';

var hri = require('big-human-readable-ids').hri;
var i;

// generate 100 random ids
for (i = 0; i < 100; i += 1) {
  console.log(hri.random());
}
```

### bower / browser

```
bower install --save big-human-readable-ids
```

```html
    <script src="bower_components/knuth-shuffle/index.js"></script>
    <script src="bower_components/human-readable-ids/assets/animals.js"></script>
    <script src="bower_components/human-readable-ids/assets/adjectives.js"></script>
    <script src="bower_components/human-readable-ids/index.js"></script>
```

```javascript
;(function (exports) {
  'use strict';

  var hri = exports.humanReadableIds || require('human-readable-ids').hri;
  var i;

  for (i = 0; i < 100; i += 1) {
    console.log(hri.random());
  }
}('undefined' !== typeof exports && exports || new Function('return this')()));
```