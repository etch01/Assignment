export interface Movies{
    id:number;
    title:string;
    release_date:string;
    poster_path:string;
    vote_average:number;
    vote_count:number;
    genre_ids:Array<number>
}