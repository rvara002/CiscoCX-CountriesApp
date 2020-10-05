import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { click } from 'src/testing';
import { AppMaterialModule } from '../material-module';

import { LayoutComponent } from './layout.component';

let component: LayoutComponent;
let fixture: ComponentFixture<LayoutComponent>;
let page: Page;
describe('LayoutComponent', () => {
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [AppMaterialModule, BrowserAnimationsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    page = new Page();
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display light theme', () => {
    console.log('page.darkThemeDisplay.textContent', page.darkThemeDisplay.textContent)
    expect(page.darkThemeDisplay.textContent).toBe('Dark Theme');
  })

  it('should change theme to dark', () => {
    click(page.themeBtn);
    fixture.detectChanges();
    console.log('page.darkThemeDisplay.textContent', page.darkThemeDisplay.textContent)
    
    expect(page.darkThemeDisplay.textContent).toBe('Light Theme');
  })

});

class Page {
  
  get buttons() {
    return this.queryAll<HTMLButtonElement>('button');
  }

  get darkThemeDisplay() {
    return this.buttons[2]
  }

  get themeBtn() {
    return this.buttons[1];
  }

  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}
