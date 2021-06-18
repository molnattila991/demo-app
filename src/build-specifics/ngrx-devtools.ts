import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const ngrxExtModules = [
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        autoPause: true,
    })
];