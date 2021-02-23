package com.testpoi.utils;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */

import org.apache.poi.util.IOUtils;
import org.apache.poi.util.Units;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import sun.misc.BASE64Decoder;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;

/**
 * Copyright (c) 2020
 * @Author: C.S
 * @LastModified: 2020/7/26 18:04
 */
public class ImageUtils {

    /**
     * 将base64码转成字节数组输入流
     * @param imgStr
     * @return
     */
    public static ByteArrayInputStream getImgByBase64Str(String imgStr) {// 对字节数组字符串进行Base64解码并生成图片
        if(imgStr == null) // 图像数据为空
        {
            return null;

        }
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            // Base64解码
            byte[] bytes = decoder.decodeBuffer(imgStr);
            for (int i = 0; i < bytes.length; ++i) {
                if (bytes[i] < 0) {// 调整异常数据
                    bytes[i] += 256;
                }
            }
            return new ByteArrayInputStream(bytes);
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 根据图片路径获取图片
     * @param path
     * @return
     * @throws Exception
     */
    public static BufferedImage getImgByFilePath(String path) throws Exception {
        FileInputStream fis = new FileInputStream(path);
        byte[] byteArray = IOUtils.toByteArray(fis);
        ByteArrayInputStream bais = new ByteArrayInputStream(byteArray);
        return  ImageIO.read(bais);
    }

    /**
     * 向Word中插入图片(仅支持png格式图片, 未完待续...)
     * @param run
     * @param imagePath 图片文件路径
     * @throws Exception
     */
    public static void writeImage(XWPFRun run, String imagePath) throws Exception {
        BufferedImage image = getImgByFilePath(imagePath);
        System.out.println(image);
        int width = Units.toEMU(image.getWidth());
        int height = Units.toEMU(image.getHeight());
        run.addPicture(new FileInputStream(imagePath), XWPFDocument.PICTURE_TYPE_PNG, "test",
                width, height);
    }



}
