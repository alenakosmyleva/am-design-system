import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

/**
 * Placeholder directive that applies a background highlight color
 * to the host element.
 *
 * Usage:
 * ```html
 * <span amHighlight="var(--fill-selected)">Highlighted text</span>
 * ```
 */
@Directive({
  selector: '[amHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input() amHighlight = '';

  constructor(private readonly _el: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this._el.nativeElement.style.backgroundColor = this.amHighlight || '';
  }
}
