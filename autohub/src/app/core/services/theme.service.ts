import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../models/theme.model';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.apiUrl}/themes`);
  }

  getThemeById(id: string): Observable<Theme> {
    return this.http.get<Theme>(`${this.apiUrl}/themes/${id}`);
  }

  addPost(themeId: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(`${this.apiUrl}/themes/${themeId}`, { postText });
  }

  editPost(themeId: string, postId: string, postText: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/themes/${themeId}/posts/${postId}`, { postText });
  }

  deletePost(themeId: string, postId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/themes/${themeId}/posts/${postId}`);
  }

  likePost(postId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/likes/${postId}`, {});
  }
}