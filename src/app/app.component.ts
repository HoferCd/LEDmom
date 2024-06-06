import { Component } from '@angular/core';
import { MqttService } from './mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LEDmom';
  timerValue: string = '500';

  constructor(private mqtt: MqttService) {}

  LEDon() {
    this.mqtt.setLed("on");
  }
  LEDoff() {
    console.log("in app.com stuff")
    this.mqtt.setLed("off");
  }
  LEDtimer() {
    this.mqtt.setLed(`${this.timerValue}`);
  }

}
