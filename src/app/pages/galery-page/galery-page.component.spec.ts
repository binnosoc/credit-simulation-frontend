import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryPageComponent } from './galery-page.component';

describe('GaleryPageComponent', () => {
  let component: GaleryPageComponent;
  let fixture: ComponentFixture<GaleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
