import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
const App = () => {
  return (
    <div className="w-full space-y-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Seja bem-vindo ao React + Shadcn </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
