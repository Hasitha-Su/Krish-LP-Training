import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from "../pet.service"
import { pet } from "../pet.model"
//import{ GlobalConstants } from '../../shared/global-constants';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  title: string = 'Pets List'
  petsList: pet[] = [];
  
  constructor(
    private _router:Router,
    private _petService: PetService
    
  ) { }

  ngOnInit(): void {
    this.petsList = this._petService.getPets()
  }

  deletePet(id: number){
    this._petService.deletePet(id)
    this._router.navigate(['pets/list'])
  }

  editPet(id: number){
    this._router.navigate(['pets/edit', id])
  }
}
