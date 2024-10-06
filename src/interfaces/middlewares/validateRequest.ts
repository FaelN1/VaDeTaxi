import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import AppError from '../../shared/errors/AppError';

const validateRequest = (schema: ObjectSchema, property: 'body' | 'params' | 'query' = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      next(new AppError(errorMessage, 400));
    } else {
      next();
    }
  };
};

export default validateRequest;
