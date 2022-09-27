import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from  '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { ComponentSummaryComponent } from './component-summary/component-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent,
    ComponentFormComponent,
    ComponentSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
