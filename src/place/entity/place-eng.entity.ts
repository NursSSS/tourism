import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEn } from "../enum";
import { PlaceEntity } from "./place.entity";

@Entity()
export class PlaceEnEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    place_id: number

    @ApiProperty()
    @Column()
    name: string

    @ApiProperty()
    @Column()
    description: string

    @ApiProperty()
    @Column()
    category: CategoryEn

    @ApiProperty()
    @OneToOne(() => PlaceEntity, place => place.en)
    place: PlaceEntity
}