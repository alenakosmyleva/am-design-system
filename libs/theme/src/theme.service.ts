import { Injectable, signal, computed } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

/**
 * Service to toggle between light and dark themes.
 * Sets the `data-bs-theme` attribute on `document.body` so that
 * Bootstrap + our semantic CSS custom properties switch automatically.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _mode = signal<ThemeMode>(this._getInitialMode());

  /** Current theme mode as a readonly signal */
  readonly mode = this._mode.asReadonly();

  /** Whether the current mode is dark */
  readonly isDark = computed(() => this._mode() === 'dark');

  /** Set theme to a specific mode */
  setMode(mode: ThemeMode): void {
    this._mode.set(mode);
    this._applyMode(mode);
  }

  /** Toggle between light and dark */
  toggle(): void {
    const next = this._mode() === 'light' ? 'dark' : 'light';
    this.setMode(next);
  }

  /** Read initial mode from the DOM or default to light */
  private _getInitialMode(): ThemeMode {
    if (typeof document === 'undefined') {
      return 'light';
    }
    const current = document.body.getAttribute('data-bs-theme');
    return current === 'dark' ? 'dark' : 'light';
  }

  /** Apply the mode to the DOM */
  private _applyMode(mode: ThemeMode): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.setAttribute('data-bs-theme', mode);
  }
}
