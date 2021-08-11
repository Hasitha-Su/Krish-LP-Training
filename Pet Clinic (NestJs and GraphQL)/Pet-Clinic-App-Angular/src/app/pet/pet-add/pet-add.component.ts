import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petObj: pet = {
    id: 0,
    img: " ",
    name: " ",
    breed: " ",
    color: " ",
    age: 0,
    estimateVal: 0,
  }

  constructor(
    private _petService: PetService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  savePet(): void {
    console.log(this.petObj)
    this._petService.savePet(this.petObj)
    this._router.navigate(['pets/list'])
  }
}
