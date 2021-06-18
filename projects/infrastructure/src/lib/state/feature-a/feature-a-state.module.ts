import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { FeatureAStateCommand } from './feature-a-state-command.service';
import { FeatureAStateQuery } from './feature-a-state-query.service';
import { FeatureAEffects } from './feature-a.effects';
import { featureAReducer } from './feature-a.reducer';

@NgModule({
  imports:[
    StoreModule.forFeature("featureA", featureAReducer),
    EffectsModule.forFeature([FeatureAEffects]),
  ],
  providers: [
    { provide: INJECTION_TOKEN.STATE.COMMAND.FeatureA, useClass: FeatureAStateCommand },
    { provide: INJECTION_TOKEN.STATE.QUERY.FeatureA, useClass: FeatureAStateQuery },
  ]
})
export class FeatureAStateModule { }
