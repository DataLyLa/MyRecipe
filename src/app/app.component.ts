import { Component } from '@angular/core';
import { FLAGS } from './flags';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectTEST';
  flags = FLAGS;

  getFlag(area: string) {
    for (let flag of this.flags) {
      if (area === flag.name) {
        return flag.emoji;
      }
    }
    return null;
  }
}
