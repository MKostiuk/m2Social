import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageRootUserComponent } from './affichage-root-user.component';

describe('AffichageRootUserComponent', () => {
  let component: AffichageRootUserComponent;
  let fixture: ComponentFixture<AffichageRootUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageRootUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageRootUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
