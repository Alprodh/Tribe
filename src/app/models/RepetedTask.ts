import { Publication } from './publication';
import { User } from './user';
import { PublicationPictures } from './publicationPictures';

export enum Status {
  done = 'done',
  toDo = 'to do',
  canceled = 'canceled'
}

export class RepetedTask extends Publication{
  constructor(
    protected content:string,
    protected postAt:Date,
    public statut: Status,
    protected publicationPictures?:PublicationPictures
    ){
      super(
        content,
        postAt,
        publicationPictures);
  }
}
