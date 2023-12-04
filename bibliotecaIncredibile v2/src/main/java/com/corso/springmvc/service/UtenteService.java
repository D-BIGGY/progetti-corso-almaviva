package com.corso.springmvc.service;

import java.util.List;

import com.corso.springmvc.entity.Libro;
import com.corso.springmvc.entity.Utente;

public interface UtenteService {
	List<Utente> getTuttiUtenti();
	
	Boolean isLogged(Utente utente);
	
	 Boolean logins(Utente utente);
	 
	 String test();
}
