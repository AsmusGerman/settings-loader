import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public loadSettings() {
    // the settings dynamic import path should point explicitly to 'src/assets/' and have '.json' extension
    return from(import(`src/assets/${environment.settings}.json`)).pipe(
      // return the default property as the content of the json file (understand as the inner json object)
      map(json => json.default)
    );
  }
}
