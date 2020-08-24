/**
 * @name: Simple
 * @author: wangjiao
 * @description：极简版本
 */
/**
 * @name: index
 * @author: wangjiao
 * @description：主页
 */
import React from 'react';
import styles from './simple.less';
const sections=[1,2,3,4,5,6,7,8,9,10,11,12].map((i)=>`第${i}节`);
const weeks=[0,1,2,3,4,5,6,7].map((i)=>{if(i!==0)return`周${i}`;return ""});
const Simple: React.FC<{}> = props => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.rowHead}>
          {
            weeks.map((item,index)=>{
              if(index===0){
                return (<div className={styles.empty}/>)
              }
              return (<div className={styles.headItem}>{item}</div>)
            })
          }
        </div>
        {sections.map((item)=><div  className={styles.rowItem}>
          {
            weeks.map((i,index)=>{
              if(index===0){
                return<div className={styles.columnHead}>{item}</div>
              }
              return <div className={styles.columnItem}/>
            })
          }
        </div>)}
      </div>
    </div>
)
}
export default Simple;

