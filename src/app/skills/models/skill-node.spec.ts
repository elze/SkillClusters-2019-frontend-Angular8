import { SkillNode } from './skill-node';

describe('SkillNode', () => {
  it('should create an instance', () => {
    expect(new SkillNode("React", "16", 0.65)).toBeTruthy();
  });
});
