import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) {
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

  get phone () {
    return this.form.controls['phone'];
  }
  get first () {
    return this.form.controls['first'];
  }
  get last () {
    return this.form.controls['last'];
  }
  get email () {
    return this.form.controls['email'];
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.modal.close(this.form.value);
    }
  }

}
