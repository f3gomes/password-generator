import { StyleSheet, Text, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  text: {
    color: "#fff",
  },
});
