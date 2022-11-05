package com.ed.hackathon.kajmmi.exception;

public class CustomException extends RuntimeException {
    public CustomException(String message) {super(message);}

    public CustomException(String message, Throwable causes){super(message,causes);}

}
