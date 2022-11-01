import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Review,
  Movie,
} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewMovieController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
  ) { }

  @get('/reviews/{id}/movie', {
    responses: {
      '200': {
        description: 'Movie belonging to Review',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Movie)},
          },
        },
      },
    },
  })
  async getMovie(
    @param.path.string('id') id: typeof Review.prototype.id,
  ): Promise<Movie> {
    return this.reviewRepository.movie(id);
  }
}
