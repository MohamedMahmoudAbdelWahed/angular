import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProuductDetailsComponent } from './components/prouduct-details/prouduct-details.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ObservableAndOperatorComponent } from './components/observable-and-operator/observable-and-operator.component';
// day5
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardDirective,
    CreditCardPipe,
    ProductParentComponent,
    NotFoundPageComponent,
    ProuductDetailsComponent,
    MainHomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ObservableAndOperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // day5
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
