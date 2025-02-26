import { CardType } from "./city";

export type FetchCityDetailsProps = {
    path: string | string[];
    setItem: (item: CardType) => void;
};

export type FetchCityProps = {
    city: string | string[];
    setItem: (item: CardType) => void;
    setLoading: (b: boolean) => void;
};

export type FetchContinentsAndCountriesProps = {
    setValidContinents: (item: any) => void;
    setValidCountries: (item: any) => void;
};

export type FetchCitiesProps = {
    setAvailableCities: (list: string[]) => void;
    setIsLoading: (b: boolean) => void;
};

export type FetchPopularCitiesProps = {
    setDataTemp: (item: CardType[]) => void;
    setIsLoading: (b: boolean) => void;
};

export type FetchSuggestionsProps = {
    setData: (data: CardType[]) => void;
    setLoading: (loading: boolean) => void;
};

export type FetchCityByNameProps = {
    cityName: string;
    setSearchedCities: (cities: CardType[]) => void;
    setIsLoading: (b: boolean) => void;
};

export type FetchCityDetailsByNameProps = {
    city: string;
    setItem: (data: CardType[]) => void;
};
