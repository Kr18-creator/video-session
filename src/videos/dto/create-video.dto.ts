// Data Transfer Object (DTO) for creating a new video
export class CreateVideoDto {
  // The title of the video
  title: string;

  // The URL of the video
  url: string;

  // An array of IDs representing choices related to the video
  choices: [string];
}
