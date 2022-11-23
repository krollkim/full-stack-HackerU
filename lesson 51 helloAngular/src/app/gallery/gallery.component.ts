import { Component, Input, OnInit } from '@angular/core';
// import { img } from './gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = "gallery";
  current = 0;

  // @Input() images: img[] = [
  //   {imgSrc: "assets/images/bart simpson.png"},
  //   {imgSrc: "assets/images/bags bunny.png"},
  //   {imgSrc: "assets/images/yoda.png"},
  //   {imgSrc: "assets/images/dardas aba.png"},
  //   {imgSrc: "assets/images/omar simpson.png"},

  // ];

  images: string[] = [
    "assets/images/bart simpson.png",
    "assets/images/bags bunny.png",
    "assets/images/yoda.png",
    "assets/images/dardas aba.png",
    "assets/images/omar simpson.png",

  ];

   
  next(){
    this.current++;
    if(this.current == this.images.length){
      this.current = 0;
    }
  }
  prev(){
    this.current--;
    if(this.current < 0){
      this.current = this.images.length - 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
