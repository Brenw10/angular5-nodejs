import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
  users: MatTableDataSource<Object>;
  displayColumns: Array<String>;

  constructor(private apiService: ApiService) {
    apiService.getAllUsers().subscribe((users: Array<Object>) => this.users = new MatTableDataSource(users));
    this.displayColumns = ['name', 'login', 'email', 'wwid', 'action'];
  }

  filter(query: string) {
    this.users.filter = query;
  }

}