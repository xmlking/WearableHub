import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {User} from '../../core/models/user.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  submitted = false;

  user: User;
  isLoggedIn$: Observable<boolean>;
  loginError$: Observable<string>;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private modalActions: any,  public router: Router) {

    this.user = new User();

    // using Function
    this.isLoggedIn$ = store.select<boolean>((s: any) => s.modal.open);
    // nested selection
    // this.isLoggedIn$ = store.select<boolean>('modal', 'open');
    // this.loginError$ = store.select<any>(s => s.modal.open);
  }

  ngOnInit() {

    // this.isLoggedIn$.filter(isLoggedIn => !!isLoggedIn).subscribe(_ => this.store.dispatch(this.modalActions.close('login success')));
  }

  dismiss(reason?: string) {
    this.store.dispatch(this.modalActions.dismiss(reason));
  }

  close(reason?: string) {
    this.store.dispatch(this.modalActions.close(reason));
  }

  submit(user: User) {
    this.submitted = true;
    if ( user.isValidEmail() ) { return; }
    // this.store.dispatch(this.authActions.loginUser(form.value));
    localStorage.setItem('id_token', 'ccccc');
    this.store.dispatch(this.modalActions.close('login success'));
    // TODO
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    // this.modalActions.cleanAlerts();
    // console.log('LoginComponent ngOnDestroy')
  }

}
