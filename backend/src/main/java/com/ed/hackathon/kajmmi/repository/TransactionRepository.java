package com.ed.hackathon.kajmmi.repository;

import com.ed.hackathon.kajmmi.dto.TransactionDto;
import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository {

    TransactionDto createTransaction(TransactionDto transactionDto);

    Page<TransactionDto> getTransactions(Pageable pageable, TransactionFilterDto filter);

}
