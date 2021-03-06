import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormBuilder } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [MatFormFieldModule, MatCardModule, HttpModule, FormBuilder],
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title NG Youtube`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('NG Youtube');
    })
  );

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('NG Youtube');
    })
  );
});
