package com.ed.hackathon.kajmmi.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    @Id
    @GeneratedValue
    @Column(unique = true , nullable = false)
    private Long id;

    private Long number;

    private String name;

    private String lastname;

    private Long balance;
}
