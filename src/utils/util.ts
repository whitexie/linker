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

export function uuid() {
  let random
  let uuid = ''
  for (let i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0 // 解释1
    if (i === 8 || i === 12 || i === 16 || i === 20) { // 解释2
      uuid += '-'
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16) // 解释3
  }
  return uuid
}
