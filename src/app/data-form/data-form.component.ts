import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  //verificar isso depois
  //variável formulario do tipo formgroup do pacote do angular forms
  formulario!: FormGroup;

  //DEIXAR O CONSTRUTOR VAZIO -- EXPLICAR ANTES O NGONINIT -------
  //a inicialização pode ser feita no construtor ou mesmo no método
  //OnInit
  //são 2 formas de criação a do onInit é mais verbosa e cada um usa o seu
  //usando o construtor usamos o FormBuilder e precisamos injetar o FormBUilder
  //no construtor
  //criamos entaão uma var local 'private' de formBuilder -- a classe formbuilder
  //também precisa ser importada
  constructor(private formBuilder: FormBuilder) {  }

  //todo componente angular tem 1 ciclo de vida e cada parte dele
  //é disparado um evento e um dos principais é o evento de inicialização
  //OnInit é diparado sempre qdo o evento é inicializado
  //e aqui vamos criar o nosso componente durante a inicialização do evento
  ngOnInit() {

    //instanciando a var 
    //esta classe irá receber um objeto como parâmetro
    //------------------------------Tirar os compentários para explicar o this.form......
    // this.formulario = new FormGroup({
    //   //vamos criar os campos e cada campo é um CONTROLE DE FORMULÁRIO
    //   //o tipo deste campo é FormControl() -- precisa de importação
    //   //dentro do form control passamos um valor inicial
    //   //------------------------------- comentado após o construtor
    //   // nome: new FormControl(null),
    //   // email: new FormControl(null),      
    // })

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],

    });
  }
}


