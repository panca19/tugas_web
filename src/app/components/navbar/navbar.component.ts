import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;

  constructor(private studentService: StudentService,
      private fb: FormBuilder) {
    this.form = this.fb.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addModalForm() {

  }
  get first () {
    return this.form.controls['first'];
  }

  get last () {
    return this.form.controls['last'];
  }


  get phone () {
    return this.form.controls['phone'];
  }

  get email () {
    return this.form.controls['email'];
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    console.log(this.form);
    this.form.markAsTouched();
    if (this.form.valid) {
      this.studentService.create(this.form.value).subscribe(() => {
        window.location.reload()
      });
    }
  }

}
