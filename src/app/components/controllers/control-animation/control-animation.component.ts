import { AfterViewInit, Component } from '@angular/core'

import { gsap } from 'gsap'

@Component({
  selector: 'gsap-control-animation',
  templateUrl: './control-animation.component.html',
  styleUrls: ['./control-animation.component.scss']
})
export class ControlAnimationComponent implements AfterViewInit {
  private readonly tween = gsap.timeline()

  ngAfterViewInit (): void {
    this.gsapRun()
  }

  play (): void {
    this.tween.play()
  }

  pause (): void {
    this.tween.pause()
  }

  resume (): void {
    this.tween.resume()
  }

  reverse (): void {
    this.tween.reverse()
  }

  restart (): void {
    this.tween.restart()
  }

  private readonly gsapRun = () => {
    this.tween.to(".green", { duration: 6, x: 700, rotation: 360 })
  }
}
