import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'volunteer-register',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  animationOptions: AnimationOptions = {
    path: '/assets/animations/collaboration.json',
  }
  isBiggerThanTablet = true;
  private subscription: Subscription = new Subscription();
  private readonly breakpointObservable = this.breakpoint
  .observe(['(max-width: 1023px)'])
  .pipe(
    distinctUntilChanged()
  );

  constructor(private breakpoint: BreakpointObserver) {}

  ngOnInit(): void {
    this.subscription.add(this.breakpointObservable.subscribe((breakpoints: BreakpointState) => {
        this.isBiggerThanTablet = !breakpoints.matches
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
