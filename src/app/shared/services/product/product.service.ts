import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProductRequest, IProductResponse } from '../../interfaces/product/product.interface';
import { CollectionReference, Firestore, addDoc, collectionData, deleteDoc, doc, docData, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { DocumentData, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url = environment.BACKEND_URL;
  public api = { products: `${this.url}/products` };
  public productCollection!: CollectionReference<DocumentData>;

  constructor(
    public http: HttpClient,
    private afs: Firestore
  ) {
    this.productCollection = collection(this.afs, 'products');
  }

  // ---------------------- Firebase -------------------------

  getAllFirebase() {
    return collectionData(this.productCollection, { idField: 'id' });
  }

  getAllByCategoryFirebase(name: string) {
    const productDocumentReference = query(collection(this.afs, 'products'), where('category.path', '==', name));
    return collectionData(productDocumentReference, { idField: 'id' });
  }

  // async getAllByCategoryFirebase(name: string) {
  //   const arr: DocumentData[] = [];
  //   const category = query(
  //     collection(this.afs, 'products'),
  //     where('category.path', '==', `${name}`)
  //   );
  //   const querySnapshot = await getDocs(category);
  //   querySnapshot.forEach((doc) => {
  //     arr.push({ ...doc.data(), id: doc.id });
  //   });
  //   return arr;
  // }

  // getOneFirebase(id: string) {
  //   const productDocumentReference = doc(this.afs, `products/${id}`);
  //   return docData(productDocumentReference, { idField: 'id' });
  // }

  getOneFirebase(id: string) {
    const productDocumentReference = doc(this.afs, `products/${id}`);
    return docData(productDocumentReference, { idField: 'id' });
  }

  createFirebase(dproduct: IProductRequest) {
    return addDoc(this.productCollection, dproduct);
  }

  updateFirebase(product: IProductRequest, id: string) {
    const productDocumentReference = doc(this.afs, `products/${id}`);
    return updateDoc(productDocumentReference, { ...product });
  }

  deleteFirebase(id: string) {
    const productDocumentReference = doc(this.afs, `products/${id}`);
    return deleteDoc(productDocumentReference);
  }

  // ---------------------- JSON -------------------------

  // getAll(): Observable<IProductResponse[]> {
  //   return this.http.get<IProductResponse[]>(this.api.products);
  // }

  // getAllByCategory(name: string): Observable<IProductResponse[]> {
  //   return this.http.get<IProductResponse[]>(`${this.api.products}?category.path=${name}`);
  // }

  // create(product: IProductRequest): Observable<IProductResponse> {
  //   return this.http.post<IProductResponse>(this.api.products, product);
  // }

  // read(id: number): Observable<IProductResponse> {
  //   return this.http.get<IProductResponse>(`${this.api.products}/${id}`)
  // }

  // update(product: IProductRequest, id: number): Observable<IProductResponse> {
  //   return this.http.patch<IProductResponse>(`${this.api.products}/${id}`, product);
  // }

  // delete(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.api.products}/${id}`);
  // }

}
