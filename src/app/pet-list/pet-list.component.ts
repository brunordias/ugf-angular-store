import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: any[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.petService.pets$.subscribe((pets) => {
      this.pets = pets;
      this.sortPetsByCreationDateDescending();
    });
  }

  sortPetsByCreationDateDescending() {
    this.pets.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA;
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = this.padNumber(date.getDate());
    const month = this.padNumber(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = this.padNumber(date.getHours());
    const minutes = this.padNumber(date.getMinutes());
    const seconds = this.padNumber(date.getSeconds());
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  private padNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
