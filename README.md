# Database JS

## A simple, lightweight JS library for manipulating localstorage!

### How To Use Database JS

#### 1. Include the database.js file in your project.
`<script src="database.js"></script>`
#### 2. Init the database object
`const db = new Database();`

### Methods and Properties

```Javascript
import db from "./db";


```

#### Create Method (Creates a new database field)

`db.create(keyName, keyValue);`
`db.create("USER_NAME", "Emmanuel");`

#### Update Method (Updates a database field or create one if it doesn't exist)

`db.update(keyName, keyValue);`
`db.update("USER_NAME", "Emmanuel");`


#### Get Method (Get a database field value)

`db.get(keyName);`
`db.get("USER_NAME");`


#### Delete Method (Deletes a database field)

`db.delete(keyName);`
`db.delete("USER_NAME");`



#### Destroy Method (Removes all database fields and values)

`db.destroy();`


