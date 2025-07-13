'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  timestamp: string
}

export default function ContactSubmissionsPage() {
  const [token, setToken] = useState('')
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fetchSubmissions = async () => {
    if (!token) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
        setIsAuthenticated(true)
      } else if (response.status === 401) {
        setError('Invalid token. Please check your authentication token.')
        setIsAuthenticated(false)
      } else {
        setError('Failed to fetch submissions')
        setIsAuthenticated(false)
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Contact Submissions Admin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="token" className="text-sm font-medium">
                  Authentication Token
                </label>
                <Input
                  id="token"
                  type="password"
                  placeholder="Enter your admin token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && fetchSubmissions()}
                />
              </div>
              <Button 
                onClick={fetchSubmissions} 
                disabled={!token || loading}
                className="w-full"
              >
                {loading ? 'Loading...' : 'View Submissions'}
              </Button>
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
          <div className="flex gap-2">
            <Button onClick={fetchSubmissions} disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>

        {submissions.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-500">No contact submissions found.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        {submission.subject}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        From: {submission.firstName} {submission.lastName} ({submission.email})
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {formatDate(submission.timestamp)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="my-4" />
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 