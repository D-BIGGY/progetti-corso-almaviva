package com.corso.springmvc.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.corso.springmvc.entity.Utente;

public interface UtenteRepository extends JpaRepository<Utente,Integer>{

	Optional<Utente> findByUsername(String username);

}
