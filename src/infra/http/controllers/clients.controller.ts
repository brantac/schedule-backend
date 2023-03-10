import { CreateClientBody } from '../dtos/create-client-body';
import { ClientViewModel } from '../view-models/client-view-model';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateClient } from '@app/use-cases/create-client';
import { DeleteClient } from '@app/use-cases/delete-client';
import { FindAllClients } from '@app/use-cases/find-all-clients';

@Controller('clients')
export class ClientsController {
  constructor(
    private createClient: CreateClient,
    private deleteClient: DeleteClient,
    private findAllClients: FindAllClients,
  ) {}

  @Post()
  async create(@Body() body: CreateClientBody) {
    const { email, name, password } = body;

    const { client } = await this.createClient.execute({
      email,
      name,
      password,
    });

    return {
      client: ClientViewModel.toHttp(client),
    };
  }

  @Get('findAll')
  async findAll() {
    const { clients } = await this.findAllClients.execute();

    return { clients: clients };
  }

  @Get(':id/delete')
  async delete(@Param('id') id: string) {
    await this.deleteClient.execute({ clientId: id });

    return { id };
  }
}
