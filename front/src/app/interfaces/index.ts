export interface Todo {
    id: number,
    message: string,
    createddate: Date|null,
    userid: number

    
}

export interface User {
    firstname: string
    ,lastname: string
    ,createddate: Date|null
    ,username: string 
  }


export interface AppState{
    user: User,
    todos: Todo[]
}