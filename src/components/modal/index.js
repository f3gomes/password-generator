import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";

export function ModalPassword({ password, handleClose }) {
  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);
    alert("Senha copiada!");

    handleClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  buttonArea: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    flex: 1,
    alignItems: "center",
    marginVertical: 14,
    padding: 8,
  },

  buttonSave: {
    backgroundColor: "#392de9",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
