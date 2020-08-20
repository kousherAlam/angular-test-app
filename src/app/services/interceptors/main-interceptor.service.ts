import { IServerResponse } from './../../models/common.vm';
import { environment } from './../../../environments/environment';
import { LocalstorageService } from './../local-storage/localstorage.service';
import { LoaderService } from './../../share-module/loader/loader.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainInterceptorService {

  constructor(
    private loaderSrv: LoaderService,
    private localStorageSrv: LocalstorageService,
    private router: Router,
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.localStorageSrv.getToken();

    const reqClone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      url: `${environment.baseURL}${req.url}`,
    });


    return next.handle(reqClone).pipe(
      map((data: HttpResponse<any>) => {
        this.loaderSrv.open();
        if (data.type !== 0) {
          const responseData: IServerResponse<any> = data.body;
          if (!responseData || !responseData.isSuccess) {

            if (reqClone.url.indexOf('/uploaded_files/') > -1) {
              return data;
            } else {
              const message = responseData.message;
              console.log('Error is here', responseData);
              return data;
            }
          } else if (data.status === 201 && responseData.message !== null) {
            return data;
          }// else if (data.status === 200 && responseData.message !== null) {
          //   this.notifier.successTrayNotification(responseData.message);
          //   return data;
          // }
        } else if (data.status === 500) {
          return data;
        } else if (data.status === 0) {
          console.log('on error 1');
          return data;
        }
        return data;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
        if (err.status === 0) {
          
        } else if (err.status === 401) {
          
          this.router.navigate(['/login']);
        } else {
          
        }
        return throwError(err);
      }),
      finalize(() => {
        this.loaderSrv.close();
      })
    );
  }
}
