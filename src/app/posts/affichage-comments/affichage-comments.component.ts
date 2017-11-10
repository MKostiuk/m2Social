import {Component, Input, OnInit} from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Post} from '../post';

@Component({
  selector: 'app-affichage-comments',
  templateUrl: './affichage-comments.component.html',
  styleUrls: ['./affichage-comments.component.css']
})
export class AffichageCommentsComponent implements OnInit {

  comments= [];

  @Input() p: Post = new Post();
  constructor(private service: PostServiceService) {
    this.service.getComments(1).subscribe(c => this.comments = c);
  }

  ngOnInit() {
  }

}
