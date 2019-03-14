import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from 'selenium-webdriver/http';
import { ProjectState, ProjectStateModel } from './project.state';
import { ProjectService } from '../project.service';
import { Project } from './project.type';
import { GetProjects } from './project.action';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const PROJECT_1 = {
  id: 'proj1',
  owner_id: 'user1',
  name: 'Mock Project 1'
} as Project;

const PROJECT_2 = {
  id: 'proj2',
  owner_id: 'user1',
  name: 'Mock Project 2'
} as Project;


const PREV_STATE: ProjectStateModel = {
  currentProject: PROJECT_1,
  projects: [PROJECT_1, PROJECT_2]
};

fdescribe('Project store', () => {
  let store: Store;
  let service: ProjectService;
  class EmptyService { }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ProjectState]), HttpClientTestingModule],
      providers: [
        ProjectService,
        { provide: HttpClient, useValue: EmptyService },
        { provide: FormBuilder, useValue: EmptyService}
      ]
    }).compileComponents();

    store = TestBed.get(Store);
    service = TestBed.get(ProjectService);
  }));

  describe('#getAll', () => {
    it('should return an array of projects', async() => {
      const spy = spyOn(service, 'getProjects')
        .and.returnValue(of([PROJECT_1, PROJECT_2]));
      store.dispatch(new GetProjects());
      store.selectOnce((state: ProjectStateModel) => state.projects)
      .pipe(map(state => state.projects)) // TODO: why does this work ???
        .subscribe(projects => {
          expect(spy).toHaveBeenCalled();
          expect(projects.length).toBe(2);
        });
    });
  });

  describe('#setCurrentProject', () => {
    it('should set the current project');

    describe('given previous state', () => {
      it('should return project, but not make http call if ids match');
    });
  });

  describe('#addProject', () => {
    it('should add a project to projects[]');
  });

  describe('#updateProject', () => {
    it('should update changed properties on the currentProject');
  });

  describe('#removeProject', () => {
    it('should remove project from projects[]');
  });

}); // end Project Store
