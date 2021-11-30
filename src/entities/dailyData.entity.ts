import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dailyData' })
export class DailyData {
  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'integer' })
  id: number;
  @Column({ name: 'date', type: 'timestamp' })
  date: Date;
  @Column({ name: 'itemName', type: 'varchar' })
  itemName: String;
  @Column({ name: 'minPrice', type: 'integer' })
  minPrice: number;
  @Column({ name: 'maxPrice', type: 'integer' })
  maxPrice: number;
  @Column({ name: 'createdAt', type: 'timestamp' })
  createdAt: Date;
  @Column({ name: 'updatedAt', type: 'timestamp' })
  updatedAt: Date;
}
