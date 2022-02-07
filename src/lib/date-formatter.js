import { format as formatFn } from 'date-fns'

const formats = {
  LT: 'p',
  LTS: 'pp',
  L: 'd MMM yyyy',
  LL: 'd MMMM yyyy',
  LLL: 'd MMMM yyyy p',
  LLLL: 'iiii d MMMM yyyy p',
  ISO: `yyyy-MM-dd'T'HH:mm:ss'Z'`
}

const dateFormatter = (date, format = 'LLL') => {
  if (!date) return ''
  return formatFn(date, `${formats[format]}`)
}

export default dateFormatter
