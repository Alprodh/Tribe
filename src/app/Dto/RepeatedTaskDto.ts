import { RepetedTask, Status } from './../models/RepetedTask';
import { PublicationPictures } from './../models/publicationPictures';

export class RepeatedTaskDto extends RepetedTask {
  constructor(
    public taskName: string,
    public goalName: string,
    public locationName: string,
    protected content: string,
    protected postAt: Date,
    public status: Status,
    protected publicationPictures?: PublicationPictures
  ){
    super(
      content,
      postAt,
      status,
      publicationPictures);
  }
}
