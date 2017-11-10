import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageCommentsComponent } from './affichage-comments.component';

describe('AffichageCommentsComponent', () => {
  let component: AffichageCommentsComponent;
  let fixture: ComponentFixture<AffichageCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
