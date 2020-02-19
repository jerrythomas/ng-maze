import { Component, OnInit , HostBinding, Input} from '@angular/core';

@Component({
  selector: 'rect.block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  
  @Input() isCursor: boolean = false;
  @HostBinding('class') hostClass = this.getCurrentClass();
  @HostBinding('width') width=150 
  @HostBinding('height') height=150
  
  getCurrentClass(){
    if (this.isCursor){
      return 'cursor'
    }
    return 'route'
  }
  constructor() { }

  ngOnInit() {
  }

}