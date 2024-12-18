import { PaginationParams } from '@/core/repositories/pagination-params'
import { Answer } from '../../enterprise/entities/answer'

export abstract class AnswersRepository {
  // método create que vai receber uma Anser(entidade) e vai retornar uma Promise de void
  abstract create(answer: Answer): Promise<void>
  abstract save(answer: Answer): Promise<void>
  abstract findById(answerId: string): Promise<Answer | null>
  abstract findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>

  abstract delete(answer: Answer): Promise<void>
}
