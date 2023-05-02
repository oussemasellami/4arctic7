import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit ,OnChanges,AfterViewInit {
  @Input()Prod:Product={
    id:0,
    title:"",
    price:null,
    quantity:null,
    like:null

  }

  @Input() MaxPrix:number;

  @Output() likeEvent=new EventEmitter<Product>();
  like(){
    console.log("from child")
    this.likeEvent.emit(this.Prod)
  }
  start(){
    console.log("this child")
  }

  constructor() { }
  ngAfterViewInit(): void {
  console.log("aaaaaaaaaaa")
  }
  ngOnChanges(changes: SimpleChanges): void {
 console.log(changes)
  }
 

  ngOnInit(): void {
  }

}
