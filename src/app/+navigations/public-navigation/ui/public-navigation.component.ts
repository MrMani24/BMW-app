import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../+pages/footer/ui/footer/footer.component";

@Component({
  selector: 'app-public-navigation',
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './public-navigation.component.html',
  styleUrl: './public-navigation.component.scss'
})
export class PublicNavigationComponent {

}
