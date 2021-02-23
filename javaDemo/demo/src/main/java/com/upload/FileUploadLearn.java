package com.upload;

import com.utils.GenarateFile;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * 文件（图片）上传
 *
 */
@RestController
@RequestMapping({"/my/first/test/file"})
public class FileUploadLearn {
    /**
     * 单文件上传，可以传额外的多个信息
     * @RequestParam("file")  要和前端一致
     * @param file：文件内容
     * @return
     */
    @PostMapping("/uploadFile")
    public String fileUpload(@RequestParam("file") MultipartFile file, String gradeCode, String collegeCode) {
        System.out.println(gradeCode);

        System.out.println(collegeCode);

        GenarateFile.fileUpload(file);
        return  null;
    }

    /**
     * 多文件上传，可以传额外的多个信息
     * @param files：文件内容
     * @param gradeCode：额外信息
     * @param collegeCode：额外信息
     * @return：返回值
     */
    @PostMapping("/uploadFiles")
    public String multiFileUpload(@RequestParam("multipartFile") MultipartFile[] files,String gradeCode,String collegeCode) {
        System.out.println(gradeCode);

        System.out.println(collegeCode);

        for(MultipartFile file:files){
            GenarateFile.fileUpload(file);

        }

        return  null;
    }

}
