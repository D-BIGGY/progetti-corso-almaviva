package com.corso.springdata.model;

import jakarta.persistence.*;

@Entity
@Table(name="UtentiVisiteApp")
public class utentiVisite {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length=200,name="username",nullable=false)
	private String nomeUtente;
	
	@Column(columnDefinition = "TEXT")
	private String descrizione;
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNomeUtente() {
		return nomeUtente;
	}
	public void setNomeUtente(String nomeUtente) {
		this.nomeUtente = nomeUtente;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	
	@Override
	public String toString() {
		return id + " " + nomeUtente + " " + descrizione;
	}
	
}
