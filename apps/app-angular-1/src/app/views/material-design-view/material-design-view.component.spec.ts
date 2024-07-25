import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialDesignViewComponent } from './material-design-view.component';

describe('MaterialDesignViewComponent', () => {
  let component: MaterialDesignViewComponent;
  let fixture: ComponentFixture<MaterialDesignViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDesignViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialDesignViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
