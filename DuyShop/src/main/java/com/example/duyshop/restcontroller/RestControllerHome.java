package com.example.duyshop.restcontroller;

import com.example.duyshop.dto.StaffLoginDto;
import com.example.duyshop.entity.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RestControllerHome {
    @Autowired
    Staff staff;


    @GetMapping("/home1")
    public ResponseEntity<Staff> getHome(){
        staff.setEmail("cccc");
        staff.setId(1);
        staff.setPassword("123");
        staff.setRole("admin");
        System.out.println("alo");
        return ResponseEntity.ok(staff);
    }

//    @PostMapping("/sign")
//    public boolean postSign(){
//        return false;
//    }

}
