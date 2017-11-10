import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostServiceService} from '../post-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-affichage-post-unique',
  templateUrl: './affichage-post-unique.component.html',
  styleUrls: ['./affichage-post-unique.component.css']
})
export class AffichagePostUniqueComponent implements OnInit {

  @Input() post: Post = new Post();
  constructor(private route: ActivatedRoute, private service: PostServiceService) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.get(+params.get('id')))
      .subscribe(post => this.post = post);
  }

  ngOnInit() {
  }

}
