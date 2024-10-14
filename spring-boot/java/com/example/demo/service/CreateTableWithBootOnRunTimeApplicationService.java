package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Student;

public interface CreateTableWithBootOnRunTimeApplicationService {

	List<Student> createTable();
	
    Student addStudent(Student student);
    
	//Student updateStudent(Student student);
	
	String deleteStudent(Long id);

	List<Student> addlistofStudent(Student x);

	Optional<Student> getStudent(Long id);

	Student upStudent(Long id, Student student);

}
