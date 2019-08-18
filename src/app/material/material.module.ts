import {NgModule} from '@angular/core';
import {MatButtonModule, MatExpansionModule, MatInputModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class MaterialModule {
}
