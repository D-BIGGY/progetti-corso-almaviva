package com.corso.springmvc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.corso.springmvc.entity.Libro;

@Service
public interface LibroService {
	List<Libro> getTuttiLibri();
	
	Libro salvaLibro(Libro libro);
	
	void cancellaLibroId(Integer id);
	
	Libro modificaLibro(Integer id, Libro lib);
	
	Libro prendiLibro(String titolo);
}
