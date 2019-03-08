class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
  if(this.tabData === 'all'){
      this.cards = document.querySelectorAll('.card');
    } else {
      this.card = document.querySelectorAll(`card[data-tab='${this.tabData}']`);
    }
    this.cards = Array.from(this.cards).map(function(card){
      return new TabCard(card)
    });
    this.tabElement.addEventListener('click', (e) => 
        this.selectTab(e));
  }

  selectTab(){
    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    
    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()
    // Select all of the elements with the .card class on them
    // const cards = ;
    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
  }

}
class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
  }
}

let tabs = document.querySelectorAll('.tab');
tabs.forEach(function(tab){
  return new TabLink(tab)
});