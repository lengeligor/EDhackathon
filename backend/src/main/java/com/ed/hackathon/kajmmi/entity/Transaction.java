package com.ed.hackathon.kajmmi.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "Transaction")
@SequenceGenerator(name = "SEQ_ID", sequenceName = "TRANSACTION_ID_SEQ", allocationSize = 1)
public class Transaction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ID")
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

    private Long payment;

    private Boolean isPaid;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

}
