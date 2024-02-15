export interface AccountDetails {
    avatar: {
        gravatar: {
            hash: string;
        };
        tmdb: {
            avatar_path: string;
        };
    };
    id: number;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    include_adult: boolean;
    username: string;
}

export interface MovieAndTV {
    page: number;
    total_pages: number;
    total_results: number;
    results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country?: string[];
        original_language: string;
        original_name?: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date?: string;
        name: string;
        vote_average: number;
        vote_count: number;
    }[];
}

export interface List {
    page: number;
    total_pages: number;
    total_results: number;
    results: {
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        list_type: string;
        name: string;
        poster_path?: string;
    }[];
}

export interface Episode {
    page: number;
    total_pages: number;
    total_results: number;
    results: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
        vote_average: number;
        vote_count: number;
        rating: number;
    }[];
}

export interface Status {
    success: boolean
    status_code: number
    status_message: string
}