import { Component, OnInit } from '@angular/core';
import {Quotes }from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1, 'Don’t Let Yesterday Take Up Too Much Of Today.' , 'Will Rogers', 'Stella Ngina',new Date(2020,1,1)),
    new Quotes(2, 'The Man Who Has Confidence In Himself Gains The Confidence Of Others.','Hasidic Proverb.',   'Stella Ngina' ,new Date(2020,2,12)),
    new Quotes(3, 'A Room Without Books Is Like A Body Without A Soul.', 'Marcus Tullius Cicero.',   'Stella Ngina',new Date(2020,3,17)),
    new Quotes(4, 'We May Encounter Many Defeats But We Must Not Be Defeated.' , 'Maya Angelou',   'Stella Ngina' ,new Date(2020,5,21)),
    new Quotes(5, 'Whether You Think You Can Or Think You Can’t, You’re Right.' , 'Henry Ford',   'Stella Ngina',new Date(2020,6,12)),
    new Quotes(6, 'Do What You Can With All You Have, Wherever You Are' , 'Theodore Roosevelet',  'Stella Ngina',new Date(2020,7,5)),
    new Quotes(7, 'Today’s Accomplishments Were Yesterday’s Impossibilities.' , 'Robert H.Schuller', 'Stella Ngina',new Date(2020,8,13)),
 
  ];
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength +1;
    quote.completeDate= new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index:number){

  }
  
  deletequotes(isComplete,index){ 
    if(isComplete){
      let toDelete =confirm('Are you sure you want to delete the quote ${this.quote[index].name}')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
