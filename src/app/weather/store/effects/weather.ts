// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX

import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { WeatherService } from '../../weather.service';
import {
  SearchCityAction,
  SearchCityFailureAction,
  SearchCitySuccessAction,
  WeatherActionTypes
} from '../actions/weather';

@Injectable()
export class WeatherEffects {

  @Effect()
  searchCity$: Observable<Action> = this.actions$
    .ofType(WeatherActionTypes.SEARCH_CITY)
    .pipe(
      switchMap((action: SearchCityAction) => {
        const query: string = action.payload;

        return this.weatherService.searchWeatherForCity(query).pipe(
          map((response: any) => new SearchCitySuccessAction(response)),
          catchError(() => of(new SearchCityFailureAction('error')))
        );
      })
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}