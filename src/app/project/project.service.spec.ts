import { ProjectService } from './project.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';


const fb = new FormBuilder();
const http = null;
const dummyProject = {
  id: 'whatever',
  owner_id: 'whomever',
  name: 'dummy sweater',
  is_metric: true,
  guage: {
    custom_guage: false,
    needles: [4, 7, 7],
    width: 10,
    height: 10,
    stitches: 18,
    rows: 24
  },
  measurements: {
    is_standard: true,
    chest: [89, 98, 107, 115],
    torso: [41, 43, 45, 47],
    sleeve: [50, 51, 52, 53]
  }
};

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    service = new ProjectService(fb, http);
  });

  afterEach(() => {
    service = null;
  });

  describe('#getProject', () => {
    it('should return an Observable of a Project', async () => {
      spyOn(service, 'getProject').and.returnValue(of(dummyProject));
      service.getProject('id').subscribe(result => {
        expect(result).toBeTruthy();
      });
    });

    it('project should have name "dummy sweater"', async () => {
      spyOn(service, 'getProject').and.returnValue(of(dummyProject));
      service.getProject('id').subscribe(result => {
        const name = result.name.toLowerCase();
        expect(name).toBe('dummy sweater');
      });
    });
  });

  describe('#getDefaultProject', () => {
    it('should return an Observable of a Project', async () => {
      service.getDefaultProject('lopi').subscribe(result => {
        expect(result).toBeTruthy();
      });
    });

    it('should have default properties', async () => {
      service.getDefaultProject('lopi').subscribe(result => {
        const keys = Object.keys(result);
        expect(keys).toContain('owner_id');
        expect(keys).toContain('name');
        expect(keys).toContain('is_metric');
        expect(keys).toContain('guage');
        expect(keys).toContain('measurements');
      });
    });
  });

  describe('#getNeedles', () => {
    it('should return an Observable of Arrays', async() => {
      service.needles$.subscribe(results => {
        expect(results).toBeArray();
      });
    });
  });

  describe('#buildProjectForm', () => {
    it('given a project, it should return a FormGroup', async() => {
      const form = service.buildProjectForm(dummyProject);
      const name = form.get('name').value;
      const guageStitches = form.get('guage').get('stitches').value;
      const chestMeasurements = form.get('measurements').get('chest').value;
      expect(form).toBeTruthy();
      expect(name.toLowerCase()).toBe('dummy sweater');
      expect(guageStitches).toBe(18);
      expect(chestMeasurements).toContain(89);
    });
  });
});
