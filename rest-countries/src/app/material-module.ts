import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { OverlayModule } from "@angular/cdk//overlay";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {PortalModule} from '@angular/cdk/portal';

const MAT_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTableModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  OverlayModule,
  PortalModule
]

@NgModule({
  exports: [...MAT_MODULES],
  imports: [...MAT_MODULES]
})
export class AppMaterialModule { }
