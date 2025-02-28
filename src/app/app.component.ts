import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  private activeTreeItem: any = null;
  
  selectTree(item) {
    this.activeTreeItem = item;
  }
}
