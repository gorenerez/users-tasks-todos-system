export class User {
    constructor(
                public _id? : string,
                public Name? : String, 
                public Email? : String,
                public Street? : String,
                public City? : String,
                public Zipcode? : Number,
                public Tasks? : {Title : String, Completed : Boolean}[],
                public Posts? : {Title : String, Body : String}[]){}
}
