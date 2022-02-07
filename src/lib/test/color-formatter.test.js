import colorFormatter from '../color-formatter'

describe('colorFormatter', function () {
  test('should return information about opaque color passed', function () {
    expect(colorFormatter('#123456')).toEqual({
      channels: { b: 86, g: 52, r: 18 },
      formats: {
        hex: '#123456',
        hsl: 'hsl(210, 65.4%, 20.4%)',
        rgb: 'rgb(18, 52, 86)'
      }
    })
  })

  test('should return information about semi-transparent color passed', function () {
    expect(colorFormatter('rgba(18, 52, 86, 0.5)')).toEqual({
      channels: { alpha: 0.5, b: 86, g: 52, r: 18 },
      formats: {
        hsl: 'hsla(210, 65.4%, 20.4%, 0.5)',
        rgb: 'rgba(18, 52, 86, 0.5)'
      }
    })
  })
})
