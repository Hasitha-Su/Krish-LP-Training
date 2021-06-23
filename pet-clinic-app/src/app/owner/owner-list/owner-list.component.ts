import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from "../owner.service"
import { owner } from "../owner.model"
//import{ GlobalConstants } from '../../shared/global-constants';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  title: string = 'owners List'
  ownersList: owner[] = [];
  
  constructor(
    private _router:Router,
    private _ownerService: OwnerService
    
  ) { }

  ngOnInit(): void {
    this.ownersList = this._ownerService.getowners()
  }

  deleteOwner(id: number){
    this._ownerService.deleteOwner(id)
    this._router.navigate(['owners/list'])
  }

  editOwner(id: number){
    this._router.navigate(['owners/edit', id])
  }
}
