import { ApiProperty } from "@nestjs/swagger";
import { ReviewEntity } from "src/review/entities";
import { Column, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
    @Column({type: 'numeric', nullable: true})
    rating_avg: number
    
    @ApiProperty()
    @Column({ type: 'enum', enum: Category})
    category: Category
    
    @OneToOne(() => PlaceEnEntity, en => en.place)
    @JoinTable()
    en: PlaceEnEntity[]

    @OneToMany(() => ReviewEntity, review => review.place)
    @JoinTable()
    reviews: ReviewEntity[]
}