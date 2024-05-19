import { Injectable, ConflictException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Types } from 'mongoose';

// Decorator to mark this class as a service provider
@Injectable()
export class VideosService {
  // Constructor to inject the Mongoose video model
  constructor(@InjectModel('Video') private readonly videoModel: any) {}

  // Method to create a new video document in the database
  async createNew(createVideoDto: CreateVideoDto) {
    const { title, url, choices } = createVideoDto;

    // Check if the ID already exists in the database
    const existingVideo = await this.videoModel.findOne({ title });
    if (existingVideo) {
      // If the title already exists, throw a ConflictException
      throw new ConflictException('Video with this title already exists');
    }

    // Create a new entry in the database
    return this.videoModel.create({ title, url, choices });
  }

  // Method to find and return all video documents from the database
  findAll() {
    return this.videoModel.find();
  }

  // Method to find and return a specific video document by its ID
  findOne(id: string) {
    return this.videoModel.findOne({ _id: id });
  }

  // Method to update a specific video document by its ID
  update(id: string, updateVideoDto: UpdateVideoDto) {
    return this.videoModel.findOneAndUpdate({ _id: id }, updateVideoDto);
  }

  // Method to remove a specific video document by its ID
  remove(id: string) {
    return this.videoModel.findOneAndDelete(id);
  }

  // Method to get choices for a specific video by its ID
  async getChoices(id: string) {
    let details = [];
    const videoDetails = await this.videoModel.findOne({ _id: id }); // Find the video document by its ID
    const choices = videoDetails?._doc.choices; // Extract the choices array from the video document
    if (choices) {
      for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];
        const videos = await this.videoModel.findOne({ _id: choice }); // Find each choice video by its ID
        details.push(videos); // Add the found choice video to the details array
      }
    }

    return details; // Return the array of choice video details
  }
}
