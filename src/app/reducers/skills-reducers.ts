import { createReducer, on } from '@ngrx/store';

import { getSkillsSuccess } from '../skills/skills-actions';

import {SkillNode} from '../skills/models/skill-node';

export const skillsFeatureKey = 'skills';

export interface SkillsState {
  skillsDataSourceData: Array<SkillNode>;
}

export const initialState: SkillsState = {
  skillsDataSourceData: new Array<SkillNode>()
}


export const _reducer = createReducer(
    initialState,
    on(getSkillsSuccess, (state, { res }) => ({
      skillsDataSourceData: dataSourceFromAction(res)
    }))
);


export function skReducer(state, action) {
      return _reducer(state, action)
}


function dataSourceFromAction(skills: Array<any>): Array<SkillNode> {
    var data = getSkillObjects(skills);
    return data;
}

function getSkillObjects(rawSkills: Array<any>): SkillNode[] {              
    let skills = new Array<SkillNode>();
    rawSkills.map(s => {          
        let sk = new SkillNode(s["item"], s["fontSize"], s["percentOfTime"], s["successors"]);
        skills.push(sk);
    });
    console.log("getSkillObjects: skills = ");
    console.log(JSON.stringify(skills));
    return skills;
}   