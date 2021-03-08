/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 *  bizCharts图表导出成图片工具类
 */

export const MIME_TYPE = 'image/png';
export const PIC_QUALITY = 1.0;

/**
 * canvas 对象转base64
 * @param canvas对象
 * 1、使用canvas.toDataURL
 * 2、canvas.toBlob 异步、ie不兼容
 */
export function canvasToBase64(canvas: any) {
  return canvas.toDataURL(MIME_TYPE, PIC_QUALITY);
}

/**
 * base64转Blob对象（文件上传时使用）
 * @param base64
 * 1、文件上传时需要封装FormData对象
 * 2、FormData对象只接收 File或者String
 * 3、ie不兼容File
 * 4、File extends Blob
 */
export function base64ToBlob(base64: string) {
  const dataArr = base64.split(',');
  const byteString = atob(dataArr[1]);
  const options = {
    type: MIME_TYPE,
  };
  const u8Arr = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i += 1) {
    u8Arr[i] = byteString.charCodeAt(i);
  }
  return new Blob([u8Arr], options);
}

/**
 * 接口调用
 * @param url:请求地址
 * @param fd：FormData对象
 */
export function upload(url: string, fd: FormData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.send(fd);
}

/**
 * 将图表导出图片
 * @param canvas canvas对象
 * @param fileName 文件名称
 */
export function exportCanvasAsPNG(canvas: any, fileName: string) {
  const imgURL = canvasToBase64(canvas);
  const dlLink = document.createElement('a');
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  document.body.appendChild(dlLink);
  dlLink.click();
  document.body.removeChild(dlLink);
}

/**
 * 将传入canvas中的图片旋转90度
 * @param canvas 传入的canvas图片
 *实现思路：
 *   利用canvas
 *  1、获取传入canvas的base64；
 *  2、new一个Image对象，src值为base64;
 *  3、新建一个canvas对象；（长=旧canvas的宽，宽=旧canvas的长）
 *  4、将Image对象"画"入canvas中；（长=新canvas的宽，宽=新canvas的长）
 *  5、偏移、旋转
 *  7、返回新的canvas对象
 */
export function rotatedPic(canvas: any, fileName: string) {
  const imageUrl = canvasToBase64(canvas);
  const realCanvas = document.createElement('canvas');
  realCanvas.width = canvas.height;
  realCanvas.height = canvas.width;
  const ctx = realCanvas.getContext('2d');
  if (ctx) {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      ctx.translate(realCanvas.width, 0);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(img, 0, 0, realCanvas.height, realCanvas.width);
      exportCanvasAsPNG(realCanvas, fileName);
    };
  }
}
