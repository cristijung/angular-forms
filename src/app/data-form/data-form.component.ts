import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  //verificar isso aqui
  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = new FormGroup({

    })
  }


}
