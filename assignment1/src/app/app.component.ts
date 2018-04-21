import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import { FormGroup,FormControl } from "@angular/forms";

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {

  arrayList: any[] = [];
  genderArray: any[] = [];

  userForm : FormGroup;
  
  constructor(private _listService: ListService, private _dropDownService: DropDownService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      'name' : new FormControl(''),
      'lastName': new FormControl(''),
      'age': new FormControl(''),
      'genderType': new FormControl()
    });
    this.genderArray = this._dropDownService.getDropDown();
  }


  submit(values) {
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      gender: values.genderType
    };
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
