import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { owner } from '../owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {

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
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.ownerObj.id = this._route.snapshot.params['id'];
    this.ownerObj = this._ownerService.getById(this.ownerObj.id)
    console.log(this.ownerObj)
  }

  updateOwner(): void {
    console.log(this.ownerObj)
    this._ownerService.updateOwner(this.ownerObj, this.ownerObj.id)
    this._router.navigate(['owners/list'])
  }

}
