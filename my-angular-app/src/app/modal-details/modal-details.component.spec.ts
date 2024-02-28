import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsModalComponent } from './modal-details.component';

describe('ModalDetailsComponent', () => {
  let component: DetailsModalComponent;
  let fixture: ComponentFixture<DetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
