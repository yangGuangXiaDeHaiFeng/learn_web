import React from 'react';
import Child from '@/pages/learnUseContext/Child';

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2020/09
 *
 */

const Parent = () => {
  return (
    <div>
      <p>Parent：完成任务，公园遛鸟</p>
      <Child />
    </div>
  );
};
export default Parent;
