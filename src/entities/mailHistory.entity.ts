import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'mailHistory' })
export class MailHistory {
  @PrimaryGeneratedColumn('increment', {
    name: 'mailHistoryId',
    type: 'integer',
  })
  mailHistoryId: number;
  @Column({ name: 'userId', type: 'integer' })
  userId: number;
  @Column({ name: 'mailStatus', type: 'varchar' })
  mailStatus: String;
  @Column({ name: 'date', type: 'date' })
  date: Date;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
}
