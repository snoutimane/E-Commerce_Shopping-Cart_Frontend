import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatlogueComponent } from './product-catlogue.component';

describe('ProductCatlogueComponent', () => {
  let component: ProductCatlogueComponent;
  let fixture: ComponentFixture<ProductCatlogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCatlogueComponent]
    });
    fixture = TestBed.createComponent(ProductCatlogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
