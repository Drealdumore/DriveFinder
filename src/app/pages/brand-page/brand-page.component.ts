import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBrands, IFaq } from 'src/app/directives/app-model';
import { appService } from 'src/app/services/app.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css'],
})
export class BrandPageComponent implements OnInit {
  brands: IBrands[] = [];
  backgroundImg: string = '';
  faq: IFaq[] = [];
  brand: any;
  
  constructor(private appservice: appService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.brand = this.appservice.getBrand(this.route.snapshot.params['brandID']);
    this.brand = this.appservice.getBrandies(
      this.route.snapshot.params['brandID']
    );
    console.log(this.brand);
  }

}
