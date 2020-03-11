import { CountryService } from './services/country.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryContainerComponent } from './components/country-container/country-container.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryReducer } from './+store/country.reducer';
import { CountryEffects } from './+store/country.effects';

@NgModule({
  declarations: [DropdownComponent, CountryDetailComponent, CountryContainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('country', CountryReducer),
    EffectsModule.forFeature([CountryEffects])
  ],
  providers: [CountryService]
})
export class CountryModule {}
