package com.corso.springvalidazione;

import org.springframework.stereotype.*;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@Controller
public class PersonaController {

	@GetMapping("/")
	public String showForm(PersonaForm personaForm) {
		return"form";
	}
	
	@PostMapping("/")
	public String checkPersonInfo(@Valid PersonaForm personaForm, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "form";
		}
		return "redirect:/risultato";
	}
	
	@GetMapping("/risultato")
	public String showFormRisultato(PersonaForm personaForm){
		return "risultato";
	}
	
}
