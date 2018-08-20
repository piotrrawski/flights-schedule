import { Component, Input } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() flight: Flight;

  showHide: false;

  refresh(): void {
    window.location.reload();
  }
}
