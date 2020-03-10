"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random = Math.random;
var floor = Math.floor;
var round = Math.round;
var genLenByTemplate = function (len, generate) {
    return new Array(len).fill('').map(generate).join('');
};
/**
 * 生成 [start, end] 区间随机整数
 * @param start  开始
 * @param end 结束
 */
exports.randomInt = function (start, end) {
    if (!end) {
        start = 0;
        end = start;
    }
    return start + floor((end - start) * random());
};
/**
 * 生成一个 a-Z A-Z 的区间的随机字符
 * @returns char
 */
exports.randomChar = function () {
    var start = 65;
    var end = 90;
    var charCode = random() > 0.5 ? exports.randomInt(start, end) : exports.randomInt(start, end) + 32;
    return String.fromCharCode(charCode);
};
/**
 * 生成一个固定长度的字符串
 * @param len
 */
exports.randomStr = function (len) {
    return genLenByTemplate(len, exports.randomChar);
};
/**
 * 生成一个固定长度的数组
 * @param len  长度
 * @param template 模板函数
 */
exports.randomArray = function (len, generate) {
    return new Array(len).fill('').map(generate);
};
/**
 * 生成一个随机中文字符
 */
exports.randomChineseChar = function () {
    return String.fromCodePoint(round(random() * 20901) + 19968);
};
/**
 * 生成一个指定长度的汉字
 * @param len 指定长度
 */
exports.randomChineseStr = function (len) { return genLenByTemplate(len, exports.randomChineseChar); };
