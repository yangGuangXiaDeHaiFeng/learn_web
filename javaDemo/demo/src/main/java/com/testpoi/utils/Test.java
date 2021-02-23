package com.testpoi.utils;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
@RestController
@RequestMapping({"/my/first/test/user"})
public class Test {
    @PostMapping("/uploadFiles")
    public String multiFileUpload(@RequestParam("file") MultipartFile[] files) {
        System.out.println(files.length);
        return  null;
    }
//    @RequestMapping(value = "/multifiles")
//    public void receivefiles(HttpServletRequest request, HttpServletResponse response, @ModelAttribute UploadFile uploadFile){
//
//        System.out.println("收到请求");
//        MultipartFile multipartFile=uploadFile.getMultipartFile();
//        String filename=multipartFile.getOriginalFilename();
//        try{
//            System.out.println(request.getServletContext().getRealPath("/image"));
//            // path="G:tomcatupload"
//            File file=new File("test",String.valueOf(System.currentTimeMillis())+filename);
//            if(!file.exists()){
//
//            }
//            multipartFile.transferTo(file);
//        }catch (IOException e){
//            e.printStackTrace();
//        }
//
//    }
}
