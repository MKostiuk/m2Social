import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../post-service.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  posts= [];

  constructor(private service: PostServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(post => this.posts = post);
  }

}
