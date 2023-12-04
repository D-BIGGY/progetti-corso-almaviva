package com.corso.springmvc.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.corso.springmvc.entity.Studente;
import com.corso.springmvc.repository.StudenteRepository;
import com.corso.springmvc.service.StudenteService;

@Service
public class StudenteServiceImpl implements StudenteService{

	public StudenteRepository studenterepository;
		
	public StudenteServiceImpl(StudenteRepository studenterepository) {
		super();
		this.studenterepository = studenterepository;
	}

	@Override
	public List<Studente> getTuttiStudenti() {
		return studenterepository.findAll();
	}

	@Override
	public Studente salvaStudente(Studente studente) {
		return studenterepository.save(studente);
	}

	@Override
	public void cancellaStudenteId(Integer id) {
		studenterepository.deleteById(id);
	}
	
}
