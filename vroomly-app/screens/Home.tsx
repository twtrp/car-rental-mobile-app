import { useSQLiteContext } from "expo-sqlite";
import { View, Text } from "react-native";
import React from "react";

export default function Home() {

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    })
  }, [])

  async function getData() {
    const result = await db.getAllAsync(`SELECT * FROM cars`);
    console.log(result);
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}