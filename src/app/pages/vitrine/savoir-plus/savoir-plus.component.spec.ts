import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirPlusComponent } from './savoir-plus.component';

describe('SavoirPlusComponent', () => {
  let component: SavoirPlusComponent;
  let fixture: ComponentFixture<SavoirPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavoirPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavoirPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
