package com.example.demo.model;

import lombok.Data;
import org.springframework.web.bind.annotation.RequestParam;

@Data
public class User {
    private String name;
    private Integer age;

}
