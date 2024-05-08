export interface UserPayloadTypes{
    name:string;
    email:string;
    password:string;
}; 

export interface UserTypes{
    id:string; 
    name:string;
    email:string;
    password:string;
}

export interface UserLogin{
    email:string;
    password:string;
}