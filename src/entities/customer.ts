import { IsDate, IsDateString, IsEmail, IsString } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsString()
  @Column({ nullable: false })
  name!: string;

  @IsEmail()
  @Column({ nullable: false })
  email!: string;

  @IsDateString()
  @Column({ type: "date", nullable: false })
  birthday!: Date; //MySql Date format : YYYY-MM-DD

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
