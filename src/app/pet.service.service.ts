import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = `${environment.apiHost}/store-resource/v1/pets-list`;
  private petsSubject = new BehaviorSubject<Pet[]>([]);
  public pets$: Observable<Pet[]> = this.petsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPets();
  }

  fetchPets() {
    this.http.get<any>(this.apiUrl).pipe(
      map((data) => data.pets as Pet[])
    ).subscribe(
      (pets) => {
        this.petsSubject.next(pets);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addPet(newPet: Pet) {
    this.http.post<any>(this.apiUrl, newPet).subscribe(
      () => {
        this.fetchPets(); // Notifica o PetListComponent para atualizar a lista
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

// Inclua a interface Pet diretamente neste arquivo
export interface Pet {
  id: string;
  name: string;
  created_at: string;
}
