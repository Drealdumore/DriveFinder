import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appService } from 'src/app/services/app.service';
import { BigCategories, IFaq } from 'src/app/directives/app-model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPageComponent {
  category$: Observable<BigCategories> | undefined;
  // categoryF$: Observable<any> | undefined;

  constructor(private appservice: appService, private route: ActivatedRoute) {
    const categoryID = this.route.snapshot.params['categoryID'];
    this.category$ = this.appservice.getCategory(categoryID);

    

// categoryF$ = this.appservice.getBrand.pipe(map(brands => brands.filter(brand => brand.id === brands))
  }
}
