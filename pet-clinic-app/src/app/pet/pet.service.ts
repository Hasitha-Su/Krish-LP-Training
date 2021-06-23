import { Injectable } from "@angular/core";
import { pet } from "./pet.model"

@Injectable()
export class PetService {

    private listPet: pet[] = [
        {
            "id": 1,
            "img": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            "name": "Tom",
            "breed": "Persian",
            "color": "Pearl White",
            "age": 2,
            "estimateVal": 800

        },
        {
            "id": 2,
            "img": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            "name": "Tom",
            "breed": "Persian",
            "color": "Pearl White",
            "age": 2,
            "estimateVal": 700,
        },
        {
            "id": 3,
            "img": "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
            "name": "Tom",
            "breed": "Persian",
            "color": "Pearl White",
            "age": 2,
            "estimateVal": 1000,
        }
    ]

    getPets(): pet[] {
        return this.listPet
    }

    savePet(petObj: pet) {
        this.listPet.push(petObj)
    }

    deletePet(id: number){
        delete this.listPet[id-1]
    }

    updatePet(petObj: pet, id: number){
      petObj = this.listPet[id-1] 
    }

    getById(id: number):pet{
        return  this.listPet[id-1] 
    }
}