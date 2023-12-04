package com.corso.springmvc0;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.corso.springmvc0.model.utenteModel;

//@Controller
@RestController
public class principaleController {
	
	/*@GetMapping("/")
	public ResponseEntity indexHome() {
		//return new ResponseEntity<>("index", HttpStatus.CREATED);
		return "index";
	}*/
	
	/*@GetMapping("/{nome}")
	public ResponseEntity indexHome(@PathVariable("nome") String nome) {
		return new ResponseEntity<>("ciao " + nome, HttpStatus.CREATED);
	}*/
	
	@GetMapping("/{nome}")
	public utenteModel indexHome(@PathVariable("nome") String nome) {
		utenteModel uM = new utenteModel();
		uM.setNome(nome);
		return uM;
	}
}
