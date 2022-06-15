import 'reflect-metadata'
import { APIGatewayEvent } from 'aws-lambda';
import { Container } from 'typedi'
import { CreateUserController } from '../../controllers/createUserController';

export const handler = async (event: APIGatewayEvent) => {
  const body: any = JSON.parse(event.body || '{}')
  const controller = Container.get(CreateUserController)
  const result = await controller.run(body)
  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body)
  }
}