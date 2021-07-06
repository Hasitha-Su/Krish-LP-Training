import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//owners
import { OwnerAddComponent } from './owner/owner-add/owner-add.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerEditComponent } from './owner/owner-edit/owner-edit.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
//pets
import { PetAddComponent } from './pet/pet-add/pet-add.component'
import { PetEditComponent } from './pet/pet-edit/pet-edit.component'
import { PetListComponent } from './pet/pet-list/pet-list.component'
import { PetService } from './pet/pet.service';
import { ActionsComponent } from './actions/actions.component';
import { OwnerService } from './owner/owner.service';
import { LkrFormatterPipe } from './shared/lkr-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    OwnerAddComponent,
    OwnerListComponent,
    OwnerEditComponent,

    PetAddComponent,
    PetEditComponent,
    PetListComponent,
    ActionsComponent,
    LkrFormatterPipe

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([

      //owners
      { path: 'owners/add', component: OwnerAddComponent },
      { path: 'owners/edit/:id', component: OwnerEditComponent },
      { path: 'owners/list', component: OwnerListComponent },

      //pets
      { path: 'pets/add', component: PetAddComponent },
      { path: 'pets/edit/:id', component: PetEditComponent },
      { path: 'pets/list', component: PetListComponent },

      { path: 'actions', component: ActionsComponent},

      { path: 'home', component: HomeComponent},
      { path: '', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [
    PetService,
    OwnerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
