import { Pipe, PipeTransform } from '@angular/core';

/**
 * Placeholder pipe that formats a Date to a locale string.
 *
 * Usage:
 * ```html
 * {{ someDate | amFormatDate:'en-US' }}
 * ```
 */
@Pipe({
  name: 'amFormatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date | string | number, locale = 'en-US'): string {
    if (!value) {
      return '';
    }
    const date = value instanceof Date ? value : new Date(value);
    return date.toLocaleDateString(locale);
  }
}
