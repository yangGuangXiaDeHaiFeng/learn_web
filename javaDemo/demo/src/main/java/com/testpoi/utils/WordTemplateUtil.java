package com.testpoi.utils;

import com.sun.deploy.util.StringUtils;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTText;
import org.springframework.web.client.RestClientException;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
 *
 * 文档处理类
 *
 * */
public class WordTemplateUtil {

    /*从word模板 渲染参数 获取word文档
     *   template 模板文件 params 参数 outputStream 输出流,
     */
    public static void wordRenderAndGetFromWordTemplate(String srcPath, File template, Map<String, String> params,
                                                        OutputStream outputStream) throws Exception {

        InputStream is = new FileInputStream(srcPath);
        // 生成word文档
        XWPFDocument doc = new XWPFDocument(is);
        // 获取word文档中全部的段落
        List<XWPFParagraph> paragraphs = doc.getParagraphs();
        // 获取段落具体内容
        for (XWPFParagraph p : paragraphs) {
            System.out.println(p.getText());
        }
        // 获取word中的全部表格
        getTable(doc);

        produce(doc, params);
        doc.write(outputStream);

    }

    private static void getTable(XWPFDocument doc) {
        List<XWPFTable> tables=doc.getTables();
        for(XWPFTable table:tables){
            // 获取表格属性
            CTTblPr pr= table.getCTTbl().getTblPr();
            // 获取表格对应的行

        }

    }

    /* 处理参数 生成doc */
    public static void produce(XWPFDocument templateDoc, Map<String, String> params) {

        Iterator<XWPFParagraph> iterator = templateDoc.getParagraphsIterator();

        while (iterator.hasNext()) {

            XWPFParagraph next = iterator.next();

            if (next.isEmpty() || !match(next.getParagraphText())) {
                continue;
            }
            next.getRuns().forEach(
                    run -> setNewTextforRun(run, params)
            );

        }

    }

    /*
     * 正则匹配 返回 matcher
     * */
    public static Matcher matcher(String text) {
        Pattern pattern = Pattern.compile("\\$\\{(.+?)}", Pattern.CASE_INSENSITIVE);
        return pattern.matcher(text);
    }

    /*
     * 判定是否包匹配
     * */
    public static boolean match(String text) {
        Matcher matcher = matcher(text);
        return matcher.find();
    }

    /*
     * 替换参数 设置新参数
     * */
    public static void setNewTextforRun(XWPFRun run, Map<String, String> params) {

        List<CTText> ctTexts = run.getCTR().getTList();

        ctTexts.forEach(
                ctText -> {
                    String text = ctText.getStringValue();
                    Matcher matcher = matcher(text);

                    while (matcher.find()) {

                        String group = matcher.group();
                        if (group.contains(" ")) {
                            throw new RestClientException("${}表达式不能包含空格");
                        }

                        String name = group.substring(2, group.length() - 1);
                        String value = params.get(name);
                        value = value == null ? "" : value;

                        if (text.equals(group)) {
                            text = value;

                        } else {
                            //转义
                            String[] parts = text.split("\\$\\{" + name + "}");
                            //length=1 分前后 设置参数值
                            if (parts.length == 1) {
                                String part = parts[0];
                                text = text.indexOf(part) == 0 ? (part + value) : (value + part);
                            } else {
                                text = StringUtils.join(Arrays.asList(parts), value);
                            }

                        }

                    }
                    ctText.setStringValue(text);
                }
        );

    }
}