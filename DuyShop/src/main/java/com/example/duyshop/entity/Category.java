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

public class Category {

    private int id;
    private String name;
}
