import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useStorage from "../../hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { PasswordItem } from "../../components/passwordItem";

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  const handleRemovePassword = async (item) => {
    const passwords = await removeItem("@pass", item);
    setListPasswords(passwords);
    alert("Senha removida!");
  };

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      setListPasswords(passwords);
    }

    loadPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={listPasswords}
          style={{ flex: 1, paddingTop: 14 }}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleRemovePassword(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
});
