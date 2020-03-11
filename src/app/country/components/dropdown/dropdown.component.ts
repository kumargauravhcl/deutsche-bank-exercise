import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ISelect } from '../../models/ISelect';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() typeText: string;
  @Input() options: ISelect[];
  @Output() selectionChanged = new EventEmitter<ISelect>();
  selected: string;

  dropdownControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit(): void {}

  onChange(evnt) {
    this.selectionChanged.emit(this.options.find(x => x.value === evnt.value));
  }
}
