import { WeatherActions, WeatherActionTypes } from '../actions/weather';

export interface IWeatherState {
  search: string;
  cities: Array<any>;
}

export const initialState: IWeatherState = {
  search: null,
  cities: []
};

export function reducer(state = initialState, action: WeatherActions): IWeatherState {

  switch (action.type) {

    case WeatherActionTypes.SEARCH_CITY_SUCCESS: {
      return {
        search: null,
        cities: [
          ...state.cities,
          action.payload
        ]
      };
    }

    default: {
      return state;
    }
  }
}