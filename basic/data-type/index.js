
/**
 * 检查变量是什么数据类型
 * @type {string}
 */
var str = "Hello World!";
var type = typeof str;
console.log(type);

/**
 * 转字符串
 */
var num2str = 123;
console.log(typeof num2str.toString());
console.log(typeof String(num2str));
console.log(typeof (""+num2str));

/**
 * 转数值
 * @type {string}
 */
var str2num = "123";
console.log(typeof Number(str2num));
var decimalstr2num = "123.23";
console.log(typeof parseInt(decimalstr2num));
console.log(typeof parseFloat(decimalstr2num));
var decimalstr = "0xac";
console.log(parseInt(decimalstr, 16));

/**
 * 转boolean
 */
var bool = Boolean("");
console.log(bool);