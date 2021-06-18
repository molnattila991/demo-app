import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Feature-a Module] Add item', props<any>());
export const deleteItem = createAction('[Feature-a Module] Delete item', props<any>());