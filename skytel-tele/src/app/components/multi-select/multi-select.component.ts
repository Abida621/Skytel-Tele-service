import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit{

  standalone: true;
  selectState = new FormControl('');
  dataSource: any[] = [];
  @Input() readonly: boolean = false;
  @Input() value: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`assets/states.json`).subscribe((res: any) => {
      this.dataSource = res;
      console.log(this.dataSource);
      
    })
  }

  isSelected(optionId: number): boolean {
    return this.value.includes(optionId);
  }
  toggleSelection(optionId: number) {
    if (this.isSelected(optionId)) {
      this.value = this.value.filter((id) => id !== optionId);
    } else {
      this.value = [...this.value, optionId];
    }
    console.log(this.value);
    
  }

  isDisabled(): boolean {
    return this.readonly;
  }
}
