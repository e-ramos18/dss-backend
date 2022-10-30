import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Review extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id?: string;

  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'},
    required: true,
  })
  movieId: string;

  @property({
    type: 'string',
    mongodb: {dataType: 'ObjectId'},
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isApproved: boolean;

  @property({
    type: 'string',
    defaultFn: 'now',
  })
  createdAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {
  // describe navigational properties here
}

export type ReviewWithRelations = Review & ReviewRelations;
