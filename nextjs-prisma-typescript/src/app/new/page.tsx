"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect } from 'react'

function NewPage({ params }: { params: { id: string } }) {

 