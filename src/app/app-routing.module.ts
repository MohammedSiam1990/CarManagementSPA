import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

import { TestappComponent } from './test/testapp/testapp.component';

import { CarCardQueryComponent } from './carCard/carCard-query/carCard-query.component';
import { CarCardCreateComponent } from './carCard/carCard-create/carCard-create.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '',  component: HomeComponent,
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'carCardQuery', component: CarCardQueryComponent},
            {path: 'carCardCreate', component: CarCardCreateComponent },
            {path: 'testApp', component: TestappComponent},
            // {path: 'member-detail/:id', component: MemberDetailComponent,
            //  resolve: {user: MemberDetailResolver}},
            // {path: 'member-edit', component: MemberEditComponent,
            //  resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            // {path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
            // {path: 'lists', component: ListsComponent, resolve: {users: ListResolver}},
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
