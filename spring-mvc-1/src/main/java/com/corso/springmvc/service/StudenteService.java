package com.corso.springmvc.service;

import java.util.List;

import com.corso.springmvc.entity.Studente;


public interface StudenteService {
	List<Studente> getTuttiStudenti();
	
	Studente salvaStudente(Studente studente);
	
	void cancellaStudenteId(Integer id);
	
}
