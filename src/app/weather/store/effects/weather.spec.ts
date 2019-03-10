import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import {
  SearchCityAction,
  SearchCityFailureAction,
  SearchCitySuccessAction
} from '../actions/weather';
import { WeatherService } from '../../weather.service';
import { WeatherEffects } from './weather';

describe('WeatherEffects', () => {
  let weatherEffects: WeatherEffects;
  let weatherService: jasmine.SpyObj<WeatherService>;
  let actions: any;

  beforeEach(async(() => TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        WeatherEffects,
        provideMockActions(() => actions),
        {
          provide: WeatherService,
          useValue: jasmine.createSpyObj('WeatherService', ['searchWeatherForCity'])
        }
      ]
    })
  ));

  beforeEach(() => {
    weatherService = TestBed.get(WeatherService);
    weatherEffects = TestBed.get(WeatherEffects);
  });

  describe('searchCity$', () => {

    it('should fire SearchCitySuccessAction on success', () => {
      weatherService.searchWeatherForCity.and.returnValue(of({}));
      const triggerAction: SearchCityAction = new SearchCityAction('test');
      const expectedAction: SearchCitySuccessAction = new SearchCitySuccessAction({});

      actions = hot('--a-', { a: triggerAction });
      const expected = cold('--b', { b: expectedAction });

      expect(weatherEffects.searchCity$).toBeObservable(expected);
    });

    it('should fire SearchCityFailureAction on failure', () => {
      weatherService.searchWeatherForCity.and.returnValue(ErrorObservable.create('test'));
      const triggerAction: SearchCityAction = new SearchCityAction('test');
      const expectedAction: SearchCityFailureAction = new SearchCityFailureAction('error');

      actions = hot('--a-', { a: triggerAction });
      const expected = cold('--b', { b: expectedAction });

      expect(weatherEffects.searchCity$).toBeObservable(expected);
    });
  });
});