import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent {

  imagenes : any = [
    {foto: "https://www.purina-latam.com/sites/default/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=SRb_m7Tx"},
    {foto: "https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg"}
  ];

}
