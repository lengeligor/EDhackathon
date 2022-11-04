package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.dto.TransactionDto;
import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.entity.Transaction;
import com.ed.hackathon.kajmmi.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
@Transactional
public class TransactionService implements TransactionRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Transaction createTransaction(Transaction transaction) {
        entityManager.persist(transaction);
        return transaction;
    }

    @Override
    public Page<Transaction> getTransactions(Pageable pageable, TransactionFilterDto filter) {
        return null;
    }
}
