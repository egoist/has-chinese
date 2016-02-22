import test from 'ava'
import hasChinese from './'

test('main', t => {
	t.true(hasChinese('我爱你'))
	t.true(hasChinese('123四五六'))
	t.false(hasChinese('what the hell!'))
})
