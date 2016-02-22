# has-chinese [![NPM version](https://img.shields.io/npm/v/has-chinese.svg)](https://npmjs.com/package/has-chinese) [![NPM downloads](https://img.shields.io/npm/dm/has-chinese.svg)](https://npmjs.com/package/has-chinese) [![Build Status](https://img.shields.io/circleci/project/egoist/has-chinese/master.svg)](https://circleci.com/gh/egoist/has-chinese) 

> Check if text contains a Chinese word.

## Install

```bash
$ npm install --save has-chinese
```

## Usage

```js
const hasChinese = require('has-chinese')

hasChinese('unicorns')
//=> false

hasChinese('我爱你 I love you')
//=> true
```

## License

MIT © [EGOIST](https://github.com/egoist)
