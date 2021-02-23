package com.learnPOI;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import static com.utils.GenarateFile.fileUpload;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 * POI 学习
 */
@RestController
@RequestMapping({"/my/first/test/poi"})
public class POILearn {
    @PostMapping("/uploadFile")
    public void multiFileUpload(@RequestParam("file") MultipartFile file, String gradeCode, String collegeCode) {
        System.out.println("gradeCode:" + gradeCode);
        System.out.println("collegeCode:" + collegeCode);
        fileUpload(file);

    }
}
