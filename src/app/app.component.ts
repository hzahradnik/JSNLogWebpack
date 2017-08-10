import { Component, OnInit, Inject } from '@angular/core';
import { JL } from 'jsnlog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    @Inject('JSNLOG')
    private JL: JL.JSNLog
  ) {

  }

  ngOnInit() {
    // Logging-Demo
    //this.JL().trace("TRACE will only appear in Console");
    //this.JL().debug("DEBUG will only appear in Console");
    //this.JL().info("INFO will only appear in Console");
    //this.JL().warn("WARN will only appear in Console");
    //this.JL().error("ERROR will appear in DB&Console");
    //this.JL().fatal("FATAL will appear in DB&Console");
  }
}
