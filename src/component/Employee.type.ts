export interface IEmployee{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
}
export const dummyEmployeeList:IEmployee[]=[{
    id: new Date().toJSON().toString(),
    firstName:"Ronal",
    lastName:"Boruah",
    email:"ron60bro@gmail.com"
}]
export enum PageEnum{
    list,
    add,
    edit
}
export interface ILogin{
    Name:string,
    Password:string
}