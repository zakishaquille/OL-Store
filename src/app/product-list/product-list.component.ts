import { Component, ViewChild } from "@angular/core";

import { products } from "../products";
import { ProductAlertComponent } from "../product-alert/product-alert.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  @ViewChild("productAlert") productAlert: ProductAlertComponent;
  products = products;

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You are notified by system!");
    this.productAlert.show();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
