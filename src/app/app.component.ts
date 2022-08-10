import { Component } from '@angular/core'
import { RoutesPath } from './constants'

@Component({
  selector: 'gsap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItemsList = [
    {
      name: 'Simple time line',
      path: RoutesPath.SIMPLE_TIMELINE
    },
    {
      name: 'Control your animation',
      path: RoutesPath.CONTROL_ANIMATION
    }
  ]
}
