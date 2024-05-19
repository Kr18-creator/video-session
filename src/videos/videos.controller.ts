import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Session,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

// Decorator to mark this class as a controller with the base route 'videos'
@Controller('videos')
export class VideosController {
  // Constructor to inject the VideosService dependency
  constructor(private readonly videosService: VideosService) {}

  // Route to create a new video entry
  // HTTP POST to /videos
  @Post()
  createNew(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.createNew(createVideoDto);
  }

  // Route to fetch all video entries
  // HTTP GET to /videos
  @Get()
  async findAll() {
    return this.videosService.findAll();
  }

  // Route to fetch a specific video entry by its ID
  // HTTP GET to /videos/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(id);
  }

  // Route to update a specific video entry by its ID
  // HTTP PATCH to /videos/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(id, updateVideoDto);
  }

  // Route to delete a specific video entry by its ID
  // HTTP DELETE to /videos/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(id);
  }

  // Route to choose a video, storing the chosen video ID in the session
  // HTTP POST to /videos/choose/:id
  @Get('choose/:id')
  choose(@Param('id') id: string, @Session() session: Record<string, any>) {
    session.lastVideoId = id; // Store the chosen video ID in the session
    return this.videosService.getChoices(id);
  }
}
