import { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react'

export type SearchResultDataType = {
    country: String,
    alpha_two_code: String,
    name: String,
    stateProvince: String,
    domains: String[],
    web_pages: String[]
}

export type FavouriteListType = {
    id: String,
    country: String,
    name: String,
    date: String,
    remarks: String
}

export interface SearchResultDataContextInterface {
    searchResultData:SearchResultDataType[]
    setSearchResultData: Dispatch<SetStateAction<SearchResultDataType[]>>
    favouriteList: FavouriteListType[]
    setFavouriteList: Dispatch<SetStateAction<FavouriteListType[]>>
}

const defaultSearchResultDataState = {
    searchResultData:[
        {
            country: '',
            alpha_two_code: '',
            name: '',
            stateProvince: '',
            domains: [''],
            web_pages: ['']
        }
    ],
    setSearchResultData: (SearchResultData: SearchResultDataType[]) => {},
    favouriteList: [],
    setFavouriteList: (favouriteList: FavouriteListType[]) => {},
} as SearchResultDataContextInterface

export const SearchResultDataContext = createContext(defaultSearchResultDataState)

type SearchResultDataProviderProps = {
    children: ReactNode
}

const SearchResultDataProvider = ({children}: SearchResultDataProviderProps) => {

    const [searchResultData, setSearchResultData] = useState<SearchResultDataType[]>([])
    const [favouriteList, setFavouriteList] = useState<FavouriteListType[]>([])

    return (
        <SearchResultDataContext.Provider value={{searchResultData, setSearchResultData, favouriteList, setFavouriteList}}>
            {children}
        </SearchResultDataContext.Provider>
    )
}

export default SearchResultDataProvider