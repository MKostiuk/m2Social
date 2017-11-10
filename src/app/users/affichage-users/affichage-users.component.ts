import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../../posts/post-service.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-affichage-users',
  templateUrl: './affichage-users.component.html',
  styleUrls: ['./affichage-users.component.css']
})
export class AffichageUsersComponent implements OnInit {

  users= [];

  constructor(private service: UserService) {
    this.service.getAll().subscribe(u => this.users = u);
  }

  ngOnInit() {
  }

}
