import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   }
   mobileQuery: MediaQueryList;

  ngOnInit(): void {
  }

  fillerNav = [
    {
      name: "Inicio", route: '/inicio', icon:'home'
    },
    {
      name: "Registro", route: '/registro', icon:'home'
    }
  ];


  fillerContent = Array.from({length: 50}, () => 'pepita');

  private _mobileQueryListener: () => void;

  shouldRun = true;

  ngOnDestroy(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
