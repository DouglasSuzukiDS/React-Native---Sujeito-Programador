import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import notifee, { AndroidImportance, AuthorizationStatus, EventType, RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native'

export default function App() {
  const [statusNotification, setStatusNotification] = useState(true)

  const getPermission = async () => {
    const settings = await notifee.requestPermission()

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log(`Permission: ${settings.authorizationStatus}`)
      setStatusNotification(true)
    } else {
      console.log('Usuário negou apermissão')
      setStatusNotification(false)
    }
  }

  const handleNotification = async () => {
    if (!setStatusNotification) {
      return
    }

    const channelId = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH
    })

    await notifee.displayNotification({
      id: 'lembrete',
      title: 'Estudar programação',
      body: 'Lembrete para estudar react-native amanhã!',
      android: {
        channelId,
        pressAction: {
          id: 'default'
        }
      }
    })
  }

  const handleScheduleNotification = async () => {
    const date = new Date(Date.now())

    date.setMinutes(date.getMinutes() + 1)

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    const notification = await notifee.createTriggerNotification({
      title: 'Lembrete Estudo',
      body: 'Esdutar Javascript as 16:30',
      android: {
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default'
        }
      }
    }, trigger)

    console.log('Notificação agendada: ', notification)
  }

  const handleListNotifications = async () => {
    notifee.getTriggerNotificationIds()
      .then((ids) => {
        console.log(ids)
      })
  }

  const handleCancelNotification = async () => {
    await notifee.cancelNotification('8nhXSn3kPg6poUlqQlni')
    console.log('Notificação cancelada')
  }

  const handleScheduleWeekly = async () => {
    const date = new Date(Date.now())

    date.setMinutes(date.getMinutes() + 1)

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.WEEKLY
    }

    const notification = await notifee.createTriggerNotification({
      title: 'Lembrete Javascript',
      body: 'Esta na hora de estudar Javascript',
      android: {
        channelId: 'lembrete',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default'
        }
      }
    }, trigger)

    console.log('Notificação agendada semanal: ', notification)
  }

  useEffect(() => {
    getPermission()
  }, [])

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail

    if (type === EventType.PRESS) {
      console.log('Tocou na notificação Background: ', pressAction?.id)

      if (notification?.id) {
        await notifee.cancelNotification(notification?.id)
      }
    }

    console.log('Event Backgorund')
  })

  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('Usuário descartou a notificação.')
          break
        case EventType.PRESS:
          console.log(detail.notification)
          console.log('Title: ', detail.notification?.title)
          console.log('Body: ', detail.notification?.body)
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello, Notifee!</Text>

      <Button
        title="Enviar notificação"
        onPress={handleNotification}
      />

      <Button
        title="Agendar notificação"
        onPress={handleScheduleNotification}
      />

      <Button
        title="Listar notificações"
        onPress={handleListNotifications}
      />

      <Button
        title="Cancelar notificação"
        onPress={handleCancelNotification}
      />

      <Button
        title="Agendar semanal"
        onPress={handleScheduleWeekly}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})  
