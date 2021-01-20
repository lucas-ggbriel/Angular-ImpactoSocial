import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SectioninitialComponent } from './sectioninitial/sectioninitial.component';
import { SectionajudaComponent } from './sectionajuda/sectionajuda.component';
import { SectionajudarComponent } from './sectionajudar/sectionajudar.component';
import { SectionmelhoreComponent } from './sectionmelhore/sectionmelhore.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SectioninitialComponent,
    SectionajudaComponent,
    SectionajudarComponent,
    SectionmelhoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
