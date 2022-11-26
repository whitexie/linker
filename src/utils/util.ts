import dayjs from 'dayjs'

export function isNumber(str: string | number): boolean {
  if (typeof str === 'number')
    return true
  if (typeof str === 'string' && !isNaN(parseInt(str)))
    return true
  return false
}

export function generateDay(num: number): string[] {
  const now = dayjs()
  const result: string[] = []
  for (let i = num; i > 0; i--)
    result.push(now.subtract(i, 'day').format('MM月DD日'))
  return result
}
