
export interface IVideo {
    Actors?: string
    Awards?: string
    BoxOffice?: string
    Country?: string
    DVD?: string
    Director?: string
    Genre?: string
    Language?: string
    Metascore?: number
    Plot?: string
    Poster?: string
    Production?: string
    Rated?: string
    Ratings?: [
        { Source: string, Value: string },
        { Source: string, Value: string },
        { Source: string, Value: string }
    ]

    Released?: string
    Response?: boolean
    Runtime?: string
    Title?: string
    Type?: string
    Website?: string
    Writer?: string
    Year?: number
    imdbID?: string
    imdbRating?: string
    imdbVotes?: string
}

