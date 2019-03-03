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

  // TODO: test that it returns a lopi type sweater
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

});
