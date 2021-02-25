import React from 'react';
import Grandson from '@/pages/learnUseContext/Grandson';

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  中间组件
 */
const Child = () => {
  return (
    <div>
      <p>Child：70后的打工人 </p>
      <Grandson />
    </div>
  );
};
export default Child;
