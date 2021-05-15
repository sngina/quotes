import { Component, OnInit } from '@angular/core';
import {quotes }from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:quotes[]=[
    new quotes(1, 'Don’t Let Yesterday Take Up Too Much Of Today.' , 'Will Rogers',new Date(2020,1,1)),
    new quotes(2, 'The Man Who Has Confidence In Himself Gains The Confidence Of Others.','Hasidic Proverb.' ,new Date(2020,2,12)),
    new quotes(3, 'A Room Without Books Is Like A Body Without A Soul.', 'Marcus Tullius Cicero.',new Date(2020,3,17)),
    new quotes(4, 'We May Encounter Many Defeats But We Must Not Be Defeated.' , 'Maya Angelou',new Date(2020,5,21)),
    new quotes(5, 'Whether You Think You Can Or Think You Can’t, You’re Right.' , 'Henry Ford',new Date(2020,6,12)),
    new quotes(6, 'Do What You Can With All You Have, Wherever You Are' , 'Theodore Roosevelet',new Date(2020,7,5)),
    new quotes(7, 'Today’s Accomplishments Were Yesterday’s Impossibilities.' , 'Robert H.Schuller',new Date(2020,8,13)),
 
  ];
  addNewquotes(quotes){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength +1;
    quote.completeDate= new Date(quote.completeDate)
    this.quote.push(quote)
  }
  toggleDetails(index:number){

  }
  completequotes(is Complete:boolean,index:number){
    if(isComplete){
      this.toggleDetails.splice(index ,1);
    }
  }
  deletequotes(isComplete,index){
    if(isComplete){
      let toDelete =confirm('Are you sure you want to delete the quote ${this.quote[index].name}')
      if(toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
