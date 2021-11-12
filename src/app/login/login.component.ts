import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  submitting = false
  hasError = false
  hidePass = true
  private subs = new Subscription()
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.createFormValues()
    this.createForm()
    if (this.route.snapshot.paramMap.get('success')) {
      if (this.route.snapshot.paramMap.get('success') === 'true') {
        Swal.fire({
          icon: 'success',
          title: 'You have been successfully logged out!',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['login'])
        })
      }
    }
  }

  createFormValues() {
    this.formValues = {
      email: ['', Validators.required],
      password: ['', Validators.required]
    }
  }

  createForm() {
    this.form = this.fb.group(this.formValues)
  }

  // convenience getter for form controls
  get f() {
    if (this.form && this.form.controls) {
      return this.form.controls
    }
  }

  submitForm() {
    this.submitting = true
    if (!this.form.valid) {
      this.submitting = false
      this.hasError = true
      return
    }
    const params = this.cleanFormInput(this.form.value)
    this.subs.add(
      this.userService.login(params).subscribe(data => {
        if (data) {
          Swal.fire({
            title: 'You have been succesfully logged in!',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          }).then(() => {
            this.submitting = false
            this.router.navigate(['home'])
          })
        }
      }, error => {
        if (error) {
          Swal.fire({
            title: 'Error!',
            text: error.msg ? error.msg : 'Something Went Wrong',
            icon: 'error',
            timer: 2000,
            showConfirmButton: false
          }).then(() => {
            this.hasError = true
            this.submitting = false
            console.error(error)
          })
        }
      })
    )
  }

  cleanFormInput(form: any) {
    // TODO: Implement Some Way To Clean Before Sending To Service
    return form
  }

  ngOnDestroy() {
    this.form.reset()
    this.subs.unsubscribe()
  }

}

