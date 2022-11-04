package com.ed.hackathon.kajmmi.dto;

import lombok.Data;

@Data
public class CustomerDto {

    private Long id;
    private Long number;       //cislo karty
    private String name;    //meno zakaznika
    private String lastname;    //priezvisko zakaznika
    private Long balance;   //jeho prostriedky
}
