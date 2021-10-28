import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class usuarios1635427072700 implements MigrationInterface {
  up = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.createTable(new Table({
      name: 'usuarios',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'email',
          type: 'varchar',
          length: '60',
        },
        {
          name: 'senha',
          type: 'varchar',
          length: '80',
        },
        {
          name: 'created_at',
          type: 'datetime',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'datetime',
          default: 'now()',
        },
      ],
    }), true);
  };

  down = async (queryRunner: QueryRunner): Promise<void> => {
    await queryRunner.dropTable('usuarios');
  };
}
export default usuarios1635427072700;
