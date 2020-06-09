import { IGenerate } from './type';
/**
 * 生成 [start, end] 区间随机整数
 * @param start  开始
 * @param end 结束
 */
export declare const randomInt: (start: number, end?: number) => number;
/**
 * 生成一个 a-Z A-Z 的区间的随机字符
 * @returns char
 */
export declare const randomChar: () => string;
/**
 * 生成一个固定长度的字符串
 * @param len
 */
export declare const randomStr: (len: number) => string;
/**
 * 生成一个固定长度的数组
 * @param len  长度
 * @param template 模板函数
 */
export declare const randomArray: (len: number, generate: IGenerate) => any[];
/**
 * 生成一个随机中文字符
 */
export declare const randomChineseChar: () => string;
/**
 * 生成一个指定长度的汉字
 * @param len 指定长度
 */
export declare const randomChineseStr: (len: number) => string;
/**
 * 方法整合
*/
declare const $: {
    int: (start: number, end?: number) => number;
    char: () => string;
    str: (len: number) => string;
    chChar: () => string;
    chStr: (len: number) => string;
    array: (len: number, generate: IGenerate) => any[];
};
export default $;
