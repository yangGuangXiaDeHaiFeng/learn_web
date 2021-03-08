import React from 'react';
import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';

interface IGroupedColumnProps {
  data: any[]; // 数据源
  xAxis: string; // x轴坐标
  yAxis: string; // y轴坐标
  legendName: string; // 图例对应的变量(数据中表示种类的字段)
  color?: string[];
  height?: number;
  width?: number;
  maxLen?: number;
}

/**
 * 分组柱状图（两组及两组以上柱状图，可设置滚动条）
 * @param props
 * @constructor
 */
const GroupedColumn: React.FC<IGroupedColumnProps> = (props) => {
  const { height = 400, xAxis, yAxis, data, color, legendName, width = 400 } = props;

  return (
    <>
      <Chart height={height} data={data} forceFit width={width}>
        <Axis name={xAxis} />
        <Axis name={yAxis} />
        <Legend />
        <Tooltip />
        <Geom
          type="interval"
          position={`${xAxis}*${yAxis}`}
          color={color ? [`${legendName}`, color] : legendName}
          adjust={[
            {
              type: 'dodge',
              marginRatio: 1 / 32,
            },
          ]}
        />
      </Chart>
    </>
  );
};

export default GroupedColumn;
