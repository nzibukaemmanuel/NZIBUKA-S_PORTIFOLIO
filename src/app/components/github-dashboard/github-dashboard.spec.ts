import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GithubDashboard } from './github-dashboard';

describe('GithubDashboard', () => {
  let component: GithubDashboard;
  let fixture: ComponentFixture<GithubDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubDashboard],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(GithubDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
