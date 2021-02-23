package com.example.demo;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.ws.RequestWrapper;
import java.io.File;
import java.util.Arrays;

@RestController
@RequestMapping({"/my/first/test/user"})

public class HelloController {
    @RequestMapping("/hello")
    public String index(){
        return "hello world";
    }

    /**
     * 单文件上传，可以传额外的多个信息
     * @RequestParam("file")  要和前端一致
     * @param file：文件内容
     * @return
     */
    @PostMapping("/uploadFile")
    public String fileUpload(@RequestParam("file") MultipartFile file,String gradeCode,String collegeCode) {
        System.out.println(gradeCode);

        System.out.println(collegeCode);

        fileUpload(file);
        return  null;
    }

    @PostMapping("/uploadFiles")
    public String multiFileUpload(@RequestParam("multipartFile") MultipartFile[] files,String gradeCode,String collegeCode) {
        System.out.println(gradeCode);
        System.out.println(collegeCode);
        for(MultipartFile file:files){
            fileUpload(file);
        }
        return  null;
    }

    public String fileUpload( MultipartFile file) {
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
