import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Movie extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'},
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  cost: string;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl: string;

  @property({
    type: 'string',
    required: true,
  })
  year: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  actors: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  reviews: string[];

  @property({
    type: 'string',
    defaultFn: 'now',
  })
  createdAt?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
