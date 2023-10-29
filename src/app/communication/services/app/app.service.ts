import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
type MessageCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private handler = new Subject<any>();
  public _isHome: boolean = false;
  public isContact: boolean = false;

  public get isHome() {
    return this._isHome;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  setIsHome(isHome: boolean) {
    this._isHome = isHome;
  }

  public get isDesktop() {
    if (isPlatformServer(this.platformId)) return true;
    const isDesktop = window.matchMedia("(min-width: 992px)");
    return isDesktop.matches;
  }

  public get isResponsive() {
    if (isPlatformServer(this.platformId)) return false;
    const is = window.matchMedia("(max-width:  991px)");
    return is.matches;
  }

  broadcast(type: string, payload: any = null) {
    this.handler.next({ type, payload });
  }

  subscribe(type: string, callback: MessageCallback): Subscription {
    return this.handler.pipe(
      filter(message => message.type === type),
      map(message => message.payload))
      .subscribe(callback);
  }
}
