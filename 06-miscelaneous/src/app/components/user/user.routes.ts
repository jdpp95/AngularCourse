import { Routes, RouterModule } from "@angular/router";
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { UserDetailsComponent } from './user-details.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'details', component: UserDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'details' }
];