import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityScreenComponent } from './community-screen.component';

describe('CommunityScreenComponent', () => {
  let component: CommunityScreenComponent;
  let fixture: ComponentFixture<CommunityScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
