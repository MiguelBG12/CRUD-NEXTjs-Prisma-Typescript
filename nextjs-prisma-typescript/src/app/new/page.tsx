"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect } from 'react'

function NewPage({ params }: { params: { id: string } }) {

  const { handleSubmit, register, setValue } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then(res => {
        setValue('title', res.data.title);
        