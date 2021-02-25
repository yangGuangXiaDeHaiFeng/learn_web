import React from 'react';
import TestContext from '@/pages/learnUseContext/TestContext';
import Parent from '@/pages/learnUseContext/Parent';

/**
 *  学习useContext
 * @constructor
 *
 * 需求：
 *    最顶层组件要给最底层组件传递一个参数
 * 作用：
 *   提供 Provider
 */

const Index = () => {
  return (
    <div>
      <TestContext.Provider value={{ message: '欢迎体验新世界的生活' }}>
        <Parent />
      </TestContext.Provider>
    </div>
  );
};
export default Index;
