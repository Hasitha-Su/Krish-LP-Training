package com.hasitha.rentacar.Rentacar.repository;

import com.hasitha.rentacar.Rentacar.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

//public interface StudentRepository extends Repository<Student, Integer> {
public interface StudentRepository extends JpaRepository<Student, Integer> {

        //Student save(Student student);
}