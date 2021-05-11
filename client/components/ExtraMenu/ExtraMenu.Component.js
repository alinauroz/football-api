import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./ExtraMenu.Style";

import Feedback from "../Feedback/Feedback.Component";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";

export default function ExtraMenu() {
  const [Component, setSelectedComponent] = useState(null);
  const menu = [
    { name: "Grounds", icon: "globe", component: null },
    { name: "Exercies", icon: "heartbeat", component: null },
    { name: "Injuries", icon: "ambulance", component: null },
    { name: "Edit Profile", icon: "user", component: null },
    { name: "Feedback", icon: "bullhorn", component: "feedback" },
    { name: "Report Bug", icon: "bug", component: null },
    { name: "Log Out", icon: "sign-out", onClick: null },
  ];

  if (Component === null)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>More</Text>
        {menu.map((menuItem) => {
          return (
            <View style={styles.menuContainer}>
              <TouchableOpacity
                onPress={() => setSelectedComponent(menuItem.component)}
              >
                <Icon name={menuItem.icon} size={64} style={{ color: "#333" }} />
                <Text style={styles.menuItemName}>{menuItem.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
    else if (Component === "feedback") {
        return <Feedback  back={() => setSelectedComponent(null)} />
    }
}
