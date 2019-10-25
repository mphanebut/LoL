import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders(
      {
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'false',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET'
      }
    )
};


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // request = request.clone({
        //      headers: request.headers
        //         .append('X-Riot-Token', 'RGAPI-29b83a1a-b730-4954-a8bf-fd5fccf77280')
        // });
        return next.handle(request);
    }
}
