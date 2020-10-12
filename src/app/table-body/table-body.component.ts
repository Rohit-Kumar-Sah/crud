import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList, DoCheck, Input } from '@angular/core';
import { from } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: '[app-table-body]',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit{
  
  mydata = []
  constructor() {
    this.mydata=this.getdata()
 }
getdata()
{
  // fetch('https://jsonblob.com/api/da4f0806-fe2c-11ea-b36f-6f286c156053').then(result => result.json()).then(data => { this.mydata = data;  })
  this.mydata =[
    {
      "Id": 1,
      "Name": "Rohit",
      "skills": "Angular",
      "Designation": "PAT",
      "Company": "CTS",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2HoveSx5prCIWhGymQ6z5-G-F3rejFBbVuA&usqp=CAU"
    },
    {"Id": 2,
      "Name": "Kumar",
      "skills": "Angular",
      "Designation": "PAT",
      "Company": "CTS",
     "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2HoveSx5prCIWhGymQ6z5-G-F3rejFBbVuA&usqp=CAU"
    },
    {
     "Id": 3,
      "Name": "Sah Kumar",
      "skills": "Angular",
      "Designation": "PAT",
      "Company": "CTS",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2HoveSx5prCIWhGymQ6z5-G-F3rejFBbVuA&usqp=CAU"
    }
    ]
  return this.mydata;
}
@ViewChild('newname') newname : ElementRef;
@ViewChild('b') b : ElementRef;
@Input('name') name : string; 
 ngOnInit(): void {
 }
  ar=[]
  ngDoCheck(){
       
 
  from(this.mydata)
  .pipe(
    filter(data=> data.Name===this.name),
  map(data=>{this.ar=[...this.ar,data]; return this.ar})
  )

  .subscribe(data=>this.mydata=data)

  }
  
  
 
  hide="none"; show="table-cell";
  @ViewChildren('com') com : QueryList<ElementRef>;
  @ViewChildren('des') des : QueryList<ElementRef>;
  @ViewChildren('ski') ski : QueryList<ElementRef>;
  @ViewChildren('nc') nc : QueryList<ElementRef>;
  @ViewChildren('nd') nd : QueryList<ElementRef>;
  @ViewChildren('ns') ns : QueryList<ElementRef>;
  @ViewChildren('tnc') tnc : QueryList<ElementRef>;
  @ViewChildren('tnd') tnd : QueryList<ElementRef>;
  @ViewChildren('tns') tns : QueryList<ElementRef>;
  
 
 edit(i: any){
  this.com.toArray()[i].nativeElement.style.display=this.hide;
  this.des.toArray()[i].nativeElement.style.display=this.hide;
  this.ski.toArray()[i].nativeElement.style.display=this.hide;

  this.tnc.toArray()[i].nativeElement.style.display=this.show;
  this.tnd.toArray()[i].nativeElement.style.display=this.show;
  this.tns.toArray()[i].nativeElement.style.display=this.show;
}
 
 delete(i: number)
 {
  this.mydata = this.mydata.filter((item,index)=> index!=i )
 }
 save(i: any){
  
   this.com.toArray()[i].nativeElement.style.display=this.show;
   this.des.toArray()[i].nativeElement.style.display=this.show;
   this.ski.toArray()[i].nativeElement.style.display=this.show;
 
   this.tnc.toArray()[i].nativeElement.style.display=this.hide;
   this.tnd.toArray()[i].nativeElement.style.display=this.hide;
   this.tns.toArray()[i].nativeElement.style.display=this.hide;
   
   this.mydata[i].Company = this.nc.toArray()[i].nativeElement.value==""?this.mydata[i].Company: this.nc.toArray()[i].nativeElement.value;
   this.mydata[i].Designation = this.nd.toArray()[i].nativeElement.value==""?this.mydata[i].Designation:this.nd.toArray()[i].nativeElement.value;
   this.mydata[i].skills = this.ns.toArray()[i].nativeElement.value==""?this.mydata[i].skills:this.ns.toArray()[i].nativeElement.value;
 
   this.com.toArray()[i].nativeElement.innerHTML = this.mydata[i].Company;
   this.des.toArray()[i].nativeElement.innerHTML = this.mydata[i].Designation;
   this.ski.toArray()[i].nativeElement.innerHTML = this.mydata[i].skills;
}
 
 saveNew(m,f,newname: any,newcompany: any,newdesig: any,newskill: any )
 {


  


  if(newname.value=="" ||  newskill.value== "" || newdesig.value=="" || newcompany.value=="" || (m.checked==false && f.checked==false)){
    alert("Please Fill Mandatory feilds")
    
  }
  else{
    let male="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2HoveSx5prCIWhGymQ6z5-G-F3rejFBbVuA&usqp=CAU"
    let female="https://visualpharm.com/assets/455/Person%20Female-595b40b75ba036ed117da137.svg"
  let gender= m.checked? "male": "female" ;
  let imgToRender =gender=="male"? male :female;
  this.mydata=[...this.mydata,
    {
      "gender": gender,
      "Id": this.mydata.length,
      "Name": newname.value,
      "skills": newskill.value,
      "Designation": newdesig.value,
      "Company": newcompany.value,
      "HCM": "Alex",
     "image": imgToRender
    }];
    newname.value="";
    newskill.value="";
    newdesig.value="";
    newcompany.value="";
  
  }
 }


} 

