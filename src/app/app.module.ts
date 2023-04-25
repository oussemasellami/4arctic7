import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormProductComponent } from './form-product/form-product.component';
import { AnnComponent } from './ann/ann.component';
import { AddComponent } from './ann/add/add.component';
import { ListComponent } from './ann/list/list.component';
import { AnnModule } from './ann/ann.module';
import { EtudiantComponent } from './etudiant/etudiant.component';

import { FormproductComponent } from './formproduct/formproduct.component';


const ROUTES:Routes=[
{path:'',redirectTo:'home', pathMatch:'full'},
 {path:'home',component:HomeComponent} ,
 {path:'product',component:FormproductComponent} ,
 {path:'**',component:NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TodoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    FormProductComponent,
    FormproductComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AnnModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
