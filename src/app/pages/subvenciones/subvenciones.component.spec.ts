import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubvencionesComponent } from './subvenciones.component';

describe('SubvencionesComponent', () => {
  let component: SubvencionesComponent;
  let fixture: ComponentFixture<SubvencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubvencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubvencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
