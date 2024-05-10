<h4>Nume: Radu Andreea Maria</h4>
<h4>Grupa: 1121 </h4> 


<h4>Link publicare: https://cc-cat-facts.vercel.app/ </h4>

<h3>Introducere</h3>  

<p>
Aplicația web dezvoltată în cadrul cursului de Cloud Computing se bazează pe tehnologiile Node.js pentru partea de back-end și React pentru front-end. Pentru stocarea datelor, s-a optat pentru o bază de date non-relațională MongoDB, iar deployment-ul se realizează prin intermediul serviciilor oferite de Vercel.  
</p>

<h3>Descriere aplicatie</h3>  

<p>
Aplicatia afiseaza o informatie aleatoare despre pisici prin intermediul API-ului <b>catfact.ninja</b>.
Utilizatorul poate salva o informatie preferata prin apasarea butonului "Save". 
Datele sunt stocate prin intermediul unui endpoint API, care este apoi apelat prin intermediul bibliotecii Axios. 
  
Componenta utilizeaza hook-urile useState si useEffect pentru a gestiona starea componentei si pentru a apela API-ul in momentul in care componenta este montata.  

Pentru a vizualiza informatiile salvate, utilizatorul va naviga la ruta "../saved".  

</p>

<h3>Descriere API</h3>

<p>
Catfact.ninja este un API care oferă acces la un set de date legate de pisici. În special, acesta furnizează informatii amuzante despre pisici, denumite "cat facts". 
Acest API este disponibil public și poate fi utilizat de dezvoltatorii de aplicații pentru a obține aceste curiozitati amuzante și a le integra în aplicațiile lor. 
API-ul este disponibil prin intermediul unor request-uri HTTP la anumite endpoint-uri, iar răspunsurile sunt returnate în format JSON.
</p>

<h3>Flux de date</h3>

<p>
Fluxul de date pentru API-ul catfact.ninja este urmatorul:  

1. Request-ul este o cerere HTTP trimisă către server pentru a obține o informatie aleatoare despre pisici.
2. Response-ul este un răspuns HTTP ce conține informația ceruta.

Exemplu:  
<b>Request:</b> GET https://catfact.ninja/fact  
<b>Response:</b> HTTP/1.1 200 OK
{
"fact": "A group of kittens is called a kindle."
}  
  
Metoda HTTP suportata de API-ul catfact.ninja este: 
GET - pentru a obține un fapt despre pisici.
  
Nu este necesară o autentificare sau autorizare pentru a utiliza acest API.
</p>

<h3>Capturi de ecran</h3>

![Screenshot 2023-05-01 184413.png](media%2FScreenshot%202023-05-01%20184413.png)  
![Screenshot 2023-05-01 120343.png](media%2FScreenshot%202023-05-01%20120343.png)
