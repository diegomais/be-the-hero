import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('ngo_id').notNullable();
    table.foreign('ngo_id').references('id').inTable('ngos');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('incidents');
}
