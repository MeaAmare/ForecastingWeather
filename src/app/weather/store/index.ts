import { ActionReducerMap } from '@ngrx/store';
import {
  reducer as WeatherReducer, IWeatherState } from './reducers/weather';
import { WeatherEffects } from './effects/weather';

export interface IState {
  weather: IWeatherState;
}

export const reducers: ActionReducerMap<IState> = {
  weather: WeatherReducer
}

export { WeatherEffects  as effects } from './effects/weather';