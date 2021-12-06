import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  unpairedDevice: any;
  pairedDevice: any;
  loading: boolean;
  constructor(private bluetoothSerial: BluetoothSerial) { bluetoothSerial.enable(); }

  scanDevices() {
    this.unpairedDevice = null;
    this.loading = true;
    const devices = [];
    this.bluetoothSerial.discoverUnpaired().then(success => {
      success.forEach(device => {
        devices.push(device);
      });
      this.unpairedDevice = devices;
      this.loading = false;
    }).catch(err => console.log);
  }
}
