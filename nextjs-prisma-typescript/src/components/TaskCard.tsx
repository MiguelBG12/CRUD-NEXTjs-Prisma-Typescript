"use client";

import { Task } from "@prisma/client"
import { useRouter } from "next/navigation";

interface Props {
    task: Task
    }

function TaskCard({ task }: Props) {
    const router = useRouter();
    
    return (
