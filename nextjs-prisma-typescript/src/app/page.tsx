import {prisma} from '@/libs/prisma'
import TaskCard from '@/components/TaskCard'

async function loadTasks() {
  return await prisma.task.findMany()
}

