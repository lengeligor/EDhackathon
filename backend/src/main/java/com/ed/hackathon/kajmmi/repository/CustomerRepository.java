package com.ed.hackathon.kajmmi.repository;

import com.ed.hackathon.kajmmi.entity.Customer;
import com.ed.hackathon.kajmmi.exception.CustomException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository {
    Customer getCustomerId(Long id) throws CustomException;
    Customer getCustomerNumber(Long number) throws CustomException;
}
