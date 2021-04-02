/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  贪心算法：
 *     在作出选择时，每次都要选择对自身最为有利的结果，保证自身利益的最大化
 *  需求：
 *    小明手中有 1，5，10，50，100 五种面额的纸币，每种纸币对应张数分别为 5，2，2，3，5 张。
 *     若小明需要支付 456 元，则需要多少张纸币？
 */
export function greedy() {
  // 纸币的面额
  const values = [1, 5, 10, 50, 100];
  const count = [5, 2, 2, 3, 5];
  let money = 456;
  let num = 0;
  for (let i = count.length - 1; i >= 0; i -= 1) {
    const c = Math.min(parseInt(money / values[i], 10), count[i]);
    money -= c * values[i];
    num += c;
  }
  if (money > 0) {
    num = -1;
  }
  return num;
}
