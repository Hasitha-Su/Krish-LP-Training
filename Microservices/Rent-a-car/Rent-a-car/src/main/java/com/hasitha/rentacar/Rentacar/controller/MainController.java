package com.hasitha.rentacar.Rentacar.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController{

	@RequestMapping(value="/hello", method = RequestMethod.GET)
	public String greeting(){
		System.out.println("Hello from Spring GET");
		return "hello from SpringBoot";
	}

	@RequestMapping(value="/hello", method = RequestMethod.POST)
	public String greeting2(){
		System.out.println("Hello from Spring");
		return "hello from SpringBoot POST";
	}
}