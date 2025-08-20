import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface for Theme
export interface Theme {
  _id?: string;
  themeName: string;
  description?: string; 
  imageUrl?: string;    
  posts: Post[];
  userId: string;
  created_at?: string;
  updatedAt?: string;
}

// Interface for Post
export interface Post {
  _id?: string;
  text: string;
  userId: string;
  themeId: string;
  likes?: string[];
  created_at?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private apiUrl = 'http://localhost:3000/api/themes';

  constructor(private http: HttpClient) {}

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.apiUrl);
  }

  getThemeById(id: string): Observable<Theme> {
    return this.http.get<Theme>(`${this.apiUrl}/${id}`);
  }

  createTheme(themeName: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(this.apiUrl, { themeName, postText });
  }

  addPost(themeId: string, postText: string): Observable<Theme> {
    return this.http.post<Theme>(`${this.apiUrl}/${themeId}`, { postText });
  }

  editPost(themeId: string, postId: string, postText: string): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${themeId}/posts/${postId}`, { postText });
  }

  deletePost(themeId: string, postId: string): Observable<Post> {
    return this.http.delete<Post>(`${this.apiUrl}/${themeId}/posts/${postId}`);
  }

  likePost(postId: string): Observable<any> {
    return this.http.put(`http://localhost:3000/api/likes/${postId}`, {});
  }
}