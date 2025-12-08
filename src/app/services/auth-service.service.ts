import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {




  private apiUrl = 'http://localhost:3000/utilisateurs';  // JSON Server endpoint
  private tokenkey='authToken';
  private userkey='authUser';

  constructor(private http: HttpClient) {}

  /**
   * Register a new user
   */
  register(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, user);
  }

  /**
   * Get all registered users (optional)
   */
  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  /**
   * Check if an email already exists
   */
  emailExists(email: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl}?email=${email}`);
  }




  // LOGIN + TOKEN
      login(email: string, password: string): Observable<Utilisateur | null> {
        return this.http
          .get<Utilisateur[]>(`${this.apiUrl}?email=${email}&password=${password}`)
          .pipe(
            map(users => {
              if (users.length === 1) {

                const user = users[0];

                // 👉 Génération d’un token simple
                const token = this.generateToken(user);

                // 👉 Stockage du token
                localStorage.setItem(this.tokenkey, token);

                return user;
              }

              return null;
            })
          );
      }

      // Fonction qui génère un token très simple
      private generateToken(user: Utilisateur): string {
        return btoa(user.email + '-' + new Date().getTime());
      }

      // Vérifie connexion
      isLogged(): boolean {
        return !!localStorage.getItem(this.tokenkey);
      }

      // Logout
      logout() {
        localStorage.removeItem(this.tokenkey);
      }

}
