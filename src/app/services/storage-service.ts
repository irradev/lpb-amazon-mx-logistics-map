import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly localStorage = window.localStorage;

  get<T>(key: string): T | null {
    try {
      const item = this.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error al obtener el item:', error);
      return null;
    }
  }

  set<T>(key: string, value: T) {
    try {
      this.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al establecer el item:', error);
    }
  }

  remove(key: string) {
    try {
      this.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar el item:', error);
    }
  }

  clear() {
    try {
      this.localStorage.clear();
    } catch (error) {
      console.error('Error al limpiar el localStorage:', error);
    }
  }

}
