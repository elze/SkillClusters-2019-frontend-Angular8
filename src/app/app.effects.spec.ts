import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AppEffects } from './app.effects';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AppEffects,
        provideMockActions(() => actions$)
      ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController); 
    effects = TestBed.get<AppEffects>(AppEffects);
   
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
