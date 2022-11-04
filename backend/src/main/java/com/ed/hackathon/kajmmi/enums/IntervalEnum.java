package com.ed.hackathon.kajmmi.enums;

public enum IntervalEnum {

    DAILY("daily"),
    WEEKLY("weekly"),
    MONTHLY("monthly"),
    ANNUMALLY("annumally");

    private final String value;

    IntervalEnum(final String value) {
        this.value = value;
    }

    public String value(){
        return value;
    }
}
