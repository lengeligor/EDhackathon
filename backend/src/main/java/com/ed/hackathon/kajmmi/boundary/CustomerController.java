package com.ed.hackathon.kajmmi.boundary;

import com.ed.hackathon.kajmmi.entity.Customer;
import com.ed.hackathon.kajmmi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/customer")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/id/{id}")
    public Customer getCustomerId(@PathVariable Long id){return customerRepository.getCustomerId(id);
    }

    @GetMapping("/{number}")
    public Customer getCustomerNumber(@PathVariable Long number){return customerRepository.getCustomerNumber(number);
    }


}
