export interface ItemsComicsProps{
name:string;
resourceURI:string;
}

export interface ComicsProps {
available:number;
collectionURI:string;
items:ItemsComicsProps[];
returned:number;
}

export interface ItemsEventsProps{
  name:string;
  resourceURI:string;
  }

export interface EventsProps {
  available:number;
  collectionURI:string;
  items:ItemsEventsProps[];
  returned:number;
}

export interface ItemsSeriesProps {
  name:string;
  resourceURI:string;
}

export interface SeriesProps {
  available:number;
  collectionURI:string;
  items:ItemsSeriesProps[];
  returned:number;
}

export interface ItemsStoriesProps {
  name:string;
  resourceURI:string;
}

export interface StoriesProps {
  available:number;
  collectionURI:string;
  items:ItemsStoriesProps[];
  returned:number;
}
export interface ThumbnailProps {
  extension:string;
  path:string;
}

export interface  URLsProps {
  type:string;
  url:string;
}







export interface CharactersProps {
  comics:ComicsProps;
  description:string;
  events:EventsProps;
  id:number;
  modified:string;
  name:string;
  resourceURI:string;
  series:SeriesProps;
  stories:StoriesProps;
  thumbnail:ThumbnailProps;
  urls:URLsProps;

}