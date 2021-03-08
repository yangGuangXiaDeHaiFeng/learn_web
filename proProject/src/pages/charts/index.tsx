import React from 'react';
import BasicArea from '@/pages/charts/compnent/BasicArea';
import BasicHeatMap from '@/pages/charts/compnent/BasicHeatMap';
import GroupedColumn from '@/pages/charts/compnent/GroupedColumn';
import {
  base64ToBlob,
  canvasToBase64,
  exportCanvasAsPNG,
  rotatedPic,
  upload,
} from '@/utils/exportPicUtils';
import { basicLineData, doubleData, radarData } from '@/utils/datasource';

const Index: React.FC<{}> = () => {
  /**
   *  图表转图片上传（单图表）
   */
  function exportSingleFile() {
    const wrapDiv = document.getElementById('exportSingleFile');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelector('canvas');
      if (canvas) {
        const blob = base64ToBlob(canvasToBase64(canvas));

        const fd = new FormData();
        fd.append('file', blob, 'singleImage.png');
        fd.append('collegeCode', '108900');
        fd.append('gradeCode', '2019');

        upload('http://localhost:8080/my/first/test/file/uploadFile', fd);
      }
    }
  }

  /**
   *  图表转图片上传（多图表）
   */
  function exportDoubleFile() {
    const wrapDiv = document.getElementById('exportDoubleFile');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelectorAll('canvas');
      if (canvas) {
        const fd = new FormData();

        for (let i = 0; i < canvas.length; i += 1) {
          const blob = base64ToBlob(canvasToBase64(canvas[i]));
          fd.append('multipartFile', blob);
          fd.append('collegeCode', `108900${i}`);
          fd.append('gradeCode', `2019${i}`);
        }
        upload('http://localhost:8080/my/first/test/file/uploadFiles', fd);
      }
    }
  }
  function changeToPic() {
    const wrapDiv = document.getElementById('changeToPic');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelector('canvas');
      if (canvas) {
        exportCanvasAsPNG(canvas, '销量变化');
      }
    }
  }
  function saveToPic() {
    const wrapDiv = document.getElementById('rotatedPic');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelector('canvas');
      if (canvas) {
        rotatedPic(canvas, '旋转90度');
      }
    }
  }
  return (
    <div style={{ background: 'white' }}>
      <div id="exportSingleFile" style={{ margin: '20px' }}>
        <a onClick={exportSingleFile}>保存</a>
        <BasicArea data={basicLineData} xAxis="year" yAxis="value" maxLen={20} />
      </div>
      <div id="exportDoubleFile">
        <a onClick={exportDoubleFile}>保存</a>
        <GroupedColumn
          data={doubleData}
          xAxis="month"
          yAxis="temperature"
          legendName="city"
          maxLen={20}
        />
        <BasicArea data={basicLineData} xAxis="year" yAxis="value" />
        <BasicHeatMap data={radarData} xAxis="month" yAxis="day" legendName="sales" />
      </div>
      <div id="changeToPic">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2>各月销量</h2>
          <a onClick={changeToPic}>保存为图片</a>
        </div>
        <GroupedColumn
          data={doubleData}
          xAxis="month"
          yAxis="temperature"
          legendName="city"
          maxLen={20}
        />
        <div id="rotatedPic">
          <a onClick={saveToPic}>保存为图片（旋转90度）</a>

          <GroupedColumn
            width={1000}
            height={520}
            data={doubleData}
            xAxis="month"
            yAxis="temperature"
            legendName="city"
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
