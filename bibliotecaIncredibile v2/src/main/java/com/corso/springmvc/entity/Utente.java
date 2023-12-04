package com.corso.springmvc.entity;

import jakarta.persistence.*;

@Entity
@Table
public class Utente {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer id;
	@Column(nullable = false)
	public String username;
	@Column(nullable = false)
	public String password;
	@Column(nullable = false)
	public Boolean admin;
	
	public Utente() {
		
	}
	
	public Utente(String username, String password, Boolean admin) {
		super();
		this.username = username;
		this.password = password;
		this.admin = admin;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getAdmin() {
		return admin;
	}
	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	
	
	
}
