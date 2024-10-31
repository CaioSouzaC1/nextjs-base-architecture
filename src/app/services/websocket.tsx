'use client'
import Echo from 'laravel-echo'
import { getSession } from 'next-auth/react'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'

const useWebSocketHook = () => {
  // @ts-expect-error xdxd
  window.Pusher = Pusher

  const [webSocketInstance, setWebSocketInstance] = useState<Echo | null>(null)

  useEffect(() => {
    async function initializeWebSocket() {
      const session = await getSession()

      if (
        session &&
        session.token &&
        webSocketInstance === null &&
        typeof window !== 'undefined'
      ) {
        // @ts-expect-error xdxd
        if (window && !window.Pusher) {
          return
        }
        const ws = new Echo({
          broadcaster: 'reverb',
          key: process.env.ECHO_KEY,
          wsHost: process.env.ECHO_HOST,
          wsPort: 443,
          wssPort: 443,
          forceTLS: false,
          enabledTransports: ['ws', 'wss'],
          authEndpoint: process.env.ECHO_AUTH_ENDPOINT,
          auth: {
            headers: {
              Authorization: `Bearer ${session.token}`,
            },
          },
        })

        setWebSocketInstance(ws)
        // @ts-expect-error xdxd

        window.Echo = ws
      }
    }

    initializeWebSocket()
  }, [])

  return webSocketInstance
}

export default useWebSocketHook
