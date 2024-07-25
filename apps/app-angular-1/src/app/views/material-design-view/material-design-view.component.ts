import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-material-design-view',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './material-design-view.component.html',
  styleUrl: './material-design-view.component.scss',
})
export class MaterialDesignViewComponent {}
