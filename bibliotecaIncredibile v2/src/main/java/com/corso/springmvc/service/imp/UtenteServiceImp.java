package com.corso.springmvc.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.corso.springmvc.entity.Libro;
import com.corso.springmvc.entity.Utente;
import com.corso.springmvc.repository.LibroRepository;
import com.corso.springmvc.repository.UtenteRepository;
import com.corso.springmvc.service.UtenteService;
@Service
public class UtenteServiceImp implements UtenteService{
	public UtenteRepository utenterepository;
	
	public UtenteServiceImp(UtenteRepository utenterepository) {
		super();
		this.utenterepository = utenterepository;
	}

	@Override
	public List<Utente> getTuttiUtenti() {
		return utenterepository.findAll();
	}

	@Override
	public Boolean isLogged(Utente utente) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean logins(Utente utente) {
		System.out.println("funzionera?");
		List<Utente> u = utenterepository.findAll();
		Boolean ok = false;
		System.out.println(utente.getUsername());
		for (Utente utente2 : u) {
			System.out.println("tac");
			System.out.println(utente2.getUsername());
			System.out.println(utente2.getPassword());
			if(utente2.getUsername().equals(utente.getUsername()) && utente2.getPassword().equals(utente.getPassword()))
				ok=true;
		}
		return ok;
	}

	@Override
	public String test() {
		
		return "test";
	}

	
	
}
