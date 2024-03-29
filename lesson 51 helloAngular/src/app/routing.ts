import { Routes } from "@angular/router";
import { ClientsResponseComponent } from "./clients-response/clients-response.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { SettingsComponent } from "./settings/settings.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UsersComponent } from "./users/users.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'clients-response', component: ClientsResponseComponent },
    { path: 'tasks', component: TasksComponent },
];