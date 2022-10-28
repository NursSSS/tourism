import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../enum";
import { IPlace } from "../inteface/place.interface";
import { PlaceEnEntity } from "./place-eng.entity";

@Entity()
export class PlaceEntity implements IPlace{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column({type: 'text'})
    name: string

    @ApiProperty()
    @Column({type: 'text'})
    description: string

    @ApiProperty()
    @Column({type: 'text'})
    images: string

    @ApiProperty()
    @Column({type: 'text'})
    address: string

    @ApiProperty()
    @Column({type: 'int', nullable: true})
    rating_avg: number
    
    @ApiProperty()
    @Column({ type: 'enum', enum: Category})
    category: Category
    
    @ApiProperty()
    @OneToOne(() => PlaceEnEntity, en => en.place)
    en: PlaceEnEntity[]

    @ApiProperty()
    @Column({type: 'text', nullable: true})
    reviews: string
}