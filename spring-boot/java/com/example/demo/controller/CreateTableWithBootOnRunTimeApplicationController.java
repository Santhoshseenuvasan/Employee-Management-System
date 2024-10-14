package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.CreateTableWithBootOnRunTimeApplicationService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CreateTableWithBootOnRunTimeApplicationController {

	@Autowired
	private CreateTableWithBootOnRunTimeApplicationService createTableWithBootOnRunTimeApplicationService;
	@GetMapping("/createTable")
	private List<Student> createTable() {
		return createTableWithBootOnRunTimeApplicationService.createTable();
	}
	@PostMapping("/addStudent")
	private Student addStudent(@RequestBody Student student) {
		return createTableWithBootOnRunTimeApplicationService.addStudent(student);
	}
//	@PutMapping("/updateStudent")
//	private Student updateStudent(@RequestBody Student student) {
//		return createTableWithBootOnRunTimeApplicationService.updateStudent(student);
//	}
	@DeleteMapping("/deleteStudent/{id}")
	private String deleteStudent(@PathVariable Long id) {
		return createTableWithBootOnRunTimeApplicationService.deleteStudent(id);
	}
	@PostMapping("/addlistofStudent")
	private List<Student> addlistofStudent(@RequestBody List<Student> student) {
		for(Student x:student) {
	    createTableWithBootOnRunTimeApplicationService.addlistofStudent(x);
	}
		return student;
}
   @GetMapping("/getStudent/{id}")
	Optional<Student> getStudent(@PathVariable Long id){
		return createTableWithBootOnRunTimeApplicationService.getStudent(id);
	}
   

   @PutMapping("/createTable/{id}")
   public ResponseEntity<Student> upStudent(@PathVariable Long id, @RequestBody Student student){
	 Student  upStudent=createTableWithBootOnRunTimeApplicationService.upStudent(id, student);
	return ResponseEntity.ok(upStudent);
   }
   
}


