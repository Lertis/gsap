import { AfterViewInit, Component } from '@angular/core'
import { Router } from '@angular/router'

import { gsap } from 'gsap'

import { reload } from '../../../utils'

@Component({
  selector: 'gsap-simple-timeline',
  templateUrl: './simple-timeline.component.html',
  styleUrls: ['./simple-timeline.component.scss']
})
export class SimpleTimelineComponent implements AfterViewInit {
  private readonly timeline = gsap.timeline()

  constructor (private readonly router: Router) { }

  ngAfterViewInit (): void {
    this.gsapRun()
  }

  rerun (): void {
    reload(this.router)
    this.gsapRun()
  }

  private readonly gsapRun = () => {
    this.timeline.to('.green', { x: 600, duration: 2 })
    this.timeline.to('.purple', { x: 600, duration: 1 })
    this.timeline.to('.orange', { x: 600, duration: 1 })
  }


  code = `
    let tl = gsap.timeline()

    // add the tweens to the timeline - Note we're using tl.to not gsap.to
    tl.to(".green", { x: 600, duration: 2 });
    tl.to(".purple", { x: 600, duration: 1 });
    tl.to(".orange", { x: 600, duration: 1 });`
}
