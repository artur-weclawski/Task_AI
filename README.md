# Zadanie rekrutacyjne - Junior AI Developer
## Opis działania aplikacji
Aplikacja pozwala na wczytanie zawartości pliku tekstowego (```Zadanie dla JJunior AI Developera - tresc artykulu```), następnie łączy się z API openAI w celu wygenerowania artykułu w postaci HTML na podstawie wczytanego pliku, aby ostatecznie otrzymaną odpowiedź zapisać do pliku z rozszerzeniem .html (```artykul.html```).

Dla tego zadania został wybrany model: gpt-4o, ponieważ pozwala on na generowanie tekstu. Model otrzymuje dwie wiadomości, pierwsza (system) ma na celu "ustawienie" AI aby działało w konkretny sposób, druga wiadomość (user) przesyła zawartość pliku.

## Instrukcja uruchomienia
1. Pobierz repozytorium (https://github.com/artur-weclawski/Task_AI.git).
2. Upewnij się, że masz zainstalowane node.js.
3. Uruchom terminal, następnie przejdź do wnętrzna folderu z pobranym repozytorium.
4. Zainstaluj wszystkie niezbędne pakiety za pomocą polecenia ```npm install```.
5. W pliku ```.env.example``` wprowadź swój klucz API do openAI.
6. Zmień nazwę pliku ```.env.example``` na ```.env```.
7. Aplikację uruchom poleceniem ```node main.js```.

# Dla chętnych
Plik ```szablon.html``` zawiera niezbędny kod HTML w celu walidacji wraz z pustym znacznikiem \<body\> do którego wklejony zostanie artykuł. Dodatkowo posiada on style dla czytelniejszej wizualizacji.

Plik ```podgląd.html``` posiada już wklejony artykuł (jeden z wyników wcześniejszej kompilacji aplikacji).
