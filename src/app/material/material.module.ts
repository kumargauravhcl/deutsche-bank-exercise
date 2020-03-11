import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [MatProgressBarModule, MatSelectModule, MatTableModule],
  exports: [MatProgressBarModule, MatSelectModule, MatTableModule]
})
export class MaterialModule {}
