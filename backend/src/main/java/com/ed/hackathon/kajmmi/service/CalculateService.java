package com.ed.hackathon.kajmmi.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Objects;

@Service
@Transactional
public class CalculateService {

    private static final String MISSING_CUSTOMER_ID = "Chýba id zákazníka.";

    @PersistenceContext
    private EntityManager entityManager;

    public Long getActiveTransaction(Long customerId) {
        Objects.requireNonNull(customerId, MISSING_CUSTOMER_ID);
        return (Long) entityManager.createQuery("select count(c) from Transaction c where c.customer.id=:g").setParameter("g",customerId).getSingleResult();
    }
}
