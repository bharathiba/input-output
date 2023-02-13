import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
   email='bharathiba883851@gmail.com';
   password='123456';
   products : any =[
    this.email = '',
    this.password = '',
   ];
   child : any = [];
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.products = this.loginForm.value;
    this.router.navigate(['/product']);

    // if(this.loginForm.value.email==this.email && this.loginForm.value.password==this.password){
    //   localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
    //   this.router.navigate(['/product']);
    // }
    //  else {
    //   alert('Your User Name Or Password Is Wrong')
    // }
  }
}
