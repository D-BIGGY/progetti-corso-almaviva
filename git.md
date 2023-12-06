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
### **MAIN**: <br> branch principale
### **DEVELOP**: <br> branch in cui vengono effettiati esperimenti e dove si svolge lo svilupo
### **FEATURE**: <br> branch in cui vengono sviluppate feature per i diversi componenti
### **RELEASE**: <br> branch in cui vengono megiati prima del main per assicurarsi che non ci siano errori
### **HOTFIX**: <br> (patch)

per mergare nel develop e risolvere i conflitti, invece di mergare la feature direttamente nel develop
si merga prima il develop nel branch, risolvi i conflitti. Dopo avere un branch sicuro vado su develop e faccio il merge

# <p align="center">**MAVEN**</p>
## CICLO DI VITA MAVEN
### - VALIDATE: verifica la correttezza del progetto
### - COMPILE: compila il codice sorgente
### - TEST: esegue i test unitari
### - PACKAGE: impacchetta il codice compilato
### - INTEGRATION TEST: esegue test aggiunivi, che richiedono il pacchetto
### - VERIFY: se il pacchetto esiste in fase di runtime
### - INSTALL: installa il file del pacchetto
### - DEPLOY: esegue il deploy del file del pacchetto su un server o repository remoto
### - CLEAN: utilizzato per pulire l'output delle build precedenti

# <p align="center">**LOMBOK**</p>
libreria opensource per java che attraverso annotazioni aiuta ascrivere meno codice, si collega all'editor o all' IDE

## ANNOTAZIONI
@getter
@setter
@data
...(gurda slide)

per fare un getter o setter customizzato dobbiamo fare l'verride
