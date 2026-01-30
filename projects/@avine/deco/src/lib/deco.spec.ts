import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deco } from './deco';

describe('Deco', () => {
  let component: Deco;
  let fixture: ComponentFixture<Deco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
