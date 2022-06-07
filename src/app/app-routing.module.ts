import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityScreenComponent } from './screens/community-screen/community-screen.component';
import { ContactScreenComponent } from './screens/contact-screen/contact-screen.component';
import { GoalScreenComponent } from './screens/goal-screen/goal-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ListScreenComponent } from './screens/list-screen/list-screen.component';
import { SolutionsScreenComponent } from './screens/solutions-screen/solutions-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent },
  { path: 'goal', component: GoalScreenComponent },
  { path: 'solutions', component: SolutionsScreenComponent },
  { path: 'community', component: CommunityScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'list', component: ListScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
