package com.corso.springmvc.controller;

import org.springframework.stereotype.*;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corso.springmvc.entity.Studente;
import com.corso.springmvc.service.StudenteService;

@Controller
//@RestController
public class StudenteController {
	
	private StudenteService studenteservice;

	public StudenteController(StudenteService studenteservice) {
		super();
		this.studenteservice = studenteservice;
	}
	
	@GetMapping("/studenti")
	public String listaStudenti(Model model) {
		model.addAttribute("studenti",studenteservice.getTuttiStudenti());
		
		return "studenti";
	}
	
	@GetMapping("/incredibile")
	public String seiIncredibile(Model model) {		
		return "mrIncredible";
	}
	
	@GetMapping("/studenti/nuovo")
	public String CreaStudente(Model model) {
		Studente studente = new Studente();
		model.addAttribute("studente", studente);
		return "crea_studente";
	}
	
	@PostMapping("/studenti")
	public String CreaStudente(@ModelAttribute("studente") Studente studente) {
		studenteservice.salvaStudente(studente);
		return "redirect:/studenti";
	}
	
	@GetMapping("/studenti/{id}")
	public String CancellaStudente(@PathVariable Integer id) {
		studenteservice.cancellaStudenteId(id);
		return "redirect:/studenti";
	}

}
