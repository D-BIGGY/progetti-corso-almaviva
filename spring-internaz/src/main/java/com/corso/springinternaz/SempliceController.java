package com.corso.springinternaz;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SempliceController {
	
	@GetMapping("/")
	public String greeting(Model model) {
		return "LeagueOfLegends";
	}
		
}
