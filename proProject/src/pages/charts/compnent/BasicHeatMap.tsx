import React from "react";
import {Axis, Chart, Geom, Label, Tooltip,} from "bizcharts";

interface IBasicHeatMapProps {
  data: any[]; // 数据源
  xAxis: string; // x轴坐标
  yAxis: string; // y轴坐标
  height?: number;
  legendName: string; // 图例对应的变量(数据中表示种类的字段) 热力图中的图例一般用连续型图例
  color?: string;// 色块的颜色 ，不填时，使用默认颜色
  maxLen?: number;
}

/**
 * 基础热力图-色块图
 * @param props
 * @constructor
 */
const BasicHeatMap: React.FC<IBasicHeatMapProps> = (props) => {
  const {height = 400, xAxis, yAxis, data, legendName, color = '#BAE7FF-#1890FF-#0050B3'} = props;


  const cols = {};
  cols[xAxis] = {
    type: 'cat',
  };
  cols[yAxis] = {
    type: 'cat',
  };
  return (
    <>
      <Chart height={height} data={data} forceFit scale={cols}>
        <Axis name={xAxis}
              grid={{
                align: 'center',
                lineStyle: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
                showFirstLine: true,
              } as any}
        />
        <Axis name={yAxis}
              grid={{
                align: 'center',
                lineStyle: {
                  lineWidth: 1,
                  lineDash: null,
                  stroke: '#f0f0f0',
                },
              } as any}
        />
        <Tooltip
        />
        <Geom type="polygon"
              position={`${xAxis}*${yAxis}`}
              color={[legendName, color]}
              style={{
                stroke: '#fff',
                lineWidth: 1,
              }}
        >
          <Label
            content={legendName}
            offset={-2}
            textStyle={{
              fill: '#fff',
              fontWeight: 'bold',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)',
            }}
          />
        </Geom>
      </Chart>

    </>
  );
}
export default BasicHeatMap;

