package com.hasitha.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController{

	@RequestMapping("/")
	public String greeting(){
		return "<h1> Hellow from Spring </h1>";
	}
}