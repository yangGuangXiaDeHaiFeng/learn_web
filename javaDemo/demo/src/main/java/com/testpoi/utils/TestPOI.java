package com.testpoi.utils;

import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
public class TestPOI {
    public static void writeTOC() throws IOException {
        XWPFDocument document= new XWPFDocument();

        //Write the Document in file system  /Users/wangjiao/workspace/learn_web/javaDemo/demo/src/main/java/com/testpoi/contract.docx
        FileOutputStream out = new FileOutputStream(new File("create_toc.docx"));

        //添加标题
        XWPFParagraph titleParagraph = document.createParagraph();

        //设置段落居中
        titleParagraph.setAlignment(ParagraphAlignment.CENTER);

        XWPFRun titleParagraphRun = titleParagraph.createRun();
        titleParagraphRun.setText("Java PoI");
        titleParagraphRun.setColor("000000");
        titleParagraphRun.setFontSize(20);

        //段落
        XWPFParagraph firstParagraph = document.createParagraph();
        firstParagraph.setStyle("Heading1");
        XWPFRun run = firstParagraph.createRun();
        run.setText("段落1。");
        run.setColor("696969");
        run.setFontSize(18);


        //段落
        XWPFParagraph firstParagraph1 = document.createParagraph();
        firstParagraph.setStyle("Heading1");
        XWPFRun run1 = firstParagraph1.createRun();
        run1.setText("段落2");
        run1.setColor("696969");
        run1.setFontSize(16);

        document.createTOC();

        document.write(out);
        out.close();
    }
}
