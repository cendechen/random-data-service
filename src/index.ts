import { IGenerate } from './type'
const random = Math.random
const floor = Math.floor
const round = Math.round


const genLenByTemplate = (len: number, generate: IGenerate) => {
  return new Array(len).fill('').map(generate).join('')
}

/**
 * 生成 [start, end] 区间随机整数
 * @param start  开始
 * @param end 结束
 */
export const randomInt = (start: number, end?: number) => {
  if (!end) {
    start = 0
    end = start
  }
  return start + floor((end - start) * random())
}

/**
 * 生成一个 a-Z A-Z 的区间的随机字符
 * @returns char
 */
export const randomChar = () => {
  const start = 65
  const end = 90

  const charCode = random() > 0.5 ? randomInt(start, end) : randomInt(start, end) + 32
  return String.fromCharCode(charCode)
}
/**
 * 生成一个固定长度的字符串
 * @param len
 */
export const randomStr = (len: number) => {
  return genLenByTemplate(len, randomChar)
}

/**
 * 生成一个固定长度的数组
 * @param len  长度
 * @param template 模板函数
 */
export const randomArray = (len: number, generate: IGenerate) => {
  return new Array(len).fill('').map(generate)
}
/**
 * 生成一个随机中文字符
 */
export const randomChineseChar = () => {
  return String.fromCodePoint(round(random() * 20901) + 19968)
}
/**
 * 生成一个指定长度的汉字
 * @param len 指定长度
 */
export const randomChineseStr = (len: number) => genLenByTemplate(len, randomChineseChar)
