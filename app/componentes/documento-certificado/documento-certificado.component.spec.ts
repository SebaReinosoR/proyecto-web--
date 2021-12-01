import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoCertificadoComponent } from './documento-certificado.component';

describe('DocumentoCertificadoComponent', () => {
  let component: DocumentoCertificadoComponent;
  let fixture: ComponentFixture<DocumentoCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentoCertificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
