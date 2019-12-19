import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  combineReducers,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSkills from './skills-reducers';
import  { SkillsState } from './skills-reducers';


export interface AppState {
  skills: SkillsState;
}
 

export const reducers: ActionReducerMap<AppState> = {  
  skills: fromSkills.skReducer
};

export const selectSkills = (state: AppState) => state.skills.skillsDataSourceData;

//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
