import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    service = new ProjectService();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
