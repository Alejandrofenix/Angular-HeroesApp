import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;          
    }
    `
  ]
})
export class AgregarComponent implements OnInit {
  publishers= [
    {
      id:'DC Comics',
      desc:'DC'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel'
    }
    
  ];

  heroe: Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
     publisher: Publisher.DCComics,
     alt_img:''

  }
  
  //Activated sirve para leer la url
  //Router sirve para navegar mediante el router
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
      this.activatedRoute.params
      .pipe( 
        switchMap(({id})=>this.heroesService.getHeroeById(id))
      )
      .subscribe(heroe=>this.heroe=heroe);
    }
    
    return;



  }

  guardar(){
    
    if(this.heroe.superhero.trim().length===0){
      return;
    }

    if(this.heroe.id){
      //Actualizar
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe=>console.log('Actualizando', heroe));
    } else{
      //Crear
      this.heroesService.agregarHeroe(this.heroe).subscribe(heroe=>this.router.navigate(['/heroes/editar',heroe.id]));
    }
  }

  borrarHeroe(){
    this.heroesService.borrarHeroe(this.heroe.id!)
    .subscribe(resp=>{
      this.router.navigate(['/heroes'])

    }

    );
  }


}
