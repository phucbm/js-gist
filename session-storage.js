class MySessionStorage{
    constructor(key, defaultValue = {}){
        this.key = key;
        if(!this.get()){
            sessionStorage.setItem(key, JSON.stringify(defaultValue));
        }
    }

    set(value){
        sessionStorage.setItem(this.key, JSON.stringify(value));
    }

    get(){
        return JSON.parse(sessionStorage.getItem(this.key));
    }

    clear(){
        sessionStorage.removeItem(this.key);
    }
}