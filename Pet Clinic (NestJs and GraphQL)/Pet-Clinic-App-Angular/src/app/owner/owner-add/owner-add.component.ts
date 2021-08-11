import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { owner } from '../owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerObj: owner = {
    id: 0,
    first_name: " ",
    last_name: " ",
    email: " ",
    gender: " ",
    designation: ""
  }

  constructor(
    private _ownerService: OwnerService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  saveOwner(): void {
    console.log(this.ownerObj)
    this._ownerService.saveOwner(this.ownerObj)
    this._router.navigate(['owners/list'])
  }
}
