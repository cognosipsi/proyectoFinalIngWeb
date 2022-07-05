import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsScreenComponent } from './solutions-screen.component';

describe('SolutionsScreenComponent', () => {
  let component: SolutionsScreenComponent;
  let fixture: ComponentFixture<SolutionsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
