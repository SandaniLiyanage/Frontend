import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { DrawingBoardComponent } from './components/drawing-board/drawing-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    DrawingBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
