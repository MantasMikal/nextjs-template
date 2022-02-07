import sassKeysToArray from '../sass-keys-to-array'

describe('sassKeysToArray', function () {
  test('should return formatted array of keys', function () {
    expect(sassKeysToArray('"one", "two", "three"')).toEqual([
      'one',
      'two',
      'three'
    ])
  })

  test('should return empty array if no input value passed', function () {
    expect(sassKeysToArray()).toEqual([])
  })
})
