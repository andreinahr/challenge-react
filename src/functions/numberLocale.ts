import { locales, currency } from '../constants/configurations'
export function numberLocale(value: number, decimals = 2): string {
  const formatter = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals,
  })
  return formatter.format(value)
}
