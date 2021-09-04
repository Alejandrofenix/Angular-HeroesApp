import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure:false 
  //El pure false hace que se dispare nuestro pipe en cada paso del ciclo de detección del cambio de Angular      
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if(!heroe.id && !heroe.alt_img){
      return 'assets/no-image.png'
    }else if (heroe.alt_img) {
      return heroe.alt_img;
    }else{
      return  `assets/heroes/${heroe.id}.jpg`;
    }
   
  }

}
