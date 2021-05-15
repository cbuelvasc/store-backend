import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApikeyGuard } from './auth/guards/apikey.guard';
import { Public } from './auth/decorators/public.decorator';

@UseGuards(ApikeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('/tasks/')
  @Public()
  getTasks() {
    return this.appService.getTasks();
  }
}
