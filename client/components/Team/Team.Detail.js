import React from "react";
import { ScrollView, Text, View, Dimensions, Image } from "react-native";
import { Card } from "react-native-elements";
import { getUserById } from "../../utils/getUsers";
import styles from './Team.Style';

const profilePhoto = {
  uri: 'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg'
}

export default function Details(props) {
  console.log(props);
  return (
    <ScrollView>
      {props.team?.members?.map((member) => {
        let user = getUserById(member);
        return (
          <Card>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: (Dimensions.get("window").width - 30) * 0.3,
                  height: (Dimensions.get("window").width - 30) * 0.3,
                }}
              >
                <Image
                  style={{
                    width: "80%",
                    height: "80%",
                    resizeMode: "contain",
                    marginTop: "10%",
                  }}
                  source={profilePhoto}
                />
              </View>
              <View style={{
                width: (Dimensions.get('window').width) * 0.7 - 90,
              }}>
                <Text style={styles.teamName}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text style={styles.teamName}>
                  {user.email}
                </Text>
                <Text style={styles.teamName}>
                  Role: 
                </Text>
              </View>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}
