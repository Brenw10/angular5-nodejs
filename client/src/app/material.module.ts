import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatListModule, MatTableModule],
    exports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatListModule, MatTableModule]
})

export class MaterialModule { }
