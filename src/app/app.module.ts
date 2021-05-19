import { HeaderComponent } from './componentes/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertComponent } from './componentes/insert/insert.component';
import { FindProductComponent } from './componentes/find-product/find-product.component';
import { UpdateComponent } from './componentes/update/update.component';
import { DeleteComponent } from './componentes/delete/delete.component';
import { FindAllComponent } from './componentes/find-all/find-all.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsertComponent,
    FindProductComponent,
    UpdateComponent,
    DeleteComponent,
    FindAllComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
