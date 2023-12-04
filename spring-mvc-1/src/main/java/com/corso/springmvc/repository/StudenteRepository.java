package com.corso.springmvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corso.springmvc.entity.Studente;

@Repository
public interface StudenteRepository extends JpaRepository<Studente,Integer>{
}
