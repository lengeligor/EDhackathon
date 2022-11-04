package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.entity.Customer;
import com.ed.hackathon.kajmmi.exception.CustomException;
import com.ed.hackathon.kajmmi.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Objects;

@Service
@Transactional
public class CustomerService implements CustomerRepository {

    private static final String MISSING_NUMBER = "Chýba id karty zákazníka.";
    private static final String MISSING_ID = "Chýba id zákazníka.";

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public Customer getCustomerId(Long id) throws CustomException {
        Objects.requireNonNull(id, MISSING_ID);
        return (Customer) entityManager.createQuery("select s from Customer s where s.id=:n ").setParameter("n",id).getSingleResult();

    }

    @Override
    public Customer getCustomerNumber(Long number) throws CustomException {
        Objects.requireNonNull(number, MISSING_NUMBER);
        return (Customer) entityManager.createQuery("select s from Customer s where s.number=:n ").setParameter("n",number).getSingleResult();

    }
}
