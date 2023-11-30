import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategoryRequest, ICategoryResponse } from '../../interfaces/category/category.interface';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { DocumentData, collection } from '@firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // public url = environment.BACKEND_URL;
  // public api = { categories: `${this.url}/categories` };
  public categoryCollection!: CollectionReference<DocumentData>;

  constructor(
    private http: HttpClient,
    private afs: Firestore
  ) { 
    this.categoryCollection = collection(this.afs, 'categories');
  }

  // ---------------------- Firebase --------------------------

  getAllFirebase() {
    return collectionData(this.categoryCollection, { idField: 'id' });
  }

  getOneFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `categories/${id}`);
    return docData(categoryDocumentReference, { idField: 'id' });
  }

  createFirebase(category: ICategoryRequest) {
    return addDoc(this.categoryCollection, category);
  }

  updateFirebase(category: ICategoryRequest, id: string) {
    const categoryDocumentReference = doc(this.afs, `categories/${id}`);
    return updateDoc(categoryDocumentReference, {...category});
  }

  deleteFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `categories/${id}`);
    return deleteDoc(categoryDocumentReference);
  }

  // ---------------------- JSON --------------------------

  // getAll(): Observable<ICategoryResponse[]> {
  //   return this.http.get<ICategoryResponse[]>(this.api.categories);
  // }

  // create(category: ICategoryRequest): Observable<ICategoryResponse> {
  //   return this.http.post<ICategoryResponse>(this.api.categories, category);
  // }

  // update(category: ICategoryRequest, id: number): Observable<ICategoryResponse> {
  //   return this.http.patch<ICategoryResponse>(`${this.api.categories}/${id}`, category);
  // }

  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.api.categories}/${id}`);
  // }

}
