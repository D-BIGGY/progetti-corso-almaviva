package com.corso.springmvc.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;

import com.corso.springmvc.entity.Libro;
import com.corso.springmvc.entity.Utente;
import com.corso.springmvc.repository.LibroRepository;
import com.corso.springmvc.service.LibroService;

@Service
public class LibroServiceImp implements LibroService{
	public LibroRepository librorepository;
	
	public LibroServiceImp(LibroRepository librorepository) {
		super();
		this.librorepository = librorepository;
	}

	@Override
	public List<Libro> getTuttiLibri() {
		return librorepository.findAll();
	}

	@Override
	public Libro salvaLibro(Libro libro) {
		return librorepository.save(libro);
	}

	@Override
	public void cancellaLibroId(Integer id) {
		librorepository.deleteById(id);
	}

	@Override
	public Libro modificaLibro(Integer id, Libro lib) {
		Libro l = librorepository.findById(id).get();
		l.setAutore(lib.getAutore());
		l.setTitolo(lib.getTitolo());
		l.setPreso(lib.getPreso());
		return l;
	}

	@Override
	public Libro prendiLibro(String titolo) {
		List<Libro> l = librorepository.findAll();
		Libro app = new Libro();
		for (Libro libro : l) {
			if(libro.titolo.equals(titolo)) {
				app = libro;
				app.setPreso(true);
				System.out.println(app.toString());
			}
		}
		System.out.println(app.toString());
		
		return librorepository.save(app); //non va salvato
	}
	
	

}
