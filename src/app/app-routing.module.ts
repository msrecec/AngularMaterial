import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: '/typography', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
