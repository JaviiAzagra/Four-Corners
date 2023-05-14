import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalenciagaComponent } from './balenciaga.component';

describe('BalenciagaComponent', () => {
  let component: BalenciagaComponent;
  let fixture: ComponentFixture<BalenciagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalenciagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalenciagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
