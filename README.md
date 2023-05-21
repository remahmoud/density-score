# density-score

simple package to calculate keyword density score from given text using **stopwords**.

## Installation

```bash
npm install density-score
```

## Usage

using `density-score` is very simple, just pass the text to the function and it will return an array of objects, each object contains the keyword, frequency and density score.

import using `require`:

```js

const densityScore = require('density-score');

```

import using `import`:

```js

import densityScore from 'density-score';

```

## Example




```js
const densityScore = require('density-score');

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.';

const score = densityScore(text);

console.log(score);

// [{ keyword: 'dolor', frequency: 2, density: 0.1 }]
```

## API

### densityScore(text, ignoreStopWords)

#### text

Type: `string`

The text to calculate the density score for.

#### ignoreStopWords

Type: `boolean`

Default: `true`

If set to `true`, the function will ignore stop words from the text.

### Contribution

Feel free to contribute to this project. You can open an issue or submit a pull request.

### Author

**[Mahmoud Ibrahiam](https://github.com/remahmoud)**