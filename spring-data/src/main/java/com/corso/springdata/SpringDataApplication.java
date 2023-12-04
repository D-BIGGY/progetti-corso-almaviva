package com.corso.springdata;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.corso.springdata.model.utentiVisite;
import com.corso.springdata.repository.intutentiVisite;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringDataApplication.class, args);
		
	}

	@Bean
	CommandLineRunner commandLineRunner(intutentiVisite inutentivisite) {
		 return args ->{
			 /*int k;
		        double A = 0, B = 0, i, j;
		        double[] z = new double[1760];
		        char[] b = new char[1760];
		        System.out.print("\u001b[2J");
		        for (; ; ) {
		            Arrays.fill(b, 0, 1760, ' ');
		            Arrays.fill(z, 0, 1760, 0);
		            for (j = 0; 6.28 > j; j += 0.07)
		                for (i = 0; 6.28 > i; i += 0.02) {
		                    double c = Math.sin(i),
		                            d = Math.cos(j),
		                            e = Math.sin(A),
		                            f = Math.sin(j),
		                            g = Math.cos(A),
		                            h = d + 2,
		                            D = 1 / (c * h * e + f * g + 5),
		                            l = Math.cos(i),
		                            m = Math.cos(B),
		                            n = Math.sin(B),
		                            t = c * h * g - f * e;
		                    int x = (int) (40 + 30 * D * (l * h * m - t * n)),
		                            y = (int) (12 + 15 * D * (l * h * n + t * m)),
		                            o = x + 80 * y,
		                            N = (int) (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
		                    if (22 > y && y > 0 && x > 0 && 80 > x && D > z[o]) {
		                        z[o] = D;
		                        b[o] = new char[]{'.', ',', '-', '~', ':', ';', '=', '!', '*', '#', '$', '@'}[Math.max(N, 0)];
		                    }
		                }
		            System.out.print("\u001b[H");
		            for (k = 0; 1761 > k; k++)
		                System.out.print(k % 80 > 0 ? b[k] : 10);
		            A += 0.04;
		            B += 0.02;
		        }*/
			 
			 
			 //CREATE
			 /*for(int i = 0; i<50; i++) {
				 utentiVisite utentivisite = new utentiVisite();
				 utentivisite.setNomeUtente("GiorgioVanni");
				 utentivisite.setDescrizione("Mio padre assoluto");
				 inutentivisite.save(utentivisite);
			 }*/
			 
			 //READ
			 
			 /*Iterable<utentiVisite> tuttiUtenti = inutentivisite.findAll();
			 for(utentiVisite str:tuttiUtenti) {
				 System.out.println(str.toString());
			 }*/
			 
			 //READ BY ID
			 /*Optional<utentiVisite> singoloUtente = inutentivisite.findById(2000);
			 if (singoloUtente.isEmpty())
				 System.out.println("nada");
			 else
				 System.out.println(singoloUtente.toString());
			 */
			 
			 //UPDATE
			 /*Optional<utentiVisite> singoloUtenteUPDATE = inutentivisite.findById(1);
			 if(singoloUtenteUPDATE.isEmpty() == false) {
				 utentiVisite utentevisite = singoloUtenteUPDATE.get();
				 utentevisite.setNomeUtente("GiorgioVanni GORMITI CHE MITI");
				 utentevisite.setDescrizione("PIU' FORTI PIU' UNITI");
				 inutentivisite.save(utentevisite);
				 System.out.println(utentevisite.toString());
			 }
			 else
				 System.out.println("nada");*/
			 
			 //DELETE
			 /*Optional<utentiVisite> singoloUtenteDELETE = inutentivisite.findById(3);
			 if(singoloUtenteDELETE.isEmpty() == false)
				 inutentivisite.delete(singoloUtenteDELETE.get());
			 else
				 System.out.println("nada");*/
			 
			 //DELETE BY ID
			 
			 /*if(inutentivisite.existsById(3)) {
				inutentivisite.deleteById(3);
				System.out.println("utente cancellato try ");
			} else {
				System.out.println("nessun utente da eliminare catch");
			}
			 
			 try {
				 inutentivisite.deleteById(50000);;
			} catch (Exception e) {
				System.out.println("nada");
			}*/
			 
			 //FIND BY NOME UTENTE
			 /*try {
				 utentiVisite uV = inutentivisite.findByNomeUtente("GiorgioVanni").get();
				 System.out.println(uV.toString());
			} catch (Exception e) {
				System.out.println("gugu gaga");
			}
			 
			 //FIND BY DESCRIZIONE
			 Iterable<utentiVisite> uD = inutentivisite.findByDescrizione("Mio padre assoluto").get();*/
			 
			 //FIND BY NOME UTENTE E DESCRIZIONE
			 /*Optional<utentiVisite> uND = inutentivisite.findByNomeUtenteAndDescrizione("GiorgioVanni GORMITI CHE MITI", "PIU' FORTI PIU' UNITI");
			 System.out.println(uND.toString());*/
			 
			 //FIND BY CUSTOM NOME UTENTE E DESCRIZIONE
			 /*Optional<utentiVisite> uCQ = inutentivisite.alternativaCustomNomeUtenteandDescrizione("GiorgioVanni GORMITI CHE MITI", "PIU' FORTI PIU' UNITI");
			 System.out.println(uCQ.toString());*/
			 
			//FIND BY CUSTOM NOME UTENTE E DESCRIZIONE NATIVE QUERY
			 /*Optional<utentiVisite> uCQN = inutentivisite.alternativaCustomNomeUtenteandDescrizioneQueryNative("GiorgioVanni GORMITI CHE MITI", "PIU' FORTI PIU' UNITI");
			 System.out.println(uCQN.toString());*/
			 
			 
			 
		 };
	}
}
