package com.corso.springdata.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.corso.springdata.model.utentiVisite;

@Repository
public interface intutentiVisite extends CrudRepository<utentiVisite, Integer> {
	
	public Optional<utentiVisite> findByNomeUtente(String nomeUtente);
	
	public Iterable<utentiVisite> findByDescrizione(String descrizione);
	
	public Optional<utentiVisite> findByNomeUtenteAndDescrizione(String nomeUtente, String descrizione);
	
	@Query("select p from utentiVisite p where p.nomeUtente = ?1 and p.descrizione = ?2")
	public Optional<utentiVisite> alternativaCustomNomeUtenteandDescrizione(String nomeUtente, String Descrizione);
	
	@Query(value="select * from utenti_visite_app where username = ?1 and descrizione = ?2", nativeQuery = true)
	public Optional<utentiVisite> alternativaCustomNomeUtenteandDescrizioneQueryNative(String nomeUtente, String Descrizione);
	
}


