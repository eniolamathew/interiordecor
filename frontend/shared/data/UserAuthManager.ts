import { jwtDecode } from "jwt-decode";

class TokenManager {
  private tokenKey: string = "accesstoken";
  private _token: string | null = null;
  private _user: any | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeToken();
    }
  }

  // Initialize the token in the client-side only
  private initializeToken(): void {
    const storedToken = this.getToken();
    if (storedToken) {
      this.processToken(storedToken);
    }
  }

  processToken(token: string): void {
    if (!token) {
      this._user = null;
      return;
    }

    this._token = token;
    this._user = null;

    try {
      this._user = jwtDecode(token);
    } catch (error) {
      this._user = null;
      console.error("Failed to decode token:", error);
    }
  }

  getToken(): string | null {
    if (typeof window === "undefined") {
      return null;
    }

    let result = window.localStorage.getItem(this.tokenKey);
    if (!result || result.length < 10) {
      return "";
    }
    return result;
  }

  setToken(token: string): void {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(this.tokenKey, token);
      this.processToken(token);
    }
  }

  updateToken(newToken: string | null): void {
    if (typeof window !== "undefined") {
      if (newToken) {
        this.setToken(newToken);
      } else {
        this.removeToken();
      }
    }
  }

  removeToken(): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(this.tokenKey);
      this._token = null;
      this._user = null;
    }
  }

  getEmail(): string | null {
    return this._user?.email || null;
  }

  getUser(): any | null {
    return this._user;
  }

  isTokenExpired(): boolean {
    if (!this._user || !this._user.exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;
    return this._user.exp < currentTime;  
  }
}

export default new TokenManager();