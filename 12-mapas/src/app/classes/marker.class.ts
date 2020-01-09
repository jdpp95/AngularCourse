export class Marker{
    lat: number;
    lng: number;
    title = 'No title';
    description = 'No description';

    constructor(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
    }
}