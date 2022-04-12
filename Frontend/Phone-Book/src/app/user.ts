

enum Type{
    Home,Work,Cellphone
}

class PhoneBooks {
    public type: Type;
    public number: String;

    constructor(
        type: Type,
        number:String
    ){
        this.type=type
        this.number=number
    }


}

export  interface  User{

     id: String;
     firstname: String;
     lastname: String;
     phonebook: Array<PhoneBooks> 



}