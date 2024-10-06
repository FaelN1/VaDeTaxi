import { ErrorRequestHandler } from 'express';
import AppError from '../../shared/errors/AppError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
  return;
};

export default errorHandler;
