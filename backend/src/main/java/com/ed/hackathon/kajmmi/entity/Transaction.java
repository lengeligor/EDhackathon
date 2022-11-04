package com.ed.hackathon.kajmmi.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "transaction")
@SequenceGenerator(name = "SEQ_ID" , sequenceName = "CUSTOMER_ID_SEQ", allocationSize = 1)
public class Transaction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "SEQ_ID")
    @Column(unique = true , nullable = false)
    private Long id;

    private LocalDate createDate;

    private LocalDate updateDate;

    private String interval;

    private LocalDate intervalDueDate;

    private LocalDate dueDate;

    private Long interest;

    private Long totalPayments;

    private Long totalAmount;

    private Long paidOffIntervals;

    private Long number;

    private Boolean isPaid;





}
