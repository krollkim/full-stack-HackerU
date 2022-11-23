import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Gallery';
  current = 0;
  path = "assets/images/";
  images: string[] = [
    'bags bunny.png',
    'bart simpson.png',
    'dardas aba.png',
    'download (1).jpeg',
    'download (2).jpeg',
    'download (3).jpeg',
    'download (4).jpeg',
    'download.jpeg',
    'images.jpeg',
    'omar simpson.png',
    'tweety the bird 2.png',
    'twity the bird.png',
    'yoda.png',
  ];

  next(){
    this.current++;
  }
  prev(){
    this.current--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
