import { AfterViewInit, Component } from '@angular/core'
import { Router } from '@angular/router'
import { gsap } from 'gsap'
import { reload } from '../../../utils'

@Component({
  selector: 'gsap-rotation-to-right',
  templateUrl: './rotation-to-right.component.html',
  styleUrls: ['./rotation-to-right.component.scss']
})
export class RotationToRightComponent implements AfterViewInit {

  constructor (private readonly router: Router) { }

  ngAfterViewInit (): void {
    this.gsapRun()
  }

  rerun (): void {
    reload(this.router)
    this.gsapRun()
  }

  private readonly gsapRun = () => {
    gsap.to(".green", { duration: 2, x: 200, rotation: 360, })
  }
}
