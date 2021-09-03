import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
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
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap(({id})=>this.heroesService.getHeroeById(id))
    )
    .subscribe(heroe=>this.heroe=heroe);

  }

  guardar(){
    
    if(this.heroe.superhero.trim().length===0){
      return;
    }

    if(this.heroe.id){
      //Actualizar
      
    } else{
      //Crear
      this.heroesService.agregarHeroe(this.heroe).subscribe(resp=>console.log(resp));
    }
    


    
    
  }

}
