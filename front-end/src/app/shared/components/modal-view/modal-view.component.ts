import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent {

  @Input() width = '';
  @Input() height = '';
  @Output() closeModal = new EventEmitter();

  sendCloseModal() {
    this.closeModal.emit();
  }

}
