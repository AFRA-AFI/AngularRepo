import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbarComponent]
    });
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'searchbar'`,() => {
    const fixture = TestBed.createComponent(SearchbarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('searchbar');
  });

  it('should initialize properties correctly', () => {
fixture.detectChanges();
expect(component.someData).toEqual('Test Data');
  });

  it('should render template elements', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.search')).toBeTruthy(); 
  });
});
