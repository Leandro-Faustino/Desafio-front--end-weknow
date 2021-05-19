import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produtos } from "./interfaces/products";

@Injectable({
  providedIn: "root",
})
export class ProdutosService {
  url = "http://localhost:3000/produtos";
  constructor(private http: HttpClient) {}

  InserirProduto(value: any): Observable<Produtos> {
    return this.http.post<Produtos>(this.url, value);
  }

  RecuperarProduto(value: any): Observable<Produtos> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("id", value);
    return this.http.get<Produtos>(this.url, { params: searchParams });
  }

  RecuperarTodosProdutos(): Observable<Produtos> {
    return this.http.get<Produtos>(this.url);
  }

  DeletarProduto(value: any): Observable<Produtos> {
    const urlCompleta = `${this.url}/${value}`;
    return this.http.delete<Produtos>(urlCompleta);
  }

  AtualizarFilme(value, id): Observable<Produtos> {
    const urlCompleta = `${this.url}/${id}`;
    let searchParams = new HttpParams();
    searchParams = searchParams.append("descricao", value);
    return this.http.put<Produtos>(urlCompleta, searchParams);
  }
}
