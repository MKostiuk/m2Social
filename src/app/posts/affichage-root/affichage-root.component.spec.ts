import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageRootComponent } from './affichage-root.component';

describe('AffichageRootComponent', () => {
  let component: AffichageRootComponent;
  let fixture: ComponentFixture<AffichageRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
