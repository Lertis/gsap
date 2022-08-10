import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  MainComponent,
  ControlAnimationComponent,
  SimpleTimelineComponent
} from './components'
import { RotationToRightComponent } from './components/controllers/rotation-to-right/rotation-to-right.component'

import { RoutesPath } from './constants'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesPath.MAIN
  },
  {
    path: RoutesPath.MAIN,
    component: MainComponent
  },
  {
    path: RoutesPath.CONTROL_ANIMATION,
    component: ControlAnimationComponent
  },
  {
    path: RoutesPath.SIMPLE_TIMELINE,
    component: SimpleTimelineComponent
  },
  {
    path: RoutesPath.ROTATION_TO_RIGHT,
    component: RotationToRightComponent
  },
  {
    path: '**',
    redirectTo: RoutesPath.MAIN
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
