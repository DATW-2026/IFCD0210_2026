import { env } from '../../config/env.ts';
import debug from 'debug';
import type { ReviewsRepo } from '../repo/reviews.repo.ts';
import type { Request, Response, NextFunction } from 'express';
import { InternalServerError, NotFoundError } from '../../errors/http-error.ts';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

const log = debug(`${env.PROJECT_NAME}:controller:reviews`);
log('Loading reviews controller...');

export class ReviewsController {
    #repo: ReviewsRepo;
    constructor(repo: ReviewsRepo) {
        this.#repo = repo;
    }

    async getAllFilmsReviews(req: Request, res: Response, next: NextFunction) {
        try {
            const reviews = await this.#repo.getAllFilmsReviews(
                Number(req.params.filmID),
            );
            return res.json(reviews);
        } catch (error) {
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const notFoundError = new NotFoundError(
                    'Film requested not found',
                    {
                        cause: error,
                    },
                );
                log(
                    'Error getting all film reviews: %s',
                    notFoundError.message,
                );
                return next(notFoundError);
            }

            const internalError = new InternalServerError(
                'Failed to get all film reviews',
                { cause: error },
            );
            log('Error getting all film reviews: %s', internalError.message);
            next(internalError);
        }
    }

    async getAllUserReviews(req: Request, res: Response, next: NextFunction) {
        try {
            const reviews = await this.#repo.getAllUserReviews(
                Number(req.params.userID),
            );
            return res.json(reviews);
        } catch (error) {
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const notFoundError = new NotFoundError(
                    'User requested not found',
                    {
                        cause: error,
                    },
                );
                log(
                    'Error getting all user reviews: %s',
                    notFoundError.message,
                );
                return next(notFoundError);
            }

            const internalError = new InternalServerError(
                'Failed to get all user reviews',
                { cause: error },
            );
            log('Error getting all user reviews: %s', internalError.message);
            next(internalError);
        }
    }

    // - POST /reviews/:filmId/ [User] -> token :userId

    async createReview(req: Request, res: Response, next: NextFunction) {
        try {
            const review = await this.#repo.createReview({
                ...req.body,
                filmID: Number(req.params.filmID),
                userID: Number(req.user?.id),
            });
            return res.status(201).json(review);
        } catch (error) {
            const internalError = new InternalServerError(
                'Failed to create review',
                { cause: error },
            );
            log('Error creating review: %s', internalError.message);
            next(internalError);
        }
    }
}
