import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Weather } from '../../../model/weather';
import { IState } from '../index';
import { IWeatherState } from '../reducers/weather';

export const selectFeature = (state: IState) => state.weather;

export class WeatherSelectors {
  public static search: MemoizedSelector<IState, string> = createSelector(selectFeature,
    (state: IWeatherState) => state.search
  );

  public static cities: MemoizedSelector<IState, Array<Weather>> = createSelector(selectFeature,
    (state: IWeatherState) => state.cities
  );
}