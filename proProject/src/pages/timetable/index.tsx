/**
 * @name: index
 * @author: wangjiao
 * @description：主页
 */
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Simple from "@/pages/timetable/component/Simple";
interface IIndexProps {
}
const index: React.FC<IIndexProps> = props => {
    return (<PageHeaderWrapper title={false}>
      <h1>超级简单版本</h1>
      <Simple/>
    </PageHeaderWrapper>)
}
export default index;
