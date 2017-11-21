import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { GridComponent } from './grid/grid.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { TestesComponent } from './testes/testes.component';
import { ExcluirComponent } from './excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    GridComponent,
    PesquisarComponent,
    AlterarComponent,
    TestesComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
