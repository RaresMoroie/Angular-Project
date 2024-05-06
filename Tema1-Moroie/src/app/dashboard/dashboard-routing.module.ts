import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [{ component: MainPageComponent, path: '' },
{component: BrowseComponent, path: 'browse' },];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
