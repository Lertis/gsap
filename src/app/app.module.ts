import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  MainComponent,
  ControlAnimationComponent,
  SimpleTimelineComponent,
  WrapperPresentationComponent,
  RotationToRightComponent,
  InifitinyRepeatComponent
} from './components'

const COMPONENTS = [
  MainComponent, ControlAnimationComponent, SimpleTimelineComponent, InifitinyRepeatComponent,
  WrapperPresentationComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    WrapperPresentationComponent,
    RotationToRightComponent,
    InifitinyRepeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
