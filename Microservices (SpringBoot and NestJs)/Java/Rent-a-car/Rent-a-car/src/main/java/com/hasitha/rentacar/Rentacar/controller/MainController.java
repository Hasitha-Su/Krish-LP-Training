package com.hasitha.rentacar.Rentacar.controller;

import com.hasitha.rentacar.Rentacar.model.Student;
import com.hasitha.rentacar.Rentacar.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController{

	@Autowired
	StudentService studentService;

	@RequestMapping(value="/hello", method = RequestMethod.GET)
	public String greeting(){
		System.out.println("Hello from Spring GET");
		return "hello from SpringBoot GET";
	}

	@RequestMapping(value="/hello", method = RequestMethod.POST)
	public String greeting2(){
		System.out.println("Hello from Spring");
		return "hello from SpringBoot POST";
	}

	@RequestMapping(value = "/student", method = RequestMethod.POST)
	public Student save(@RequestBody Student student){
		return studentService.save(student);
	}
	
	@RequestMapping(value="/student", method = RequestMethod.GET)
	public ResponseEntity<Student> fetchStudent (@RequestParam int id){
		
		Student student = studentService.fetchStudentById(id);
		
		if(student == null) {
			return ResponseEntity.notFound().build();
		}else {
			return ResponseEntity.ok().body(student);
		}
		
	}
}