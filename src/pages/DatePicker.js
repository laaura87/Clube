import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import DefaultButton from "../components/DefaultButton/DefaultButton";
import styles from "../styles/DatePickerStyle.style";
import holiday from "../services/holiday";
import moment from "moment";

function DatePicker({ navigation }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.titleBar}>
          <Text style={styles.text}>Selecione a Data</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <CalendarPicker
            onDateChange={onDateChange}
            allowRangeSelection={false}
            selectedDayColor={"#3B3F8C"}
            selectedDayTextColor={"#F3F3F3"}
            todayTextStyle={{ color: "black" }}
            weekdays={["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
            previousTitle={"Anterior"}
            nextTitle={"Próximo"}
            height={800}
          />
        </View>
        <View style={styles.login}>
          <DefaultButton
            onPress={() => {
              if (
                selectedStartDate == null ||
                moment(new Date()).subtract(1, "day").toDate() >
                  new Date(selectedStartDate)
              ) {
                Alert.alert("Selecione uma data válida!", "", [
                  {
                    text: "Ok",
                  },
                ]);
              } else {
                const data = new Date(selectedStartDate);
                data.getDay() == 0 ||
                data.getDay() == 6 ||
                holiday(selectedStartDate)
                  ? navigation.navigate("Guests2", {
                      limite: 2,
                      data: selectedStartDate,
                    })
                  : navigation.navigate("Guests2", {
                      limite: 4,
                      data: selectedStartDate,
                    });
              }
            }}
            title="Próximo"
          />
        </View>
      </View>
    </>
  );
  //<Text>SELECTED DATE:{startDate}</Text>
}

export default DatePicker;
