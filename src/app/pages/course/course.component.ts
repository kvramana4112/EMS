import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  searchTerm: string;
  countries: Country[];
  term: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/technologies.json')
    .subscribe((data: Country[]) => {
      this.countries = data;
    });
  }

}
