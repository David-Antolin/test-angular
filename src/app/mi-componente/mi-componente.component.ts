import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
	public edad: number;
	
	public nombres:Array<String>;
	
  constructor() {
	  this.edad= 17;
	  this.nombres = ['Victor', 'Paco', 'Pepe', 'Manolo'];
  }

  ngOnInit(): void {
	  console.log('Componente mi-componente cargado')
  }

aumentarEdad(){
	this.edad=this.edad+1;
	console.log("aumentar")
}
disminuirEdad(){
	this.edad=this.edad-1;
	console.log("disminuir")
}

}
