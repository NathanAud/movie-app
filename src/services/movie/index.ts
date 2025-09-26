import { 
  getPopular, 
  getTopRated, 
  getCredits, 
  getSimilar, 
  getDetails, 
  getReleaseDate,
  getSearch
} from "./api";

export { 
  getPopular, 
  getTopRated, 
  getCredits, 
  getSimilar, 
  getDetails, 
  getReleaseDate,
  getSearch
};

export type { 
  Movie, 
  ResponseData, 
  Credits, 
  Cast, 
  Crew, 
  Genre, 
  ProductionCompany, 
  ProductionCountry, 
  SpokenLanguage, 
  ReleaseDateResponse, 
  ReleaseDateResult, 
  ReleaseDate 
} from "./type";