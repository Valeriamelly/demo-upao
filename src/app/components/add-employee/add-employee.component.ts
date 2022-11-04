import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";
  id: string | null; //declaramos variable id

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private snackBar:MatSnackBar,
    private aRoute: ActivatedRoute //declaramos clase 
  ) {this.id = this.aRoute.snapshot.paramMap.get('id') 
    console.log(this.id)
}
    //acceder al id
  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['',[Validators.required, Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]],
    })
    
  }

  saveEmploye(){
    
    const employee: Employee={
      id:0,
      name:this.myForm.get('name')?.value,
      phone:this.myForm.get('phone')?.value,
      email:this.myForm.get('email')?.value,
    };

    this.employeeService.addEmployee(employee)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/employees']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
}}
