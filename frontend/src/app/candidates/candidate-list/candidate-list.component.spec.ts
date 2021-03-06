import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListComponent } from './candidate-list.component';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../service/authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CandidateDTO } from '../../api/models/candidate-dto';
import { CandidateControllerService } from '../../api/services/candidate-controller.service';

const routerStub = {
  navigate: jasmine.createSpy('navigate'),
  navigateByUrl(url: string) { return url; },
  events: Observable.of(null)
};
const authServiceStub = {
  getTokenFromLocalStorage(): string {
    return 'token';
  },
  isPermissionPresent(permissionName: string): boolean {
    return true;
  }
};
const activatedRouterStub = {
  snapshot: { data: {user: 'ss'}}
};
const candidatesListStub = [
  {disciplineList: { id: 1, name: 'Java' , parentId: null, subscription: null, hasSubItems: null},
    id: 1, name: 'Ilya', phoneNumber: 123456, surname: 'nikolaev'},
  {disciplineList: { id: 1, name: 'Java' , parentId: null, subscription: null, hasSubItems: null},
    id: 1, name: 'Ilya', phoneNumber: 123456, surname: 'nikolaev'},
];
const candidateControllerServiceStub = {
  findAll() {
    return Observable.of(candidatesListStub);
  }
};
xdescribe('CandidateListComponent', () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListComponent ],
      providers: [
        {provide: Router, useValue: routerStub},
        {provide: ActivatedRoute, useValue: activatedRouterStub },
        {provide: AuthenticationService, useValue: authServiceStub },
        {provide: CandidateControllerService, useValue: candidateControllerServiceStub },
      ],
      imports: [ReactiveFormsModule, FormsModule, SharedModule ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get candidates list', () => {
    expect(component.candidateList.length).toBe(candidatesListStub.length);
  });

});

