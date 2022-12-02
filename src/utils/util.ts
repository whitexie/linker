import dayjs from 'dayjs'

export function isNumber(str: string | number): boolean {
  if (typeof str === 'number')
    return true
  if (typeof str === 'string' && !isNaN(parseInt(str)))
    return true
  return false
}

/**
 * 生成最近N天的日期
 * @param num : 天数
 * @returns
 */
export function generateDay(num: number, format = 'YYYY年MM月DD日'): string[] {
  const now = dayjs()
  const result: string[] = []
  for (let i = num; i > 0; i--)
    result.push(now.subtract(i, 'day').format(format))
  return result
}

/**
 * 生成唯一标识
 * @returns
 */
export function uuid(): string {
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

/**
 * 复制内容至粘贴板
 */
export function copy(text: string) {
  return text
}
/**
 * 节流
 * @param func
 * @param await
 * @returns
 */
export function throttle(func: Function, delay: number): () => void {
  let lock = false
  return (...args: any[]) => {
    if (lock)
      return
    lock = true
    setTimeout(() => {
      func(...args)
      lock = false
    }, delay)
  }
}

export function debounced(func: Function, delay: number): () => void {
  let timer: NodeJS.Timer
  return (...args: any[]) => {
    if (timer)
      clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
