package com.hasitha.rentacar.Rentacar.service;

import com.hasitha.rentacar.Rentacar.model.Student;

public interface StudentService {
    Student save (Student student);
	Student fetchStudentById(int id);
}