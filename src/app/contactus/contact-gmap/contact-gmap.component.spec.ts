import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGmapComponent } from './contact-gmap.component';

describe('ContactGmapComponent', () => {
  let component: ContactGmapComponent;
  let fixture: ComponentFixture<ContactGmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactGmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
