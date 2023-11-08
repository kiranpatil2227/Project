import { Component, OnInit,ViewChild } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
//import { FormComponent } from '../form/form.component';
import { User } from '../user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaginationControlsComponent } from 'ngx-pagination';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})

export class UserdataComponent implements OnInit{
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterText:string='';
  users: any []= [];
  page:number=1;
  count:number=0;
  tablesize:number=5;
  tableSizes:any=[5,10,15,20];
  constructor(private userService: UserdetailsService) {}

  
  ngOnInit() {
  
    this.userService.getUser().subscribe((data: any) => {
      this.users = data;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      //console.log('usertabledata--',data);
    });
  }
  
  onTableDataChange(event:any){
this.page=event;
this.users;
  }

  onTableSizeChange(event:any):void{
  this.tablesize=event.target.value;
  this.page=1;
  this.users;
  }
}
