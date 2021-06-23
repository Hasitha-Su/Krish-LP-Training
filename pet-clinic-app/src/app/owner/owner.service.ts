import { Injectable } from "@angular/core";
import { owner } from "./owner.model"

@Injectable()
export class OwnerService {

    private listOwners: owner[] = [
        {
            "id": 1,
            "first_name": "Whitney",
            "last_name": "Keirl",
            "email": "wkeirl0@taobao.com",
            "designation":"Doctor"
        },
        {
            "id": 2,
            "first_name": "Lucita",
            "last_name": "Leghorn",
            "email": "lleghorn1@lulu.com",
            "designation":"Project Manager"
        },
        {
            "id": 3,
            "first_name": "Beilul",
            "last_name": "Doohey",
            "email": "bdoohey2@ibm.com",
            "designation":"Account Executive"
        },
        {
            "id": 4,
            "first_name": "Javier",
            "last_name": "Birth",
            "email": "jbirth3@w3.org",
            "designation":"Librarian"
        },
        {
            "id": 5,
            "first_name": "Nataline",
            "last_name": "Fransson",
            "email": "nfransson4@ox.ac.uk",
            "designation":"Nursing Assistant"
        }
    ]

    getowners(): owner[] {
        return this.listOwners
    }

    saveOwner(ownerObj: owner) {
        this.listOwners.push(ownerObj)
    }

    deleteOwner(id: number){
        delete this.listOwners[id-1]
    }

    updateOwner(ownerObj: owner, id: number){
      ownerObj = this.listOwners[id-1] 
    }

    getById(id: number):owner{
        return  this.listOwners[id-1] 
    }
}