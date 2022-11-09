import { ApiProperty } from "@nestjs/swagger"
import { PlaceEntity } from "src/place/entity"
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { IReview } from "../interface/review.interface"

@Entity()
export class ReviewEntity implements IReview{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    user_id: number

    @ApiProperty()
    @Column()
    place_id: number

    @ApiProperty()
    @Column()
    user_name: string

    @ApiProperty()
    @Column()
    description: string

    @ApiProperty()
    @CreateDateColumn()
    date: Date

    @ApiProperty()
    @Column()
    rating: number

    @ManyToOne(() => PlaceEntity, place => place.reviews)
    @JoinTable()
    place: PlaceEntity
}