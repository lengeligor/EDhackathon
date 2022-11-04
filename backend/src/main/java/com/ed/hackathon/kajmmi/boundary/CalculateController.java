package com.ed.hackathon.kajmmi.boundary;

import com.ed.hackathon.kajmmi.service.CalculateService;
import lombok.NonNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/calculate")
public class CalculateController {

    private final CalculateService calculateService;

    public CalculateController(@NonNull final CalculateService calculateService){
        this.calculateService = calculateService;
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<Long> getActiveTransaction(@PathVariable Long customerId){
        return ResponseEntity.ok(calculateService.getActiveTransaction(customerId));
    }
}
