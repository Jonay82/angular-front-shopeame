import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { ShareComponent } from './share/share.component';
import { CoreComponent } from './core/core.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './share/component/header/header.component';
import { FooterComponent } from './share/component/footer/footer.component';
import { WellcomeComponent } from './share/component/wellcome/wellcome.component';
import { ProductComponent } from './share/component/product/product.component';
import { FilterComponent } from './share/component/filter/filter.component';
import { MainComponent } from './share/component/main/main.component';
import { LogoComponent } from './share/component/logo/logo.component';
import { FormComponent } from './share/component/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomePageComponent,
    ProductsPageComponent,
    ManagePageComponent,
    ShareComponent,
    CoreComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    WellcomeComponent,
    ProductComponent,
    FilterComponent,
    MainComponent,
    LogoComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
     ReactiveFormsModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
