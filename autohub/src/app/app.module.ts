import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateAdComponent } from './pages/create-ad/create-ad.component';
import { EditAdComponent } from './pages/edit-ad/edit-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { TruncatePipe } from './pipes/truncate.pipe';

import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';

import { routes } from './app.routes'; // Импортиране на маршрути
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    CreateAdComponent,
    EditAdComponent,
    ProfileComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)  // Регистриране на маршрути
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
