package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name="ID",nullable=false)
	private Long id;
	@Column(name="NAME",nullable=false,length=200)
	private String name;
	@Column(name="ADDRESS",nullable=false,length=200)
	private String address;
	
	
	public Student(Long id, String name, String address) {
		this.id = id;
		this.name = name;
		this.address = address;
	}
	
	public Student() {
		
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
		
}
