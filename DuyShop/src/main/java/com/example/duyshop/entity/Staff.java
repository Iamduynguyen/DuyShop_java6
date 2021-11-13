package com.example.duyshop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.Id;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity

public class Staff {

    @Id
    private int id;
    private String email;
    private String password;
    private String role;
}
