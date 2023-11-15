/* eslint-disable no-undef */
const greet = require('./app')

test('greeting a user', () => {
  expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin.')
})

test('greeting null', () => {
  expect(greet()).toBe('Hello, my friend.')
  expect(greet(undefined)).toBe('Hello, my friend.')
  expect(greet(' ')).toBe('Hello, my friend.')
})
