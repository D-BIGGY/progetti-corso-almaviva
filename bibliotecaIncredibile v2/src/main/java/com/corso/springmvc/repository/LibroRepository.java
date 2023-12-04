package com.corso.springmvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corso.springmvc.entity.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro,Integer>{ 

}
