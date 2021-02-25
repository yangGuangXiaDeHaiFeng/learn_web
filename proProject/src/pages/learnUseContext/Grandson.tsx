/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 最底层组件：
 *   直接使用context
 *
 */
import React, { useContext } from 'react';
import TestContext from '@/pages/learnUseContext/TestContext';

const Grandson = () => {
  const { message } = useContext(TestContext);
  return (
    <div>
      <p>你收到了一条来自上帝视角的消息，内容为：{message}</p>
    </div>
  );
};
export default Grandson;
