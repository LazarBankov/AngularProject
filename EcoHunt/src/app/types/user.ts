export interface User {
    posts: string[];
    _id: string;
    email: string;
    username: string;
    password: string;
    placeOfLiving: string;
    hobbies: string;
    tools: string;
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    placeOfLiving: string;
    hobbies: string;
    tools: string
    _id: string;
}

export interface ProfileDetails {
    email: string,
    username: string,
    placeOfLiving: string,
    hobbies: string,
    tools: string
}