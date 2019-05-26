import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
import { ComputersService } from './shared/computers.service';
import { AccessoriesService } from './shared/accessories.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuardService } from './shared/auth-guard.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LayoutModule],
  providers: [AuthService, AngularFireAuth, AuthGuardService,, UserService, ComputersService, AccessoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
