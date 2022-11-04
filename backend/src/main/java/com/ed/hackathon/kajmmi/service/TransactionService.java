package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.dto.TransactionDto;
import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.repository.TransactionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TransactionService implements TransactionRepository {

    @Override
    public TransactionDto createTransaction(TransactionDto transactionDto) {
        return transactionDto != null ? transactionDto : new TransactionDto();
    }

    @Override
    public Page<TransactionDto> getTransactions(Pageable pageable, TransactionFilterDto filter) {
        return null;
    }
}
