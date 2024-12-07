export interface User {
    posts: string[];
    _id: string;
    email: string;
    username: string;
    password: string;
    place_of_living: string;
    hobbies: string[];
    tools: string[]
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    id: string;
}