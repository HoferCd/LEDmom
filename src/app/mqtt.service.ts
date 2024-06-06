import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  backend_url = '10.216.220.93:1880'

  constructor(public http: HttpClient) { }

  public setLed(status: string) {
    console.log("in service")
    return lastValueFrom(this.http.post<any>(`http://${this.backend_url}/led`, {
      status
    }, {
      headers: {
        'Access-Control-Allow-Headers': '*'
      }
    })).then(() => console.log("after sending post"))
  }

  public getTempWebSocket() {
    const socket = new WebSocket(`wss://${this.backend_url}/ws/temp`);
    return socket
  }

}
