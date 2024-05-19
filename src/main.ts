import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

// Function to bootstrap and start the NestJS application
async function bootstrap() {
  // Create an instance of the NestJS application using the AppModule
  const app = await NestFactory.create(AppModule);

  // Use the express-session middleware to handle sessions in the application
  app.use(
    session({
      secret: 'my-secret', // Secret key to sign the session ID cookie
      resave: false, // Do not save session if unmodified
      saveUninitialized: false, // Do not create a session until something is stored
    }),
  );

  // Start the application and listen on port 3000
  await app.listen(3000);
}

// Call the bootstrap function to start the application
bootstrap();
