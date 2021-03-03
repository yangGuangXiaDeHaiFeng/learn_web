import React from 'react';
import BasicArea from '@/pages/charts/compnent/BasicArea';
import BasicHeatMap from '@/pages/charts/compnent/BasicHeatMap';
import GroupedColumn from '@/pages/charts/compnent/GroupedColumn';

const doubleData = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7,
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9,
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 6.9,
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2,
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 9.5,
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7,
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5,
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5,
  },
  {
    month: 'May',
    city: 'Tokyo',
    temperature: 18.4,
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9,
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 21.5,
  },
  {
    month: 'Jun',
    city: 'London',
    temperature: 15.2,
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 25.2,
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17,
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 26.5,
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6,
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 23.3,
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2,
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 18.3,
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3,
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 13.9,
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 6.6,
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 9.6,
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 4.8,
  },
];

const radarData = [
  { month: '一月份', day: '星期一', sales: 10 },
  { month: '二月份', day: '星期一', sales: 5 },
  { month: '三月份', day: '星期一', sales: 10 },
  { month: '四月份', day: '星期一', sales: 10 },
  { month: '五月份', day: '星期一', sales: 10 },
  { month: '六月份', day: '星期一', sales: 10 },
  { month: '七月份', day: '星期一', sales: 10 },
  { month: '八月份', day: '星期二', sales: 10 },
  { month: '九月份', day: '星期一', sales: 10 },
  { month: '十月份', day: '星期二', sales: 10 },
  { month: '十一月份', day: '星期一', sales: 10 },
  { month: '十二月份', day: '星期一', sales: 10 },
  { month: '一月份', day: '星期二', sales: 10 },
  { month: '二月份', day: '星期二', sales: 35 },
  { month: '三月份', day: '星期二', sales: 10 },
  { month: '四月份', day: '星期二', sales: 60 },
  { month: '五月份', day: '星期二', sales: 10 },
  { month: '六月份', day: '星期二', sales: 10 },
  { month: '七月份', day: '星期二', sales: 10 },
  { month: '八月份', day: '星期二', sales: 90 },
  { month: '九月份', day: '星期二', sales: 10 },
  { month: '十月份', day: '星期二', sales: 330 },
  { month: '十一月份', day: '星期二', sales: 40 },
  { month: '十二月份', day: '星期二', sales: 50 },
  { month: '一月份', day: '星期三', sales: 10 },
  { month: '二月份', day: '星期三', sales: 35 },
  { month: '三月份', day: '星期三', sales: 10 },
  { month: '四月份', day: '星期三', sales: 10 },
  { month: '五月份', day: '星期三', sales: 10 },
  { month: '六月份', day: '星期三', sales: 50 },
  { month: '七月份', day: '星期三', sales: 40 },
  { month: '八月份', day: '星期三', sales: 90 },
  { month: '九月份', day: '星期三', sales: 10 },
  { month: '十月份', day: '星期三', sales: 330 },
  { month: '十一月份', day: '星期三', sales: 40 },
  { month: '十二月份', day: '星期三', sales: 50 },
  { month: '一月份', day: '星期六', sales: 10 },
  { month: '二月份', day: '星期六', sales: 35 },
  { month: '三月份', day: '星期六', sales: 1700 },
  { month: '四月份', day: '星期六', sales: 1070 },
  { month: '五月份', day: '星期六', sales: 1770 },
  { month: '六月份', day: '星期六', sales: 580 },
  { month: '七月份', day: '星期六', sales: 490 },
  { month: '八月份', day: '星期六', sales: 456 },
  { month: '九月份', day: '星期六', sales: 1000 },
  { month: '十月份', day: '星期六', sales: 630 },
  { month: '十一月份', day: '星期六', sales: 490 },
  { month: '十二月份', day: '星期六', sales: 560 },
];
const basicLineData = [
  {
    year: '1991',
    value: 3,
  },
  {
    year: '1992',
    value: 4,
  },
  {
    year: '1993',
    value: 3.5,
  },
  {
    year: '1994',
    value: 5,
  },
  {
    year: '1995',
    value: 4.9,
  },
  {
    year: '1996',
    value: 6,
  },
  {
    year: '1997',
    value: 7,
  },
  {
    year: '1998',
    value: 9,
  },
  {
    year: '1999',
    value: 13,
  },
];

const Index: React.FC<{}> = () => {
  /**
   *  图表转图片上传（单图表）
   */
  function exportSingleFile() {
    const wrapDiv = document.getElementById('exportSingleFile');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelector('canvas');
      if (canvas) {
        const MIME_TYPE = 'image/png';
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const fd = new FormData();
              fd.append('file', blob, 'singleImage.png');
              fd.append('collegeCode', '108900');
              fd.append('gradeCode', '2019');
              upload('http://localhost:8080/my/first/test/file/uploadFile', fd);
            }
          },
          MIME_TYPE,
          1.0,
        );
      }
    }
  }

  function upload(url: string, fd: any) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(fd);
  }

  function btof(data: any, fileName: string) {
    const dataArr = data.split(',');
    const byteString = atob(dataArr[1]);
    const options = {
      type: 'image/png',
    };
    const u8Arr = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i += 1) {
      u8Arr[i] = byteString.charCodeAt(i);
    }
    return new File([u8Arr], fileName, options);
  }

  /**
   *  图表转图片上传（多图表）
   */
  function exportDoubleFile() {
    const wrapDiv = document.getElementById('exportDoubleFile');
    if (wrapDiv) {
      const canvas = wrapDiv.querySelectorAll('canvas');
      if (canvas) {
        const MIME_TYPE = 'image/png';
        const fd = new FormData();

        for (let i = 0; i < canvas.length; i += 1) {
          const imgURL = canvas[i].toDataURL(MIME_TYPE, 1.0);
          const imgFile = btof(imgURL, `img${i}.png`);
          fd.append('multipartFile', imgFile);
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
      </div>
    </div>
  );
};
export default Index;

function exportCanvasAsPNG(canvasElement: any, fileName: string) {
  const MIME_TYPE = 'image/png';
  const imgURL = canvasElement.toDataURL(MIME_TYPE, 1.0);
  const dlLink = document.createElement('a');
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}
