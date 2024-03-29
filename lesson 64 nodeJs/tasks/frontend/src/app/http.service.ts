import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private readonly url = environment.apiUrl;
    private readonly options = { withCredentials: true };

    get<T>(path: string){
        return this.httpClient.get<T>(`${this.url}/${path}`, this.options);
    }
    post<T>(path: string, body: any){
        return this.httpClient.post<T>(`${this.url}/${path}`, body, this.options)
    }
    put<T>(path: string, body: any){
        return this.httpClient.put<T>(`${this.url}/${path}`, body, this.options)
    }
    delete<T>(path: string){
        return this.httpClient.delete<T>(`${this.url}/${path}`,this.options)
    }
  constructor(private httpClient: HttpClient) { }
}
