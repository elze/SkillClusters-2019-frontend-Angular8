import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { environment } from '../environments/environment';

import { catchError, map, switchMap,  } from 'rxjs/operators';
import { of } from "rxjs";

import { getSkillsApi, getSkillsSuccess, getSkillsFailure } from './skills/skills-actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
    private http: HttpClient) {}

  getSkills$ = createEffect(() => this.actions$.pipe(
  ofType(getSkillsApi),
  switchMap(() =>
      this.http.get(environment.apiUrl + 'structskills').pipe(
          // If successful, dispatch success action with result
          map((res: any[]) => 
            getSkillsSuccess({res})
            ),
          // If request fails, dispatch failed action
          catchError(error => 
            of(getSkillsFailure({ error }))
            )
          ) // end of inner pipe
  ) // end of switchMap
  ) // end of outer pipe
  );
}

