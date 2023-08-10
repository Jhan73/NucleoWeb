import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { AreaService } from '../../../services/area.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent implements OnInit{
  areaUrl: string = ''
  area: any = {}
  constructor(private router: Router, private dataService: DataService, private areaService: AreaService) {}
  ngOnInit(): void {
    this.areaUrl = this.router.url.split('/')[2];
    this.getArea()
  }

  areas: any[] = [];

  getArea(){
    this.areaService.getArea(this.areaUrl)
      .subscribe(
          data => {this.area = data;
          console.log('Area',this.area);
        }
      );
  }

}
