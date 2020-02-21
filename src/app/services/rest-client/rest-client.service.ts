import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(
    private _http: HttpClient
  ) { }

  public get<T>(url: string): Observable<T> {
    return this._http.get<T>(url).pipe(
      catchError(this._handleError)
    );
  }

  public getHtml(url: string): Observable<string> {
    return this._http.get(url, { responseType: 'text' }).pipe(
      catchError(this._handleError)
    );
  }

  public getBlogPage(url: string): Observable<any> {
    const originUrl = '*';
    const headers = new HttpHeaders()
                    .set('Access-Control-Allow-Origin', originUrl);
    
    return this._http.get(url).pipe(
      catchError(this._handleError)
    );
  }

  public post(url: string, body: any): Observable<any> {
    return this._http.post(url, body).pipe(
      // retry(3), // retry a failed request up to 3 times
      catchError(this._handleError)
    );
  }

  public put(url: string, body: any): Observable<any> {
    return this._http.put(url, body);
  }

  public delete(url: string): Observable<any> {
    return this._http.delete(url);
  }

  private _handleError(error: HttpErrorResponse): Observable<never> {
    // For dev purposes only
    // console.error(error);

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `Body was: ${error.error}`, error.error
      );
    }
    // return an observable with a user-facing error message
    return throwError(error.error.message);
  }
}
