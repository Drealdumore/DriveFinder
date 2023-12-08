import { Component } from '@angular/core';
import { IReview } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
})
export class HowItWorksComponent {
  reviews: IReview[] = [];
  title: string = 'How DriveFinder works';
  backgroundImg: string = '../../../assets/img/bmw/bmw-main.jpg';

  
  constructor(private appService: appService) {
    this.reviews = this.appService.getSubReviews();
  }
}
