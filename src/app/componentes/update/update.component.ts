import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { Produtos } from 'src/app/services/interfaces/products';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  formulario = new FormGroup({
    descrição : new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required])
  });

  produtosAtualizados$: Observable<Produtos>;
  error$ = new Subject<boolean>();
  constructor(private service: ProdutosService) { }

  ngOnInit(

  ) {

  }

update() {
  const value = this.formulario.get('descrição').value;
  const id = this.formulario.get('id').value;
  this.produtosAtualizados$=this.service.AtualizarFilme(value,id)
  .pipe(
    catchError(error => {
    this.error$.next(true);
     return of()
      })
    )
}

}
