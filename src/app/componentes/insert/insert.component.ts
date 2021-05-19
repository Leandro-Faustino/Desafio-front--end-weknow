import { Produtos } from './../../services/interfaces/products';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  formulario = new FormGroup({
    name : new FormControl('',Validators.required)
  });
  produtos$: Observable<Produtos>;
  error$ = new Subject<boolean>();
  constructor(private services: ProdutosService) { }

  ngOnInit(

  ) {

  }

reset () {
  this.formulario.reset()
}

insert() {
  const value = this.formulario.get('name').value;

  const body = {
    descricao: value
  };

this.produtos$ = this.services.InserirProduto(body)
.pipe(
catchError(error => {
this.error$.next(true);
 return of()
  })
)
this.reset()
}

}
