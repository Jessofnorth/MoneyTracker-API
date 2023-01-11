# MoneyTracker API
This API is made with Node.js, Express and MongoDB Atlas. It has CRUD functionality and stores data for a Money tracker applikation.

## Länk
En liveversion av APIet finns tillgänglig på följande URL: [https://testserver.test/api.php](https://miun.se)
A demo of the client webbpage is available here: 

## Installation, databas
Kopiera över källkodsfilerna till webbserver, och kör installations-skriptet install.php.
Installations-skriptet skapar databas-tabeller enligt nedanstående:
|Tabell-namn|Fält  |
|--|--|
|Tabell1  | **id** (int(11), **fält1** (varchar(256), **fält2** (varchar(256)  |
|Tabell2  | **id** (int(11), **fält1** (varchar(256), **fält2** (varchar(256)  |

## Klasser och metoder
### Courses
##### Properties
* $db - MySQLi-anslutning
* $prop2 - Beskrivning
* $prop3 - Beskrivning
* $prop4 - Beskrivning

##### Metoder
* Constructor - Beskrivning
* private metod1 (arg1 : string, arg2: string) : array - Beskrivning
* public metod2 (arg1 : string, arg2: string) : bool - Beskrivning
* private metod3 (arg1 : string, arg2: string) : bool - Beskrivning


## Användning
Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/api.php     |Hämtar alla tillgängliga kurser.                                                      |
|GET    |/api.php?=ID]|Hämtar en specifik kurs med angivet ID.                                               |
|POST   |/api.php     |Lagrar en ny kurs. Kräver att ett kurs-objekt skickas med.                            |
|PUT    |/api.php?=ID |Uppdaterar en existerande kurs med angivet ID. Kräver att ett kurs-objekt skickas med.|
|DELETE |/api.php?=ID |Raderar en kurs med angivet ID.                                                       |

Ett kurs-objekt returneras/skickas som JSON med följande struktur:
```
{
   code: 'DT173G',
   name: 'Webbutveckling III',
   progression: 'B',
   syllabus: 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=21873'
}
```