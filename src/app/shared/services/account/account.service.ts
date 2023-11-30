import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ILogin } from '../../interfaces/account/account.interface';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public isUserLogin$ = new Subject<boolean>;
  public url = environment.BACKEND_URL;
  public api = { auth: `${this.url}/auth` };

  constructor(
    private http: HttpClient,
    private fireStore: Firestore
  ) { }
  
  login(credential: ILogin): Observable<any> {
    return this.http.get<any>(`${this.api.auth}?email=${credential.email}&password=${credential.password}`)
  }

  updateUserData(userId: string, newData: any): Promise<void> {
    const userDocRef = doc(this.fireStore, 'users', userId);
    return setDoc(userDocRef, newData, { merge: true });
  }

}
