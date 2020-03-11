import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as CC from './country.constant';
import { CountryContainerComponent } from './components/country-container/country-container.component';

const routes: Routes = [{ path: CC.CONTAINER_ROUTE, component: CountryContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {}
