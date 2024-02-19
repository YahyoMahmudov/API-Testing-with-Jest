export interface MovieListDetails {
    created_by: string
    description: string
    favorite_count: number
    id: number
    iso_639_1: string
    item_count: number
    items: Item[]
    name: string
    page: number
    poster_path: any
    total_pages: number
    total_results: number
  }
  
  export interface Item {
    adult: boolean
    backdrop_path?: string
    id: number
    title?: string
    original_language: string
    original_title?: string
    overview: string
    poster_path: string
    media_type: string
    runtime?: number
    revenue?: number
    genre_ids: number[]
    popularity: number
    release_date?: string
    video?: boolean
    vote_average: number
    vote_count: number
    name?: string
    original_name?: string
    first_air_date?: string
    origin_country?: string[]
  }

  export interface Status {
    success: boolean
    status_code: number
    status_message: string
  }