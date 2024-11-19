import { DisableIfEmptyDirective } from './vazio.directive';

describe('DisableIfEmptyDirective', () => {
  it('should create an instance', () => {
    const directive = new DisableIfEmptyDirective();
    expect(directive).toBeTruthy();
  });
});
