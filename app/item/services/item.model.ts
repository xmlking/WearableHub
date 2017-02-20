export class Item {
  id: number;
  name: string;
  role: string;
  image_source?: string;

  get image_source1(): string {
    return `https://dummyimage.com/300x300&text=${this.id}`;
  }

  set image_source1(imgPath) {
    if (imgPath) {
      this.image_source = imgPath;
    }
  }
}

