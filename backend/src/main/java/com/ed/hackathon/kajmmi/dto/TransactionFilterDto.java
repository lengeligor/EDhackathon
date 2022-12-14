package com.ed.hackathon.kajmmi.dto;

import com.ed.hackathon.kajmmi.entity.Customer;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TransactionFilterDto {
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
    private Customer customer;
}
