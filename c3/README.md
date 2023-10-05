### Avtentikacija

    - Utvrduvanje na avtenticnost, identitet
    - Proces vo koj verificirame dali nekoj e toj sto tvrdi deka e.
    Primer:
        -Verifikacija na licnost so pokazuvanje licna karta,
        -Najava na fb so email i lozinka

### Avtorizacija

    - Dozvola, privilegija za izvrsuvanje na odredeni funkcii
    - Proces na verificiranje na korisnikot dali ima privilegii da pristapi do odredeni aplikacii, fajlovi, i slicno.
    Primer:
        - Korisnik koj moze da gi vidi svoite beleski na telefonot, a pred toa go vklucil telefonot so pin, pattern, finger id, face id (se avtenticira)

### Multi-tenancy

    tenant - stanar
    multi-tenancy - poveke stanari, kade sto sekoj si gi gleda samo svoite podatoci, drugite ne mozat da mu gi vidat, i toj ne moze na drugite

    - Multi-tenancy(Multi-korisnost) e arhitektura na software koja ovozmozuva poveke nezavisni korisnici ili organizacii da spodeluvaat ista aplikacija ili sistem,
    dodeka gi zadrzuva izolirani podatocite i konfiguraciite. Taa obezbeduva efikasno spodeluvanje na resursi i prilagoduvanje za sekoj korisnik ili organizacija

    Primer:
    - Admin korisnikot ima pristap do poveke privilegii, dodeka obicniot korisnik ima pomalku
    - Admin moze da ve blokira od koristenje na softverot, moze da vi stavi restrikcii za odredeni servisi vo zavisnost od kolku nekoj korisnik platil, kako se
    odnesuval i slicno
    - Korisnik - moze da napravi nov zapis, da go uredi, da go izbrise toj zapis sto go kreiral vo svoe ime, ne vo ime na drug korisnik

### JWT - JSON Web Token

    - Se koristi za bezbedna komunikacija pomegu klient i serven, kako JSON objekt.
    - JWT e digitalno potpisan
    - Moze da koristi algoritmi kako HMAC ili HS256 za privatni klucevi
    - Ima privatni/javni klucevi kako RSA, ECDSA.
    - Struktura
        Primer: xxxxx.yyyyy.zzzzz
        1. Header
            - type of token
            - type of algorithm used
            Primer: { "typ": "JWT", alg "HS256"}
        2. Payload
            - Sodrzi claims. CLaim vi e izjava za nekoj entitet (primer za korisnikot), isto taka sodrzi i dopolnitelni podatoci.
            Tri tipovi na claims:
                1. registered
                2. private
                3. public
                Primer: {
                    "name" "James Bond",
                    "admin": true,
                    "subject": "1234567890"
                }
        3. Signature - go zema enkodiraniot header, payload i secret i pravi potpis na sledniot nacin
            - HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)
            - Potpisot ni sluzi za da se osigurame deka originalnata poraka ne bila promeneta na pat kon krajniot korisnik

### Packets- moduli koi sto ke gi koristime

    - node-input-validator
    - express
    - mongoose
    - bcryptjs
    - jsonwebtoken
    - express-jwt