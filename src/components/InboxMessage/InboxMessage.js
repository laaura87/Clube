import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./InboxMessage.style";

function Component({ unread, title, body, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {unread ? (
        <Text style={[styles.infoTitleText, { fontWeight: "bold" }]}>
          {title}
        </Text>
      ) : (
        <Text style={[styles.infoTitleText]}>{title}</Text>
      )}

      <Text numberOfLines={1} style={styles.itemText}>
        {body}
      </Text>
    </TouchableOpacity>
  );
}

export default Component;
