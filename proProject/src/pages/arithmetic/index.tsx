/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  前端算法学习
 */
import React from 'react';
import { greedy } from '@/pages/arithmetic/GreedyAm';

const Index = () => {
  function resolve() {
    const num = greedy();
    alert(`一共需要${num}张`);
  }

  return (
    <div>
      <h1>前端算法学习</h1>
      <h2>贪心算法</h2>
      <code>
        需求： 小明手中有 1，5，10，50，100 五种面额的纸币，每种纸币对应张数分别为 5，2，2，3，5
        张。 若小明需要支付 456 元，则需要多少张纸币？
      </code>
      <a onClick={resolve}>点击查看答案</a>
    </div>
  );
};
export default Index;
