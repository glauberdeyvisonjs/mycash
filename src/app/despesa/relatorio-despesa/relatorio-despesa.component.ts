import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-relatorio-despesa',
  templateUrl: './relatorio-despesa.component.html',
  styleUrls: ['./relatorio-despesa.component.scss']
})
export class RelatorioDespesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
