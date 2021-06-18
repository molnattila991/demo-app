import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { INJECTION_TOKEN } from 'projects/core/src/public-api';
import { FeatureBStateCommand } from './feature-b-state-command.service';
import { FeatureBStateQuery } from './feature-b-state-query.service';
import { FeatureBEffects } from './feature-b.effects';
import { featureBReducer } from './feature-b.reducer';

@NgModule({
  imports:[
    StoreModule.forFeature("featureB", featureBReducer),
    EffectsModule.forFeature([FeatureBEffects]),
  ],
  providers: [
    { provide: INJECTION_TOKEN.STATE.COMMAND.FeatureA, useClass: FeatureBStateCommand },
    { provide: INJECTION_TOKEN.STATE.QUERY.FeatureA, useClass: FeatureBStateQuery },
  ]
})
export class FeatureBStateModule { }
