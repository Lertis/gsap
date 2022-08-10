import { Component } from '@angular/core';

@Component({
  selector: 'gsap-simple-timeline',
  templateUrl: './simple-timeline.component.html',
  styleUrls: ['./simple-timeline.component.scss']
})
export class SimpleTimelineComponent {
  code = `
  let tl = gsap.timeline()

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.to(".green", { x: 600, duration: 2 });
tl.to(".purple", { x: 600, duration: 1 });
tl.to(".orange", { x: 600, duration: 1 });
`
}
