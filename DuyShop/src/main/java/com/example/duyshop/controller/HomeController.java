package com.example.duyshop.controller;

import com.example.duyshop.entity.Category;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {



    @GetMapping("/home")
    @ResponseBody
    public String getHome(Model model){
        return "websites/home";
    }

}
