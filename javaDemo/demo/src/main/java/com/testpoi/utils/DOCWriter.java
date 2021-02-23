package com.testpoi.utils;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import org.apache.poi.POIXMLDocument;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;

public class DOCWriter {
    public static void searchAndReplace(String srcPath, String destPath,
                                        Map<String, String> map) {
        try {
            XWPFDocument document = new XWPFDocument(POIXMLDocument
                    .openPackage(srcPath));
        System.out.println(document);

            Iterator it = document.getTablesIterator();

            while (it.hasNext()) {

                XWPFTable table = (XWPFTable) it.next();

                int rcount = table.getNumberOfRows();

                for (int i = 0; i < rcount; i++) {

                    XWPFTableRow row = table.getRow(i);
                    List<XWPFTableCell> cells = row.getTableCells();

                    for (XWPFTableCell cell : cells) {
                        for (Entry<String, String> e : map.entrySet()) {
                            if (cell.getText().equals(e.getKey())) {
                                cell.removeParagraph(0);
                                cell.setText(e.getValue());
                            }
                        }
                    }
                }
            }
            FileOutputStream outStream = null;
            outStream = new FileOutputStream(destPath);
            document.write(outStream);
            outStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
