package com.hasitha.rentacar.Rentacar.service;

import com.hasitha.rentacar.Rentacar.model.Student;
import com.hasitha.rentacar.Rentacar.repository.StudentRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepository;
    
    //save
    public Student save(Student student) {
    	return studentRepository.save(student);
    }
    
    //get by id
    public Student fetchStudentById(int id) {
    	
    	Optional <Student> student= studentRepository.findById (id);
    	
    	if(student.isPresent()) {
    		return student.get();
    	}
    	return null;
    }
}