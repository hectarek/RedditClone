// this command is a good practice and tells the db to only run when in production
export const __prod__ = process.env.NODE_ENV === "production"