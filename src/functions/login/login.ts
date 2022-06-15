import 'reflect-metadata'
import { APIGatewayEvent } from 'aws-lambda';
import { LoginController } from '../../controllers/loginController';
import { Container } from 'typedi'

export const handler = async (event: APIGatewayEvent) => {
  const body: any = JSON.parse(event.body || '{}')
  const controller = Container.get(LoginController)
  const result = await controller.run(body)
  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body)
  }
}