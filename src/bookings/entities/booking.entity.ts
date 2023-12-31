import { Entity, Unique, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { users } from '../../seeding/users.entity';

@Entity('bookings')
@Unique(['vehicleType', 'startDate', 'endDate'])
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'userId'})
  userId: number;

  @Column()
  numberOfWheels: number;

  @Column({ length: 50 })
  vehicleType: string;

  @Column({ length: 50 })
  vehicleModel: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @ManyToOne(()=> users, (user)=> user.bookings)
  @JoinColumn({name:'userId'})
  user:users;
}