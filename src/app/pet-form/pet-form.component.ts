import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetService } from '../pet.service.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
  petName: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private petService: PetService) {}

  onSubmit() {
    if (!this.petName) {
      this.errorMessage = 'O campo Nome do Pet é obrigatório.';
      this.successMessage = ''; // Limpa a mensagem de sucesso, se houver
      return; // Retorna para impedir o cadastro com campo vazio
    }

    const apiUrl = `${environment.apiHost}/store-resource/v1/pets`;
    const payload = {
      name: this.petName
    };

    this.http.post(apiUrl, payload).subscribe(
      () => {
        this.successMessage = 'Pet Cadastrado com Sucesso';
        this.errorMessage = ''; // Limpa a mensagem de erro, se houver
        this.petName = ''; // Limpa o campo de nome do pet após o cadastro
        this.petService.fetchPets(); // Atualiza a lista diretamente no serviço
      },
      (error) => {
        this.errorMessage = 'Erro ao cadastrar';
        this.successMessage = ''; // Limpa a mensagem de sucesso, se houver
      }
    );
  }
}
