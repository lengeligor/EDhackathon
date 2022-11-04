package com.ed.hackathon.kajmmi.service;

import com.ed.hackathon.kajmmi.entity.Customer;
import com.ed.hackathon.kajmmi.exception.CustomException;
import com.ed.hackathon.kajmmi.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerService implements CustomerRepository {

    @PersistenceContext
    private EntityManager entityManager;


    @Override
    public Customer getCustomerId(Long id) throws CustomException {
        return (Customer) entityManager.createQuery("select s from Customer s where s.id=:n ").setParameter("n",id).getSingleResult();

    }

    @Override
    public Customer getCustomerNumber(Long number) throws CustomException {
        return (Customer) entityManager.createQuery("select s from Customer s where s.number=:n ").setParameter("n",number).getSingleResult();

    }
}
