/* eslint-disable camelcase */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Usuarios {
  @PrimaryGeneratedColumn('increment')
    id: number;

  @Column({ length: 60 })
    email: string;

  @Column({ length: 80 })
    senha: string;

  @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

  @UpdateDateColumn({ type: 'datetime' })
    updated_at: Date;
}

export default Usuarios;
