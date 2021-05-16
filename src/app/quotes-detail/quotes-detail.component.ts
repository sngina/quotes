import { Component, Input,  Output,EventEmitter, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit{
  @Input() quote:Quotes;
  @Output() isDeleted= new EventEmitter<boolean>();
  

  
  quoteDelete(deleted:boolean){
    this.isDeleted.emit(deleted);
  }

  constructor() { }
 ngOnInit(): void{

 }
}
