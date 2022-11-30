import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery';
  current = 0;
  // path = "assets/images/";
  images: string[] = [
    'assets/images/bags bunny.png',
    'assets/images/bart simpson.png',
    'assets/images/dardas aba.png',
    'assets/images/download (1).jpeg',
    'assets/images/download (2).jpeg',
    'assets/images/download (3).jpeg',
    'assets/images/download (4).jpeg',
    'assets/images/download.jpeg',
    'assets/images/images.jpeg',
    'assets/images/omar simpson.png',
    'assets/images/tweety the bird 2.png',
    'assets/images/twity the bird.png',
    'assets/images/yoda.png',
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
      this.current == this.images.length - 1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
