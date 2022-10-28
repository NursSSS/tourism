import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { IReview } from "../interface/review.interface"

@Entity()
export class ReviewEntity implements IReview{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    place_id: number

    @Column()
    user_name: string

    @Column()
    description: string

    @CreateDateColumn()
    date: Date

    @Column()
    rating: number
}