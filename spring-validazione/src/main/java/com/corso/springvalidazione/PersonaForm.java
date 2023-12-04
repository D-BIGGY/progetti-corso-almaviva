package com.corso.springvalidazione;

import jakarta.validation.constraints.*;

public class PersonaForm {
	
	@NotNull
	@Size(min=2, max=30, message = "lol")
	private String nome;
	
	@NotNull
	@Min(value=18, message = "gg wp ez thx for tutorial kiddo, get out")
	private Integer eta;
	
	@NotNull(message = "u are not the G.O.A.T.")
	private Boolean alpha;
	
	@NotBlank
	@Size(min= 7, message="mail fail")
	private String email;
	
	@NotBlank
	@Size(min= 2, message="cognome fail")
	private String cognome;
	
	
	
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public Boolean getAlpha() {
		return alpha;
	}
	public void setAlpha(Boolean alpha) {
		this.alpha = alpha;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getEta() {
		return eta;
	}
	public void setEta(Integer eta) {
		this.eta = eta;
	}	
		
	@Override
	public String toString() {
		return "Persona (nome: " + this.nome + ", Età: " + this.eta + ")";
	}
	
}
