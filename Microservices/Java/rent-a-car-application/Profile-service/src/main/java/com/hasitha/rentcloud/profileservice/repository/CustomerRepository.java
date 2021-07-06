package com.hasitha.rentcloud.profileservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hasitha.rentcloud.commons.model.Customer;

public interface CustomerRepository extends JpaRepository <Customer, Integer> {
	
	

}
