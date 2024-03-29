import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CheckandradioComponent } from './checkandradio/checkandradio.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridsComponent } from './grids/grids.component';
import { IconsComponent } from './icons/icons.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableDynamicArrayDataExample } from './table-dynamic-array-data-example/table-dynamic-array-data-example.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';
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
  { path: 'list', component: ListComponent },
  { path: 'grids', component: GridsComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'input', component: InputComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'check-and-radio', component: CheckandradioComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'data-table', component: TableDynamicArrayDataExample },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
