/**
 * Manage object in session|local storage
 */
class MyStorage{
    constructor(key){
        this.key = key;
    }

    set(object){
        localStorage.setItem(this.key, JSON.stringify(object));
    }

    get(){
        return JSON.parse(localStorage.getItem(this.key));
    }

    clear(){
        localStorage.removeItem(this.key);
    }
}