export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'jak-ustawic-ikone-favicon-strony-w-wynikach-google-praktyczny-poradnik',
    title: 'Jak ustawić ikonę (favicon) strony w wynikach Google – praktyczny poradnik',
    excerpt: 'Dowiedz się, dlaczego favicon jest ważna, jak przygotować plik .ico w darmowym programie GIMP, jak umieścić go na stronie i potwierdzić w Google Search Console.',
    content: `
## Dlaczego favicon jest ważna?
Favicon (skrót od "favorite icon") to mała ikona, która pojawia się na karcie przeglądarki obok tytułu strony, w zakładkach oraz w wynikach wyszukiwania Google (na urządzeniach mobilnych i desktopach). Pomaga ona w budowaniu rozpoznawalności marki i ułatwia użytkownikom odnalezienie Twojej strony wśród wielu otwartych kart.

## Krok 1: Przygotowanie ikony favicon w formacie .ico
Google zaleca, aby favicon była wielokrotnością kwadratu o wymiarach 48x48 pikseli (np. 48x48, 96x96, 144x144). Chociaż Google obsługuje różne formaty (PNG, GIF, JPEG), format .ico jest najbardziej uniwersalny i obsługiwany przez wszystkie przeglądarki.

### Jak stworzyć plik .ico w GIMP (darmowym programie graficznym)?
1. Otwórz program GIMP i utwórz nowy obraz o wymiarach np. 512x512 pikseli.
2. Stwórz swoją ikonę (najlepiej z przezroczystym tłem).
3. Wybierz z menu Plik -> Wyeksportuj jako...
4. Zmień rozszerzenie pliku na .ico (np. favicon.ico).
5. W oknie eksportu zaznacz opcję zachowania przezroczystości i zapisz plik.

## Krok 2: Umieszczenie favicon na stronie
Aby dodać favicon do swojej strony, musisz umieścić plik favicon.ico w głównym katalogu swojej witryny (np. public_html) i dodać odpowiedni kod w sekcji \`<head>\` swojego dokumentu HTML:

\`\`\`html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
\`\`\`

Jeśli używasz WordPressa, możesz to zrobić znacznie prościej:
1. Zaloguj się do panelu administratora.
2. Przejdź do Wygląd -> Dostosuj -> Tożsamość witryny.
3. W sekcji "Ikona witryny" wgraj przygotowany plik (WordPress automatycznie go przeskaluje i wygeneruje odpowiednie formaty).

## Krok 3: Potwierdzenie favicon w Google Search Console
Po dodaniu favicon na stronę, Googlebot musi ją zaindeksować. Możesz przyspieszyć ten proces:
1. Zaloguj się do Google Search Console.
2. Wpisz adres URL swojej strony głównej w pasku wyszukiwania na górze.
3. Kliknij "Poproś o zaindeksowanie".

## Ważne wytyczne Google dotyczące favicon
* Favicon musi być wizualną reprezentacją Twojej marki.
* Plik favicon musi być dostępny dla Googlebota (nie blokuj go w pliku robots.txt).
* Google nie gwarantuje, że favicon pojawi się w wynikach wyszukiwania, nawet jeśli wszystko jest poprawnie skonfigurowane.
* Unikaj nieodpowiednich obrazów (np. pornografii lub symboli nienawiści) – Google zastąpi je domyślną ikoną.

## Podsumowanie
Ustawienie favicon to prosty, ale ważny krok w optymalizacji strony pod kątem UX i SEO. Dzięki temu Twoja witryna będzie wyglądać bardziej profesjonalnie i będzie łatwiejsza do rozpoznania w wynikach wyszukiwania.
    `,
    date: '2023-10-15',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'dlaczego-warto-zainwestowac-w-strone-na-wordpressie-zamiast-korzystac-z-kreatorow-stron',
    title: 'Dlaczego warto zainwestować w stronę na WordPressie zamiast korzystać z kreatorów stron?',
    excerpt: 'Poznaj 7 powodów, dla których WordPress to lepszy wybór niż kreatory stron: pełna kontrola, lepsze SEO, skalowalność, brak uzależnienia i niższe koszty długoterminowe.',
    content: `
Kreatory stron (takie jak Wix, Squarespace czy Weebly) zyskały ogromną popularność dzięki łatwości obsługi. Jednak dla firm, które myślą o długoterminowym rozwoju, WordPress pozostaje bezkonkurencyjnym rozwiązaniem. Oto 7 powodów, dlaczego warto zainwestować w stronę na WordPressie.

## 1. Pełna kontrola nad stroną i jej kodem
Korzystając z kreatorów stron, w rzeczywistości "wynajmujesz" miejsce na ich platformie. Jeśli platforma zmieni regulamin, podniesie ceny lub zniknie z rynku, Twoja strona również jest zagrożona. WordPress (wersja .org) to oprogramowanie open-source. Jesteś w 100% właścicielem swojej strony, plików i danych. Możesz ją przenieść na dowolny hosting w dowolnym momencie.

## 2. Lepsze możliwości SEO
Chociaż kreatory stron poprawiły swoje funkcje SEO, WordPress nadal oferuje znacznie większe możliwości optymalizacji. Dzięki wtyczkom takim jak Yoast SEO czy Rank Math, masz pełną kontrolę nad meta tagami, mapami XML, strukturą URL, przekierowaniami i danymi strukturalnymi (Schema.org).

## 3. Skalowalność i rozwój wraz z firmą
Kreatory stron świetnie sprawdzają się w przypadku prostych wizytówek. Jeśli jednak Twoja firma się rozwinie i będziesz potrzebować zaawansowanego sklepu internetowego, platformy kursowej, forum lub wielojęzyczności, kreator może okazać się niewystarczający. WordPress, dzięki tysiącom wtyczek, może rosnąć razem z Twoim biznesem.

## 4. Brak uzależnienia od jednej platformy (Vendor Lock-in)
Przeniesienie strony z kreatora (np. Wix) na inną platformę jest niezwykle trudne i często wiąże się z koniecznością budowania strony od nowa. WordPress pozwala na łatwy eksport danych i przenosiny między różnymi dostawcami hostingu.

## 5. Dostęp do tysięcy wtyczek i integracji
Repozytorium WordPressa zawiera ponad 50 000 darmowych wtyczek, a na rynku dostępne są tysiące rozwiązań premium. Niezależnie od tego, czy potrzebujesz integracji z systemem CRM, bramką płatności, systemem rezerwacji czy narzędziami do e-mail marketingu – dla WordPressa z pewnością istnieje już gotowe rozwiązanie.

## 6. Zgodność z RODO i bezpieczeństwo danych
W przypadku kreatorów stron, Twoje dane (i dane Twoich klientów) są przechowywane na serwerach dostawcy usługi, często poza Unią Europejską. Korzystając z WordPressa na własnym hostingu, masz pełną kontrolę nad tym, gdzie i jak przechowywane są dane, co ułatwia zachowanie zgodności z RODO.

## 7. Niższe koszty długoterminowe
Kreatory stron kuszą niskim progiem wejścia, ale w dłuższej perspektywie miesięczne abonamenty (szczególnie za plany e-commerce) mogą być bardzo wysokie. WordPress sam w sobie jest darmowy. Płacisz jedynie za hosting i domenę (zazwyczaj kilkaset złotych rocznie), a ewentualne koszty wtyczek premium to często opłaty jednorazowe.

## Podsumowanie
Kreatory stron to dobre rozwiązanie dla hobbystów i bardzo małych projektów. Jeśli jednak traktujesz swój biznes poważnie i zależy Ci na profesjonalnym wizerunku, niezależności, wysokich pozycjach w Google i możliwościach rozwoju – WordPress jest inwestycją, która z pewnością się zwróci.
    `,
    date: '2023-11-02',
    imageUrl: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'podstawy-korzystania-z-directadmin',
    title: 'Podstawy korzystania z DirectAdmin',
    excerpt: 'Czym jest DirectAdmin? Dowiedz się, jak zarządzać plikami, tworzyć konta e-mail, dodawać domeny, instalować certyfikat SSL i tworzyć kopie zapasowe.',
    content: `
## Czym jest DirectAdmin?
DirectAdmin to jeden z najpopularniejszych i najlżejszych paneli kontrolnych do zarządzania hostingiem internetowym. Posiada przejrzysty interfejs graficzny, który pozwala na łatwe zarządzanie serwerem, stronami WWW, pocztą e-mail i bazami danych z poziomu przeglądarki, bez konieczności znajomości komend wiersza poleceń.

## Logowanie do DirectAdmin
Aby zalogować się do panelu, zazwyczaj należy wpisać w przeglądarce adres swojej domeny z portem 2222 (np. \`https://twojadomena.pl:2222\`) lub skorzystać z linku dostarczonego przez firmę hostingową. Do logowania potrzebny jest login i hasło.

## 1. Zarządzanie plikami – Menedżer plików
Menedżer plików to narzędzie pozwalające na przeglądanie, edycję, wgrywanie i usuwanie plików na serwerze.
* Pliki Twojej strony internetowej powinny znajdować się w katalogu \`public_html\` (lub \`domains/twojadomena.pl/public_html\`).
* Możesz tutaj wgrywać pliki (np. instalatora WordPressa) lub edytować pliki konfiguracyjne (np. \`wp-config.php\`).

## 2. Tworzenie kont e-mail
DirectAdmin pozwala na łatwe tworzenie profesjonalnych adresów e-mail w Twojej domenie (np. \`kontakt@twojadomena.pl\`).
1. Przejdź do sekcji "Zarządzanie kontami e-mail" (E-mail Accounts).
2. Kliknij "Utwórz konto e-mail" (Create mail account).
3. Podaj nazwę użytkownika (np. kontakt), wygeneruj silne hasło i określ limit pojemności skrzynki.
4. Kliknij "Utwórz".

## 3. Dodawanie domen i subdomen
Jeśli Twój pakiet hostingowy na to pozwala, możesz obsługiwać wiele stron na jednym koncie.
* **Nowa domena:** Przejdź do "Zarządzanie domenami" (Domain Setup) i kliknij "Dodaj nową domenę".
* **Subdomena:** Przejdź do "Zarządzanie subdomenami" (Subdomain Management) i wpisz nazwę (np. \`sklep\`, co utworzy adres \`sklep.twojadomena.pl\`).

## 4. Instalacja certyfikatu SSL (HTTPS)
Certyfikat SSL jest dziś absolutnym standardem. Większość hostingów oferuje darmowe certyfikaty Let's Encrypt.
1. Przejdź do "Certyfikaty SSL" (SSL Certificates).
2. Wybierz opcję "Darmowy i automatyczny certyfikat od Let's Encrypt".
3. Zaznacz swoją domenę (oraz ewentualnie subdomenę www).
4. Kliknij "Zapisz". Certyfikat zostanie wygenerowany i zainstalowany automatycznie.

## 5. Tworzenie baz danych (np. pod WordPressa)
Większość systemów CMS (w tym WordPress) wymaga bazy danych MySQL.
1. Przejdź do "Zarządzanie bazami danych MySQL" (MySQL Management).
2. Kliknij "Utwórz nową bazę danych" (Create new Database).
3. Podaj nazwę bazy danych oraz nazwę użytkownika (często są one takie same).
4. Wygeneruj silne hasło.
5. Zapisz te dane – będą Ci potrzebne podczas instalacji CMS-a!

## 6. Kopie zapasowe (backup)
Regularne tworzenie kopii zapasowych to podstawa bezpieczeństwa.
1. Przejdź do "Kopie zapasowe" (Create/Restore Backups).
2. Wybierz elementy, które chcesz skopiować (domeny, e-maile, bazy danych).
3. Kliknij "Utwórz kopię zapasową".
4. Po zakończeniu procesu, plik z kopią znajdziesz w Menedżerze plików w folderze \`backups\`. Warto pobrać go na swój komputer.

## Podsumowanie
DirectAdmin to potężne, a zarazem intuicyjne narzędzie. Opanowanie powyższych podstaw pozwoli Ci na samodzielne zarządzanie większością aspektów Twojego hostingu i strony internetowej.
    `,
    date: '2023-11-15',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'cookies-i-google-consent-mode-na-strone-wordpress',
    title: 'Cookies i Google Consent Mode na stronę WordPress',
    excerpt: 'Poradnik krok po kroku, jak zainstalować wtyczkę do zarządzania zgodą na cookies i skonfigurować Google Consent Mode na stronie opartej o WordPress.',
    content: `
Wdrożenie odpowiedniego mechanizmu zarządzania zgodami na pliki cookies (Cookie Banner) oraz integracja z Google Consent Mode v2 to obecnie obowiązek każdego właściciela strony internetowej, który korzysta z narzędzi analitycznych (Google Analytics) lub reklamowych (Google Ads). W tym poradniku pokażemy, jak to zrobić w WordPressie.

## 1. Instalacja wtyczki do zarządzania zgodą na cookies
Aby strona była zgodna z prawem (RODO/GDPR), baner cookies nie może jedynie informować o używaniu ciasteczek. Musi on blokować skrypty śledzące do momentu wyrażenia wyraźnej zgody przez użytkownika.

### Instalacja:
1. Zaloguj się do panelu WordPressa.
2. Przejdź do Wtyczki -> Dodaj nową.
3. Wyszukaj wtyczkę np. "CookieYes", "Complianz" lub "Cookiebot" (wszystkie obsługują Google Consent Mode).
4. Zainstaluj i włącz wybraną wtyczkę.
5. Przejdź przez kreator konfiguracji wtyczki, skanując swoją stronę w poszukiwaniu używanych plików cookies i kategoryzując je (Niezbędne, Analityczne, Marketingowe itp.).

## 2. Konfiguracja Google Consent Mode
Google Consent Mode (Tryb uzyskiwania zgody) to mechanizm, który pozwala tagom Google (Analytics, Ads) dostosować swoje działanie do statusu zgody użytkownika. Jeśli użytkownik nie wyrazi zgody na cookies analityczne, Google Analytics nie zapisze ciasteczek, ale prześle anonimowe "pingi" z podstawowymi danymi, co pozwala na modelowanie konwersji.

### Dodanie Google Consent Mode do WordPress:
Jeśli używasz nowoczesnej wtyczki (jak wymienione wyżej), integracja jest zazwyczaj wbudowana:
1. Przejdź do ustawień zainstalowanej wtyczki cookies.
2. Poszukaj zakładki "Integracje" lub "Google Consent Mode".
3. Włącz opcję "Enable Google Consent Mode".
4. Upewnij się, że wtyczka ładuje się przed innymi skryptami (np. przed Google Tag Managerem lub kodem Google Analytics).

Jeśli używasz Google Tag Managera (GTM):
1. W GTM włącz "Przegląd ustawień uzyskiwania zgody" w ustawieniach kontenera.
2. Skonfiguruj tagi (np. GA4, Google Ads), określając wymagane zgody (np. \`analytics_storage\`, \`ad_storage\`).
3. Wtyczka w WordPressie będzie automatycznie przesyłać odpowiednie sygnały do GTM w zależności od wyboru użytkownika w banerze.

## 3. Testowanie poprawności działania
Po wdrożeniu koniecznie przetestuj, czy mechanizm działa poprawnie:
1. Otwórz swoją stronę w oknie incognito.
2. Otwórz Narzędzia dla programistów w przeglądarce (F12) i przejdź do zakładki "Application" -> "Cookies".
3. Upewnij się, że przed kliknięciem "Akceptuj" nie ładują się żadne cookies analityczne ani marketingowe.
4. Kliknij "Akceptuj" i sprawdź, czy ciasteczka się pojawiły.
5. Możesz również użyć rozszerzenia Google Tag Assistant, aby sprawdzić, czy sygnały Consent Mode są poprawnie wysyłane.

## Podsumowanie
Poprawne wdrożenie banera cookies i Google Consent Mode chroni Cię przed karami finansowymi i pozwala na legalne zbieranie danych analitycznych. Wybór odpowiedniej wtyczki w WordPressie znacznie upraszcza ten proces.
    `,
    date: '2023-12-05',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'podstawy-systemu-linux-red-hat',
    title: 'Podstawy systemu Linux Red Hat',
    excerpt: 'Wprowadzenie do systemu Linux Red Hat. Poznaj podstawowe narzędzia zarządzania systemem, zadania administracyjne, zabezpieczanie oraz monitorowanie.',
    content: `
Red Hat Enterprise Linux (RHEL) to jedna z najpopularniejszych i najbardziej cenionych dystrybucji Linuksa w środowiskach korporacyjnych. Znana ze swojej stabilności, bezpieczeństwa i profesjonalnego wsparcia technicznego, jest często wybierana jako system operacyjny dla serwerów o znaczeniu krytycznym.

## 1. Podstawowe narzędzia zarządzania systemem

### Zarządzanie pakietami (YUM/DNF)
W RHEL do zarządzania oprogramowaniem używa się menedżerów pakietów YUM (w starszych wersjach) lub DNF (w nowszych).
* Instalacja pakietu: \`sudo dnf install nazwa_pakietu\`
* Aktualizacja systemu: \`sudo dnf update\`
* Usuwanie pakietu: \`sudo dnf remove nazwa_pakietu\`

### Zarządzanie usługami (systemd)
Systemd to menedżer systemu i usług, który zarządza uruchamianiem procesów.
* Uruchomienie usługi: \`sudo systemctl start nazwa_uslugi\`
* Zatrzymanie usługi: \`sudo systemctl stop nazwa_uslugi\`
* Włączenie usługi przy starcie: \`sudo systemctl enable nazwa_uslugi\`
* Sprawdzenie statusu: \`sudo systemctl status nazwa_uslugi\`

## 2. Podstawowe zadania administracyjne

### Zarządzanie użytkownikami
* Dodanie użytkownika: \`sudo useradd nazwa_uzytkownika\`
* Zmiana hasła: \`sudo passwd nazwa_uzytkownika\`
* Dodanie użytkownika do grupy sudo (koło): \`sudo usermod -aG wheel nazwa_uzytkownika\`

### Zarządzanie plikami i uprawnieniami
* Zmiana właściciela: \`sudo chown uzytkownik:grupa plik\`
* Zmiana uprawnień: \`chmod 755 plik\` (odczyt/zapis/wykonanie dla właściciela, odczyt/wykonanie dla reszty)

## 3. Zabezpieczanie systemu

### SELinux (Security-Enhanced Linux)
SELinux to zaawansowany mechanizm bezpieczeństwa wbudowany w RHEL, który kontroluje dostęp aplikacji do plików i zasobów.
* Sprawdzenie statusu: \`sestatus\`
* Tryby działania: Enforcing (blokuje), Permissive (tylko loguje), Disabled (wyłączony - niezalecane).

### Zapora sieciowa (Firewalld)
Firewalld zarządza regułami zapory sieciowej.
* Sprawdzenie statusu: \`sudo firewall-cmd --state\`
* Otwarcie portu (np. 80 dla HTTP): \`sudo firewall-cmd --permanent --add-port=80/tcp\`
* Przeładowanie reguł: \`sudo firewall-cmd --reload\`

## 4. Monitorowanie systemu
Do podstawowego monitorowania zasobów serwera przydają się komendy:
* \`top\` lub \`htop\` – monitorowanie procesów w czasie rzeczywistym.
* \`df -h\` – sprawdzenie wolnego miejsca na dyskach.
* \`free -m\` – sprawdzenie zużycia pamięci RAM.
* \`journalctl\` – przeglądanie logów systemowych.

Opanowanie tych podstaw stanowi solidny fundament do dalszej nauki administracji systemami z rodziny Red Hat.
    `,
    date: '2024-01-12',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'podstawowa-konfiguracja-cms-joomla-po-instalacji',
    title: 'Podstawowa Konfiguracja CMS Joomla po Instalacji',
    excerpt: 'Co zrobić po instalacji Joomla? Przewodnik po ustawieniach globalnych, instalacji języków, tworzeniu menu, zarządzaniu modułami i użytkownikami.',
    content: `
Zainstalowałeś system Joomla i co dalej? Pierwsze kroki w panelu administracyjnym mogą wydawać się przytłaczające, ale odpowiednia konfiguracja początkowa ułatwi Ci późniejszą pracę nad stroną. Oto przewodnik krok po kroku.

## 1. Logowanie do panelu administracyjnego
Aby zalogować się do zaplecza (backendu), dopisz \`/administrator\` do adresu swojej strony (np. \`twojadomena.pl/administrator\`). Użyj loginu i hasła podanego podczas instalacji.

## 2. Ustawienia globalne
Przejdź do **System -> Konfiguracja globalna**. To najważniejsze miejsce w systemie.
* **Witryna:** Ustaw nazwę witryny, domyślny edytor (polecamy TinyMCE lub JCE) oraz meta tagi (opis i słowa kluczowe).
* **System:** Skonfiguruj ustawienia pamięci podręcznej (Cache) oraz czas sesji.
* **Serwer:** Ustaw strefę czasową, włącz wymuszanie HTTPS (bardzo ważne!) oraz skonfiguruj wysyłkę poczty (najlepiej przez SMTP).
* **Optymalizacja SEO:** Włącz opcje "Proste adresy URL" oraz "Zastosuj przepisywanie URL" (wymaga zmiany nazwy pliku \`htaccess.txt\` na \`.htaccess\` na serwerze).

## 3. Instalacja języków
Jeśli zainstalowałeś Joomlę w języku angielskim, możesz łatwo dodać język polski.
1. Przejdź do **System -> Języki**.
2. Kliknij "Zainstaluj języki".
3. Znajdź "Polish" i kliknij instaluj.
4. Ustaw język polski jako domyślny dla witryny (frontend) i zaplecza (backend).

## 4. Tworzenie menu
Menu to podstawa nawigacji.
1. Przejdź do **Menu -> Main Menu -> Utwórz pozycję menu**.
2. Wpisz tytuł (np. "O nas").
3. Wybierz typ pozycji menu (np. Artykuły -> Pojedynczy artykuł).
4. Wybierz lub stwórz artykuł, do którego ma prowadzić link.

## 5. Zarządzanie modułami
Moduły to bloki treści wyświetlane wokół głównego obszaru artykułu (np. menu boczne, stopka, wyszukiwarka).
1. Przejdź do **Rozszerzenia -> Moduły**.
2. Możesz tu włączać, wyłączać i przypisywać moduły do konkretnych pozycji w Twoim szablonie (np. pozycja "footer-1").

## 6. Zarządzanie użytkownikami
Jeśli na stronie będzie pracować więcej osób, utwórz dla nich konta.
1. Przejdź do **Użytkownicy -> Zarządzanie**.
2. Kliknij "Utwórz".
3. Podaj dane użytkownika i przypisz mu odpowiednią grupę (np. "Administrator" ma pełne prawa, "Author" może tylko pisać artykuły).

## 7. Dodawanie rozszerzeń
Joomla oferuje tysiące dodatków (komponentów, modułów, pluginów).
1. Przejdź do **Rozszerzenia -> Instalacje**.
2. Możesz wgrać paczkę .zip pobraną z internetu lub zainstalować rozszerzenie bezpośrednio z katalogu JED (Joomla Extensions Directory) w zakładce "Zainstaluj z sieci".

## 8. Tworzenie pierwszego artykułu
1. Przejdź do **Artykuły -> Utwórz**.
2. Wpisz tytuł, dodaj treść w edytorze, przypisz artykuł do kategorii i zapisz.

## 9. Konfiguracja szablonu
Wygląd strony zależy od szablonu.
1. Przejdź do **Rozszerzenia -> Szablony**.
2. Kliknij na styl domyślnego szablonu (np. Cassiopeia), aby zmienić jego ustawienia (kolory, logo, układ).

## 10. Tworzenie kopii zapasowej
Zanim zaczniesz wprowadzać duże zmiany, zainstaluj komponent **Akeeba Backup** i wykonaj pełną kopię zapasową strony.

## Podsumowanie
Po wykonaniu tych 10 kroków, Twoja instalacja Joomla jest bezpieczna, zoptymalizowana i gotowa do wprowadzania właściwych treści.
    `,
    date: '2024-02-20',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'jak-zainstalowac-joomla',
    title: 'Jak zainstalować Joomla',
    excerpt: 'Kompletny poradnik instalacji Joomla: od pobrania plików, przez przygotowanie serwera i bazy danych, aż po uruchomienie instalatora i logowanie do panelu.',
    content: `
Instalacja systemu CMS Joomla jest procesem stosunkowo prostym i zajmuje zazwyczaj kilkanaście minut. W tym poradniku przeprowadzimy Cię przez ręczną instalację Joomla na serwerze (hostingu).

## 1. Pobierz Joomla
Zawsze pobieraj instalator z oficjalnego źródła.
1. Wejdź na stronę \`downloads.joomla.org\`.
2. Pobierz najnowszą stabilną wersję (przycisk "Download Joomla!"). Zapisz plik .zip na swoim komputerze.

## 2. Przygotuj środowisko serwerowe
Upewnij się, że Twój hosting spełnia wymagania techniczne Joomla (odpowiednia wersja PHP, zazwyczaj 8.0 lub nowsza, oraz baza danych MySQL/MariaDB).

## 3. Rozpakuj pliki Joomla
Masz dwie opcje wgrania plików na serwer:
* **Opcja A (Zalecana):** Wgraj pobrany plik .zip na serwer (np. przez Menedżer plików w DirectAdmin/cPanel) do folderu \`public_html\` i rozpakuj go bezpośrednio na serwerze.
* **Opcja B:** Rozpakuj plik .zip na swoim komputerze i prześlij wszystkie wypakowane pliki i foldery na serwer za pomocą klienta FTP (np. FileZilla). Ta metoda trwa znacznie dłużej.

## 4. Utwórz bazę danych
Joomla potrzebuje bazy danych do przechowywania treści.
1. Zaloguj się do panelu swojego hostingu (np. DirectAdmin, cPanel).
2. Znajdź sekcję "Bazy danych MySQL" i utwórz nową bazę.
3. Utwórz użytkownika bazy danych i wygeneruj dla niego silne hasło.
4. Przypisz użytkownika do bazy danych z pełnymi uprawnieniami.
5. Zapisz nazwę bazy, nazwę użytkownika i hasło – będą potrzebne za chwilę.

## 5. Uruchom instalator Joomla
1. Otwórz przeglądarkę internetową i wpisz adres swojej domeny (np. \`twojadomena.pl\`).
2. Powinien pojawić się ekran instalatora Joomla.
3. **Krok 1: Konfiguracja główna.** Wybierz język instalacji, wpisz nazwę witryny i utwórz konto Super Użytkownika (podaj prawdziwy adres e-mail, login i silne hasło).
4. **Krok 2: Konfiguracja bazy danych.** 
   * Typ bazy danych: zazwyczaj \`MySQLi\`
   * Nazwa hosta: zazwyczaj \`localhost\`
   * Nazwa użytkownika: (ta, którą utworzyłeś w kroku 4)
   * Hasło: (to, które utworzyłeś w kroku 4)
   * Nazwa bazy danych: (ta, którą utworzyłeś w kroku 4)
   * Przedrostek tabel: zostaw wygenerowany losowo (dla bezpieczeństwa).
5. **Krok 3: Przegląd.** Możesz tu wybrać instalację przykładowych danych (przydatne dla początkujących, aby zobaczyć, jak zbudowana jest strona) lub czystą instalację. Sprawdź, czy konfiguracja serwera świeci się na zielono.
6. Kliknij "Instaluj".

## 6. Zakończ instalację
Po zakończeniu procesu instalacji zobaczysz komunikat o sukcesie. 
**Bardzo ważne:** Ze względów bezpieczeństwa, kliknij przycisk "Usuń folder instalacyjny" (Remove installation folder). Jeśli tego nie zrobisz, Joomla nie pozwoli Ci przejść dalej.

## 7. Zaloguj się do panelu administracyjnego
Kliknij przycisk "Zaplecze" (Administrator) lub wpisz w przeglądarce \`twojadomena.pl/administrator\`. Zaloguj się danymi Super Użytkownika podanymi w kroku 1.

## Podsumowanie
Gratulacje! Właśnie zainstalowałeś system Joomla. Teraz możesz przejść do konfiguracji, instalacji języka polskiego i tworzenia swojej nowej strony internetowej.
    `,
    date: '2024-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'przenoszenie-witryny-wordpress-na-inny-serwer',
    title: 'Przenoszenie witryny WordPress na inny serwer',
    excerpt: 'Dwa sposoby na migrację WordPressa: ręczne kopiowanie plików i bazy danych oraz przenoszenie za pomocą wtyczki Akeeba Backup.',
    content: `
Przeniesienie strony opartej na WordPressie na nowy hosting (serwer) może wydawać się skomplikowane, ale postępując zgodnie z instrukcjami, można to zrobić bezboleśnie i bez utraty danych. Przedstawiamy dwa najpopularniejsze sposoby.

## Sposób 1: Ręczne kopiowanie plików i bazy danych
Ta metoda wymaga dostępu do FTP oraz panelu zarządzania bazą danych (np. phpMyAdmin). Jest najbardziej niezawodna.

### 1. Zabezpieczenie kopii zapasowej (Stary serwer):
* **Pliki:** Zaloguj się na stary serwer przez FTP (np. FileZilla) i skopiuj wszystkie pliki z folderu \`public_html\` na swój komputer.
* **Baza danych:** Zaloguj się do phpMyAdmin na starym serwerze, wybierz bazę danych swojej strony, przejdź do zakładki "Eksport" i pobierz plik .sql.

### 2. Przygotowanie serwera docelowego (Nowy serwer):
* **Baza danych:** W panelu nowego hostingu utwórz nową bazę danych MySQL, użytkownika i hasło. Zaloguj się do phpMyAdmin na nowym serwerze, wybierz utworzoną bazę, przejdź do zakładki "Import" i wgraj pobrany wcześniej plik .sql.
* **Pliki:** Przez FTP wgraj wszystkie pliki strony z komputera do folderu \`public_html\` na nowym serwerze.

### 3. Dostosowanie pliku wp-config.php:
Na nowym serwerze otwórz plik \`wp-config.php\` i zaktualizuj dane dostępowe do nowej bazy danych:
\`\`\`php
define( 'DB_NAME', 'nowa_nazwa_bazy' );
define( 'DB_USER', 'nowy_uzytkownik' );
define( 'DB_PASSWORD', 'nowe_haslo' );
define( 'DB_HOST', 'localhost' ); // Zazwyczaj localhost
\`\`\`

*(Jeśli zmieniasz również domenę, musisz zaktualizować adresy URL w bazie danych, np. za pomocą skryptu Search Replace DB lub wtyczki Better Search Replace).*

## Sposób 2: Przenoszenie za pomocą wtyczki (np. Duplicator lub Akeeba Backup)
To metoda znacznie prostsza, idealna dla osób mniej technicznych. Opiszemy ją na przykładzie popularnej wtyczki Duplicator.

### 1. Tworzenie paczki na starym serwerze:
1. Zainstaluj i włącz wtyczkę Duplicator na swojej stronie WordPress.
2. Przejdź do Duplicator -> Packages i kliknij "Create New".
3. Przejdź przez kreator. Wtyczka przeskanuje stronę i utworzy paczkę.
4. Pobierz dwa pliki: \`installer.php\` oraz plik archiwum (.zip lub .daf).

### 2. Przygotowanie nowego serwera:
1. Utwórz nową, pustą bazę danych MySQL na nowym hostingu (zapisz dane logowania).
2. Przez FTP wgraj pobrane pliki (\`installer.php\` i archiwum) do pustego folderu \`public_html\` na nowym serwerze.

### 3. Odtwarzanie witryny:
1. W przeglądarce wpisz adres: \`twojadomena.pl/installer.php\`.
2. Uruchomi się kreator instalacji.
3. Podaj dane do nowo utworzonej bazy danych.
4. Kreator automatycznie rozpakuje pliki, zaimportuje bazę danych i zaktualizuje plik wp-config.php.

## 4. Testowanie:
Niezależnie od wybranej metody, po zakończeniu migracji zaloguj się do panelu WordPressa na nowym serwerze, przejdź do Ustawienia -> Bezpośrednie odnośniki (Permalinks) i kliknij "Zapisz zmiany" (to odświeży strukturę linków i zapobiegnie błędom 404). Przeklikaj stronę, aby upewnić się, że wszystko działa poprawnie.

## Podsumowanie
Ręczna migracja daje pełną kontrolę i jest niezawodna przy bardzo dużych stronach. Dla większości standardowych stron wtyczki takie jak Duplicator są jednak znacznie szybszym i wygodniejszym rozwiązaniem.
    `,
    date: '2024-03-18',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'podstawowa-instalacja-divi',
    title: 'Podstawowa Instalacja Divi',
    excerpt: 'Jak zainstalować motyw Divi na WordPressie? Krok po kroku: pobieranie, instalacja, aktywacja klucza licencyjnego i import gotowego szablonu.',
    content: `
Divi od Elegant Themes to jeden z najpopularniejszych i najbardziej rozbudowanych motywów (oraz page builderów) dla WordPressa. Pozwala na tworzenie pięknych stron bez znajomości kodowania. Oto jak rozpocząć pracę z Divi.

## 1. Pobierz motyw Divi
Divi jest motywem premium, więc musisz posiadać aktywną subskrypcję w Elegant Themes.
1. Zaloguj się na swoje konto na stronie Elegant Themes.
2. W panelu członkowskim (Members Area) znajdź sekcję "Divi Theme" i kliknij przycisk "Download".
3. Zapisz plik \`divi.zip\` na swoim komputerze.

## 2. Zainstaluj motyw na WordPressie
1. Zaloguj się do panelu administracyjnego swojej strony WordPress.
2. Przejdź do **Wygląd -> Motywy**.
3. Kliknij przycisk **"Dodaj nowy"** na górze strony.
4. Kliknij **"Wyślij motyw na serwer"**.
5. Wybierz pobrany plik \`divi.zip\` ze swojego komputera i kliknij **"Zainstaluj teraz"**.
6. Po pomyślnej instalacji kliknij **"Włącz"**, aby aktywować motyw.

## 3. Aktywuj klucz licencyjny
Aby otrzymywać automatyczne aktualizacje i mieć dostęp do biblioteki gotowych szablonów, musisz uwierzytelnić swoją instalację.
1. W panelu WordPressa przejdź do nowej zakładki **Divi -> Opcje szablonu** (Theme Options).
2. Przejdź do zakładki **Updates** (Aktualizacje).
3. Podaj swoją nazwę użytkownika (Username) z konta Elegant Themes.
4. Podaj klucz API (API Key). Klucz ten wygenerujesz na swoim koncie Elegant Themes w sekcji "Account -> API Keys".
5. Kliknij "Save Changes" (Zapisz zmiany). Jeśli dane są poprawne, pojawi się zielony znaczek.

## 4. Importuj gotowy szablon (opcjonalnie)
Divi oferuje setki gotowych układów stron (Layout Packs), które można zaimportować jednym kliknięciem.
1. Utwórz nową stronę (Strony -> Dodaj nową).
2. Kliknij fioletowy przycisk **"Użyj Divi Buildera"**.
3. Wybierz opcję **"Wybierz gotowy układ"** (Choose a Premade Layout).
4. Przeglądaj bibliotekę, wybierz interesujący Cię pakiet i konkretną stronę (np. Home, About, Contact).
5. Kliknij "Use This Layout" (Użyj tego układu). Divi pobierze i zainstaluje projekt na Twojej stronie.

## 5. Dostosuj wygląd strony
Po zaimportowaniu układu (lub rozpoczęciu od zera), możesz edytować stronę wizualnie (Visual Builder).
* Klikaj na teksty, aby je edytować bezpośrednio na stronie.
* Najeżdżaj na sekcje (niebieskie), wiersze (zielone) i moduły (szare), aby otworzyć ich ustawienia (ikona koła zębatego).
* Zmieniaj kolory, czcionki, marginesy i tła w zakładce "Design" w ustawieniach każdego elementu.

## Podsumowanie
Instalacja Divi jest prosta i nie różni się od instalacji innych motywów premium. Prawdziwa moc Divi leży w jego Visual Builderze, który wymaga odrobiny praktyki, ale daje nieograniczone możliwości projektowe.
    `,
    date: '2024-04-02',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80',
  }
];
