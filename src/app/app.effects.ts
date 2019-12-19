import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';

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
      // For production it has to be sc/structskills, for local machine environment, just structskills
      this.http.get('structskills').pipe(
        //this.http.get('sc/structskills').pipe(
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

