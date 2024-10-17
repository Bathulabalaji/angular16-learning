import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeader } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule} from '@angular/forms';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackground } from './customDirectives/SetBackground.directive';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { DisableproductDirective } from './customDirectives/disableproduct.directive';
import { ClassDirective } from './customDirectives/class.directive';
import { FooterComponent } from './footer/footer/footer.component';
import { StyleDirective } from './customDirectives/style.directive';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { IfDirective } from './customDirectives/if.directive';
import { HeaderNewComponent } from './header-new/header-new.component';
import { AdminComponent } from './header-new/admin/admin.component';
import { HomeComponent } from './header-new/home/home.component';
import { SidebarComponent } from './header-new/home/sidebar/sidebar.component';
import { subscribeService } from './services/subscribe.service';
import { UserListComponent } from './header-new/admin/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    ContainerComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    SetBackground,
    HighlightDirective,
    HoverDirective,
    DisableproductDirective,
    ClassDirective,
    FooterComponent,
    StyleDirective,
    TermAndConditionsComponent,
    IfDirective,
    HeaderNewComponent,
    AdminComponent,
    HomeComponent,
    SidebarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[subscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
