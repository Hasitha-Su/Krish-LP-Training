import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

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
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.petObj.id = this._route.snapshot.params['id'];
    this.petObj = this._petService.getById(this.petObj.id)
  }

  updatePet(): void {
    console.log(this.petObj)
    this._petService.updatePet(this.petObj, this.petObj.id)
    this._router.navigate(['pets/list'])
  }

}
