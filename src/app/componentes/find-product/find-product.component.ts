import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produtos } from 'src/app/services/interfaces/products';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss']
})
export class FindProductComponent implements OnInit {
  formulario = new FormGroup({
    id: new FormControl('', Validators.required)
  });


  produtoRecupeardo$:Observable<Produtos>
  error$= new Subject<boolean>();
  constructor(private services: ProdutosService) { }

  ngOnInit() {
  }

  reset() {
    this.formulario.reset();
  }
  recuperarProduto(){
    const value = this.formulario.get('id').value;
    console.log(value);
    this.produtoRecupeardo$= this.services.RecuperarProduto(value)
    .pipe(
      catchError(error => {
        this.error$.next(true);
         return of()
          })
    )
this.reset();
  }

}
