import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CepRanges extends BaseSchema {
  protected tableName = 'cep_ranges'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('CODIGO_LOJA');
      table.string('FAIXA_INICIO',8);
      table.string('FAIXA_FIM',8);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
