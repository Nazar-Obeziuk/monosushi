import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [];

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
]


@NgModule({
    declarations: [],
    imports: [
        // ...MATERIAL,
        ...MODULES
    ],
    exports: [
        // ...MATERIAL,
        ...MODULES
    ]
})

export class SharedModule {}