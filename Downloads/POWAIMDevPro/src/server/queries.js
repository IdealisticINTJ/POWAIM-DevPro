import HttpError from '@wasp/core/HttpError.js'


export const getTask = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const task = await context.entities.Task.findUnique({
    where: { id: args.taskId },
    include: { user: true }
  });

  if (!task) { throw new HttpError(404, 'Task not found') }

  if (task.userId !== context.user.id) { throw new HttpError(400, 'Task does not belong to the user') }

  return task;
}

export const getTasks = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Task.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}