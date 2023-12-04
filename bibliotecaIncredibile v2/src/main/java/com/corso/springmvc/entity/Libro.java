package com.corso.springmvc.entity;

import jakarta.persistence.*;
@Entity
@Table
public class Libro {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public Integer id;
	@Column(nullable=false)
	public String immagine;
	@Column(nullable=false)
	public String titolo;
	@Column(nullable = false)
	public String autore;
	@Column(nullable = false)
	public Boolean preso = true;
	@Column(nullable = false)
	public  double prezzo;
	
	public Libro() {
		
	}	
	
	public Libro(String titolo, String autore, Boolean preso,String immagine, double prezzo) {
		super();
		this.titolo = titolo;
		this.autore = autore;
		this.preso = preso;
		this.immagine = immagine;
		this.prezzo=prezzo;
	}	

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	
	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public String getAutore() {
		return autore;
	}
	public void setAutore(String autore) {
		this.autore = autore;
	}
	public Boolean getPreso() {
		return preso;
	}
	public void setPreso(Boolean preso) {
		this.preso = preso;
	}
	
	@Override
	public String toString() {
		return preso.toString();
	}
	
}
