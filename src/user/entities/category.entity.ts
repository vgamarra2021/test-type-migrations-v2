
import {
    Column,
    Entity
} from 'typeorm';
import { MainEntity } from './main';
   
  @Entity('category', { schema: 'tracking_event_cl' })
  export class CategoryEntity extends MainEntity {
   
    @Column('character varying', { name: 'category', length: 100 })
    name: string;
   
    @Column('character varying', { name: 'description', length: 100 })
    description: string;
   
    // @OneToMany(() => TrackingStatus, (trackingStatus) => trackingStatus.packStatus)
    // trackingEvents: TrackingEvent[];
   
  }