package com.ed.hackathon.kajmmi.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "transaction")
public class Transaction implements Serializable {

    @Id
    @GeneratedValue
    @Column(unique = true , nullable = false)
    private Long id;

    private LocalDate createDate;

    private LocalDate updateDate;

    private String paymentInterval;

    private LocalDate intervalDueDate;

    private LocalDate dueDate;

    private Long interest;

    private Long totalPayments;

    private Long totalAmount;

    private Long paidOffIntervals;

    private Long number;

    private Boolean isPaid;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

}
