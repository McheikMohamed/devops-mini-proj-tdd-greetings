/* eslint-disable no-undef */
const greet = require('./app')

test('greeting a user', () => {
  expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})
