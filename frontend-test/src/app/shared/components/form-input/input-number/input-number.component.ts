import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() form: FormGroup | undefined;
  @Input() formId: string = '';
  @Input() label: string = '';
  @Input() holder: string = '';
  @Input() validator: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
