import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, NotFoundException } from '@nestjs/common';
import { OwnersService } from './service/owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) { }

  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownersService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownersService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
  //   return this.ownersService.update(updateOwnerDto);
  // }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    let y = await this.ownersService.delete(id);
    if (!y) {
      throw new NotFoundException('Record not found to delete')
    }
  }
}