import { async } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { SkillsComponent } from './skills.component';
import {AppState } from '../reducers/index';
import { EMPTY, Observable } from 'rxjs';
import { SkillNode } from './models/skill-node';

describe('SkillsComponent', () => {
  let component: SkillsComponent;

  let skillsStore: Store<AppState>;

  beforeEach(async(() => {
   skillsStore = new Store<AppState>(null, null, null);
  }));

  beforeEach(() => {
   let skillNodeArray = new Array<SkillNode>();
   spyOn(skillsStore, 'pipe')
   .and.callFake(function() { 
     // This didn't work -- compilation error: the types didn't match
     //return new Observable(skillNodeArray)
     return EMPTY;
   });

   component = new SkillsComponent(skillsStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
