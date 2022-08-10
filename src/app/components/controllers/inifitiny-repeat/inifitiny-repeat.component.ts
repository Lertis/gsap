import { AfterViewInit, Component } from '@angular/core'

import { gsap } from 'gsap'

@Component({
  selector: 'gsap-inifitiny-repeat',
  templateUrl: './inifitiny-repeat.component.html',
  styleUrls: ['./inifitiny-repeat.component.scss']
})
export class InifitinyRepeatComponent implements AfterViewInit {
  private readonly INFINITY_REPEAT = -1

  ngAfterViewInit (): void {
    this.gsapRun()
  }


  gsapRun () {
    gsap.to(".green", {
      rotation: 360,
      x: '50vw',
      xPercent: -100,
      duration: 2,
      repeat: this.INFINITY_REPEAT,
      yoyo: true
    })

  }
}
