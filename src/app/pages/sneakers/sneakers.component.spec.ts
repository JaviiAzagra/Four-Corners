import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersComponent } from './sneakers.component';

describe('SneakersComponent', () => {
  let component: SneakersComponent;
  let fixture: ComponentFixture<SneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
