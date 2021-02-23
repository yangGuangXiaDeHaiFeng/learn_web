package com.learnpackage;

/**
 * @author jiaowang
 * @version 1.0.0
 * @since 2021
 */
public class IntegerLearn {
    public static void main(String[] args) {
        // 包装类的缓存机制 [-128, 127]范围内的值会被缓存，其他的没有缓存
//        test();
        // double和float没有使用缓存
        test2();
    }

    private static void test2() {
        Double d1=100.0;
        Double d2=100.0;
        Double d3=new Double(100.0);
        Double d4=new Double(100.0);
     System.out.println(d1==d2);
        System.out.println(d1==d3);
        System.out.println(d3==d4);


    }

    private static void test() {
        Integer i1=128;
        Integer i2=128;
        Integer i3=new Integer(128);
        Integer i4=new Integer(128);
        System.out.println(i1==i2);
        System.out.println(i1==i3);
        System.out.println(i3==i4);
        System.out.println(i1.equals(i2));
        System.out.println(i1.equals(i3));
        System.out.println(i3.equals(i4));

    }
}
