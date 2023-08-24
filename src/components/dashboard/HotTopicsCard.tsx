import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const HotTopicsCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className='tetx-2xl font-bold'>Tópicos mais procurados</CardTitle>
            <CardDescription>
                Clique em um tópico para começar um quiz!
            </CardDescription>
        </CardHeader>

        <CardContent className='pl-2'>
            words cloud
        </CardContent>
    </Card>
  )
}

export default HotTopicsCard