/**
 * @name: Simple
 * @author: wangjiao
 * @description：极简版本
 */
import React from 'react';
import styles from './simple.less';

const sections = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => `第${i}节`);
const weeks = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => `周${i}`);

const data = [
  {
    week:1,
    startSection:1,
    endSection:2,
    course:'语文'
  },
  {
    week:1,
    startSection:10,
    endSection:12,
    course:'化学'
  },
  {
    week:3,
    startSection:1,
    endSection:4,
    course:'大学物理'
  },
  {
    week:4,
    startSection:5,
    endSection:6,
    course:'English'
  },
]
const Simple: React.FC<{}> = props => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.rowHead}>
          {
            weeks.map((item, index) => {
              if (index === 0) {
                return (<div className={styles.empty} />)
              }
              return (<div className={styles.headItem}>{item}</div>)
            })
          }
        </div>
        {sections.map((rowItem, i) => <div className={styles.rowItem}>
          {
            weeks.map((columnItem, j) => {

              if (j === 0) {
                return <div className={styles.columnHead}>{rowItem}</div>
              }
              return <div className={styles.columnItem}/>
            })
          }
        </div>)}
      </div>
      <div className={styles.topContent}>
           {
             data.map((item)=>{
                 return<div className={styles.item} style={{top:`${(item.startSection-1)*52}px`,
                   left:`${(item.week-1)*100}px`,height:`${(item.endSection-item.startSection+1)*52}px`,lineHeight:`${(item.endSection-item.startSection+1)*52}px`}} >{item.course}</div>
             })
           }
      </div>
    </div>
  )
};
export default Simple;

