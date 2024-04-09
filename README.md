### Digitalna Dalmacija JUNIORDev React 2024

# Praktični rad 4

Na [ovoj web lokaciji](https://opentdb.com/api_config.php) se nalazi "Open Trivia DataBase" - besplatni JSON API na kojem možete pronaći bazu kviz (trivia) pitanja. Preko navedenog linka možete podesiti nekoliko osnovnih opcija (broj pitanja, kategorija, težina, ...) te generirati URL na koji možete poslati zahtjev. Odgovor na zahtjev će sadržavati niz sa pitanjima i odgovorima. Ovako izgleda primjer odgovora na zahtjev u kojem tražimo 2 pitanja (bez dodatnih filtera) "[https://opentdb.com/api.php?amount=2](https://opentdb.com/api.php?amount=2)"

```json
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What household item make the characters of &quot;Steins; Gate&quot; travel through time?",
      "correct_answer": "Microwave",
      "incorrect_answers": ["Computer", "Refrigerator", "Televison"]
    },
    {
      "category": "General Knowledge",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Spoon theory is a theory, utilizing &quot;Spoons&quot; as a metaphor for energy they can use in a day.",
      "correct_answer": "True",
      "incorrect_answers": ["False"]
    }
  ]
}
```

Kao što vidite pitanja se nalaze u polju "results koji je niz objekata, a svaki objekt predstavlja jedno pitanje sa svojim pripadajućim svojstvima - kategorija, tip, težina, pitanje, točan i netočni odgovori.

## Zadatak

Napravite React aplikaciju koja će prilikom pokretanja dohvatiti pet (5) pitanja i naravno spremiti ih unutar komponente. Korisniku je potrebno prikazati prvo pitanje i potencijalne odgovore. Pokušajte implementirati što više od navedenih funkcionalnosti:

- dodajte mogućnost odgovora na trenutno pitanje i prikaz je li odgovor bio točan ili ne
- nakon odgovora se prikazuje iduće pitanje
- na ekranu bi trebalo biti vidljivo koliko je ukupno pitanja i na kojem smo trenutno pitanju
- korisniku bi trebao biti prikazan njegov trenutni rezultat
- nakon kraja igre ponudite korisniku mogućnost ponovnog igranja (sa novim pitanjima)

![Primjer rješenja](https://github.com/anamarijapapic/JUNIORDev-React-04-Quiz/assets/92815435/a081d1a3-2388-4f96-888c-a495a3944c4c)

## Napredne mogućnosti

Ukoliko ste implementirali sve prethodne funkcionalnosti, pokušajte prije početka igre korisniku ponuditi mogućnost odabira težine, kategorije ili broja pitanja. Ovisno o korisničkom unosu modificirajte URL zahtjeva pa tek nakon potvrde korisnike pošaljite zahtjev i započnite igru sa traženim skupom pitanja.
