import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Feature-b Module] Add item', props<any>());
export const deleteItem = createAction('[Feature-b Module] Delete item', props<any>());