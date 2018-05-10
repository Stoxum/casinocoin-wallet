import { Component, OnInit } from '@angular/core';
import { LogService } from '../../../providers/log.service';
import { AppConstants } from '../../../domain/app-constants';
import { ElectronService } from '../../../providers/electron.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private logger: LogService,
              private electronService: ElectronService) {
          this.logger.debug("### INIT Support ###");
  }

  ngOnInit() {

  }

  openFAQ(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://stoxum.org/faq/");
  }

  openReddit(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://www.reddit.com/r/stoxum/");
  }

  openDiscord(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("http://stoxum.chat/");
  }

  openTelegram(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("http://t.me/stoxum");
  }

  openLinkedin(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://www.linkedin.com/company/stoxum/");
  }

  openWebsite(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://stoxum.org");
  }

  openGithub(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://github.com/Stoxum/stoxum-wallet-electron/issues");
  }

  openContactForm(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://stoxum.org/contact");
  }

  openEmail(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("mailto:support@stoxum.org");
  }

  openFacebook(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://www.facebook.com/Stoxum/");
  }

  openTwitter(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://twitter.com/Stoxum");
  }

  openMedium(){
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://twitter.com/Stoxum");
  }

  openBitcoinTalk() {
    event.preventDefault();
    this.electronService.remote.shell.openExternal("https://bitcointalk.org/index.php?topic=3318743");
  }
}
