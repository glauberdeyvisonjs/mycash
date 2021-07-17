import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.putEvents();
  }
  putEvents(){
    const desktop = document.getElementById('desktop');
    const mobile = document.getElementById('mobile');

    mobile.addEventListener('click', function(){
      desktop.classList.toggle('active');
    })
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
