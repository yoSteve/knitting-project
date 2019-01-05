import { ProjectService } from './project.service';
import { FormBuilder } from '@angular/forms';
import { PROJECTS } from 'src/app/_data/project.data';
import { of } from 'rxjs';


const fb = new FormBuilder();
const http = null;
const dummyProject = PROJECTS[0];

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    service = new ProjectService(fb, http);
  });

  afterEach(() => {
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getProject', () => {
    it('should return an Observable', async () => {
      spyOn(service, 'getProject').and.returnValue(of(dummyProject));
      service.getProject('id').subscribe(result => {
        expect(result).toBeTruthy();
      });
    });

    it('project should have name "Standard Sweater"', async () => {
      spyOn(service, 'getProject').and.returnValue(of(dummyProject));
      service.getProject('id').subscribe(result => {
        const name = result.name.toLowerCase();
        expect(name).toBe('standard sweater');
      });
    });
  });

  describe('#getDefaults', () => {
    it('should return an Observable', async () => {
      service.getDefaults('lopi').subscribe(result => {
        expect(result).toBeTruthy();
      });
    });

    it('should be of type Defaults', async () => {
      service.getDefaults('lopi').subscribe(result => {
        const keys = Object.keys(result);
        expect(keys).toContain('guage');
        expect(keys).toContain('measurements');
      });
    });
  });

  describe('#getNeedles', () => {
    it('should return an Observable of Arrays', async() => {
      service.getNeedles().subscribe(results => {
        expect(results).toBeArray();
      });
    });
  });

  describe('#buildProjectForm', () => {
    it('should return a FormGroup', () => {
      const form = service.buildProjectForm();
      expect(form).toBeTruthy();
    });
  });
});
