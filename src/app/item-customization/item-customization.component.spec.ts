import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCustomizationComponent } from './item-customization.component';

describe('ItemCustomizationComponent', () => {
  let component: ItemCustomizationComponent;
  let fixture: ComponentFixture<ItemCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
