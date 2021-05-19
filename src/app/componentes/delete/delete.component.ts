import { ProdutosService } from "src/app/services/produtos.service";
import { Observable, Subject } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Produtos } from "src/app/services/interfaces/products";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit {
  formulario = new FormGroup({
    id: new FormControl("", [Validators.required]),
  });
  produtodeletado$: Observable<Produtos>;
  error$ = new Subject<boolean>();
  constructor(private service: ProdutosService) {}

  ngOnInit() {}

  reset() {
    this.formulario.reset();
  }
  deletarProduto() {
    const value = this.formulario.get("id").value;
    this.produtodeletado$ = this.service.DeletarProduto(value).pipe(
      catchError((error) => {
        this.error$.next(true);
        return of();
      })
    );
    this.reset();
  }
}
