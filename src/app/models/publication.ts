import { PublicationPictures } from './publicationPictures';
import { User } from './user';

export class Publication {
  constructor(
    protected content: string,
    protected postAt: Date,
    protected publication: PublicationPictures,
    protected author?: User
  ) {}
}
