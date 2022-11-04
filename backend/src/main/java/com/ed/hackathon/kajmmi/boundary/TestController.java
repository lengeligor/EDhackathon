package com.ed.hackathon.kajmmi.boundary;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/test")
public class TestController {

    @GetMapping()
    public void testMethod(){
        System.out.println("test passed");
    }

}
