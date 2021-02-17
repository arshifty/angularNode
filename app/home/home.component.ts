import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fullName = "Ashif Rahman";
  currentDate = new Date();
  fruits = ["Mango", "Orange", "Apple"];
  user = { name: "Ashif Rahman", age: 24, email: "aaa@gmail.com" };

  employees: any[] = [
    {
      money: "213.323",
      name: "Ashiff",
      gender: "male",
      date: "Mon Feb 15 2021 12:58:17 GMT+0600",
    },
    {
      money: "234.33",
      name: "Monir",
      gender: "male",
      date: "Mon Feb 16 2021 12:58:17 GMT+0600",
    },
    {
      money: "5665.4354",
      name: "Aminul",
      gender: "male",
      date: "Mon Feb 17 2021 12:58:17 GMT+0600",
    },
    {
      money: "234.33",
      name: "Yesmin",
      gender: "female",
      date: "Mon Feb 16 2021 12:58:17 GMT+0600",
    },
    {
      money: "234.33",
      name: "Jannat",
      gender: "female",
      date: "Mon Feb 16 2021 12:58:17 GMT+0600",
    },
  ];

  appStatus = new Promise((resolve, reject) => {
    //setTimeout(() => {  resolve("hello"); }, 3000);
    resolve("hello"); 
    
  });
}
