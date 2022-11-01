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
  User,
} from '../models';
import {ReviewRepository} from '../repositories';

export class ReviewUserController {
  constructor(
    @repository(ReviewRepository)
    public reviewRepository: ReviewRepository,
  ) { }

  @get('/reviews/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Review',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Review.prototype.id,
  ): Promise<User> {
    return this.reviewRepository.user(id);
  }
}
