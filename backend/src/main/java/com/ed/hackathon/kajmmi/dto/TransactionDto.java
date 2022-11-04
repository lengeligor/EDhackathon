package com.ed.hackathon.kajmmi.dto;


import lombok.Data;

import java.time.LocalDate;

@Data
public class TransactionDto {

    private Long id;
    private LocalDate createDate;   //datum vytvorenia transakcie - AUTOGENERATED
    private LocalDate updateDate;   //posledna zmena transakcie - AUTOGENERATED
    private String paymentInterval;     //value z enumu - monthly, weekly, ...
    private LocalDate intervalDueDate;  //datum najblizsej splatky
    private LocalDate dueDate;  //datum splatenia transakcie
    private Long interest;  //urok
    private Long totalPayments; //pocet splatok
    private Long totalAmount;   //celkova suma
    private Long paidOffIntervals;  //pocet zaplatenych splatok
    private Long payment;   //vyska splatky
    private Boolean isPaid; //ukoncenaTransakcia - CALCULATED by BE
    private CustomerDto customer;   //ktoremu zakaznikovi patri transakcia
}