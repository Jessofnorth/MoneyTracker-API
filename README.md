# MoneyTracker API
This API is made with Node.js, Express and MongoDB Atlas with Mongoose Schemas. It has CRUD functionality and stores data for a Money tracker applikation.

## Links
The link to the API: [https://moneytracker-8032.onrender.com/](MoneyTracker API)
A demo of the client webbpage is available here: 

## The database and schemas
The datebas contains two collections: entries and categories
|Collection|Schema |
|--|--|
|Entries | **_id** (Object), **title** (String), **amount** (Number), **date** (Date), **notes** (String), **category_id** (String)  |
|Categories  | **_id** (Object), **name** (String)|

## Routes
### /entries

|Method  |Endpoint     |Description                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/entries    |Get all entries                                                    |
|GET    |/entries/:id|Get specific entry by adding the id                                                |
|POST   |/entries    |Create new entry                            |
|PATCH    |/entries/:id|Update existing entry by giving the id|
|DELETE |/entries/:id |Delete specific entry by giving the id                                                       |

Exampel of JSON object:
```
{
   title: 'Rent',
   date: '2023-01-14',
   amount: 6000,
   notes: 'notes here...'
   category_id: "ksndfposda9824975elms"
}
```

### /categories

|Method  |Endpoint     |Description                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/categories    |Get all categories                                                    |
|GET    |/categories/:id|Get specific category by adding the id                                                |
|POST   |/categories    |Create new category                            |
|PATCH    |/categories/:id|Update existing category by giving the id|
|DELETE |/categories/:id |Delete specific category by giving the id                                                       |

Exampel of JSON object:
```
{
   name: 'Food',
}
```