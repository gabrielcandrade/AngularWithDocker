import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNewComponent } from './world-new.component';

describe('WorldNewComponent', () => {
  let component: WorldNewComponent;
  let fixture: ComponentFixture<WorldNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
