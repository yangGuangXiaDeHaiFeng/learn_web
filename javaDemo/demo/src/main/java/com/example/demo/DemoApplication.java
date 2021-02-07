package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		learnPath();
		SpringApplication.run(DemoApplication.class, args);
	}

	private static void learnPath() {
		System.out.print("当前类编译后所在的包：");
		System.out.println(DemoApplication.class.getResource(""));
		System.out.print("当前类编译后所在的classPath：");
		System.out.println(DemoApplication.class.getResource("/"));

		System.out.print("当前类编译后所在的classPath");
		System.out.println(DemoApplication.class.getClassLoader().getResource(""));
		System.out.print("不能这么用：");
		System.out.println(DemoApplication.class.getClassLoader().getResource("/"));

	}

}
