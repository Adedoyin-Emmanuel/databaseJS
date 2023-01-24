# Database JS

## A simple, lightweight JS library for manipulating localstorage!

### Methods, How to use

```Javascript
import db from "./db";

//create a new database field
db.create(keyName, keyValue);
db.create("USER_NAME", "Emmanuel");

//update a database field
db.update(keyName, keyValue);
db.update("USER_NAME", "Emmanuel");

//get the created field from the database
db.get(keyName);
db.get("USER_NAME");

//delete a particular field from the database
db.delete(keyName);
db.delete("USER_NAME");

//destroy the entire database, use with caution
db.destroy();

```


