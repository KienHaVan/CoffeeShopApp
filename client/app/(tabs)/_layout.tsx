import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Icons } from '../../assets/icons';
import Colors from '../../constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const {
    Home,
    Home_Fill,
    Bag,
    Bag_Fill,
    Heart,
    Heart_Fill,
    Notification,
    Notification_Fill,
  } = Icons;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (focused ? <Home_Fill /> : <Home />),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (focused ? <Bag_Fill /> : <Bag />),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ focused }) => (focused ? <Heart_Fill /> : <Heart />),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Notification_Fill /> : <Notification />,
        }}
      />
    </Tabs>
  );
}
