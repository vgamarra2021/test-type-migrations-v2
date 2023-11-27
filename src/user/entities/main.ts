import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
export abstract class MainEntity {
   
    @PrimaryGeneratedColumn()
    id: number;
 
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date = new Date();
 
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date = new Date();
 
}