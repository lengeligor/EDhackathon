package com.ed.hackathon.kajmmi.repository;

import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.entity.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository {

    Transaction createTransaction(Transaction transactionDto);

    Page<Transaction> getTransactions(Pageable pageable, TransactionFilterDto filter);

}
