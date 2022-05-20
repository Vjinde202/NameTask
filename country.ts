export interface Country {
    country_id:string;
    probability:number;
}
export interface ResponseCountries{
    name:string;
    allcountry:Country[];
}