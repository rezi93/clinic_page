export interface Iface {
  
    id: number,
      first_name: string,
      last_name: string,
      category: string,
      rating: number,
      descri:string,
      thumbnail: string,
      images: string[]
}

export interface IMenuItem{
  label:string,
  icon:string
}

export interface Iuser{
  Id:number

  FirsName:string,
  LastName:string,
  Email:string,
  Password:string,
  IdNumber:string,
  Category:string
}

export interface Ilogin{
  Email:string,
  Password:string,
}
