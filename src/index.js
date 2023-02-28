/**
 * Base Class for DatabaseJS
 * A library for LocalStorage Manipulation
 * 
 * @see https://github.com/Adedoyin-Emmanuel/databaseJs
 * */


class DatabaseJs
{
	constructor(){
		this.create = (key, value) =>{
			if(typeof key != undefined || typeof value != undefined)
			{
				localStorage.set(key, value);

			}else{
				throw new Error("Key or value cannot be undefined");
			}
		}


		this.update = (key, value) =>{
			this.create(key,value);
		}


		this.get = (key) =>{
			if(key != undefined)
			{
				return localStorage.get(key);
			}
		}

		this.destroy =  () =>{
			localStorage.clear();
		}
	}
}