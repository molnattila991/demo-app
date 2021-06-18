import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAPageContainerComponent } from './components/feature-a-page-container/feature-a-page-container.component';
import { FeatureAStateModule } from 'projects/infrastructure/src/public-api';

const routes: Routes = [
  {
    path: '', component: FeatureAPageContainerComponent
  }
];

@NgModule({
  declarations: [
    FeatureAPageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatureAStateModule
  ]
})
export class FeatureAModule { }
