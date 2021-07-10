import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/Router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
   this.router.navigate(['/cadastrar-usuario'])
 }

 login() {
   if(this.loginForm.valid) {
     console.log("Logado com sucesso!")
   }else{
     console.log("Usuário ou senha incorretos!")
   }
 }

}
