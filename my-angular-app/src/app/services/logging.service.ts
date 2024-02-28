// loggingService.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

    logInfo(message: string) {
    console.log(`Info: ${message}`);
    }
   
    logError(message: string) {
    console.error(`Error: ${message}`);
    }

  constructor() { }
}
