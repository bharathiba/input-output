import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input () product: any=[];
@Output () form = new EventEmitter();
 childrentoparent: any = { email: '', password: '',};
 regiterForm! : FormGroup


  constructor(
    private formBuilder : FormBuilder, private router: Router
  ) { }

  ngOnInit(): void {
    this.regiterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
send(){
  this.form.emit(this.regiterForm.value)
  // this.router.navigate(['/new']);

}
}
