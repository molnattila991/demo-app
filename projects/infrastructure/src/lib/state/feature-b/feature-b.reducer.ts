import { createReducer, on } from '@ngrx/store';
import { FeatureBModuleState } from 'projects/core/src/public-api';
import { addItem, deleteItem } from './feature-b.actions';

export const initialState: FeatureBModuleState = <FeatureBModuleState>{
    stateA : 0,
    stateB : "state"
};

const _featureBReducer = createReducer(
    initialState,
    on(addItem, (state, action) => ({ ...state })),
    on(deleteItem, (state, action) => ({ ...state }))
);

export function featureBReducer(state: any, action: any) {
    return _featureBReducer(state, action);
}