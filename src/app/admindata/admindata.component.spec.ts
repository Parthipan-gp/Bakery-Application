import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindataComponent } from './admindata.component';

describe('AdmindataComponent', () => {
  let component: AdmindataComponent;
  let fixture: ComponentFixture<AdmindataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindataComponent]
    });
    fixture = TestBed.createComponent(AdmindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
