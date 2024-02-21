"use client";

import { Task } from "@prisma/client"
import { useRouter } from "next/navigation";

interface Props {
    task: Task
    }

function TaskCard({ task }: Props) {
    const router = useRouter();
    
    return (
        <div className='bg-gray-900 p-3 hover:bg-gray-800 hover:cursor-pointer'
            onClick={() => {
                router.push(`/tasks/edit/${task.id}`)
            }}
        >
        