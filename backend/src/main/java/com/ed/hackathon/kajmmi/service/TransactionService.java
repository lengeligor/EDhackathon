package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.entity.Transaction;
import com.ed.hackathon.kajmmi.enums.IntervalEnum;
import com.ed.hackathon.kajmmi.repository.TransactionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class TransactionService implements TransactionRepository {

    private static final String MISSING_CUSTOMER_ID = "Chýba id zákazníka.";
    private static final String MISSING_CUSTOMER = "Chýba zákazník.";
    private static final String MISSING_INTERVAL = "Chýba interval platieb.";
    private static final String MISSING_TRANSACTION = "Transakcia je prázdna.";
    private static final String WRONG_INTERVAL = "Nesprávny interval platieb.";

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Transaction createTransaction(Transaction transaction) {
        Objects.requireNonNull(transaction, MISSING_TRANSACTION);
        transaction.setCreateDate(LocalDate.now());
        transaction.setUpdateDate(LocalDate.now());
        transaction.setIsPaid(false);
        transaction.setPaidOffIntervals(1L);
        Objects.requireNonNull(transaction.getPaymentInterval(), MISSING_INTERVAL);
        if (transaction.getPaymentInterval().equals(IntervalEnum.DAILY.value())){
            transaction.setIntervalDueDate(LocalDate.now().plusDays(1));
        } else if (transaction.getPaymentInterval().equals(IntervalEnum.MONTHLY.value())){
            transaction.setIntervalDueDate(LocalDate.now().plusDays(30));
        } else if (transaction.getPaymentInterval().equals(IntervalEnum.WEEKLY.value())){
            transaction.setIntervalDueDate(LocalDate.now().plusDays(7));
        } else if (transaction.getPaymentInterval().equals(IntervalEnum.ANNUMALLY.value())){
            transaction.setIntervalDueDate(LocalDate.now().plusDays(365));
        } else {
            throw new RuntimeException(WRONG_INTERVAL);
        }
        entityManager.persist(transaction);
        return transaction;
    }

    @Override
    public Page<Transaction> getTransactions(Pageable pageable, TransactionFilterDto filter) {
        Objects.requireNonNull(filter.getCustomer(), MISSING_CUSTOMER);
        Objects.requireNonNull(filter.getCustomer().getId(), MISSING_CUSTOMER_ID);
        List<Transaction> transactions= entityManager.createQuery("select c from Transaction c where c.customer.id=:g order by c.createDate desc").setParameter("g",filter.getCustomer().getId()).getResultList();
        return pageData(pageable,transactions);
    }

    public <T> Page<T> pageData(Pageable page, List<T> data) {
        if (CollectionUtils.isEmpty(data)) {
            return new PageImpl<>(new ArrayList<>(), page, 0);
        }

        long total = data.size();
        if (page.isPaged() && page.getOffset() < data.size()) {
            int from = (int) page.getOffset();
            int to = from + page.getPageSize();
            data = data.subList(from, Math.min(to, data.size()));
        }

        return new PageImpl<>(data, page, total);
    }
}
