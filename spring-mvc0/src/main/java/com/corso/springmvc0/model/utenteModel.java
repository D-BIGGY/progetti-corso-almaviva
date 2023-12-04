package com.corso.springmvc0.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class utenteModel {
	String nome;
	@JsonFormat(pattern="yyyy-MM-dd")
	Date creatoil;
	
		
	public utenteModel() {
		creatoil = new Date();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Date getCreatoil() {
		return creatoil;
	}
	public void setCreatoil(Date creatoil) {
		this.creatoil = creatoil;
	}	
	
}
