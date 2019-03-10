import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  public searchFormGroup: FormGroup;
  public submitted: boolean = false;

  @Input()
  public set value(city: string) {

    if (!this.searchFormGroup) {
      return;
    }

    this.searchFormGroup.patchValue({
      city
    });
  }

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter(null);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      city: [null, [Validators.required]]
    });
  }

  get form() { return this.searchFormGroup.controls; }

  public search(): void {
    this.submitted = true;
    if (this.searchFormGroup.invalid) {
      return;
    }
    this.onSearch.emit(this.searchFormGroup.value.city);
  }
}
