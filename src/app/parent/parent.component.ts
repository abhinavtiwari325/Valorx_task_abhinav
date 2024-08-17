import { Component, Injectable } from '@angular/core';
import { ValorxServiceService } from '../valorx-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers:[ValorxServiceService]
})
export class ParentComponent {
  primitiveData: number =0;
  nonPrimitiveData = {name: 'abhinav'};
   
  constructor(private ValorxService: ValorxServiceService){}
  update(){
    this.primitiveData++;
    this.nonPrimitiveData.name="updated_abhinav_"+this.primitiveData;
  }

}
