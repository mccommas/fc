import { AfterViewInit, Component } from '@angular/core';
import {isNullOrUndefined} from 'util';

interface EmployeeRecord {
  recordId: string;
  created: string;
  employeeId: string;
  firstName: string;
  employeeType: string;
  employeeTypeId: string;
  lastName: string;
  location: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // Format: "(id,created,employee(id,firstname,employeeType(id), lastname),location)"
  //                        (id     ,created,    (id     ,fname  ,empType (id      )   ,lastName)   ,location)
  readonly inputPattern = /\(([^,]+),([^,]+),\s*\(([^,]+),([^,]+),([^(]+)\(([^)]+)\)\s*,([^)]+)\)\s*,([^)]+)\)/;

  private inputStrings = [
    '(403, 2016-10-20, (1774, Alice, Software Manager(201), Zachary), Nashua, NH)',
    '(404, 2016-11-15, (1803, Bob, Software Engineer (101), Yeoman), Bristol, CT)',
    '(404, 2016-11-15 (99, Bad data...',
    '(405, 2017-01-07, (1940, Carol, QA Engineer (102), Xerxes), Westford, MA)',
  ];

  public title = 'Employee Records';
  public employeeRecords: EmployeeRecord[];

  ngAfterViewInit() {
    setTimeout(() => this.readEmployeeRecords());
  }

  private readEmployeeRecords() {
    this.employeeRecords = [];

    for (const s of this.inputStrings) {
      const parts = this.inputPattern.exec(s);

      if (!isNullOrUndefined(parts)) {
        this.employeeRecords.push({
          recordId: parts[1].trim(),
          created: parts[2].trim(),
          employeeId: parts[3].trim(),
          firstName: parts[4].trim(),
          employeeType: parts[5].trim(),
          employeeTypeId: parts[6].trim(),
          lastName: parts[7].trim(),
          location: parts[8].trim()
        });
      }
      else {
        console.error('Bad format: ' + s);
      }
    }
  }
}
