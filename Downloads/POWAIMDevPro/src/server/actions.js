import HttpError from '@wasp/core/HttpError.js'

export const createTask = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const task = await context.entities.Task.create({
    data: {
      description: args.description,
      isDone: false,
      userId: context.user.id
    }
  });

  return task;
}

export const deleteTask = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const task = await context.entities.Task.findUnique({
    where: { id: args.taskId }
  });
  if (task.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Task.delete({
    where: { id: args.taskId }
  });
}

export const updateTask = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const task = await context.entities.Task.findUnique({
    where: { id: args.id }
  });
  if (task.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Task.update({
    where: { id: args.id },
    data: { isDone: args.isDone }
  });
}