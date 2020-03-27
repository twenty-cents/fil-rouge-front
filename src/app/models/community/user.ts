import { City } from '../trips/city';
import { Poi } from '../community/poi';

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    login: string, // Alias login in entity User
    email: string,
    avatar: string,
    description: string,
    birthday: string,
    city: City,
    pois: Poi[],
    gender: string,
    dateCreation: string,
    age: number
}
