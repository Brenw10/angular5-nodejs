import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
        MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule,
        MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule { }
