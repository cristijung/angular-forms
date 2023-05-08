# Angular Forms

## Usando no projeto:
Angular fornece duas abordagens diferentes para lidar com a entrada do usuário por meio de formulários:  <br/>
1 - Reativo (dataForm); <br/>
2 - Orientado a modelo (templateForm). 

No Angular, os formulários são criados usando a diretiva ngForm. A diretiva ngForm é usada para criar um formulário Angular e vinculá-lo a um modelo de dados em um componente. 

## Tecnologias 
1 - TypeScript <br/>
2 - Material Angular UI <br/>

## Formulário Reativo (dataForm)

Formulário reativo no Angular é uma abordagem para construir e gerenciar formulários em um aplicativo Angular, onde o estado do formulário é modelado como um objeto observável reativo. Isso significa que o estado do formulário é atualizado automaticamente sempre que o usuário interage com ele, e os componentes do aplicativo que dependem desse estado são notificados dessas mudanças.

O formulário reativo é construído usando classes TypeScript e os recursos do Reactive Forms Module fornecidos pelo Angular. Os principais componentes de um formulário reativo são:

- `FormControl`: Representa um único controle de entrada de formulário, como uma caixa de texto ou um botão de opção. Ele mantém o valor atual do controle e também o estado de validação.
- `FormGroup`: Representa um grupo de controles de entrada de formulário que compartilham um objetivo comum, como um formulário de login com campos de e-mail e senha. Ele contém um objeto de controles filhos.
- `FormArray`: Representa uma coleção dinâmica de controles de entrada de formulário, como uma lista de seleção de várias opções. Ele contém uma matriz de controles filhos. <br/>

Usando esses componentes, um formulário reativo pode ser construído e manipulado de forma programática, tornando-o altamente flexível e extensível. Além disso, o estado do formulário pode ser facilmente validado e sincronizado com o estado do modelo de dados do aplicativo, tornando-o uma abordagem poderosa para gerenciar formulários em aplicativos Angular.


____________________________________________________________________________________________________
## Install 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
