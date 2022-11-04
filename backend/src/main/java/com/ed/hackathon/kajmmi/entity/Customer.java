package com.ed.hackathon.kajmmi.entity;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "customer")
@SequenceGenerator(name = "SEQ_ID" , sequenceName = "CUSTOMER_ID_SEQ", allocationSize = 1)
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "SEQ_ID")
    @Column(unique = true , nullable = false)
    private Long id;

    private Long number;

    private String name;

    private String lastname;

    private Long balance;


}
