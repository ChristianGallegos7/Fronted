import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NzInputModule, NzIconModule, NzFlexModule, NzButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly passwordVisible = signal(false);
  readonly password = signal('');
}
