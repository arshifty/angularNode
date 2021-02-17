import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ViewServiceService } from "../view-service.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-view-data",
  templateUrl: "./view-data.component.html",
  styleUrls: ["./view-data.component.css"],
})
export class ViewDataComponent implements OnInit {
  userValue: Observable<any>;

  constructor(private observableService: ViewServiceService) {}

  ngOnInit(): void {
    this.viewData();
    this.observable.subscribe(
      console.log("data"),
      (error: any) => console.log(error),
      () => console.log("process complete")
    );
  }

  observable = Observable.create((observer: any) => {
    observer.next("start processing ...");
    setTimeout(() => observer.next("still processing .."), 3000);
    setTimeout(() => observer.complete(), 5000);
  });

  viewData() {
    this.userValue = this.observableService.getAll();
  }
}
