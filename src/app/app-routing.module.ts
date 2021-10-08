import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: '/typography', pathMatch: 'full' },
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'icons', component: IconsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
