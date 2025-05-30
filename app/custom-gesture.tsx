import * as React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
  type CartesianActionsHandle,
  CartesianChart,
  Line,
  useChartPressState,
} from "victory-native";
import { Circle, useFont } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";
import { Gesture } from "react-native-gesture-handler";
import { useRef } from "react";
import { InfoCard } from "../components/InfoCard";
import { appColors } from "../consts/colors";
import inter from "../assets/inter-medium.ttf";

export default function CustomGestureScreen() {
  const font = useFont(inter, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
  const ref = useRef<CartesianActionsHandle<typeof state>>(null);

  const tapGesture = Gesture.Tap().onStart((e) => {
    state.isActive.value = true;
    ref.current?.handleTouch(state, e.x, e.y);
  });
  const composed = Gesture.Race(tapGesture);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{ flex: 1, maxHeight: 400, padding: 32 }}>
        <CartesianChart
          data={DATA}
          xKey="day"
          yKeys={["highTmp"]}
          axisOptions={{
            font,
          }}
          customGestures={composed}
          actionsRef={ref}
        >
          {({ points }) => (
            <>
              <Line points={points.highTmp} color="red" strokeWidth={3} />
              {isActive && (
                <ToolTip x={state.x.position} y={state.y.highTmp.position} />
              )}
            </>
          )}
        </CartesianChart>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <InfoCard>
          The tap gesture for selecting a point on the chart is a custom gesture
          implemented on the page and utilizes a chart action to handle point
          matching
        </InfoCard>
      </View>
    </SafeAreaView>
  );
}

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: appColors.viewBackground.light,
    $dark: {
      backgroundColor: appColors.viewBackground.dark,
    },
  },
});
