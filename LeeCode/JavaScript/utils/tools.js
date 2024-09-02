// 查找数组中的最大值
const maxNumber = (arr) => Math.max(...arr);
// 2. 检查字符串是否为回文
const isPalindrome = (str) => str === str.split('').reverse().join('');
// 3. 从数组中删除重复项
const uniqueArray = (arr) => [...new Set(arr)];
// 4. 将摄氏度转换为华氏度
const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
// 5. 生成随机十六进制颜色
const randomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// 6. 检查数字是偶数还是奇数
const isEven = (num) => num % 2 === 0;
// 7. 数组元素的总和
const arraySum = (arr) => arr.reduce((acc, val) => acc + val, 0);
// 8. 展平数组
const flattenArray = (arr) => arr.flat();
// 9. 将字符串中每个单词的首字母大写
const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());
// 10. 打乱数组
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
// 11. 查找两个数组的交集
const arrayIntersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));
// 12. 检查数字是否为素数
const isPrime = (num) => num > 1 && Array.from({ length: Math.sqrt(num) + 1 }, (_, i) => i + 2).every(divisor => num % divisor !== 0);
// 13. 获取数组中的最后一项
const getLastItem = (arr) => arr.slice(-1)[0];
// 14. 计算数组中某个值的出现次数
const countOccurrences = (arr, value) => arr.reduce((acc, cur) => (cur === value ? acc + 1 : acc), 0);
// 15. 反转字符串
const reverseString = (str) => str.split('').reverse().join('');
// 16. 从数组中提取唯一值
const uniqueValues = (arr) => [...new Set(arr)];
// 17. 查找数组的平均值
const arrayAverage = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// 18. 检查数字是否为 2 的幂
const isPowerOfTwo = (num) => (num & (num - 1)) === 0;
// 19. 从数组中删除假值
const removeFalsyValues = (arr) => arr.filter(Boolean);
// 20. 交换两个变量（不使用临时变量）
let a = 5, b = 10;[a, b] = [b, a];
// 21.将字符串转换为标题大小写
const toTitleCase = (str) => str.replace(/\b\w/g, char => char.toUpperCase());
// 22. 计算数字的阶乘
const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);
// 23. 检查对象是否为空
const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
// 24. 深度克隆对象
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
// 25. 查找两个数组之间的差异
const arrayDifference = (arr1, arr2) => arr1.filter(value => !arr2.include)