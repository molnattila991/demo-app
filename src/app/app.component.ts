import { Component, Inject } from '@angular/core';
import { INJECTION_TOKEN, IRootStateQuery, IToaster } from 'projects/core/src/public-api';
import { UiSettingsService } from './services/ui-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private uiSettings: UiSettingsService,
    @Inject(INJECTION_TOKEN.STATE.QUERY.ROOT) public query: IRootStateQuery,
    @Inject(INJECTION_TOKEN.TOOLS.TOASTER) public toaster: IToaster
  ) {
  }

  toggle() {
    this.toaster.error("alma", "ALMA");
    this.uiSettings.toggle();
  }
}
