export interface Post {
_id: string;
photo: string;
location: {
    latitude: number;
    longitude: number;
    address: string;
}
creator: string;
created_time: Date;
size_of_dump: string;
people_needed: number;
tools_needed: string;
}