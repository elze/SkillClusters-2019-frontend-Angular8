import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import {SkillNode, SkillFlatNode} from './models/skill-node';
import {getSkillsApi} from './skills-actions';
import {AppState, selectSkills} from '../reducers/index';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  levels = new Map<SkillNode, number>();
  treeControl: FlatTreeControl<SkillFlatNode>;
  treeFlattener: MatTreeFlattener<SkillNode, SkillFlatNode>;

  private transformer = (node: SkillNode, level: number) => {
    return new SkillFlatNode(!!node.children && node.children.length > 0, node.item, level);
  }

  dataSource: MatTreeFlatDataSource<SkillNode, SkillFlatNode>;

  constructor(private skillsStore: Store<AppState>) {
    this.treeControl = new FlatTreeControl<SkillFlatNode>(node => node.level, node => node.expandable);
    console.log(`SkillsComponent.constructor(): instantiated this.treeControl`);
    this.treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);
    console.log(`SkillsComponent.constructor(): instantiated this.treeFlattener`);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl, this.treeFlattener
    );
    console.log(`SkillsComponent.constructor(): instantiated this.dataSource`);
    this.skillsStore.pipe(select(selectSkills)).subscribe(data => {
      this.dataSource.data = data;
    });

    
   }

  ngOnInit() {
    this.skillsStore.dispatch(getSkillsApi());        
  }

  // This method is not necessary yet at this point
  getChildren = (node: SkillNode) => {
    console.log(`SkillsComponent.getChildren(): node.item = ${node.item} node.children = ${node.children}`);
    return node.children;
  };

  hasChild = (index: number, node: SkillFlatNode) => {
    console.log(`hasChild: node.name = ${node.name} node.expandable = ${node.expandable}`)
    return node.expandable;
  }   


}
