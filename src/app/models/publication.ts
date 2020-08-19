import { PublicationPictures } from './publicationPictures';
import { User } from "./user";

export class Publication {
  constructor(
    protected author:User,
    protected content:string,
    protected lastName:string,
    protected postAt:Date,
    protected publication:PublicationPictures

  ) {}
}
