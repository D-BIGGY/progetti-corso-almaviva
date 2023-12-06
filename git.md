# <p align="center"> **GIT** </p>

## **IMPOSTAZIONI DA CMD DI GIT**

### git --version (controlli la versione git è installata nella macchina) -> **CMD DI WINDOWS (windows/operator button + R)**
### $ git config --global user.name "**USERNAME A PIACERE**"
### $ git config --global user.email [**LA TUA MAIL**]
### $ git remote add origin (URL) [**ORIGIN E' COME UNA VARIABILE**]
<br><br><br>

## **COMANDI CHE SI POSSONO UTILIZZARE E COSA FANNO**

### **git clone:** <br>
copia reepository online nel pc locale

### **git status:** <br>
stato attuale della repository

### **git add:** <br>
aggiunge uno o più file al branch (pronti per essere committati)

### **git checkout:** <br>
azzera la modifica fatta ad uno o più filE

### **git commit:** <br>
committare nel repository locale (-m aggiungi un commento)

### **git pull:** <br>
scaricare aggiornamenti dal repository online

### **git push:** <br>
'pushare' sulla repository online

### **git merge:** <br>
unire 2 branch che differiscono
**Ti devi mettere nel branch principale e poi mergare quello secondario**

### **git fetch:** <br>
forza il controllo degli aggiornamenti

### **.gitingnore template:**
serie di file che vengono ignorati da git (versione migliorata di **.gitignore**)

## CONFLITTI: 
### **3 OPZIONI:**
#### **1. SCEGLIERE QUELLA CHE HAI FATTO TU**
#### **2. SCEGLIERE QUELLA CHE STA VENENDO PULLATA**
#### **3. SCEGLIERE ENTRAMBE**

(publish branch allinea quello in locale con quello online)
git checkout **nome branch per spostarsi**

## **DIFFERENTI TIPOLOGIE DI BRANCH**
### **MAIN**: 
branch principale
### **DEVELOP**: 
branch in cui vengono effettiati esperimenti e dove si svolge lo svilupo
### **FEATURE**: 
branch in cui vengono sviluppate feature per i diversi componenti
### **RELEASE**: 
branch in cui vengono megiati prima del main per assicurarsi che non ci siano errori
### **HOTFIX**: 
(patch)

per mergare nel develop e risolvere i conflitti, invece di mergare la feature direttamente nel develop
si merga prima il develop nel branch, risolvi i conflitti. Dopo avere un branch sicuro vado su develop e faccio il merge

# <p align="center">**MAVEN**</p>
## CICLO DI VITA MAVEN
### - VALIDATE: 
verifica la correttezza del progetto
### - COMPILE: 
compila il codice sorgente
### - TEST: 
esegue i test unitari
### - PACKAGE: 
impacchetta il codice compilato
### - INTEGRATION TEST: 
esegue test aggiunivi, che richiedono il pacchetto
### - VERIFY: 
se il pacchetto esiste in fase di runtime
### - INSTALL: 
installa il file del pacchetto
### - DEPLOY:
esegue il deploy del file del pacchetto su un server o repository remoto
### - CLEAN: 
utilizzato per pulire l'output delle build precedenti

# <p align="center">**LOMBOK**</p>
libreria opensource per java che attraverso annotazioni aiuta ascrivere meno codice, si collega all'editor o all' IDE

## ANNOTAZIONI
@getter
@setter
@data
...(gurda slide)

per fare un getter o setter customizzato dobbiamo fare l'verride


# <p align="center">**LIQUIBASE**</p>
## Descrizione:
Libreria open source indipendente dal DB che traccia, gestisce e applica le modifiche in una tabella di log (tipo github)

## Comandi
### Changeset: 
tutte le operazioni che possono essere effettuate
### Changelog: 
tutte le operazioni effettuate da un'utente
### DATABASECHANGELOG: 
vengono stracciati tutti i changeset
### DATABASECHANGELOCK:
garantisce che sia in esecuzione solo un'istanza

mvn liquibase:generate ChangeLog

# <p align="center">**DOCKER**</p>

## Descrizione
Piattaforma opensource per lo sviluppo di applicazioni in un' ambiente virtualizzato (chiamati container)
Chi sviluppa può costrire, testare e distribuire localmente o su un server di produzione

## Nucleo Fondamentale

### Docker Daemon: 
Gestisci immagini docker
### Docker API: 
interfaccia che consente al Docker Client di cumunicare con il Docker Daemon (se non si avviano[premere f2 per andare nel bios e disattivare la spunta di windows che non si possono avviare macchine virtuali])
### Docker Client: 
interfaccia utente dove si interagisce con docker, utilizzabile sia via command line che tramite strumenti grafici

## Immagine Docker
Container: è tipo una iso
Immagine: file statico, un pacchetto autonomo che contiene tutto il necessario per eseguire un'applicazione


### Cosa contiene il pacchetto docker

#### Struttura leggera e modulare
#### Indipendenza dell'ambiente
#### Versioning
#### Dockerfile

## Dockerfile
### docker build -t {image-name} context:
costruisce un'immagine a partire dal contesto context

### FROM:

### WORKDIR:
### COPY:
COPY [src] [dest] -> copia una cartella [src] in una cartella [dest]
### RUN:
RUN apt-get update && \ apt-get install -y apache2
### EXPOSE:
specifica le porte in cui docker ascolterà le richiste
es. EXPOSE 80 -p [host-port]:[container-port] oppure -p
i container non si dovrebbero parlare ma in questo modo si fa in modo di "collegare" una porta dell'host con una porta del container
### CMD:
si definisce il comando predefinito
### ENTRYPOINT:
ENTRYPOINT ["java", "-jar","app.jar"] 
### ENV
DATABASE_URL = "mongodb://localhost:27017/mydb"
### VOLUME
VOLUME ["path/to/volume"]
specifichi l'eseguibile o il comando che deve essere eseguito dal container

### ESEMPIO
FROM python:3.8-slim
COPY app.py/app.py
CMD["python","/app.py"]

## Docker registry

### registry pubblici: 
Docker Hub

### registry privati:
si vanno a salvare immagini docker

## Docker container

### Isolamento
### Portabilità
### Efficenza
### Riproducibilità
### Orchestrazione
### Versioning
### Sicurezza:
container docker sono isolati finchè non viene specificato il container

### creazione container
docker create -name={nome_container} {nome_immagine}:{versione}
docker start -i {nome_container}
docker run -d -p {porta_host}:{porta_container}

## Docker Compose

(ho missato un botto di robba, andava troppo veloce)

permette di definire l'intera configurazione dell'applicazione, sompresi tutti i servizi
Filemanifest versionabile
si specifica facilmetne l'ordine d'avvio dei container
crea un network per i container in modo da farli comunicare tra loro
avvio rapido untilizzando un singolo comando
