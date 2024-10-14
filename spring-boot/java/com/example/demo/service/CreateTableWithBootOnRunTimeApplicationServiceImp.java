package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CreateTableWithBootOnRunTimeApplicationDao;
import com.example.demo.model.Student;



@Service
public class CreateTableWithBootOnRunTimeApplicationServiceImp implements CreateTableWithBootOnRunTimeApplicationService{

	@Autowired
	private CreateTableWithBootOnRunTimeApplicationDao createTableWithBootOnRunTimeApplicationDao;
	@Override
	public List<Student> createTable() {
		return createTableWithBootOnRunTimeApplicationDao.findAll();
	}
	@Override
	public Student addStudent(Student student) {
		return createTableWithBootOnRunTimeApplicationDao.save(student);
	}
//	@Override
//	public Student updateStudent(Student student) {
//	Student std=createTableWithBootOnRunTimeApplicationDao.findById(student.getId()).orElse(null);
//	if(std==null) {
//		createTableWithBootOnRunTimeApplicationDao.save(student);
//	}
//	else {
//		std.setName(std.getName());
//	}
//	return createTableWithBootOnRunTimeApplicationDao.save(student);
//	}
	@Override
	public String deleteStudent(Long id) {
		createTableWithBootOnRunTimeApplicationDao.deleteById(id);
		return "Deleted Successfully";
	}
	@Override
	public List<Student> addlistofStudent(Student x) {
		
		return createTableWithBootOnRunTimeApplicationDao.findAll();
	}
	@Override
	public Optional<Student> getStudent(Long id) {
		
		return createTableWithBootOnRunTimeApplicationDao.findById(id);
	}
	@Override
	public Student upStudent(Long id, Student student) {
		 Student std = createTableWithBootOnRunTimeApplicationDao.findById(id)
	                .orElseThrow(() -> new RuntimeException("Student not found with id " + id));

	        std.setName(student.getName());
	        std.setAddress(student.getAddress());

	        return createTableWithBootOnRunTimeApplicationDao.save(std);
	}

}
