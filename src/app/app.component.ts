import { Component } from '@angular/core'
import { RoutesPath } from './constants'

@Component({
  selector: 'gsap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItemsList: { name: string, path: RoutesPath }[] = [
    {
      name: 'Rotation to right',
      path: RoutesPath.ROTATION_TO_RIGHT
    },
    {
      name: 'Simple time line',
      path: RoutesPath.SIMPLE_TIMELINE
    },
    {
      name: 'Control your animation',
      path: RoutesPath.CONTROL_ANIMATION
    },
    {
      name: 'Infinity animation',
      path: RoutesPath.INFINITY_REPEAT
    }
  ]
}
