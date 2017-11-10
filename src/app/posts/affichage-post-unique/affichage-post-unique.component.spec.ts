import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePostUniqueComponent } from './affichage-post-unique.component';

describe('AffichagePostUniqueComponent', () => {
  let component: AffichagePostUniqueComponent;
  let fixture: ComponentFixture<AffichagePostUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagePostUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePostUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
