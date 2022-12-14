import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasListagemComponent } from './vendas-listagem.component';

describe('VendasListagemComponent', () => {
  let component: VendasListagemComponent;
  let fixture: ComponentFixture<VendasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
