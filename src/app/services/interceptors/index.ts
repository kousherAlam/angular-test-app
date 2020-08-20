import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptorService } from './main-interceptor.service';
import { TimeoutInterceptorService, DEFAULT_TIMEOUT } from './timeout-interceptor.service';

export const interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptorService, multi: true },
    { provide: DEFAULT_TIMEOUT, useValue: 120000 }
];
