import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-finger-auth',
  templateUrl: './finger-auth.page.html',
  styleUrls: ['./finger-auth.page.scss'],
})
export class FingerAuthPage implements OnInit {

  constructor(
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }
  verificarHuella() {
    this.androidFingerprintAuth.isAvailable()
      .then((result) => {
        if(result.isAvailable) {
          this.androidFingerprintAuth.encrypt(
            {
              clientId: 'myappName',
              username: 'myUsername',
              password: 'myPassword',
              locale: 'es',
              maxAttempts: 5
            })
            .then(res => {
              if(res.withFingerprint) {
                console.log('Successfully encrypted credentials.');
                console.log('Encrypted credentials: ' + res.token);
                this.alerta('Encrypted credentials: ' + res.token);
              } else if( res.withBackup) {
                console.log('Successfully authenticated with backup password!');
                this.alerta('Successfully authenticated with backup password!');
              } else {
                console.log('Didn\'t authenticate!');
                this.alerta('Didn\'t authenticate!');
              }
            })
            .catch(error => {
              if(error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                console.log('Fingerprint authentication cancelled');
                this.alerta('Fingerprint authentication cancelled');
              } else {
                console.log(error);
                this.alerta(error.message);
              }
            })
        }else {
          //No esta disponible
          this.alerta('Finger Print no disponible.');
        }
      })
      .catch(error => {
        console.error(error);
        this.alerta(error.message);
      });
  }
  public async alerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: mensaje,
      buttons: [
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log('aceptado')
          }
        }
      ]
    });
    alert.present();
  }
}
