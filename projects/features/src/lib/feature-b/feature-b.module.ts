import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBPageContainerComponent } from './components/feature-b-page-container/feature-b-page-container.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureBStateModule } from 'projects/infrastructure/src/public-api';

const routes: Routes = [
  {
    path: '', component: FeatureBPageContainerComponent
  }
];

@NgModule({
  declarations: [
    FeatureBPageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeatureBStateModule
  ]
})
export class FeatureBModule { }
