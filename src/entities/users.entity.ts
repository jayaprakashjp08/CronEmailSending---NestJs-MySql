import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('increment', { name: 'userId', type: 'integer' })
  userId: number;
  @Column({ name: 'email', type: 'varchar' })
  email: string;
  @Column({ name: 'location', type: 'varchar' })
  location: string;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
  @Column({ name: 'updatedAt', type: 'timestamp' })
  updatedAt: Date;
}
