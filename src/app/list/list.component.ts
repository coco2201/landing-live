import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{


  ngOnInit(): void {
      this.runMarquee();
  }

  protected runMarquee(){
    // $("div.marquee").marquee({
    //   duration: 10000,
    //   gap: 50,
    //   delayBeforeStart: 2,
    //   direction: "left",
    //   pauseOnHover: true,
    //   duplicated: false
    // })
    // setTimeout(() => {
    //
    // },20000)
  }

}
