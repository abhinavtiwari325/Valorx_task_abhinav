import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValorxServiceService } from '../valorx-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() data: any;
  childData: string= 'abhinav_child'

  constructor (private ValorxService: ValorxServiceService){}

  updateChildData(){
    this.childData='abhinav_child_updated'
  }

}
