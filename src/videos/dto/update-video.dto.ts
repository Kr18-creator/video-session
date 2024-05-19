import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';

// Data Transfer Object (DTO) for updating an existing video
// Extends the CreateVideoDto class, making all its properties optional
export class UpdateVideoDto extends PartialType(CreateVideoDto) {
  // Optional title of the video
  title?: string;

  // Optional URL of the video
  url?: string;

  // Optional array of IDs representing choices related to the video
  choices?: [string];
}
