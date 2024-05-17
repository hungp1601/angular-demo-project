import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class JwtService {
  private readonly TOKEN_KEY = "jwtToken";

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  destroyToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
