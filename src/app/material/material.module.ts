import {NgModule} from '@angular/core';
import {MatButtonModule, MatExpansionModule, MatInputModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {
}
