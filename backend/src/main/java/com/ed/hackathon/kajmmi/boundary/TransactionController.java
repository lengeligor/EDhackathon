package com.ed.hackathon.kajmmi.boundary;

import com.ed.hackathon.kajmmi.dto.TransactionDto;
import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.service.TransactionService;
import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(value = "/transaction")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(@NonNull TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @PostMapping("/create")
    public ResponseEntity<TransactionDto> createTransaction(@RequestBody TransactionDto transactionDto){
        return ResponseEntity.ok(transactionService.createTransaction(transactionDto));
    }

    @PostMapping("/list")
    public ResponseEntity<Page<TransactionDto>> getTransactions(Pageable page, @RequestBody TransactionFilterDto filter){
        return ResponseEntity.ok(transactionService.getTransactions(page, filter));
    }
}
