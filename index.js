class media{
  constructor(title){
    this._title=title;
    this._ratings=[];
    this._isCheckedOut=false;
  }
  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckOut(newCheckOut){
    this._isCheckedOut=newCheckOut;
  }
  getAverageRating(){
    let averageValue= this.ratings.reduce((currentSum,ratings)=>
    currentSum+ratings,0);
    const lengthOfRatings= this.ratings.length;
    return averageValue/lengthOfRatings;
  }
  addRating(ratings){
    this._ratings.push(ratings);
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut===true){
      this._isCheckedOut=false;
    }else if(this._isCheckedOut===false){
      this._isCheckedOut=true;
    }
    

}}
class Book extends media{
  constructor(title,author,pages){
    super(title);
    this._author=author;
    this._pages=pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
} 
class Movie extends media{
  constructor(title,director,runTime){
    super(title);
    this._director=director;
    this._runTime=runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}
class CD extends media{
  constructor(title,artist,songs){
    super(title);
    this._artist=artist;
    this._songs=songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
}
const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544)
historyOfEverything.toggleCheckOutStatus()

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
const speed= new Movie('Speed','Jan de Bont',116)

speed.toggleCheckOutStatus();
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())
console.log(speed)