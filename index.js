'use strict'

var isChinese = require('is-chinese')

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string')
	}

	for (var i = 0; i < str.length; i++) {
		if (isChinese(str[i])) {
			return true
		}
	}

	return false
}
