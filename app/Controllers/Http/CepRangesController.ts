import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CepRangesController {
  protected readonly tableName = 'cep_ranges';

  public async index () {
    return await Database.query().select('*').from(this.tableName)
  }

  public async store({ request }: HttpContextContract): Promise<void>{
    Database.table(this.tableName)
      .insert(request.all())
      .catch(err => console.log(err));
  }

  public async show ({ params: { id } }: HttpContextContract) {
    return await Database.query().select('*').from(this.tableName).where("id", id).firstOrFail();
  }

  public async update({ request, params: {id} }: HttpContextContract): Promise<void>{
    await Database
      .from(this.tableName)
      .where('id', id)
      .update(request.all());

  }

  public async destroy({ params: {id} }: HttpContextContract): Promise<void>{
    await Database
      .from(this.tableName)
      .where('id', id)
      .delete();
  }
}
