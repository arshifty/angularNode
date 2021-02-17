import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angularmodal";

  constructor(
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async loadAdmin() {
    this.viewContainer.clear();
    const { LazyComponentComponent } = await import("./lazy-component/lazy-component.component");
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(LazyComponentComponent)
    );
  }
}
