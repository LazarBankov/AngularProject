export interface Post {
_id: string;
photo: string;
latitude: number;
longitude: number;
address: string;
creator: string;
created: Date;
size: string;
people: number;
tools: string;
attends: string[];
isCleaned: boolean;
userId: Post;
}