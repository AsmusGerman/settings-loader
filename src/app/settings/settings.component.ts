import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public settings: any;
  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.loadSettings().subscribe(bSettings => {
      console.log(bSettings);
      this.settings = bSettings;
    });
  }

}
