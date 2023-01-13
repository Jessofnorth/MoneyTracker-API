# MoneyTracker API
This API is made with Node.js, Express and MongoDB Atlas with Mongoose Schemas. It has CRUD functionality and stores data for a Money tracker applikation.

## Links
The link to the API: [https://moneytracker-8032.onrender.com/](MoneyTracker API)
A demo of the client webbpage is available here: 

## The database and schemas
The datebas contains two collections: entries and categories
|Collection|Schema |
|--|--|
|Entries | **id** (Object), **title** (String), **amount** (Number), **date** (Date), **notes** (String), **category_id** (String)  |
|Categories  | **id** (Object), **name** (String)|

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