import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('../../projects/features/src/lib/feature-a/feature-a.module').then(m => m.FeatureAModule)
  },
  {
    path: 'a', loadChildren: () => import('../../projects/features/src/lib/feature-a/feature-a.module').then(m => m.FeatureAModule)
  },
  {
    path: 'b', loadChildren: () => import('../../projects/features/src/lib/feature-b/feature-b.module').then(m => m.FeatureBModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
