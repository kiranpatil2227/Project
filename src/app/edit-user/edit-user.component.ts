import { Component,Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialize the form with the user data
    this.editForm = this.fb.group({
      first_name: [data?.first_name || '', Validators.compose([Validators.required, Validators.minLength(4)])],
      last_name: [data?.last_name || '', Validators.required],
      email: [data?.email || '', Validators.compose([Validators.required, Validators.email])],
      phone: [data?.phone || '', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      dob: [data?.dob || '', Validators.required],
      gender: [data?.gender || '', Validators.required],
      password: [data?.password || '', Validators.required],
      confpassword: [data?.password || '', Validators.required],
    });
    console.log(data);
  }
  get war(){
    return this.editForm.controls;
    }
    submitForm() {
      if (this.editForm.valid) {
        const editedUserData = this.editForm.value;
        // Close the dialog and pass the edited user data back to the parent component.
        this.dialogRef.close(editedUserData);
      }
    }
}
