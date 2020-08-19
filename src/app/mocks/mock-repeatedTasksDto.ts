import { RepeatedTaskDto } from './../Dto/RepeatedTaskDto';
import { Status } from '../models/RepetedTask';
import { PublicationPictures } from '../models/publicationPictures';
import { Picture } from '../models/picture';


export const repeatedTaskDto = [
  new RepeatedTaskDto (
    'Ajouter component',
    'Réussir la formation',
    'Devant mon ordi',
    null,
    new Date(2020, 8, 20, 15, 0, 0),
    Status.toDo
  ),
  new RepeatedTaskDto (
    'Manger des frites',
    'Rester gros',
    'A la baraque à frites',
    null,
    new Date(2020, 8, 20, 12, 0, 0),
    Status.toDo
  ),
  new RepeatedTaskDto (
    'Manger un chawarma',
    'Rester gros',
    'Chez Momo',
    'C\'était bien bon !',
    new Date(2020, 8, 20, 12, 0, 0),
    Status.done,
    new PublicationPictures(
      [new Picture('https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kebab.JPG/1200px-Kebab.JPG')]
    )
  )
];

