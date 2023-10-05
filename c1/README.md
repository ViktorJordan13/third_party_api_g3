### API (Application Programming Inteface)
    - In the context of API the word Application refers to any software with a distinct function
    - the word Proggraming refers to that its coded (programmed)
    - Interface can be thought of as as a contract of service, behavior between two applications

    APIs are mechanisms that enable two software components to communicate with each other using
    a set of definitions and protols

### Types of API

    1. First party APIs (Internal)
        APIs that we have on our system, on our end, locally in most cases
    2. Third party APIs (External)

### API usage restrictions

## Rate limit

    - Rate limiting vo API od treti strani vi e mehanizam koj go kontrolira brojot na baranja
    sto klientot (vo ovoj slucaj toa e nasata aplikacija) moze da gi upati do third party API
    vo odreden vremenski period.
    - So rate limiting se spravuvame na toj nacin sto voveduvame kesiranje (caching)

### Caching

    - Kesiranjeto e tehnika koja se koristi vo presmetkite za skladiranje i upravuvanje so kopii od podatoci ili cesto dostapni resursi na nacin sto ovozmozuva pobrzo prebaruvanje i namaleno
    optovaruvanje na originalniot izvor na podatocite.
    - Se koristi najcesto za podatoci koi ne se cesto promenlivi - mailgun, vremenska prognoza
    - Tipovi kesiranja
        1. Vo baza - zacuvuvanje na rezultati od cesti i skapi prebaruvanja (query) kon bazata na podatoci vo memorija ili drug brz cache so cel da se podobrat performansite(najcesto se misli na brzina) na aplikaciite.
        Ova kesiranje ima za cel da go namali brojot na baranja kon bazata na podatoci i da ovozmozi pobrz pristap do rezultatite.

        2. Vo memorija (RAM) - tehnika koja vklucuva zacuvuvanje na podatoci ili rezultati vo
        operativnata memorija (RAM) na vasiot kumpjuter(clientot) ili serverot.
        Primer: clientot ja kesira stranata sto ja otvarate poveke pati, a serverot go kesira
        vasiot request.

### Memorizacija

    function calculator (a, b)

    prv pat ja povikuvame calculator(1, 2) - serverot odi niz funkcijata, ja izvrsuva, i ni go vraka rezultatot, megutoa ja kesira (caching i pravi)

    vtor pat ja povikuvame calculator(1, 2) - funkcijata ni e veke kesirana i ke se ignorira

    - Tehnika za optimizacija koja se koristi vo kompjuterskoto programirajne i algoritmite za podobruvanje na efikasnota na funkciite ili metodite so kesiranje na rezultatite od skapite (moze da bidat skapi i finansiski, no najcesto vremenski) na funkcii i nivna povtorna upotreba koga istite vlezovi ke se pojavat povtorno.
    - Memorizacija e koga go pravite povikot poveke od ednas i ja koristite kesiranata vrednost.

### API keys

    - JWT tokenite ni bea vo predhodniot modol edinstveni identikatori za avtentikacija i avtorizacija na korisnik vo program za povikuvanje API.
    - Toa nas nie bea API keys vo tie programi
    - JWT e samo eden nacin i primer za API key, postojat mnogu drugi

