/*jshint asi:true*/
var capitalize = require('./')

var test = require('tape')

test('Capitalize first letter', function (t) {
  t.plan(1)
  t.equal(capitalize("united"), "United")
})

test('Capitalize each word', function (t) {
  t.plan(1)
  t.equal(capitalize("united states"), "United States")
})

test('Capitalize each element of array', function (t) {
  t.plan(1)
  t.deepEqual(capitalize(['united', 'kingdom']), Array('United','Kingdom'))
})

test('Capitalize each element of array with spaces', function (t) {
  t.plan(1)
  t.deepEqual(capitalize(['united kingdom', 'kingdom of the best people']), Array('United Kingdom','Kingdom Of The Best People'))
})

test('Return false when undefined', function (t) {
  t.plan(1)
  t.equal(capitalize(), false)
})

test('Return false when empty array', function (t) {
  t.plan(1)
  t.equal(capitalize([]), false)
})

test('Return false when object', function (t) {
  t.plan(1)
  t.equal(capitalize({}), false)
})