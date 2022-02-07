import colorConverter from 'color'

const colorFormatter = (color) => {
  const formattedColor = colorConverter(color)
  const channels = { ...formattedColor.object() }
  return {
    channels,
    formats: {
      rgb: formattedColor.rgb().string(),
      hsl: formattedColor.hsl().string(),
      // 'color' module has no RRGGBBAA support, so omit hex for semi-transparent colours
      ...(typeof channels.alpha === 'undefined' && {
        hex: formattedColor.hex()
      })
    }
  }
}

export default colorFormatter
