package com.corso.springmvc0;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/saluti")
public class HelloWorldController {
	@GetMapping(value="/hello")
	public String Saluto() {
		return "HelloWorld";
	}
	
	@GetMapping(value="/mrincredible")
	public String SalutoIncredibile() {
		return "mrIncredible";
	}
}
