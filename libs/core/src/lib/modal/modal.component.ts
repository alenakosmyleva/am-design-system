import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Placeholder modal component.
 * TODO: Implement full modal with backdrop, animation, and accessibility.
 */
@Component({
  selector: 'am-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal d-block" tabindex="-1" role="dialog" *ngIf="open">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              (click)="close()"
            ></button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <ng-content select="[modal-footer]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() title = '';
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  close(): void {
    this.open = false;
    this.openChange.emit(false);
  }
}
