import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductsComponent, ProductComponent} from '.';

const routes: Routes = [
    {
      path: 'products',
      component: ProductsComponent,
      pathMatch: 'full'
    },
    {
      path: 'product/:id',
      component: ProductComponent
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class ComponentssRoutingModule { }

