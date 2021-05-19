import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/services/interfaces/products';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.scss']
})
export class FindAllComponent implements OnInit {



todosProdutos$:Observable<Produtos>
  constructor(private services: ProdutosService) { }


  error$ = new Subject<boolean>();
  ngOnInit() {
  }

findAll() {
this.todosProdutos$= this.services.RecuperarTodosProdutos()
.pipe(
  catchError(error => {
  this.error$.next(true);
   return of()
    })
  )
}
}
