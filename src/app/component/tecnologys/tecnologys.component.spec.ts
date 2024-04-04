import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologysComponent } from './tecnologys.component';

describe('TecnologysComponent', () => {
  let component: TecnologysComponent;
  let fixture: ComponentFixture<TecnologysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecnologysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnologysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
