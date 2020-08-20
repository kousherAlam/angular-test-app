import { LoaderService } from './loader.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isOpen = true;
  constructor(
    private loaderSrv: LoaderService,
    private changeDetectRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.loaderSrv.loaderSubject.subscribe(isOpen =>{
      this.isOpen = isOpen;
      this.changeDetectRef.detectChanges();
    });
  }

}
