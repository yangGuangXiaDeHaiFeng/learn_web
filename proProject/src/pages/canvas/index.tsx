import React from 'react';
import pic from './test.png';
/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
const Index = () => {
  function test() {
    const c = document.getElementById('myCanvas');
    const c2 = document.getElementById('myCanvas2');

    const ctx = c.getContext('2d');
    const ctx2 = c2.getContext('2d');

    const img = new Image();
    img.src = pic;

    img.onload = function () {
      alert('加载完毕');
      ctx.drawImage(img, 0, 0, 800, 400);
      ctx2.translate(600, 150);
      ctx2.rotate(Math.PI / 2);
      ctx2.drawImage(img, 0, 0, 800, 400);
    };
  }

  return (
    <div>
      canvas学习
      <a onClick={() => test()}>点击</a>
      <div>
        <canvas id="myCanvas" width="1200" height="1200" style={{ border: '1px solid red' }}>
          Your browser does not support the HTML5 canvas tag.
        </canvas>
        <canvas id="myCanvas2" width="1200" height="1200" style={{ border: '1px solid red' }}>
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </div>
    </div>
  );
};
export default Index;
