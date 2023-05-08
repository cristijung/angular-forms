import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(
          map((res) => res),
          catchError((error) => {
            console.error(error);
            return throwError('Erro ao enviar o formulário. Tente novamente mais tarde.');
          })
        )
        .subscribe((dados) => console.log(dados));
    }
  }
}
