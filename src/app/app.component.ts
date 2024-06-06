import { Component, OnInit } from '@angular/core';
import { MqttService } from './mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'LEDmom';
  timerValue: string = '500';

  constructor(private mqtt: MqttService) {}

  ngOnInit(): void {
    const socket = this.mqtt.getTempWebSocket();
    socket.addEventListener('message', (newTemp) => {
      console.log(newTemp)
    })
  }

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
