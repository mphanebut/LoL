import { Component, OnInit, Input } from '@angular/core';
// tslint:disable-next-line:cannot-find-import
import svgs from '../../../assets/svgs.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() viewBox: string;
  svgPath: SafeHtml;
  svgTitle: string;
  svgViewBox: string;
  svgObj = svgs.svgs;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // console.log(this.svgObj[this.icon]);
    this.svgPath = this.sanitizer.bypassSecurityTrustHtml(this.svgObj[this.icon]);
    this.svgTitle = this.title;
    this.svgViewBox = this.viewBox;
  }

}
