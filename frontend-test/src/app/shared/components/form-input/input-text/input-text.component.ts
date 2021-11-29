import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() formId: string = '';
  @Input() label: string = '';
  @Input() holder: string = '';
  @Input() validator: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
