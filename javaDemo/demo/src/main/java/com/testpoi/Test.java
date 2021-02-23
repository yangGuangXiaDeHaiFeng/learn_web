package com.testpoi;


import com.testpoi.utils.DOCWriter;
import com.testpoi.utils.ImageUtils;
import com.testpoi.utils.TestPOI;
import com.testpoi.utils.WordTemplateUtil;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
public class Test {
    public static void main(String[] args) throws Exception {
//        test1();
//        test2();
//        test3();
        writeToWord();



    }

    private static void test3() {
        /*设置参数*/
        Map<String,String> map = new HashMap<>();
        map.put("${name}", "王五");
        map.put("${tel}", "8886666");
        String srcPath = "contract.docx";
        DOCWriter.searchAndReplace(srcPath, "test.docx", map);

    }

    private static void test2() throws Exception {
        /*设置参数*/
        Map<String,String> params = new HashMap<>();
        params.put("partyA","华为");
        params.put("partyB","新浪");
        params.put("contractNo","NO2019100506");
        params.put("signTime","2019年10月05日");
        String templatePath = "contract.docx";
        FileOutputStream out = new FileOutputStream(new File("test.docx"));

        WordTemplateUtil.wordRenderAndGetFromWordTemplate(templatePath,
                new File(templatePath ), params, out
        );
    }

    private static void test1() throws IOException {
        TestPOI.writeTOC();

    }


    /**
     * Word中写入图片示例
     * @throws Exception
     */
    public static void writeToWord() throws Exception {
        FileOutputStream fos = new FileOutputStream("temp.docx");
        String imgPath = "img.png";   // 图片路径
        XWPFDocument document = new XWPFDocument();
        XWPFParagraph paragraph = document.createParagraph();
        XWPFRun run = paragraph.createRun();
        ImageUtils.writeImage(run, imgPath);
        document.write(fos);
        System.out.println("=========Word文件生成成功==========");
    }

}
