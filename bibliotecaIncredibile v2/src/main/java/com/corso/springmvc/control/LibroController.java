package com.corso.springmvc.control;

import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import com.corso.springmvc.entity.Libro;
import com.corso.springmvc.entity.Utente;
import com.corso.springmvc.service.LibroService;
import com.corso.springmvc.service.UtenteService;

@Controller
//@RestController
public class LibroController {

	private LibroService libroservice;
	private UtenteService utenteservice;

	public LibroController(LibroService libroservice, UtenteService utenteservice) {
		super();
		this.libroservice = libroservice;
		this.utenteservice =utenteservice;
	}

	@GetMapping("/")
	public String logins(Model model) {
		model.addAttribute("utente", new Utente());
		return "login";
	}

	@PostMapping("/login")
	public String login(@ModelAttribute("utente") Utente utente) {
		System.out.println(utente.username);
		System.out.println(utente.password);
		utenteservice.test();
		if(utenteservice.logins(utente))
			return "redirect:/libri";
		else 
			return "login";
	}

	@GetMapping("/scelta")
	public String scelta(Model model) {
		return "libri";
	}
	
	@GetMapping("/utente")
	public String libriUtenti(Model model) {
		model.addAttribute("libri", libroservice.getTuttiLibri());
		return "libri_utenti";
	}

	@GetMapping("/libri")
	public String listaLibri(Model model) {
		model.addAttribute("libri", libroservice.getTuttiLibri());
		return "libri";
	}

	@GetMapping("/incredibile")
	public String seiIncredibile(Model model) {
		return "mrIncredible";
	}	

	@GetMapping("/libri/nuovo")
	public String CreaLibro(Model model) {
		Libro libro = new Libro();
		model.addAttribute("libro", libro);
		return "aggiungi_libro";
	}

	@PostMapping("/libro")
	public String CreaLibro(@ModelAttribute("libro") Libro libro) {
		libroservice.salvaLibro(libro);
		return "redirect:/libri";
	}

	@GetMapping("/libro/{id}")
	public String CancellaLibro(@PathVariable Integer id) {
		libroservice.cancellaLibroId(id);
		return "redirect:/libri";
	}
	
	@GetMapping("/utente/libro/{titolo}")
	public String PrendiLibro(@PathVariable String titolo){
		libroservice.prendiLibro(titolo);
		return "redirect:/utente";
	}

}
