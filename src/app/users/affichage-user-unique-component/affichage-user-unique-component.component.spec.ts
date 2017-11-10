import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageUserUniqueComponentComponent } from './affichage-user-unique-component.component';

describe('AffichageUserUniqueComponentComponent', () => {
  let component: AffichageUserUniqueComponentComponent;
  let fixture: ComponentFixture<AffichageUserUniqueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageUserUniqueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageUserUniqueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
