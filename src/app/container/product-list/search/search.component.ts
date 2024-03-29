import { Component,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  // updateSearchText(event: any){
  //     this.searchText = event.target.value;
  // }
 
  @Output()
  SearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChanged()
  {
    this.SearchTextChanged.emit(this.searchText);
  }

   updateSearchText(inputEl:HTMLInputElement)
   {
      // console.log(inputEl.value);  
    
      this.searchText = inputEl.value;
    this.SearchTextChanged.emit(this.searchText);
      
    }
}
