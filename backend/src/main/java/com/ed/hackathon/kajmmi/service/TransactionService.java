package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.dto.TransactionDto;
import com.ed.hackathon.kajmmi.dto.TransactionFilterDto;
import com.ed.hackathon.kajmmi.entity.Transaction;
import com.ed.hackathon.kajmmi.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

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
