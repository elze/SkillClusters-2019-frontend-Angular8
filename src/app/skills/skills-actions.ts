import { createAction, props  } from '@ngrx/store';

export const getSkillsApi = createAction('[Skills] Get Skills');

export const getSkillsSuccess = createAction(
    '[Skills] Get Skills Success',
    props<{ res: Array<any> }>()
  );
  
  export const getSkillsFailure = createAction(
    '[Skills] Get Skills Failure',
    props<{ error: any }>()
  );
