import { RepetedTask, Status } from './../models/RepetedTask';
import { PublicationPictures } from './../models/publicationPictures';

export class RepeatedTaskDto extends RepetedTask {
  constructor(
    public taskName: string,
    public goalName: string,
    public locationName: string,
    public timeTask: Date,
    public content: string,
    public postAt: Date,
    public status: Status,
    public publicationPictures?: PublicationPictures
  ){
    super(
      content,
      postAt,
      status,
      publicationPictures);
  }
}
