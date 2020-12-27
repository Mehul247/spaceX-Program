import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-spece-x-programs',
  templateUrl: './spece-x-programs.component.html',
  styleUrls: ['./spece-x-programs.component.scss']
})
export class SpeceXProgramsComponent implements OnInit {
  spaceXData: any[] = [];
  filteredSpaceXData: any[] = [];
  years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  filter = [true, false]
  filters = [
    { value: '', param: 'launch_year' },
    { value: '', param: 'launch_success' },
    { value: '', param: 'launch_success' }
  ];

  constructor(private api: ApiService) {
    this.api.get().subscribe(res => {
      this.spaceXData = res;
      this.filteredSpaceXData = res;
      console.log("response--", this.spaceXData)
    });
  }

  ngOnInit() {

  }

  applyFilter(event, filterOption) {
    filterOption.value = event.target.value === 'true' || event.target.value === 'false' ? event.target.value === 'true' : event.target.value;
    this.filteredSpaceXData = this.spaceXData.filter(data => data[filterOption.param] == filterOption.value);
  }
}
