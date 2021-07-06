package com.hasitha.rentcloud.profileservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hasitha.rentcloud.commons.model.Customer;
import com.hasitha.rentcloud.profileservice.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerRepository customerRepository; 

	@Override
	public Customer save(Customer customer) {
		return customerRepository.save(customer);
	}
	
}