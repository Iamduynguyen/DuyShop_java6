package com.example.duyshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignController {
    public static int x;

    @GetMapping("/sign")
    public String getSign(){
        return "websites/signin";
    }

    @PostMapping("/sign")
    public String postSign(){
        return "";
    }
}
