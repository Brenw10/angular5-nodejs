import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: Array<Object>;
  displayColumns: Array<String>;

  constructor() {
    this.users = [
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
      { name: 'User', login: 'usys', email: 'usys@its.jnj.com', wwid: '11223344' },
    ];
    this.displayColumns = ['name', 'login', 'email', 'wwid', 'action'];
  }

  ngOnInit() {
  }

}
