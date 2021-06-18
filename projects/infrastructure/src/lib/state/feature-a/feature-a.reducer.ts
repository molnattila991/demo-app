import { createReducer, on } from '@ngrx/store';
import { FeatureAModuleState } from 'projects/core/src/public-api';
import { addItem, deleteItem } from './feature-a.actions';

export const initialState: FeatureAModuleState = <FeatureAModuleState>{
    stateA : 0,
    stateB : "state"
};

const _featureAReducer = createReducer(
    initialState,
    on(addItem, (state, action) => ({ ...state })),
    on(deleteItem, (state, action) => ({ ...state }))
);

export function featureAReducer(state: any, action: any) {
    return _featureAReducer(state, action);
}