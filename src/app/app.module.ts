import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { CommunityScreenComponent } from './screens/community-screen/community-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { GoalScreenComponent } from './screens/goal-screen/goal-screen.component';
import { SolutionsScreenComponent } from './screens/solutions-screen/solutions-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    HomeScreenComponent,
    CommunityScreenComponent,
    ContactScreenComponent,
    GoalScreenComponent,
    SolutionsScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
