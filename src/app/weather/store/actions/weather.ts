import { Action } from '@ngrx/store';

import { Weather } from '../../../model/weather';

export enum WeatherActionTypes {
  SEARCH_CITY = 'Search city',
  SEARCH_CITY_SUCCESS = 'Search city success',
  SEARCH_CITY_FAILURE = 'Search city failure',
};

export class SearchCityAction implements Action {
  readonly type = WeatherActionTypes.SEARCH_CITY;

  constructor(public payload: string) { }
}

export class SearchCitySuccessAction implements Action {
  readonly type = WeatherActionTypes.SEARCH_CITY_SUCCESS;

  constructor(public payload: Weather) { }
}

export class SearchCityFailureAction implements Action {
  readonly type = WeatherActionTypes.SEARCH_CITY_FAILURE;

  constructor(public payload: string) { }
}

export type WeatherActions =
  SearchCityAction |
  SearchCityFailureAction |
  SearchCitySuccessAction;