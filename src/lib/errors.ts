import { NextFunction } from "express";

export function cusError(
  status: number,
  {
    message,
    errors
  }: {
    message: string;
    errors?: {
      path: string;
      message: string;
    }[];
  }
) {
  throw {
    status,
    message,
    errors
  };
}

export function catchError(err: any, next: NextFunction) {
  if (err.status) {
    next(err);
    return;
  } else {
    next({
      status: 500,
      message: "Sorry, something went wrong"
    });
  }
}
