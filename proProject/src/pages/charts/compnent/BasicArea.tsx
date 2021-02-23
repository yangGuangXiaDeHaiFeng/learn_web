import React from "react";
import {Axis, Chart, Geom, Tooltip,} from "bizcharts";

interface IBasicAreaProps {
  data: any[]; // 数据源
  xAxis: string; // x轴坐标
  yAxis: string; // y轴坐标
  height?: number;
  maxLen?: number;
}

/**
 * 基础面积图（单面积图，可设置滚动条）
 * @param props
 * @constructor
 */
const BasicArea: React.FC<IBasicAreaProps> = (props) => {
  const {height = 400, xAxis, yAxis, data} = props;


  const cols = {};
  // 对于像是折线图、面积图等连续图表，建议为横坐标设置range:[0,1]
  cols[xAxis] = {
    range: [0, 1]
  }
  /*
            当没有设置“point”时，会出现以下现象：
                如果数据只有一条，即data.length=1时：
                      ①、图表中什么也没有②、鼠标悬浮时出现点及该点对应的数据
                      即鼠标移入图表有数据移出没有数据（用户角度的现象）
            ===》建议面积图中设置“point”（实际中看项目需求）
         * */
  return (
    <>
      <Chart height={height} data={data} scale={cols} forceFit>
        <Axis name={xAxis}/>
        <Axis name={yAxis}/>
        <Tooltip
          crosshairs={{
            type: "y"
          }}
        />
        <Geom
          type="area"
          position={`${xAxis}*${yAxis}`}
          size={4}
          shape="smooth"
        />
        <Geom type="line" position={`${xAxis}*${yAxis}`} size={2} shape="smooth"/>
        <Geom
          type="point"
          position={`${xAxis}*${yAxis}`}
          size={4}
          shape="circle"
        />
      </Chart>

    </>
  );
}


export default BasicArea;

