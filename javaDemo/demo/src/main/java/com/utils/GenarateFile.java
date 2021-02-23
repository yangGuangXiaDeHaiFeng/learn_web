package com.utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
public  class GenarateFile {
    // 处理文件并保存到本地文件夹中
    public static String fileUpload( MultipartFile file) {
        if (file.isEmpty()) {
            return "false";
        }
        String fileName = file.getOriginalFilename();
        File dest = new File(new File("image").getAbsolutePath()+ "/" + fileName);
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest); // 保存文件
            return "true";
        } catch (Exception e) {
            e.printStackTrace();
            return "false";
        }
    }

}
